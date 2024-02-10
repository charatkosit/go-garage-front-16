import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { FilterComponent } from './filter/filter.component';
import { StoreCreateComponent } from './store-create/store-create.component';
import { StoreEditComponent } from './store-edit/store-edit.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { TableComponent } from './table/table.component';
import { TableTopComponent } from './table-top/table-top.component';


@NgModule({
  declarations: [
    FilterComponent,
    StoreCreateComponent,
    StoreEditComponent,
    StoreListComponent,
    StoreDetailsComponent,
    TableComponent,
    TableTopComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule
  ]
})
export class StoresModule { }
