import { TestBed } from '@angular/core/testing';

import { PersonalizadosService } from './personalizados.service';

describe('PersonalizadosService', () => {
  let service: PersonalizadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalizadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
