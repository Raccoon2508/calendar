import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySheduleListComponent } from './day-shedule-list.component';

describe('DaySheduleListComponent', () => {
  let component: DaySheduleListComponent;
  let fixture: ComponentFixture<DaySheduleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaySheduleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
