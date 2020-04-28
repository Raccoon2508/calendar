import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UrlObjectCommon } from 'url';
import { DayState } from '../../services/dayState.service';
import { EventsDB } from '../../day-shedule/services/events.service';
import { MyEvent, EventBase, EventUser, User } from '../../day-shedule/models/event';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() private dayNumber: number;
  @Input() private currentMonthNumber: number;
  @Input() private currentYear: number;
  private dayId: string;
  public eventsStatusArray;

  constructor(private router: Router, public dayState: DayState, private eventsStatus: EventsDB) {}

  public sheduleRouting<T>(day: T, month: T, year: T): void {
    this.dayId = `${year}${month}${day}`;
    this.dayState.day = this.dayNumber;
    this.dayState.month = this.currentMonthNumber;
    this.dayState.year = this.currentYear;

    this.router.navigate(['day', this.currentYear, this.currentMonthNumber, this.dayNumber, 'table']);
  }

  public ngOnInit(): void {
  this.eventsStatus.getBase().subscribe((item: MyEvent[]) => {
      this.eventsStatusArray = item.filter((currentEvent) =>
            currentEvent.userId === 1
            && currentEvent.day === this.dayNumber
            && currentEvent.month === this.currentMonthNumber
            && currentEvent.year === this.currentYear);

    });
  }

  public ngOnChanges(): void {
    this.eventsStatusArray =
    this.eventsStatus.eventsDayStatus(this.dayNumber, this.currentMonthNumber, this.currentYear);
  }

}
