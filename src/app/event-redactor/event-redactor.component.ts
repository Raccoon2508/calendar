import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ConfigService, Config } from '../config.service';

@Component({
  selector: "event-redactor",
  templateUrl: "./event-redactor.component.html",
  styleUrls: ["./event-redactor.component.css"],
  providers: [ ConfigService ],
})
export class EventRedactorComponent implements OnInit {
  routeParams;
  dayId;
  eventId;
  formCheck; 
  
  profileForm = new FormGroup({
    
    timeFrom: new FormControl(""),
    timeTo: new FormControl(""),
    title: new FormControl(""),
    comment: new FormControl(""),
    priority: new FormControl("")
  });
  constructor(private configService: ConfigService, private route: ActivatedRoute) {}

  show() {
    console.log(this.profileForm.value);
  }

  postEvent(){
    let currEvent: Config = this.profileForm.value
    let dayData;
    let eventsData;
    
    function checkProfileForm(currEvent){
      let timFrom = this.profileForm.value.timeFrom;
      let timeTo = this.profileForm.value.timeTo;
      let title = this.profileForm.value.title
      if(!timFrom&&!timeTo&&!title){
        this.formCheck = "Uncorrect";
      }
    }
    
    this.configService.getConfig().subscribe(data => {dayData = Object.assign(data);
    console.log('here', dayData)
      eventsData = data['day'+this.dayId];
      if(!eventsData['time' + currEvent.timeFrom]){
        eventsData['time' + currEvent.timeFrom] = currEvent;
    } else {
      this.formCheck = "Busy time";
      return;
    }

  console.log(dayData);
  console.log(this.formCheck);  

  this.configService.postConfig('http://localhost:4000/Nikita/', dayData)
});  
     
    
  }

  ngOnInit() {
    this.routeParams = this.route.params.subscribe(data=>{
      this.dayId = data.id;
      this.eventId = data.eventId;
      console.log(`${this.dayId} ${this.eventId}`)


    }
      );
    console.log()


  }
}
