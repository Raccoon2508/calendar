import { Component, OnInit, Input } from '@angular/core';
import { weekDays } from '../weekDays';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Config, ConfigService } from '../config.service';
import { NavigationButtonsComponent } from '../navigation-buttons/navigation-buttons.component'


@Component({
  selector: 'app-calendar-panel',
  templateUrl: './calendar-panel.component.html',
  styleUrls: ['./calendar-panel.component.css'],
  providers: [ConfigService],
})
export class CalendarPanelComponent implements OnInit {
  selectedId: number;
  weekDays = weekDays;
  @Input() currentYear;
  @Input() currentMonthNumber;
  currentDayNumber;
  currentDayEventsCounter;
  eventsArraysForEveryDay = [];

  constructor(private configService: ConfigService) {
  }


  checkEvents(){
    let dayIdArr = [];
    function addZero(some:number){
      if(some<10){
        return '0'+some;
      } else {
        return '' + some;
      }
    }
    let prefix = `day${this.currentYear}${addZero(this.currentMonthNumber)}`;
    for(let i = 0; i<31; i++){
      dayIdArr.push(prefix + addZero(i));

    }
    this.configService.getConfig().subscribe(data => {
      
      let currentUser = localStorage.getItem('calendarUser');
      if(!data[currentUser]){return};
      this.currentDayEventsCounter = Object.assign(data[currentUser]);
       for(let i = 0; i < dayIdArr.length; i++){
          if(this.currentDayEventsCounter[dayIdArr[i]]){
            this.eventsArraysForEveryDay.push(Object.keys(this.currentDayEventsCounter[dayIdArr[i]]));
          } else {
            this.eventsArraysForEveryDay.push([]);
          }
          
       } 
       
     });
     
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

  calendarRebuild(){ //building calendar with infinity calendar function

    let m = this.currentMonthNumber;
    let y = this.currentYear;
    function weekday(year, month, day) {
      year = parseInt(year, 10);
    month = parseInt(month, 10)+1;
    day = parseInt(day, 10);
    if (month < 3) {
      --year;
      month += 10;
    } else
      month -= 2;
    return Math.floor(day + 31 * month / 12 + year + year / 4 - year / 100 + year / 400) % 7;
  }

  const counter = this.eventsArraysForEveryDay;

  function fillArray(n){
    
    let month = m;
    let year = y;

    function dayIdCreating(currentDay){
    let stringDay = currentDay + '';
    if(currentDay < 10){
      stringDay = '0'+currentDay; 
    }
    let stringMonth = month + '';
    if( month < 10){
      stringMonth = '0' + stringMonth; 
    }
    let dayID = year + stringMonth + stringDay;
    return dayID;
  }

  let resultArr = [];
    for (let i = 1; i<=n; i++){
      resultArr.push({num: i,
      id: dayIdCreating(i),
      events: counter[i],
      });
      
     
    }
    
    return resultArr;
  }


  let weekDay = weekday(y, m, 0)
  let emptyWeekDays = new Array(weekDay);
  emptyWeekDays.fill({});
  
  let monthArray;
  if(m===1&&y%4===0){
    monthArray = fillArray(29);
    return emptyWeekDays.concat(monthArray);
  }

  switch (m){
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      monthArray = fillArray(31);
      return emptyWeekDays.concat(monthArray);
    case 1:
      monthArray = fillArray(28);
      return emptyWeekDays.concat(monthArray);
    default:
      monthArray = fillArray(30);
      return emptyWeekDays.concat(monthArray);
      
    }
  
  }

  ngOnInit() {
    this.checkEvents();
    this.calendarRebuild();
  }
}

