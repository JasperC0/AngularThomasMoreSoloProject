import { TestBed } from '@angular/core/testing';

import { AddJournalistService } from './add-journalist.service';

describe('AddJournalistService', () => {
  let service: AddJournalistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddJournalistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
