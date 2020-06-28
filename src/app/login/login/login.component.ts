import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserObject } from '../user-object';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { ApplicationRef } from '@angular/core';



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

  constructor(private loginService: LoginService,
              private router: Router,
              public changeRef: ChangeDetectorRef,
              public views: ApplicationRef) { }

  login() {
    this.loginService.login(this.email, this.pass).subscribe((item: UserObject) => {
      if (item.userID) {
        console.log(item);
        localStorage.setItem('calendarUserAuthorisated', 'true');
        localStorage.setItem('calendarUserId', item.userID + '');
        localStorage.setItem('calendarUserName', item.userName + '');
        localStorage.setItem('calendarUserJwt', item.jwt + '');
        this.router.navigate(['']);
        console.log('Success');
      } else {
        console.log('Login error');
        this.errorMessage = true;
        setTimeout(() => this.errorMessage = false, 2000);
      }
    });
  }
  ngOnInit() {
  }
}
