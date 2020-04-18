import { Component, OnInit, Input } from '@angular/core';
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
  @Input() emmited;

  public eventsDataBase: MyEvent[];
  constructor(public eventsDb: EventsDB) { }

  public ngOnInit(): void {
    console.log(this.eventsDb.eventsBase.events);
    this.eventsDataBase = this.eventsDb.eventsBase.events;
  }

}