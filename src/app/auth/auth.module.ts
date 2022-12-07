import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './componenets/login/login.component';
import { SignupComponent } from './componenets/signup/signup.component';
import { ResetPasswordComponent } from './componenets/reset-password/reset-password.component';
import { AuthComponent } from './auth.component';








@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AuthRoutingModule,

  ]
})
export class AuthModule { }
