import { Component, OnInit } from '@angular/core';
import { DateTimeServiceService } from '../dateTimeService.service';
import { FormGroup, FormControl } from "@angular/forms";
import { Config, ConfigService } from '../config.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[DateTimeServiceService, ConfigService]
})


export class HeaderComponent implements OnInit {
  currentDate;
  confirmed = false;
  currentUser;
  loginForm = new FormGroup({
    login: new FormControl(""),
    password: new FormControl("")
  });

  constructor(public dataService:DateTimeServiceService, private configService: ConfigService) { }
 
  login(){
  this.configService.getConfig().subscribe(db =>{
  let curLogin = this.loginForm.value.login;
  let curPassword = this.loginForm.value.password;
  let checkLogin = db[this.loginForm.value.login];
  
    
  if(checkLogin){
    if(checkLogin.password == curPassword){
      localStorage.setItem('calendarUser',curLogin);
      this.currentUser = curLogin;
      this.confirmed = true;
    } else {
      alert('Check password!');
    }
  } else {
    alert('Check login or create new!');
  }
})
}

  logout(){
    this.confirmed = false;
    localStorage.removeItem('calendarUser');
  }

  ngOnInit() {
    this.currentDate = this.dataService.getDateTime()
    if(localStorage.getItem('calendarUser')){
      this.confirmed = true;
      this.currentUser = localStorage.getItem('calendarUser');
    }
   }
}