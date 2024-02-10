import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubCategoriesRoutingModule } from './sub-categories-routing.module';
import { SubcateCreateComponent } from './subcate-create/subcate-create.component';
import { SubcateEditComponent } from './subcate-edit/subcate-edit.component';
import { SubcateListComponent } from './subcate-list/subcate-list.component';


@NgModule({
  declarations: [
    SubcateCreateComponent,
    SubcateEditComponent,
    SubcateListComponent
  ],
  imports: [
    CommonModule,
    SubCategoriesRoutingModule
  ]
})
export class SubCategoriesModule { }
