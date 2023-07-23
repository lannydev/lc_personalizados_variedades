import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizadosComponent } from './personalizados.component';

describe('PersonalizadosComponent', () => {
  let component: PersonalizadosComponent;
  let fixture: ComponentFixture<PersonalizadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalizadosComponent]
    });
    fixture = TestBed.createComponent(PersonalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
