import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupUpdateNftComponent } from './popup-update-nft.component';

describe('PopupUpdateNftComponent', () => {
  let component: PopupUpdateNftComponent;
  let fixture: ComponentFixture<PopupUpdateNftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupUpdateNftComponent]
    });
    fixture = TestBed.createComponent(PopupUpdateNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
