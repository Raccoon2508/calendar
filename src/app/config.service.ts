import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';


export interface Config {
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
  configUrl = "http://localhost:3000/eventsBase";
  

  
  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get(this.configUrl);
  }

  postConfig (dayUrl, event:Config){
     return this.http.put(dayUrl, event, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    }).toPromise();

}

  postUser (dayUrl, user){
    
    return this.http.put(dayUrl, user, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    }).toPromise();

  }
}
