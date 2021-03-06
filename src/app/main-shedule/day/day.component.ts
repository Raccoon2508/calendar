import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
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
  @Input() public dayNumber: number;
  @Input() public currentMonthNumber: number;
  @Input() public currentYear: number;
  public dayId: string;
  public eventsStatusArray: Boolean[] = [];

  constructor(public router: Router,
              public dayState: DayState,
              public eventsStatus: EventsDB,
              public cdr: ChangeDetectorRef) {}

  public sheduleRouting<T>(day: T, month: T, year: T): void {
    this.dayId = `${year}${month}${day}`;
    this.dayState.day = this.dayNumber;
    this.dayState.month = this.currentMonthNumber;
    this.dayState.year = this.currentYear;
    this.router.navigate(['day', this.currentYear, this.currentMonthNumber, this.dayNumber, 'table']);
  }

  public ngOnChanges(): void {
    this.ngOnInit();
  }

  public ngOnInit(): void {
    this.eventsStatus.loadEvents().subscribe((item) => {
      this.eventsStatusArray = item.filter((x) => {
        return (+x.day === +this.dayNumber &&
        +x.month === +this.currentMonthNumber &&
        +x.year === +this.currentYear);
      }
      );
    });
}

}
