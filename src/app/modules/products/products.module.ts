import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FilterComponent } from './filter/filter.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TableComponent } from './table/table.component';
import { TableTopComponent } from './table-top/table-top.component';


@NgModule({
  declarations: [
    FilterComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductDetailsComponent,
    TableComponent,
    TableTopComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
