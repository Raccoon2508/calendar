import { MyEvent, EventBase, EventUser, User } from '../models/event';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

export class EventsDB {
  private loadedEvents: MyEvent[];
  private eventUser: EventUser[];
  private user: User;
  private baseUrl: string = 'http://localhost:3000/';
  private urls: {[key: string]: string} = {
    baseUrl: 'http://localhost:3000/',
    eventUserUrl: 'http://localhost:3000/usersEvents',
    eventsUrl: 'http://localhost:3000/events'
  };

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

constructor( public http: HttpClient ) {}

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

public getBase(day?: number, month?: number, year?: number, userId?: number) {
  return this.http.get(this.urls.eventsUrl);
}

public postEvent(postedEvent: MyEvent): void {
  this.http.post(this.urls.eventsUrl, postedEvent).subscribe();
}

public deleteEvent(eventId: number): void {
  this.http.delete(`${this.urls.eventsUrl}/${eventId}`).subscribe();
}

public editingEvent(eventId: number, editedEvent: MyEvent): void {
  this.http.put(`${this.urls.eventsUrl}/${eventId}`, editedEvent).subscribe();
}

}
