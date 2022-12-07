import { MaterialModule } from './../../../shared/material.module';
import { AuthService } from './../../../shared/services/auth/auth.service';
import { AuthRoutingModule } from './../../auth-routing.module';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],

})
export class LoginComponent implements OnInit {
  hidePassword = true;
  checked = false;
  constructor(
    private router:Router,
    route:AuthRoutingModule,
    private authService: AuthService,
    materialModule:MaterialModule
    ) {
  }
  ngOnInit(): void {

    if(this.authService.isLogedin)
    {
      this.router.navigate(['auth/signup']);
    }

  }
}
