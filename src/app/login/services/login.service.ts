import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError, of, from } from 'rxjs';
import { UserObject } from '../user-object';
import { User } from '../../services/user';


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

  public createUser(userObj: {[x: string]: string}): Observable<Object> {
    return this.http.post('http://localhost:3000/new-user', userObj);
  }


  public loginUser(item: UserObject): void {
        localStorage.setItem('calendarUserAuthorisated', 'true');
        localStorage.setItem('calendarUserId', item.userID + '');
        localStorage.setItem('calendarUserName', item.userName + '');
        localStorage.setItem('calendarUserJwt', item.jwt + '');
  }

  public logoutUser(): void {
        localStorage.setItem('calendarUserAuthorisated', 'false');
        localStorage.removeItem('calendarUserId');
        localStorage.removeItem('calendarUserName');
        localStorage.removeItem('calendarUserJwt');

  }

}
