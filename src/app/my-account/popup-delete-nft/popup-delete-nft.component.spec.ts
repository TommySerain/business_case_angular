import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDeleteNftComponent } from './popup-delete-nft.component';

describe('PopupDeleteNftComponent', () => {
  let component: PopupDeleteNftComponent;
  let fixture: ComponentFixture<PopupDeleteNftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupDeleteNftComponent]
    });
    fixture = TestBed.createComponent(PopupDeleteNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
