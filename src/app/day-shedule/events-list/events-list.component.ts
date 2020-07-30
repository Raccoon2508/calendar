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
  public eventsDataBase = [];
  constructor(public eventsDb: EventsDB, public dayState: DayState) { }

  public ngOnInit(): void {
    this.eventsDb.loadEvents().subscribe((item) => {
      this.eventsDataBase = item.filter((x) => {
        return (+x.day === +this.sheduleDay &&
        +x.month === +this.sheduleMonth &&
        +x.year === +this.sheduleYear);
      })
    });
  }
  public ngOnChanges(): void {
      this.ngOnInit();
  }
  }
