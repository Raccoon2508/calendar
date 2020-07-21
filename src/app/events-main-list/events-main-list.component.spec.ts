import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMainListComponent } from './events-main-list.component';

describe('EventsMainListComponent', () => {
  let component: EventsMainListComponent;
  let fixture: ComponentFixture<EventsMainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsMainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsMainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
