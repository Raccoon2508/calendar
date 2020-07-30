import { Component, OnInit } from '@angular/core';
import { Observable, interval, from} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { DayState } from '../../services/dayState.service';
import { MyEvent } from '../models/event';

@Component({
  selector: 'app-day-shedule-list',
  templateUrl: './day-shedule-list.component.html',
  styleUrls: ['./day-shedule-list.component.css']
})
export class DaySheduleListComponent implements OnInit {
  public currentUrl: string = this.router.url;
  public currentDateObj: object;
  public sheduleDay: number;
  public sheduleMonth: number;
  public sheduleYear: number;
  constructor(public router: Router,
              public activeRoute: ActivatedRoute,
              public dayState: DayState) {}

  public addRouting(): void {
    this.router.navigate([this.currentUrl, 'newEvent']);
  }

  public goBack(): void {
    this.router.navigate(['../']);
  }

public ngOnInit(): void {
  this.sheduleDay = this.dayState.day;
  this.sheduleMonth = this.dayState.month;
  this.sheduleYear = this.dayState.year;
}
public ngOnChanges(): void {

}
}
