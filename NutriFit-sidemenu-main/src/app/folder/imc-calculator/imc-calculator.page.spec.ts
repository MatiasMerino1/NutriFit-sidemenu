import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImcCalculatorPage } from './imc-calculator.page';

describe('ImcCalculatorPage', () => {
  let component: ImcCalculatorPage;
  let fixture: ComponentFixture<ImcCalculatorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcCalculatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
