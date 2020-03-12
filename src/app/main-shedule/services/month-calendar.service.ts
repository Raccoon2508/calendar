import { Injectable } from '@angular/core';
import { ConsoleReporter } from 'jasmine';

@Injectable()

export class CalendarService {

private selectedId: number;

public monthArray: (number | string)[];

constructor() {
}

public monthRebuild(year: number, month: number): number[] {
// building calendar with infinity calendar function

function weekday(yearX: number, monthX: number): number {
  month = monthX + 1;
  if (month < 3) {
    --yearX;
    month += 10;
  } else {
    month -= 2;
  }
  console.log('year', yearX);
  console.log('zeroday', yearX, monthX, Math.floor(31 * month / 12 + yearX + yearX / 4 - yearX / 100 + yearX / 400) % 7 )
  return Math.floor(31 * month / 12 + yearX + yearX / 4 - yearX / 100 + yearX / 400) % 7;
}

function fillArray(n: number): number[] {
    return Array(n).fill(0).map((item: number, index: number) => item = index + 1);
}

switch (month) {
  case 0:
  case 2:
  case 4:
  case 6:
  case 7:
  case 9:
  case 11:
    //console.log(weekday(year, month));
    return Array(weekday(year, month)).fill('').concat(fillArray(31));
  case 1:
    //console.log(weekday(year, month));
    return Array(weekday(year, month)).fill('').concat(fillArray(28));
  default:
    //console.log(weekday(year, month));
    return Array(weekday(year, month)).fill('').concat(fillArray(30));
 }
}

ngOnInit() {
}

}
