import { Injectable } from '@angular/core';
import { SingleEvent, User, UserEventNode } from '../interfaces.service';

@Injectable()

export class EventsMainListService {
  constructor() { }
  public sortEventsList(eventsArray: Array<SingleEvent>
    ,                   allOrforth: Boolean, priority: string): [string, object[]][]  {
      try {
      const currentDate: Date = new Date();
      const currentDay: number = currentDate.getDate();
      const currentMonth: number = currentDate.getMonth();
      const currentYear: number = currentDate.getFullYear();
      function twoDigits(m: number): string {
        return m < 10 ? '0' + m : m + '';
      }
      function stringDate(item: SingleEvent): number {
        return Date.parse(`${item.year}-${twoDigits(item.month)}-${twoDigits(item.day)}T${item.timeFrom}`);
      }
      let forthcomingEvents: Array<SingleEvent> = [];
      if (allOrforth === true) {forthcomingEvents = eventsArray.filter(item => {
        let strDate: number = stringDate(item);
        return strDate < +currentDate ? false : true;
      });
      } else { forthcomingEvents = eventsArray; }
      function dataKey(item: SingleEvent): string {
        return `${item.year}${twoDigits(item.month)}${twoDigits(item.day)}`;
      }
      forthcomingEvents.sort((a, b) => stringDate(b) - stringDate(a));
      if (['low', 'normal', 'high'].includes(priority)) {
         forthcomingEvents = forthcomingEvents.filter(item => item.priority === priority);
      }
      let dateObj: {[x: string]: Array<SingleEvent>} = {};
      forthcomingEvents.forEach(item => {
        if (!item.year) {return false; }
        if (!dateObj[dataKey(item)]) {dateObj[dataKey(item)] = [item];
        } else {dateObj[dataKey(item)].push(item); }
      });
      let map: Map<string, {[x: string]: Array<SingleEvent>}> = new Map();
      return Object.entries(dateObj);
    } catch (err) {
      let dateErr: Error = new Error(err);
      throw dateErr;
    }
   }
  }
