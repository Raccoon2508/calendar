import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShedulePanelComponent } from './shedule-panel.component';

describe('ShedulePanelComponent', () => {
  let component: ShedulePanelComponent;
  let fixture: ComponentFixture<ShedulePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShedulePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShedulePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
