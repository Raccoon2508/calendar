import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ConfigService, Config } from '../config.service';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.css'],
  providers: [ ConfigService ],
})
export class EventEditorComponent implements OnInit {
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
    if(!localStorage.getItem('calendarUser')){
      alert('You can save events only after login!');
      return;
    }
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

    this.configService.postConfig('http://localhost:3000/Nikita/', dayData)
    });  
  }

  editEvent(){
    let dayData;
    let eventsData;
    let currEvent: Config = this.profileForm.value;

    this.configService.getConfig().subscribe(data => {
      let editedData = Object.assign(data);
      let currentUser = localStorage.getItem('calendarUser');
      let currentUserEvantsBase = data[currentUser];
      eventsData = currentUserEvantsBase['day'+this.dayId];
      eventsData['time'+this.eventId] = currEvent;
      this.configService.postConfig('http://localhost:3000/eventsBase/', editedData);

    });
/*
    
    
    this.configService.getConfig().subscribe(data => {dayData = Object.assign(data);
      eventsData = data['day'+this.dayId];
      if(!eventsData['time' + currEvent.timeFrom]){
        eventsData['time' + currEvent.timeFrom] = currEvent;
    } else {
      this.formCheck = "Busy time";
      return;
    }

    this.configService.postConfig('http://localhost:4000/Nikita/', dayData)
    });  */
  }

  
  ngOnInit() {

    this.routeParams = this.route.params.subscribe(data=>{
      this.dayId = data.id;
      this.eventId = data.eventId;
      console.log(`${this.dayId} ${this.eventId}`)
    });
  }

}
