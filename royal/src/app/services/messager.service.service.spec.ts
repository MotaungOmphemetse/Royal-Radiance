import { TestBed } from '@angular/core/testing';

import { MessagerServiceService } from './messager.service.service';

describe('MessagerServiceService', () => {
  let service: MessagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
