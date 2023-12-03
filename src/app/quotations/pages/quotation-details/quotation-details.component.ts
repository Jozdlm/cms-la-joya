import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationService } from '@app/quotations/services/quotation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Quotation } from '@app/quotations/models/quotation';
import { QuotationItem } from '@app/quotations/models/quotation-item';

@Component({
  selector: 'app-quotation-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotation-details.component.html',
  styleUrl: './quotation-details.component.scss',
})
export class QuotationDetailsComponent {
  private readonly _quotationService = inject(QuotationService);
  private readonly _activedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  public quotationId: number = 0;
  public quotationHeader: Quotation | undefined = undefined;
  public quotationItems: QuotationItem[] = [];
  public showButtons: boolean = true;

  constructor() {
    this._activedRoute.paramMap.subscribe(
      (params) => (this.quotationId = Number(params.get('id'))),
    );

    this.showButtons = !this._activedRoute.snapshot.url.some(
      (segment) => segment.path === 'print',
    );

    this.getQuotationAndItems();
  }

  public async getQuotationAndItems(): Promise<void> {
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
