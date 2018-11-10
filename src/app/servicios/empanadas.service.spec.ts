/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmpanadasService } from './empanadas.service';

describe('Service: Empanadas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpanadasService]
    });
  });

  it('should ...', inject([EmpanadasService], (service: EmpanadasService) => {
    expect(service).toBeTruthy();
  }));
});
