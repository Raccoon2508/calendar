import { Component, OnInit, Input } from '@angular/core';
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
  @Input() currentMonthNumber;
  @Input() currentYear;
  public sheduleArr: (number | string)[];
  constructor( private monthFirstDay: CalendarService, private eventsService: EventsDB) { }

  ngOnChanges() {
    this.sheduleArr = this.monthFirstDay.monthRebuild(this.currentYear, this.currentMonthNumber);
  }

  ngOnInit() {
    this.sheduleArr = this.monthFirstDay.monthRebuild(this.currentYear, this.currentMonthNumber);
    this.eventsService.loadEvents();
    console.log(this.currentMonthNumber);
  }

}
