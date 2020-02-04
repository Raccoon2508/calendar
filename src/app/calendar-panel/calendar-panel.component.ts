import { Component, OnInit } from '@angular/core';
import { weekDays } from '../weekDays';

@Component({
  selector: 'app-calendar-panel',
  templateUrl: './calendar-panel.component.html',
  styleUrls: ['./calendar-panel.component.css']
})
export class CalendarPanelComponent implements OnInit {
  weekDays = weekDays;

  constructor() {
    
  }

  probeArr(num: number){
    let arr = new Array(num);
    arr.fill(1);
    let counter = 0;
    let arr2 = arr.map((x)=>{
    counter++;
    x=counter;
    return x;
    });
    return arr2;
  }

  ngOnInit() {
  }

}

