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
  dataForForm: Config;
  
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

  addEvent(){
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

  editEvent(){
    let dayData;
    let eventsData;

    
    
    this.configService.getConfig().subscribe(data => {dayData = Object.assign(data);
      eventsData = data['day'+this.dayId];
      if(!eventsData['time' + currEvent.timeFrom]){
        eventsData['time' + currEvent.timeFrom] = currEvent;
    } else {
      this.formCheck = "Busy time";
      return;
    }

    this.configService.postConfig('http://localhost:4000/Nikita/', dayData)
    });  
  }

  loadEventToForm(){
    let dayData;
    let eventsDayData;
    let eventsTimeData;
    if(this.eventId === "newEvent"){
      this.dataForForm = {
        "timeFrom": "",
        "timeTo": "",
        "title": "",
        "comment": "",
        "priority": ""
      }
       return};

    this.configService.getConfig().subscribe(data => {dayData = Object.assign(data);
      eventsDayData = data['day'+this.dayId];
    if(!eventsDayData['time'+this.eventId]){
      console.log(this.eventId);
      return}
    eventsTimeData = eventsDayData['time'+this.eventId];
    this.dataForForm = Object.assign(eventsTimeData);
    console.log('dataform',this.dataForForm);
   });
  }



  ngOnInit() {
    this.routeParams = this.route.params.subscribe(data=>{
      this.dayId = data.id;
      this.eventId = data.eventId;
      console.log(`${this.dayId} ${this.eventId}`)
    });
    this.loadEventToForm()
    
    
  }
}
