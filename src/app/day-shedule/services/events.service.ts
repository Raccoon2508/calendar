import { MyEvent, EventBase } from '../models/event';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class EventsDB {
      public eventsBase: EventBase = {
       'users': [
        {name: 'Nikita', id: 1}
      ],
      'usersEvents': [{
        userID: 1,
        eventID: 1584255707425
      }],
      'events': [{
        comment: "it's angular",
        day: 20,
        id: 1584255707425,
        month: 2,
        priority: 'normal',
        timeFrom: '23:24',
        timeTo: '23:23',
        title: 'Hello',
        userId: 0,
        year: 2020}]
    };

constructor() {}

 public saveEvent(savedEvent: MyEvent): void {
  this.eventsBase.events = this.eventsBase.events.map((item) => {
    if (item.id === savedEvent.id) {
      item = savedEvent;
    }
    console.log(item);
    return item;
  });
 }
 public deleteEvent(deletedEvent: MyEvent): void {
  this.eventsBase.events = this.eventsBase.events.filter((item) => item.id !== deletedEvent.id);
 console.log(this.eventsBase.events);
}

public loadEvents(day: number, month: number, year: number, userId?: number): MyEvent[]  {
  let result: MyEvent[] = this.eventsBase.events.filter((item) => {
    if (item.day === day && item.month === month && item.year === year) {
      return item;
    }
  });
  console.log(result);
  return result;
}

public eventsDayStatus(day: number, month: number, year: number, id?: number): string[] {
  let result: string[] = [];
  this.eventsBase.events.forEach((item) => {
    if (item.day === day && item.month === month && item.year === year) {
      result.push(item.priority);
    }
  });
  console.log(result);
  return result;
}
}
