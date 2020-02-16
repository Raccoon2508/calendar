import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Config, ConfigService } from '../config.service';
import { weekDays } from '../weekDays';
import { MonthNames } from '../monthNames';




@Component({
  selector: 'app-day-shedule',
  templateUrl: './day-shedule.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./day-shedule.component.css']
})
export class DaySheduleComponent implements OnInit {
  public id: string;
  config: Config;
  event: Config;
  eventsArray: Config[];
  eventHighPriority;
  eventPriority;
  eventId;

  weekDays = weekDays;
  MonthNames = MonthNames;

  dayYear;
  dayMonth;
  dayWeekDay;
 

  constructor(private configService: ConfigService, private route: ActivatedRoute) {}

  notAvalble() {
    alert('Sorry! Function not available yet!:(')
  }

   showConfig(dayID) {


    this.configService.getConfig().subscribe(data => {
      let currentUser = localStorage.getItem('calendarUser');
      if(!data[currentUser]){return};
      let currentUserEvantsBase = data[currentUser];
      if(!currentUserEvantsBase[dayID]){return};
      let currentData = currentUserEvantsBase[dayID];
      let events = Object.keys(currentData).map(currentEvent => {
        let event = currentData[currentEvent];
        let item: Config = {
          timeFrom: event["timeFrom"],
          timeTo: event["timeTo"],
          title: event["title"],
          comment: event["comment"],
          priority: event["priority"]
        };
        return item;
      });
      this.eventsArray = events;
    });
  }


  deleteEvent(timeFrom) {
    let currentEvent = 'time' + timeFrom;
    this.configService.getConfig().subscribe(data => {
      let editedData = Object.assign(data);
      let currentUser = localStorage.getItem('calendarUser');
      let currentUserEvantsBase = data[currentUser];
      let eventsData = currentUserEvantsBase['day'+this.id];
      delete eventsData[currentEvent];
      this.configService.postConfig('http://localhost:3000/eventsBase/', editedData);
      this.ngOnInit();
    });
  }

  sliceID(id){
    
    this.dayYear = (id).slice(0,4);
    let dayMonth = +(id).slice(4,6);
    let dayWeekDay = +(id).slice(4,6);

    this.dayMonth = this.MonthNames[dayMonth].name;
    this.dayWeekDay = dayWeekDay;
    return;
  }



ngOnInit() {
   this.id = this.route.snapshot.paramMap.get('id');
   this.showConfig('day'+this.id);
   this.sliceID(this.id);
}
}
