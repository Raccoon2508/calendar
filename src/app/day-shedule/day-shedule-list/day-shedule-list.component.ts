import { Component, OnInit } from '@angular/core';
import { Observable, interval, from} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day-shedule-list',
  templateUrl: './day-shedule-list.component.html',
  styleUrls: ['./day-shedule-list.component.css']
})
export class DaySheduleListComponent implements OnInit {
  private currentUrl: string = this.router.url;

  constructor(private router: Router) {}

  public addRouting(): void {
    console.log('MustAdd');
    console.log(this.router.url);
    this.router.navigate([this.currentUrl, 'newEvent']);
    
  }

  public goBack(): void {
    this.router.navigate(['../'])
  }

public ngOnInit(): void {
    
  }
public ngOnChanges(): void {
  
}

}
