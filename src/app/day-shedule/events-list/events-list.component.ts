import { Component, OnInit } from '@angular/core';
import { SingleEventComponent } from '../single-event/single-event.component';
import { MyEvent } from '../models/event';
import { EventsDB } from '../services/events.service';
import { EventBase } from '../models/event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})

export class EventsListComponent implements OnInit {
  public eventsDataBase: EventBase[];
  constructor(public eventsDb: EventsDB) { }

  public ngOnInit(): void {
    console.log(this.eventsDb.eventsBase.events);
    this.eventsDataBase = this.eventsDb.eventsBase.events;
  }

}