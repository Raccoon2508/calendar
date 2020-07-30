import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsDB } from '../services/events.service';
import { Location } from '@angular/common';
import { MyEvent } from '../models/event';
import { User, UserEventNode, SingleEvent } from '../../interfaces.service';

@Component({
  selector: 'app-edit-event-form',
  templateUrl: './edit-event-form.component.html',
  styleUrls: ['./edit-event-form.component.css']
})
export class EditFormComponent implements OnInit {

  public eventId: number;
  public editedEvent: MyEvent = null;
  public timeFrom: string;
  public timeTo: string;
  public title: string;
  public comment: string;
  public priority: string;
  public day: number;
  public month: number;
  public year: number;
  public userId: number;
  public invitedUsers: User[];
  public registratedUsers: User[];
  public deletedUsers: User[] = [];
  public addedMessage: Boolean = false;

constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public eventsDb: EventsDB,
    public location: Location) { }

  public goBack(): void {
    this.location.back();
  }

  public saveEvent(): void {
    let savedEvent: MyEvent = new MyEvent();
    savedEvent.id = this.eventId;
    savedEvent.timeFrom = this.timeFrom;
    savedEvent.timeTo = this.timeTo;
    savedEvent.title = this.title;
    savedEvent.comment = this.comment;
    savedEvent.priority = this.priority;
    savedEvent.day = this.day;
    savedEvent.month = this.month;
    savedEvent.year = this.year;
    savedEvent.userId = this.userId;
    this.eventsDb.editingEvent(savedEvent, this.deletedUsers);
    this.addedMessage = true;
    setTimeout(() => this.addedMessage = false, 2000);
  }

  public inventedUsers(eventId: number): void {
  function inventedUsers(id: number, users: User[], usersEvents: UserEventNode[]): User[] {
    let usersIds: number[] = usersEvents.map(item => {
      if (item.eventID === id) { return item.userID; }
    });
    return users.filter(user => usersIds.includes(user.id));
  }
  this.eventsDb.loadUsersEventsBase(eventId).subscribe(
    data => {
      let [users, usersEvents] = data;
      this.invitedUsers = inventedUsers(eventId, users, usersEvents)
      .filter(x => x.id !== this.userId);
    }
  , () => {throw new Error('error in invited users list loading procedure'); });
  }

  public preAdd(i: number): void {
    (this.invitedUsers).push(this.registratedUsers[i]);
    let set: Set<User> = new Set(this.invitedUsers);
    this.invitedUsers = Array.from(set);
  }

  public preDeleteUser(item: User): void {
    let set: Set<User> = new Set(this.invitedUsers);
    set.delete(item);
    this.deletedUsers.push(item);
    this.invitedUsers = Array.from(set);
  }

  public ngOnInit(): void {
    this.editedEvent = history.state;
    this.eventId = this.editedEvent.id;
    this.timeFrom = this.editedEvent.timeFrom;
    this.timeTo = this.editedEvent.timeTo;
    this.title = this.editedEvent.title;
    this.comment = this.editedEvent.comment;
    this.priority = this.editedEvent.priority;
    this.day = this.editedEvent.day;
    this.month = this.editedEvent.month;
    this.year = this.editedEvent.year;
    this.userId = this.editedEvent.userId;
    this.inventedUsers(this.eventId);
    this.eventsDb.loadUsersBase().subscribe(
      (data) => {
      this.registratedUsers = data;
    }
    , () => {throw new Error('error in registrated users list loading procedure'); });
  }
}
