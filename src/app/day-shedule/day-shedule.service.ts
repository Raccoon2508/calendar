import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable()
export class ConfigService {
  configUrl = " http://localhost:4000/posts/1";

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(this.configUrl);
  }

} 