import { Component, OnInit, Input } from '@angular/core';
import { puts } from 'util';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() dayNumber;
  @Input() currentMonthNumber;
  @Input() currentYear;

  constructor() { }

  ngOnInit() {
    console.log(this.currentMonthNumber)
  }

}
