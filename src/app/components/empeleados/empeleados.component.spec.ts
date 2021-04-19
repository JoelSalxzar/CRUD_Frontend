import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeleadosComponent } from './empeleados.component';

describe('EmpeleadosComponent', () => {
  let component: EmpeleadosComponent;
  let fixture: ComponentFixture<EmpeleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpeleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpeleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
