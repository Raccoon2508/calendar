import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsDB } from '../services/events.service';

@Component({
  selector: 'app-edit-event-form',
  templateUrl: './edit-event-form.component.html',
  styleUrls: ['./edit-event-form.component.css']
})
export class EditFormComponent implements OnInit {

  private eventId: string;
  private editedEvent: object;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private eventsDb: EventsDB) { }
  private goBack(): void {
    console.log(this.router.url);
    this.router.navigate(['']);
  }
  public ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => this.eventId = data.id);
    this.editedEvent = (this.eventsDb.eventsBase.events).filter((event) => this.eventId === event.id + '')[0];
    console.log(this.editedEvent);
    console.log(this.eventId);
  }
}
