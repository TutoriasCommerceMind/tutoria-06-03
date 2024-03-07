import { TestBed } from '@angular/core/testing';

import { ListaDeComidaService } from './lista-de-comida.service';

describe('ListaDeComidaService', () => {
  let service: ListaDeComidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaDeComidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
