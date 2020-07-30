import { MyEvent, EventBase, EventUser } from '../models/event';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of, from, concat, zip } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';
import { nextTick } from 'process';
import { environment } from '../../../environments/environment';
import { User, SingleEvent, UserEventNode } from '../../interfaces.service';

@Injectable({
  providedIn: 'root',
})

export class EventsDB {
  private loadedEvents: MyEvent[];
  private eventUser: EventUser[];
  private user: User;
  private urls: {[key: string]: string} = {
    baseUrl: `${environment.apiUrl}`,
    eventUserUrl: `${environment.apiUrl}/usersEvents`,
    eventsUrl: `${environment.apiUrl}/events`
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

public getBase(): Observable<any> {
  return this.http.get(this.urls.eventsUrl);
}

public sendInvitedUsers(usersArr: User[], eventId: number): void {
  let arrUserEvent: {[x: string]: number|string}[] = usersArr.map((user) => {
    return {'userID': user.id, 'eventID': eventId};
  })
  this.http.post(this.urls.baseUrl + '/invite-users', arrUserEvent).subscribe();
}

public postEvent(postedEvent: SingleEvent): void {
  this.http.post(this.urls.baseUrl + '/add', postedEvent).subscribe();
}

public deleteEvent(event: number, user: number): void {
  this.http.post(this.urls.baseUrl + `/delete-event`, {eventID: event, userID: user}).subscribe();
}

public editingEvent(editedEvent: MyEvent, deletedInvitedUsers: User[]): void {
  let deletedUserEventsArr: UserEventNode[] = deletedInvitedUsers
  .map(item => {return {userID: item.id, eventID: editedEvent.id}; });

  let editedEventInfo =
   {event: editedEvent, deletedUsers: deletedUserEventsArr};

  this.http.post(this.urls.baseUrl + '/edit', editedEventInfo).subscribe();
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

public deleteParticipant(deletedUsers, eventId){
  let deletedParticipantsForPost = deletedUsers.map((x)=>{
    return {userID: x.id, eventID: eventId};
  });
  console.log(deletedParticipantsForPost);
  this.http.post(this.urls.baseUrl + '/delete-participants', deletedParticipantsForPost).subscribe();
}
}