import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { FilterComponent } from './filter/filter.component';
import { SuppliersEditComponent } from './suppliers-edit/suppliers-edit.component';
import { TableComponent } from './table/table.component';
import { TableTopComponent } from './table-top/table-top.component';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';


@NgModule({
  declarations: [
    FilterComponent,
    SuppliersEditComponent,
    TableComponent,
    TableTopComponent,
    SupplierCreateComponent,
    SupplierEditComponent,
    SupplierListComponent,
    SupplierDetailsComponent
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule
  ]
})
export class SuppliersModule { }
