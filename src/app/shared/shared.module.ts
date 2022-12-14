
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LogoComponent } from './components/logo/logo.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material.module';
import {AuthService} from "./services/auth/auth.service"



@NgModule({
  declarations: [
    NotFoundComponent,
    LogoComponent,
    HeaderComponent,
    SidebarComponent

  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    NotFoundComponent,
    LogoComponent,
    HeaderComponent,
    SidebarComponent,
    MaterialModule
  ],
  providers: [
    AuthService
    ]
})
export class SharedModule { }
