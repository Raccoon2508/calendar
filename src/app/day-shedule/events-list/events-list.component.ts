import { Component, OnInit, Input } from '@angular/core';
import { SingleEventComponent } from '../single-event/single-event.component';
import { MyEvent } from '../models/event';
import { EventsDB } from '../services/events.service';
import { EventBase } from '../models/event';
import { DayState } from '../../services/dayState.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})

export class EventsListComponent implements OnInit {
  @Input() emmited;
  public sheduleYear: number = this.dayState.year;
  public sheduleMonth: number = this.dayState.month;
  public sheduleDay: number = this.dayState.day;
  public eventsDataBase: MyEvent[];
  constructor(public eventsDb: EventsDB, public dayState: DayState) { }

  public ngOnInit(): void {
    this.eventsDb.getBase().subscribe((item: MyEvent[]) => {
      this.eventsDataBase = item.filter((currentEvent) =>
            currentEvent.userId === 1
            && currentEvent.day === this.sheduleDay
            && currentEvent.month === this.sheduleMonth
            && currentEvent.year === this.sheduleYear);

    });
  }

}
