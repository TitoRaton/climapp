import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenweathermapComponent } from './openweathermap.component';

describe('OpenweathermapComponent', () => {
  let component: OpenweathermapComponent;
  let fixture: ComponentFixture<OpenweathermapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenweathermapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenweathermapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
