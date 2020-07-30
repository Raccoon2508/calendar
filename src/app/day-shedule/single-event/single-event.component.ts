import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { EventsDB } from '../services/events.service';
import { MyEvent } from '../models/event';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {
  @Input() singleEvent;
  @Input() eventId;
  @Output() public emmited: EventEmitter<any> = new EventEmitter();

  constructor( public router: Router, 
               public eventsServise: EventsDB,
               public cdr: ChangeDetectorRef) { }

  public editEventFunc(): void {
    this.router.navigate(['edit/' + this.singleEvent.id], {state: this.singleEvent});
    console.log(this.singleEvent.id);
  }

  public deleteEvent(): void {
    this.eventsServise.deleteEvent(this.singleEvent.id, +localStorage.getItem('calendarUserId'));
    this.emmited.emit();
  }

  public ngOnInit(): void {
  }
}
