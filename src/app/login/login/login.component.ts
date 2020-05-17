import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserObject } from '../user-object';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  private email: string = 'asdf@mail.com';
  private pass: string = '1234';

  constructor(private loginService: LoginService, private router: Router) { }

  login() {
    this.loginService.login(this.email, this.pass).subscribe((item: UserObject) => {
      console.log('Here')
      if (item.userID) {
        console.log(item);
        localStorage.setItem('calendarUserId', item.userID + '');
        localStorage.setItem('calendarUserName', item.userName + '');
        localStorage.setItem('calendarUserJwt', item.jwt + '');
        this.router.navigate(['']);
        console.log('Success');
      }


    });
    
  }

  ngOnInit() {
  }

}
