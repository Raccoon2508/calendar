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
  private currentUrl: string = this.router.url;
  private currentDateObj: object;
  private sheduleDay: number;
  private sheduleMonth: number;
  private sheduleYear: number;
 

  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private dayState: DayState) {}

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
