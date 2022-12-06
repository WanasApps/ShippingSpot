import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { credential,signinResponse,tokenPayload } from './crm.types';


@Injectable({
  providedIn: 'root'
})
export class CrmService {

  constructor(private http:HttpClient) { }

  crmSignin(credential:credential)
  {
    let url="";
    let req=this.http.post<signinResponse>(url,credential);
    req
    .subscribe((response:signinResponse)=>
    {
      return response;
    });
  }
}
