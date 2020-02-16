import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup, FormControl } from "@angular/forms";
import { Config, ConfigService } from '../config.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [ ConfigService ]
})
export class NewUserComponent implements OnInit {

  newUserForm = new FormGroup({
    
    userLogin: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl(""),
  });

  constructor(private configService: ConfigService) { }

  createNewUser(){
    let newUserPassword = this.newUserForm.value.password;
    let confirmPassword = this.newUserForm.value.confirmPassword;
    let login = this.newUserForm.value.userLogin;

    if(newUserPassword!==confirmPassword){
      alert('Password and confirm password are not match!');
      return;
    } else {
      let newUser = {
        password:this.newUserForm.value.password,
      }
      this.configService.getConfig().subscribe(db =>{
        let data = Object.assign(db);
        data[login] = newUser;
        this.configService.postUser('http://localhost:3000/eventsBase', data);
        alert('You can login with new username and pass!')
      })
    } 
  }
  
  ngOnInit() {
  }
}
