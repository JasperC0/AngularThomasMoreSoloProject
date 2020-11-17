import { TestBed } from '@angular/core/testing';

import { DeleteJournalistService } from './delete-journalist.service';

describe('DeleteJournalistService', () => {
  let service: DeleteJournalistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteJournalistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
