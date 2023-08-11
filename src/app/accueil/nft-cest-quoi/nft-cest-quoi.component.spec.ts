import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftCestQuoiComponent } from './nft-cest-quoi.component';

describe('NftCestQuoiComponent', () => {
  let component: NftCestQuoiComponent;
  let fixture: ComponentFixture<NftCestQuoiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftCestQuoiComponent]
    });
    fixture = TestBed.createComponent(NftCestQuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
