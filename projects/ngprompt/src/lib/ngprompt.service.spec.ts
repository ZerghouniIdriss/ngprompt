import { TestBed } from '@angular/core/testing';

import { NgpromptService } from './ngprompt.service';

describe('NgpromptService', () => {
  let service: NgpromptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgpromptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
