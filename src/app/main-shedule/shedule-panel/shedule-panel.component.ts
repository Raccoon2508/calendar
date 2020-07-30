import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { DayComponent } from '../day/day.component';
import { CalendarService } from '../services/month-calendar.service';
import { EventsDB } from '../../day-shedule/services/events.service';

@Component({
  selector: 'app-shedule-panel',
  templateUrl: './shedule-panel.component.html',
  styleUrls: ['./shedule-panel.component.css'],
  providers: [CalendarService]
})
export class ShedulePanelComponent implements OnInit {
  @Input() public currentMonthNumber: number;
  @Input() public currentYear: number;
  public sheduleArr: (number | string)[];
  constructor( public monthFirstDay: CalendarService,
               public eventsService: EventsDB,
               public cdv: ChangeDetectorRef) { }

  public loadEvents(): void {
    this.sheduleArr = this.monthFirstDay.monthRebuild(this.currentYear, this.currentMonthNumber);
    this.cdv.detectChanges();
  }
  public ngOnChanges(): void {
    this.ngOnInit();
  }

  public ngOnInit(): void {
    this.loadEvents();
  }
}
