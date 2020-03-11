import { Component, OnInit } from '@angular/core';
import { SingleEventComponent } from '../single-event/single-event.component';
import { Event } from '../models/event';
import { EventsDB } from '../services/events.service';
 
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
  providers: [EventsDB]
})

export class EventsListComponent implements OnInit {
  public eventsDataBase: Event[];
  
  constructor( public EventsDB: EventsDB) { }

  ngOnInit() {
    console.log(this.EventsDB.getEvents());
    this.eventsDataBase = this.EventsDB.getEvents()
  }

}