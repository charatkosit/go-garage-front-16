import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { FilterComponent } from './filter/filter.component';
import { CateCreateComponent } from './cate-create/cate-create.component';
import { CateEditComponent } from './cate-edit/cate-edit.component';
import { CateListComponent } from './cate-list/cate-list.component';
import { TableComponent } from './table/table.component';
import { TableTopComponent } from './table-top/table-top.component';


@NgModule({
  declarations: [
    FilterComponent,
    CateCreateComponent,
    CateEditComponent,
    CateListComponent,
    TableComponent,
    TableTopComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
