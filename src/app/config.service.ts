import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';


export interface Config {
  id: string;
  timeFrom: string;
  timeTo: string;
  title: string;
  comment: string;
  priority: string;
}

@Injectable()
export class ConfigService {
  event;
  dayUrl;
  configUrl = "http://localhost:4000/";
  userName = "Nikita";
  loginUrl = `${this.configUrl}${this.userName}`;

  
  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get(this.loginUrl);
  }

  postConfig (dayUrl, event:Config){
    
    return this.http.post(dayUrl, event, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    }).toPromise();

}
}
