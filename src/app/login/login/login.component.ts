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
  public email: string = 'asdf@mail.com';
  public pass: string = '1234';
  public errorMessage: boolean = false;
  public registratedUsers: {[x: string]: string |number}[];
  public passTextType: string = 'password';

  constructor(public loginService: LoginService,
              public router: Router,
              public changeRef: ChangeDetectorRef,
              public views: ApplicationRef,
              public eventsDB: EventsDB,
              public cdr: ChangeDetectorRef) { }

  public login(): void {
    this.loginService.login(this.email, this.pass).subscribe((item: UserObject) => {
      if (item.userID) {
        this.loginService.loginUser(item);
        this.router.navigate(['/events-full-list']);
      } else {
        this.loginService.logoutUser();
        this.errorMessage = true;
        setTimeout(() => this.errorMessage = false, 2000);
        throw new Error('some problem with login');
      }
    });
  }

  public showPass(): void {
    if (this.passTextType === 'password') { this.passTextType = 'text';
  } else { this.passTextType = 'password'; }
  }

  public registerNewUser(): void {
    this.loginService.logoutUser();
    this.router.navigate(['new-user']);
  }

  public ngOnInit(): void {
   this.eventsDB.loadUsersBase().subscribe((data) => {
   this.registratedUsers = data.reverse();
   this.cdr.detectChanges();
   });
  }
}
