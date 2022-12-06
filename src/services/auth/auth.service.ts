import { Injectable, OnInit } from '@angular/core';
import { CrmService } from '../crm/crm.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  public isLogedin:boolean=false;

  constructor(crmAPI:CrmService) {

  }
  ngOnInit(): void {

  }

  private SetLogin(token:string)
  {
    localStorage.setItem("JWT-Token",token);
    this.isLogedin=true;
  }
  private SetLogout()
  {
    localStorage.removeItem("JWT-Token");
    this.isLogedin=false;
  }

  private validateJWT(token:string)
  {
    return new Promise((resolve,reject)=>{
     resolve(true);
     reject("error");
    });
  }

}
