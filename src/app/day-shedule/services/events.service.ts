import { MyEvent, EventBase } from '../models/event';
import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root',
});

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
        day: 2020,
        id: 1584255707425,
        month: 2,
        priority: 'normal',
        timeFrom: '23:24',
        timeTo: '23:23',
        title: 'Hello',
        userId: 0,
        year: 2020}]
    };
}
