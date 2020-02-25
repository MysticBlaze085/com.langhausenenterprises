import { TestBed } from '@angular/core/testing';

import { CalendlyService } from './calendly.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('CalendlyService', () => {
  let service: CalendlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(CalendlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
