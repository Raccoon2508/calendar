import { Component, OnInit } from '@angular/core';
import { DateTimeServiceService } from '../dateTimeService.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Config, ConfigService } from '../config.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DateTimeServiceService, ConfigService]
})

export class HeaderComponent implements OnInit {
  public currentTime: Observable<Date>;
  public currentDate: Date;
  public confirmed: Boolean = false;
  public currentUser: void;
  public loginForm: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  constructor(public dataService: DateTimeServiceService, private configService: ConfigService) { }
  private login(): void {
  this.configService.getConfig().subscribe(db =>{
  let curLogin: string = this.loginForm.value.login;
  let curPassword: string = this.loginForm.value.password;
  let checkLogin = db[this.loginForm.value.login];

  if (checkLogin) {
    if (checkLogin.password === curPassword) {
      localStorage.setItem('calendarUser', curLogin);
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

public logout(): void{
    this.confirmed = false;
    localStorage.removeItem('calendarUser');
  }

  public ngOnInit(): void {
    this.currentTime = new Observable((obs) => {
     setInterval(() => obs.next(new Date), 1000);
    });
    this.currentDate = new Date();

    function somefunction<T>(): void {
      setInterval(() => console.log('here'), 2000);
    }
}
}
