import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signin',},
  { path: '', loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),},
  { path: '', loadChildren: () => import('./modules/pos/pos.module').then((m) => m.PosModule),},
  { path: '', loadChildren: () => import('./modules/products/products.module').then((m) => m.ProductsModule),},
  { path: '', loadChildren: () => import('./modules/brands/brands.module').then((m) => m.BrandsModule),},
  { path: '', loadChildren: () => import('./modules/categories/categories.module').then((m) => m.CategoriesModule),},
  { path: '', loadChildren: () => import('./modules/sub-categories/sub-categories.module').then((m) => m.SubCategoriesModule),},
  { path: '', loadChildren: () => import('./modules/users/users.module').then((m) => m.UsersModule),},
  { path: '', loadChildren: () => import('./modules/customers/customers.module').then((m) => m.CustomersModule),},
  { path: '', loadChildren: () => import('./modules/suppliers/suppliers.module').then((m) => m.SuppliersModule),},
  { path: '', loadChildren: () => import('./modules/stores/stores.module').then((m) => m.StoresModule),},
  { path: '', loadChildren: () => import('./modules/expenses/expenses.module').then((m) => m.ExpensesModule),},
  { path: '', loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),},
  { path: '', loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
