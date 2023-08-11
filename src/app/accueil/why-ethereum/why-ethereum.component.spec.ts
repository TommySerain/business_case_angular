import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyEthereumComponent } from './why-ethereum.component';

describe('WhyEthereumComponent', () => {
  let component: WhyEthereumComponent;
  let fixture: ComponentFixture<WhyEthereumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyEthereumComponent]
    });
    fixture = TestBed.createComponent(WhyEthereumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
