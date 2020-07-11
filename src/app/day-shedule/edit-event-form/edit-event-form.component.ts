import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsDB } from '../services/events.service';
import { Location } from '@angular/common';
import { MyEvent } from '../models/event';

@Component({
  selector: 'app-edit-event-form',
  templateUrl: './edit-event-form.component.html',
  styleUrls: ['./edit-event-form.component.css']
})
export class EditFormComponent implements OnInit {

  private eventId: number;
  private editedEvent: MyEvent = null;
  private timeFrom: string;
  private timeTo: string;
  private title: string;
  private comment: string;
  private priority: string;
  private day: number;
  private month: number;
  private year: number;
  private userId: number;
  private invitedUsers: {[x: string]: string|number}[];

constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private eventsDb: EventsDB,
    private location: Location) { }

  private goBack(): void {
    this.location.back();
  }

  private saveEvent(): void {
    let savedEvent = new MyEvent();
    
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
    this.eventsDb.editingEvent(this.eventId, savedEvent);
  }

  private inventedUsers(eventId){
  this.eventsDb.loadUsersEventsBase(eventId).subscribe(
    data => {
      let [users, usersEvents] = data;
      this.invitedUsers = inventedUsers(eventId, users, usersEvents);
    }
  );

  function inventedUsers(id, users, usersEvents){
    let usersIds = usersEvents.map(item => {
      if (item.eventID === id) { return item.userID; }
    });
    console.log(users.filter(user => usersIds.includes(user.id)));
    return users.filter(user => usersIds.includes(user.id));
    }
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
  }
}
