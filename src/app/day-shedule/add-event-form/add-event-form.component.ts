import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MyEvent, EventUser, EventBase } from '../models/event';
import { EventsDB } from '../services/events.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { DayState } from '../../services/dayState.service';
import { NullTemplateVisitor } from '@angular/compiler';

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
  private eventedUsers: string[];
  private registratedUsers: {[x: string]: string|number}[];
  private sheduleYear: number = 2020;
  private sheduleMonth: number = 2;
  private sheduleDay: number = 14;
  private userID: number = +localStorage.getItem('calendarUserId');
  private iventedUsers: Set<{[x: string]: string|number}> = new Set();
  private eventObj: MyEvent = {
    id: 0,
    userId: +localStorage.getItem('calendarUserId'),
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
              private dayState: DayState,
              private cdr: ChangeDetectorRef) {}

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
    this.connectionEventUser.userID = +localStorage.getItem('calendarUserId');
    this.addedMessage = true;
    let eventAndInvitedInfo: object = {eventInfo: this.eventObj, invitedInfo: Array.from(this.iventedUsers)};
    setTimeout(() => this.addedMessage = false, 2000);
    this.eventsDataBase.postEvent(eventAndInvitedInfo);
    (this.eventsDataBase.eventsBase.usersEvents).push(this.connectionEventUser);
    
  }

 private preAdd(i) {
    if (i !== this.userID) {(this.iventedUsers).add(this.registratedUsers[i]); }
  }

  private preDeleteUser(item) {
    console.log(this.iventedUsers.keys());
    (this.iventedUsers).delete(item);
  }

  public ngOnInit(): void {
     this.eventsDataBase.loadUsersBase().subscribe((data) => {
      this.registratedUsers = data.filter(x => x.id !== this.userID);
      this.cdr.detectChanges();
    });
  }
}
