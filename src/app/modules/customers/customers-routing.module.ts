import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: "customer-create", component: CustomerCreateComponent },
      { path: "customer-list", component: CustomerListComponent },
      { path: "customer-edit", component: CustomerEditComponent },
      { path: "customer-details", component: CustomerDetailsComponent },
      // { path: "", redirectTo: "login", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
