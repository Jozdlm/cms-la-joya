import { Injectable, computed, inject, signal } from '@angular/core';
import { QuotationItem } from '../models/quotation-item';
import { BehaviorSubject } from 'rxjs';
import { QuoteState } from '../models/quote-state';
import { QuoteFormStateService } from './quote-form-state.service';

@Injectable({
  providedIn: 'root',
})
export class QuotationStateService {
  private _items: QuotationItem[] = [];
  private _subtotal: number = 0;
  private _discount: number = 0;
  private _total: number = 0;
  public quoteWithDiscount = signal<boolean>(false);

  private _quoteItems = signal<QuotationItem[]>([]);
  public quoteItems = this._quoteItems.asReadonly();

  public quoteSubtotal = computed<number>(() => {
    return this.quoteItems().reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      0,
    );
  });

  public quoteDiscount = computed<number>(() => {
    return this.quoteItems().reduce((prev, curr) => prev + curr.discount, 0);
  });

  public quoteAmmount = computed<number>(() => {
    return this.quoteItems().reduce((prev, curr) => prev * 1 + curr.ammount, 0);
  });

  private _quoteState$ = new BehaviorSubject<QuoteState>({
    items: this._items,
    subtotal: this._subtotal,
    discount: this._discount,
    total: this._total,
  });

  public quoteHeaderForm = inject(QuoteFormStateService).quoteForm;

  public readonly quoteState$ = this._quoteState$.asObservable();

  constructor() {
    this.quoteHeaderForm.controls.promotionType.valueChanges.subscribe(
      (value) => {
        if (value * 1 === 1) {
          this.addDiscount();
        } else {
          this.removeDiscount();
        }
      },
    );
  }

  private getSubtotal(): number {
    return this._items.reduce(
      (prev, curr) => +prev + curr.price * curr.quantity,
      0,
    );
  }

  private getTotalDiscount(): number {
    return this._items.reduce((prev, curr) => +prev + curr.discount, 0);
  }

  private getTotalAmmount(): number {
    const ammount: number = this._items.reduce(
      (prev, curr) => prev * 1 + curr.ammount,
      0.0,
    );

    return ammount;
  }

  private emmitStateChanges(): void {
    this._quoteState$.next({
      items: this._items,
      subtotal: this.getSubtotal(),
      discount: this.getTotalDiscount(),
      total: this.getTotalAmmount(),
    });
  }

  private calculateInitialValues(item: QuotationItem): QuotationItem {
    if (this.quoteWithDiscount()) {
      item.discount = item.price * 0.1;
      item.ammount = item.price - item.discount;
    }

    return { ...item };
  }

  public addDiscount(): void {
    this._items = this._items.map((item) => {
      const discount = item.ammount * 0.1;
      const ammount = item.ammount - discount;

      return {
        ...item,
        discount,
        ammount,
      };
    });

    this.quoteWithDiscount.set(true);
    this.emmitStateChanges();
  }

  public removeDiscount(): void {
    this._items = this._items.map((item) => {
      const discount = 0;
      const ammount = item.quantity * item.price;

      return {
        ...item,
        discount,
        ammount,
      };
    });

    this.quoteWithDiscount.set(false);
    this.emmitStateChanges();
  }

  public getStateSnapshot() {
    return {
      items: this._items,
      subtotal: this.getSubtotal(),
      discount: this.getTotalDiscount(),
      total: this.getTotalAmmount(),
      ...this.quoteHeaderForm.getRawValue(),
    };
  }

  private mutateItem(
    type: '+Qty' | '-Qty' | 'updPrice',
    itemIndex: number,
    newPrice?: number,
  ): void {
    const item = this._items[itemIndex];
    let updatedQty: number = item.quantity;
    let updatedPrice: number = item.price;

    if (type === '-Qty') {
      updatedQty = item.quantity > 1 ? item.quantity - 1 : updatedQty;
    } else if (type === '+Qty') {
      updatedQty = item.quantity + 1;
    } else if (type === 'updPrice' && newPrice) {
      updatedPrice = newPrice > 0.01 ? newPrice : updatedPrice;
    }

    this._quoteItems.update((value) => {
      const quoteItem: QuotationItem | undefined = value[itemIndex];

      if (quoteItem) {
        const filteredArr = [
          ...value.filter((el) => el.productId != item.productId),
        ];

        quoteItem.price = updatedPrice;
        quoteItem.quantity = updatedQty;
        quoteItem.ammount = updatedQty * (updatedPrice - item.discount);

        return [...filteredArr, quoteItem];
      }

      return value;
    });

    this._items[itemIndex] = {
      ...item,
      price: updatedPrice,
      quantity: updatedQty,
      ammount: updatedQty * (updatedPrice - item.discount),
    };

    this.emmitStateChanges();
  }

  public addItem(newItem: QuotationItem): void {
    const inArray = this._items.find(
      (item) => item.productId == newItem.productId,
    );

    newItem = this.calculateInitialValues(newItem);

    if (inArray) {
      this.increaseQuantity(newItem.productId);
    } else {
      this._quoteItems.update((value) => {
        return [...value, newItem];
      });
      this._items = [...this._items, newItem];
      this.emmitStateChanges();
    }
  }

  public removeItem(itemId: number): void {
    this._quoteItems.update((value) => {
      return [...value.filter((item) => item.productId != itemId)];
    });
    this._items = [...this._items.filter((item) => item.productId != itemId)];
    this.emmitStateChanges();
  }

  public increaseQuantity(itemId: number): void {
    const itemIndex = this._items.findIndex(
      (item) => item.productId === itemId,
    );

    if (itemIndex !== -1) {
      this.mutateItem('+Qty', itemIndex);
    }
  }

  public decreaseQuantity(itemId: number): void {
    const itemIndex = this._items.findIndex(
      (item) => item.productId === itemId,
    );

    if (itemIndex !== -1) {
      this.mutateItem('-Qty', itemIndex);
    }
  }

  public updateSellingPrice(itemId: number, newPrice: number): void {
    const itemIndex = this._items.findIndex(
      (item) => item.productId === itemId,
    );

    if (itemIndex !== -1) {
      this.mutateItem('updPrice', itemIndex, newPrice);
    }
  }

  public clearQuotationState(): void {
    this._quoteItems.set([]);
    this._items = [];
    this.emmitStateChanges();
  }
}
