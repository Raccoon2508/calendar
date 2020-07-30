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
  public title: string;
  public timeTo: string;
  public timeFrom: string;
  public comment: string;
  public priority: string;
  public id: string;
  public addedMessage: boolean = false;
  public eventedUsers: string[];
  public registratedUsers: {[x: string]: string|number}[];
  public sheduleYear: number = 2020;
  public sheduleMonth: number = 2;
  public sheduleDay: number = 14;
  public userID: number = +localStorage.getItem('calendarUserId');
  public iventedUsers: Set<{[x: string]: string|number}> = new Set();
  public eventObj: MyEvent = {
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

  public connectionEventUser: EventUser = {
    userID: 0,
    eventID: 0
  };

  constructor(public eventsDataBase: EventsDB,
              public router: Router,
              public location: Location,
              public dayState: DayState,
              public cdr: ChangeDetectorRef) {}

  public goBack(): void {
    this.location.back();
  }

  public onClick(): void {
    this.eventObj.id = Date.now();
    this.eventObj.year = this.dayState.year;
    this.eventObj.month = this.dayState.month;
    this.eventObj.day = this.dayState.day;
    this.eventObj.timeFrom = this.timeFrom;
    this.eventObj.timeTo = this.timeTo;
    this.eventObj.title = this.title;
    this.eventObj.comment = this.comment;
    this.eventObj.priority = this.priority || 'normal';

    this.connectionEventUser.eventID = +this.eventObj.id;
    this.connectionEventUser.userID = +localStorage.getItem('calendarUserId');
    this.addedMessage = true;
    let eventAndInvitedInfo: object = {eventInfo: this.eventObj, invitedInfo: Array.from(this.iventedUsers)};
    setTimeout(() => this.addedMessage = false, 2000);
    this.eventsDataBase.postEvent(eventAndInvitedInfo);
    (this.eventsDataBase.eventsBase.usersEvents).push(this.connectionEventUser);
  }

 public preAdd(i: number): void {
    if (i !== this.userID) {(this.iventedUsers).add(this.registratedUsers[i]); }
  }

  public preDeleteUser(item: {[x: string]: string|number}): void {
    (this.iventedUsers).delete(item);
  }

  public ngOnInit(): void {
     this.eventsDataBase.loadUsersBase().subscribe((data) => {
      this.registratedUsers = data.filter(x => x.id !== this.userID);
      this.cdr.detectChanges();
    });
  }
}
