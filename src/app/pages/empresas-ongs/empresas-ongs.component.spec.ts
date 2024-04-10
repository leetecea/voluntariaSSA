import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasOngsComponent } from './empresas-ongs.component';

describe('EmpresasOngsComponent', () => {
  let component: EmpresasOngsComponent;
  let fixture: ComponentFixture<EmpresasOngsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresasOngsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpresasOngsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
