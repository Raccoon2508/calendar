import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SingleEventComponent } from '../day-shedule/single-event/single-event.component';
import { EventsDB } from '../day-shedule/services/events.service';
import { EventsMainListService } from './events-main-list.service';
import { Router } from '@angular/router';
import { User, SingleEvent, UserEventNode} from '../interfaces.service';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-events-main-list',
  templateUrl: './events-main-list.component.html',
  styleUrls: ['./events-main-list.component.css'],
  providers: [EventsDB, EventsMainListService]
})
export class EventsMainListComponent implements OnInit {
  @ViewChild('allOrForthSwitch', {static: false}) private allOrForthSwitch: ElementRef;
  @ViewChild('selectList', {static: false}) private selectList: ElementRef;
  private eventsLoadedBase: [string, object[]][];
  private priority: string = '';
  private allForth: Boolean = false;

  constructor(private eventsBase: EventsDB,
              private mainListService: EventsMainListService,
              private router: Router,
              private ref: ElementRef,
              private cdr: ChangeDetectorRef) { }

  public routingToCalendar(): void {
    this.router.navigate(['']);
  }

  public priorityFilter(): void {
    this.priority = this.selectList.nativeElement.selectedOptions[0].innerHTML;
    this.loadEventsList(this.allForth, this.priority.toLowerCase());
  }

  public allOrForthList(): void {
    this.allForth = !this.allForth;
    this.loadEventsList(this.allForth, this.priority);
    let buttonText: string = this.allOrForthSwitch.nativeElement.textContent;
    buttonText === 'Forth' ? this.allOrForthSwitch.nativeElement.textContent = 'All'
    : this.allOrForthSwitch.nativeElement.textContent = 'Forth';
  }

  public loadEventsList(allForth: Boolean, priority: string): void {
    this.eventsBase.loadEvents().subscribe(data => {
      this.eventsLoadedBase = this.mainListService.sortEventsList(data, allForth, priority);
    });
  }

  public ngOnInit(): void {
    this.loadEventsList(this.allForth, this.priority);
  }
}
