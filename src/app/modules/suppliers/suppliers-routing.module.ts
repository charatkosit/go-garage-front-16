import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: "supplier-create", component: SupplierCreateComponent },
      { path: "supplier-list", component: SupplierListComponent },
      { path: "supplier-edit", component: SupplierEditComponent },
      { path: "supplier-details", component: SupplierDetailsComponent },
      // { path: "", redirectTo: "login", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
