import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UrlObjectCommon } from 'url';
import { DayState } from '../../services/dayState.service';
import { EventsDB } from '../../day-shedule/services/events.service';

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
  public eventsStatusArray: string[];

  constructor(private router: Router, public dayState: DayState, private eventsStatus: EventsDB) {}

  public sheduleRouting<T>(day: T, month: T, year: T): void {
    this.dayId = `${year}${month}${day}`;
    this.dayState.day = this.dayNumber;
    this.dayState.month = this.currentMonthNumber;
    this.dayState.year = this.currentYear;

    this.router.navigate(['day', this.currentYear, this.currentMonthNumber, this.dayNumber, 'table']);
  }

  public ngOnInit(): void {
    this.eventsStatusArray =
         this.eventsStatus.eventsDayStatus(this.dayNumber, this.currentMonthNumber, this.currentYear);
  }

  public ngOnChanges(): void {
    this.eventsStatusArray =
    this.eventsStatus.eventsDayStatus(this.dayNumber, this.currentMonthNumber, this.currentYear);
  }

}
