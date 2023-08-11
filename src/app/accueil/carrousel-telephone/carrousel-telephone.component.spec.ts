import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselTelephoneComponent } from './carrousel-telephone.component';

describe('CarrouselTelephoneComponent', () => {
  let component: CarrouselTelephoneComponent;
  let fixture: ComponentFixture<CarrouselTelephoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrouselTelephoneComponent]
    });
    fixture = TestBed.createComponent(CarrouselTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
