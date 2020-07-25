import { TestBed } from '@angular/core/testing';

import { EventsMainListService } from './events-main-list.service';

describe('EventsMainListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventsMainListService = TestBed.get(EventsMainListService);
    expect(service).toBeTruthy();
  });
});
