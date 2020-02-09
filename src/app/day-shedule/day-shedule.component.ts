import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Config, ConfigService } from './day-shedule.service';



@Component({
  selector: 'app-day-shedule',
  templateUrl: './day-shedule.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./day-shedule.component.css']
})
export class DaySheduleComponent implements OnInit {
  public id: string;
  config: Config;
  data;

  constructor(private configService: ConfigService, private route: ActivatedRoute) {}

  showConfig() {
    this.configService.getConfig()
      .subscribe(data=>{console.log(data);
      this.data = data;})
        
  }
  

 ngOnInit() {
   this.id = this.route.snapshot.paramMap.get('id');
   console.log(this.id );
}
}
