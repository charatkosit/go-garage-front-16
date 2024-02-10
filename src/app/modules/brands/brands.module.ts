import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { FilterComponent } from './filter/filter.component';
import { BrandCreateComponent } from './brand-create/brand-create.component';
import { BrandEditComponent } from './brand-edit/brand-edit.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { TableComponent } from './table/table.component';
import { TableTopComponent } from './table-top/table-top.component';


@NgModule({
  declarations: [
    FilterComponent,
    BrandCreateComponent,
    BrandEditComponent,
    BrandListComponent,
    BrandDetailsComponent,
    TableComponent,
    TableTopComponent
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule
  ]
})
export class BrandsModule { }
