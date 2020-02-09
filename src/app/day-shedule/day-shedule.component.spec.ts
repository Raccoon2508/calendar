import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySheduleComponent } from './day-shedule.component';

describe('DaySheduleComponent', () => {
  let component: DaySheduleComponent;
  let fixture: ComponentFixture<DaySheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaySheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
