import { Routes } from '@angular/router';
import { ViewsShellComponent } from '@app/core/layout/views-shell/views-shell.component';
import { QuotationComponent } from './quotation.component';
import { AddQuotationComponent } from './pages/add-quotation/add-quotation.component';
import { QuotationDetailsComponent } from './pages/quotation-details/quotation-details.component';

const QUOTATION_ROUTES: Routes = [
  {
    path: '',
    component: ViewsShellComponent,
    children: [
      { path: '', component: QuotationComponent, pathMatch: 'full' },
      { path: 'add', component: AddQuotationComponent },
      { path: ':id', component: QuotationDetailsComponent },
    ],
  },
  {
    path: 'print/:id',
    component: QuotationDetailsComponent,
  },
];

export default QUOTATION_ROUTES;