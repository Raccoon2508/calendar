import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserObject } from '../user-object';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { EventsDB } from '../../day-shedule/services/events.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  private email: string = 'asdf@mail.com';
  private pass: string = '1234';
  private errorMessage: boolean = false;
  private registratedUsers: {[x: string]: string |number}[];

  constructor(private loginService: LoginService,
              private router: Router,
              public changeRef: ChangeDetectorRef,
              public views: ApplicationRef,
              public eventsDB: EventsDB,
              public cdr: ChangeDetectorRef) { }

  private login(): void {
    this.loginService.login(this.email, this.pass).subscribe((item: UserObject) => {
      if (item.userID) {
        this.loginService.loginUser(item);
        this.router.navigate(['']);
      } else {
        throw new Error('some problem with login');
        this.loginService.logoutUser();
        this.errorMessage = true;
        setTimeout(() => this.errorMessage = false, 2000);
      }
    });
  }

  private registerNewUser(): void{
    this.loginService.logoutUser();
    this.router.navigate(['new-user']);

  }


  ngOnInit() {

    this.eventsDB.loadUsersBase().subscribe((data) => {
      this.registratedUsers = data;
      this.cdr.detectChanges();
    });
  }
}