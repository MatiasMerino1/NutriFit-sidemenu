import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciosConEquipoPage } from './ejercicios-con-equipo.page';

describe('EjerciciosConEquipoPage', () => {
  let component: EjerciciosConEquipoPage;
  let fixture: ComponentFixture<EjerciciosConEquipoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosConEquipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
