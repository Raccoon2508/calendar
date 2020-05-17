import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError, of, from } from 'rxjs';
import { UserObject } from '../user-object';


@Injectable()
export class LoginService {
  private user: UserObject;
  private serverLoginUrl: string = 'http://localhost:3000/api';

  constructor( private http: HttpClient) { }
  public login(email: string, pass: string): Observable<Object> {
    let parametrs = {
      'email': email,
      'pass': pass
    };
    return this.http.get(this.serverLoginUrl, {params: parametrs});

  }
}
