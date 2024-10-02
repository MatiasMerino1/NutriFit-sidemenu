import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjerciciosSinEquipoPage } from './ejercicios-sin-equipo.page';

describe('EjerciciosSinEquipoPage', () => {
  let component: EjerciciosSinEquipoPage;
  let fixture: ComponentFixture<EjerciciosSinEquipoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosSinEquipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
