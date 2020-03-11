import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Config, ConfigService } from '../config.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs';
import { bufferCount } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ConfigService]
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

  public swissTime: Date;
  public time: {} = new Observable<Date>(obs => {
    setInterval(() => obs.next(new Date), 1000);})
    .pipe(bufferCount(5))
    .subscribe((next) => {
      for (let i = 0; i < next.length; i++ ) {
      setTimeout(() => {this.swissTime = next[i]}, i * 100);
      }
  });

  constructor(private configService: ConfigService) { }

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
