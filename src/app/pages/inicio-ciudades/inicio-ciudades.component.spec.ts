import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCiudadesComponent } from './inicio-ciudades.component';

describe('InicioCiudadesComponent', () => {
  let component: InicioCiudadesComponent;
  let fixture: ComponentFixture<InicioCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioCiudadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
