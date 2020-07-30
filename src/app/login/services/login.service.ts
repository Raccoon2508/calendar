import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError, of, from } from 'rxjs';
import { UserObject } from '../user-object';
import { User } from '../../services/user';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {
  public user: UserObject;
  public serverLoginUrl: string =  environment.apiUrl;

  constructor( public http: HttpClient) { }
  public login(email: string, pass: string): Observable<Object> {
    let parametrs = {
      'email': email,
      'pass': pass
    };
    return this.http.get(this.serverLoginUrl, {params: parametrs});
  }

  public createUser(userObj: {[x: string]: string}): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/new-user`, userObj);
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
