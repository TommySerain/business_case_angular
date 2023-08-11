import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NFTHoloCestQuoiComponent } from './nftholo-cest-quoi.component';

describe('NFTHoloCestQuoiComponent', () => {
  let component: NFTHoloCestQuoiComponent;
  let fixture: ComponentFixture<NFTHoloCestQuoiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NFTHoloCestQuoiComponent]
    });
    fixture = TestBed.createComponent(NFTHoloCestQuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
