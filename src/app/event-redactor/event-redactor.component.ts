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
  
  newEventForm = new FormGroup({
    
    timeFrom: new FormControl(""),
    timeTo: new FormControl(""),
    title: new FormControl(""),
    comment: new FormControl(""),
    priority: new FormControl("")
  });
  constructor(private configService: ConfigService, private route: ActivatedRoute) {}

  show() {
    console.log(this.newEventForm.value);
  }

  addEvent(){
    if(!localStorage.getItem('calendarUser')){
      alert('You can save events only after login!');
      return;
    }
    let currEvent: Config = this.newEventForm.value
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
    
    this.configService.getConfig().subscribe(data => {
      let editedData = Object.assign(data);
      let currentUser = localStorage.getItem('calendarUser');
      let currentUserEvantsBase = data[currentUser];
      eventsData = currentUserEvantsBase['day'+this.dayId];
      if(!eventsData['time' + currEvent.timeFrom]){
        eventsData['time' + currEvent.timeFrom] = currEvent;
    } else {
      alert('Time Is Busy! Select other time!');
      return;
    }

     this.configService.postConfig(`http://localhost:3000/eventsBase/`, editedData)
    });  
  }

  

  ngOnInit() {
    if(!localStorage.getItem('calendarUser')){
      alert('You can save events only after login!');
      return;
    }

    this.routeParams = this.route.params.subscribe(data=>{
      this.dayId = data.id;
      

      this.configService.getConfig().subscribe(data => {
        let editedData = Object.assign(data);
        let currentUser = localStorage.getItem('calendarUser');
        let currentUserEvantsBase = data[currentUser];
        if(!currentUserEvantsBase['day'+this.dayId]){
          currentUserEvantsBase['day'+this.dayId]={};
          };
          this.configService.postConfig(`http://localhost:3000/eventsBase/`, editedData) 
      })
    });
    
    
  }
}
