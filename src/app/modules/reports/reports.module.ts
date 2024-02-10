import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportCustomerComponent } from './report-customer/report-customer.component';
import { ReportProductComponent } from './report-product/report-product.component';
import { ReportStoreComponent } from './report-store/report-store.component';
import { ReportSupplierComponent } from './report-supplier/report-supplier.component';
import { ReportUserComponent } from './report-user/report-user.component';


@NgModule({
  declarations: [
    ReportCustomerComponent,
    ReportProductComponent,
    ReportStoreComponent,
    ReportSupplierComponent,
    ReportUserComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
