import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'auth/login',pathMatch:'full'},
  {path:'auth',component:AuthComponent,loadChildren:()=>import('./auth/auth.module').then((x)=>x.AuthModule)},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
