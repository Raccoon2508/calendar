import { MyEvent, EventBase, EventUser, User } from '../models/event';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of, from, concat, zip } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';
import { nextTick } from 'process';


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

public getBase(day?: number, month?: number, year?: number, userId?: number) {
  return this.http.get(this.urls.eventsUrl);
}

public postEvent(postedEvent: MyEvent): void {
  this.http.post(this.urls.baseUrl + '/add', postedEvent).subscribe();
}

public deleteEvent(eventId: number): void {
  this.http.delete(`${this.urls.eventsUrl}/${eventId}`).subscribe();
}

public editingEvent(eventId: number, editedEvent: MyEvent): void {
  this.http.post(this.urls.baseUrl + '/edit', editedEvent).subscribe();
}

public loadEvents(): any {
    const headersAuth = new HttpHeaders({'authorization': localStorage.getItem('calendarUserJwt')});
    return this.http.get(this.urls.baseUrl, { headers: headersAuth, responseType: 'json'});
}

public loadUsersBase(): any{
  return this.http.get(this.urls.baseUrl + '/users-base');
}

public loadUsersEventsBase(eventId): any{
  const users = this.http.get(this.urls.baseUrl + '/users-base');
  const usersEvents = this.http.get(this.urls.baseUrl + '/users-events-base');
  return zip(users, usersEvents);
}



}