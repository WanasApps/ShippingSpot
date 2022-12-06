import { HttpHeaders, HttpParams } from "@angular/common/http";

export interface HTTPoptions {
  headers?: HttpHeaders | { [header: string]: string | string[]; };
  observe?: 'body' | 'events' | 'response';
  params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>; };
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
}
export interface credential
{
  username:string,
  password:string
}
export interface signinResponse {
  accessToken: string;
  user: tokenPayload;
  tokenType: string;
}
export interface tokenPayload{
  Account_ID:string,
  userID:string,
  UserType:'Client' | 'Service Provider',
  iat?:number,
  exp?:number

}
