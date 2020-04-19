import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DayState {
    public day: number;
    public month: number;
    public year: number;

}