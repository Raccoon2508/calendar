import { Component, OnInit } from '@angular/core';
import { MyEvent, EventUser, EventBase } from '../models/event';
import { EventsDB } from '../services/events.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { DayState } from '../../services/dayState.service';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css'],
})

export class AddEventFormComponent implements OnInit {
  private title: string;
  private timeTo: string;
  private timeFrom: string;
  private comment: string;
  private priority: string;
  private id: string;
  private addedMessage: boolean = false;

  private sheduleYear: number = 2020;
  private sheduleMonth: number = 2;
  private sheduleDay: number = 14;
  private userId: number = 1;
  private eventObj: MyEvent = {
    id: 0,
    userId: 1,
    year: 0,
    month: 0,
    day: 0,
    timeFrom: '',
    timeTo: '',
    title: '',
    comment: '',
    priority: 'normal'
  };

  private connectionEventUser: EventUser = {
    userID: 0,
    eventID: 0
  };

  constructor(private eventsDataBase: EventsDB,
              private router: Router,
              private location: Location,
              private dayState: DayState) {}

  private goBack(): void {
    this.location.back();
  }

  private onClick(): void {
    this.eventObj.id = Date.now();
    this.eventObj.year = this.dayState.year;
    this.eventObj.month = this.dayState.month;
    this.eventObj.day = this.dayState.day;
    this.eventObj.timeFrom = this.timeFrom;
    this.eventObj.timeTo = this.timeTo;
    this.eventObj.title = this.title;
    this.eventObj.comment = this.comment;
    this.eventObj.priority = this.priority;

    this.connectionEventUser.eventID = +this.eventObj.id;
    this.connectionEventUser.userID = +this.userId;
    

    this.addedMessage = true;
    setTimeout(() => this.addedMessage = false, 2000);
    this.eventsDataBase.postEvent(this.eventObj);
    (this.eventsDataBase.eventsBase.usersEvents).push(this.connectionEventUser);
  }
  public ngOnInit(): void {
    console.log('Here');
    
  }

}
