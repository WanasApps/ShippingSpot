import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  public isLogedin:boolean=true;
  public id:number;
  constructor() {
    this.id=Math.random();
    console.log("Auth Service constructor, id="+this.id);
  }
  ngOnInit(): void {
    console.log("Auth Service Working Now, id="+this.id);
  }
  getid()
  {
    console.log("Auth Service getid methis, id="+this.id);
  }
}
