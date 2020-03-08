import { Component, OnInit } from '@angular/core';
import { DayComponent } from '../day/day.component';

@Component({
  selector: 'app-shedule-panel',
  templateUrl: './shedule-panel.component.html',
  styleUrls: ['./shedule-panel.component.css']
})
export class ShedulePanelComponent implements OnInit {

  public sheduleArr: number[] = new Array(42);

  constructor() { }

  ngOnInit() {
  }

}
