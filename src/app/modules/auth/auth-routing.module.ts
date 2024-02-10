import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '' ,
  children:[
   {path:"login",    component:SigninComponent },
   {path:"register", component:SignUpComponent},
   {path:"forgotPassword", component:ForgotPasswordComponent},
   {path:"resetPassword", component:ResetPasswordComponent},
   {path:"" ,redirectTo :"login", pathMatch: "full"}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
