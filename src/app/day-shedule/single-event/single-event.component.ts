import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {
  @Input() singleEvent

  constructor() { }

  ngOnInit() {
    console.log(this.singleEvent)
  }

}