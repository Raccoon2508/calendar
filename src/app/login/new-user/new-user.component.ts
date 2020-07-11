import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { first } from 'rxjs/operators';
import {Location} from '@angular/common';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [LoginService]
})


export class NewUserComponent implements OnInit {
  
  private passTextType: string = 'password';
  private firstPass: string = '';
  private secondPass: string = '';
  private email: string = '';
  private userName: string = '';
  private correctRepeatedPass: Boolean = false;
  private correctEmail: Boolean = false;
  private correctName: Boolean = false;
  private userCard: {[x: string]: string} = {};

  constructor(private location: Location,
              private loginService: LoginService) {}

  private goBack(): void {
    this.location.back();
  }

  private createUser(): void {
    console.log(this.userCard);
    this.userCard.name = this.userName;
    this.userCard.email = this.email;
    this.userCard.pass = this.firstPass;
    console.log('ready', this.userCard);
    this.loginService.createUser(this.userCard).subscribe();
  }

  public ngOnInit(): void {
    
  }
  public showPass(): void {
    if (this.passTextType === 'password') { this.passTextType = 'text'; }
    else { this.passTextType = 'password'; }
  }

  public ngDoCheck(): void {
    if (this.firstPass !== this.secondPass || this.firstPass === '') {
      this.correctRepeatedPass = false;
    } else {
      this.correctRepeatedPass = true;
    }
    if (this.email.includes('@') && this.email.includes('.')) {
      this.correctEmail = true;
    } else {
      this.correctEmail = false;
    }
    if (this.userName.length > 0) {
      this.correctName = true;
    } else {
      this.correctName = false;
    }
  }

  
}
