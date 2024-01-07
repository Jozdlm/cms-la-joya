import {
  Component,
  DestroyRef,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationService } from '@app/quotations/services/quotation.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Quotation } from '@app/quotations/models/quotation';
import { QuotationItem } from '@app/quotations/models/quotation-item';
import { Subscription } from 'rxjs';
import { PdfMakerService } from '@app/common/services/pdf-maker.service';

@Component({
  selector: 'app-quotation-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quotation-details.component.html',
  styleUrl: './quotation-details.component.scss',
})
export class QuotationDetailsComponent {
  private readonly _quotationService = inject(QuotationService);
  private readonly _activedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  private readonly _pdfMaker = inject(PdfMakerService);
  private _subscription = new Subscription();
  public quotationId: number = 0;
  public quotationHeader: Quotation | undefined = undefined;
  public quotationItems: QuotationItem[] = [];

  @ViewChild('quote') public quoteElement!: ElementRef;

  public get totalDiscount(): number {
    return this.quotationItems.reduce((prev, curr) => prev + curr.discount, 0);
  }

  constructor() {
    this.watchUrlParams();
    this.getQuoteDetails();

    inject(DestroyRef).onDestroy(() => this._subscription.unsubscribe());
  }

  public watchUrlParams(): void {
    this._subscription.add(
      this._activedRoute.paramMap.subscribe(
        (params) => (this.quotationId = Number(params.get('id'))),
      ),
    );
  }

  public makeAndDownloadPDF(): void {
    if (this.quoteElement && this.quotationItems.length > 1) {
      const htmlElement = this.quoteElement.nativeElement as HTMLElement;
      this._pdfMaker.generatePDF(
        htmlElement,
        `Cotización #${this.quotationId}`,
      );
    }
  }

  public async getQuoteDetails(): Promise<void> {
    const quotation = await this._quotationService.getQuotationById(
      this.quotationId,
    );

    if (quotation) {
      this.quotationHeader = quotation;

      const items = await this._quotationService.getQuotationItems(
        this.quotationId,
      );
      this.quotationItems = items;
    } else {
      this._router.navigateByUrl('/quotations');
    }
  }
}
