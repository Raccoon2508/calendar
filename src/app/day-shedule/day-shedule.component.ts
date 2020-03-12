import { Component } from '@angular/core';
import { Observable, interval, from} from 'rxjs';
import { buffer, bufferCount } from 'rxjs/operators'

@Component({
  templateUrl: 'day-shedule.component.html',
  selector: 'app-shedule-component',
  styleUrls: ['day-shedule.component.css']
})

export class DaySheduleComponent{
  public swissTime: Date;
  public time: {} = new Observable<Date>(obs => {
    setInterval(() => obs.next(new Date), 1000);})
    .pipe(bufferCount(5))
    .subscribe((next) => {
      for (let i = 0; i < next.length; i++ ) {
      setTimeout(() => {this.swissTime = next[i]}, i * 100);
      }
    });

  


  ngOnInit(){
    
  }

  
}
  

 


