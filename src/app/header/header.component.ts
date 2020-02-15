import { Component, OnInit } from '@angular/core';
import { DateTimeServiceService } from '../dateTimeService.service';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[DateTimeServiceService]
})


export class HeaderComponent implements OnInit {
  currentDate;
  confirmed = false;
  currentUser;
  loginForm = new FormGroup({
    login: new FormControl(""),
    password: new FormControl("")
  });



  constructor(public dataService:DateTimeServiceService) { }
 
  login(){
    let db = {
      Nikita:{
        password: 12345,
        2020005:{

        }
      }
    }
  let curLogin = this.loginForm.value.login;
  let curPassword = this.loginForm.value.password;
  let checkLogin = db[this.loginForm.value.login];
  
    
  if(checkLogin){
    if(checkLogin.password == curPassword){
      console.log(true);
      localStorage.setItem('calendarUser',curLogin);
      this.currentUser = curLogin;
      this.confirmed = true;
    } else {
      alert('Check password!');
    }
  } else {
    alert('Check login or create new!');
  }
  
  }

  logout(){
    this.confirmed = false;
    localStorage.removeItem('calendarUser');


  }


  ngOnInit() {
    this.currentDate = this.dataService.getDateTime()
    console.log(this.currentDate);
    if(localStorage.getItem('calendarUser')){
      this.confirmed = true;
      this.currentUser = localStorage.getItem('calendarUser');
    }
   }
}