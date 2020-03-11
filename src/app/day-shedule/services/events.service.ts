import { Event } from '../models/event';
import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root',
})

export class EventsDB { 
    getEvents():Event[]{

      return (
    [
    {timeFrom: 1200, timeTo: 1300, title: "Hello", comment: "I`m a man", priority: "high"},
    {timeFrom: 1200, timeTo: 1300, title: "Hello", comment: "I`m a man", priority: "low"},
    {timeFrom: 1300, timeTo: 1300, title: "Hello", comment: "I`m a man", priority: "no"},
    {timeFrom: 1500, timeTo: 1300, title: "Hello", comment: "I`m a man", priority: "high"}
    ]);

    }
}
