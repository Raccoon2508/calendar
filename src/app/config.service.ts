import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})

export class ConfigService {
  config;
  constructor(private http: HttpClient) { }
  configUrl = '../db.json';

  getConfig() {
    return this.http.get(this.configUrl);
  }
}