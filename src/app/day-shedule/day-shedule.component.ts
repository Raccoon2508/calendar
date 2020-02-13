import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Config, ConfigService } from '../config.service';



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
 

  constructor(private configService: ConfigService, private route: ActivatedRoute) {}


  showConfig(dayID) {


    this.configService.getConfig().subscribe(data => {
      if(!data[dayID]){return};
      let currentData = data[dayID];
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
      console.log(events);
      this.eventsArray = events;
    });
  }

 ngOnInit() {
   this.id = this.route.snapshot.paramMap.get('id');
   console.log('day'+this.id );
   this.showConfig('day'+this.id)
   
}
}
