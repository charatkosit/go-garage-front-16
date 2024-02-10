import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FilterComponent } from './filter/filter.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TableComponent } from './table/table.component';
import { TableTopComponent } from './table-top/table-top.component';


@NgModule({
  declarations: [
    FilterComponent,
    UserCreateComponent,
    UserEditComponent,
    UserListComponent,
    UserDetailsComponent,
    TableComponent,
    TableTopComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
