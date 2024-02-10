import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { FilterComponent } from './filter/filter.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { TableComponent } from './table/table.component';
import { TableTopComponent } from './table-top/table-top.component';


@NgModule({
  declarations: [
    FilterComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    TableComponent,
    TableTopComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
