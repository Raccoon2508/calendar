import { Component, OnInit } from '@angular/core';
import { SingleEventComponent } from '../day-shedule/single-event/single-event.component';
import { EventsDB } from '../day-shedule/services/events.service';


@Component({
  selector: 'app-events-main-list',
  templateUrl: './events-main-list.component.html',
  styleUrls: ['./events-main-list.component.css'],
  providers: [EventsDB]
})
export class EventsMainListComponent implements OnInit {
  private eventsLoadedBase;

  constructor(private eventsBase: EventsDB) { }

  public ngOnInit(): void {
    this.eventsBase.loadEvents().subscribe(data => {
      this.eventsLoadedBase = data;
      console.log(data);
    });
    
  }

}
