import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-event-form',
  templateUrl: './edit-event-form.component.html',
  styleUrls: ['./edit-event-form.component.css']
})
export class EditEventFormComponent implements OnInit {
  public priority: string = 'normal';
  

  constructor() { }
  high():void{
    this.priority = 'high';
    console.log(this.priority);
  }
  normal():void{
    this.priority = 'normal';
    console.log(this.priority);
  }
  low():void{
    this.priority = 'low';
    console.log(this.priority);
  }




  ngOnInit() {
  }

}