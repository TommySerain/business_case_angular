import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAndViewComponent } from './title-and-view.component';

describe('TitleAndViewComponent', () => {
  let component: TitleAndViewComponent;
  let fixture: ComponentFixture<TitleAndViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleAndViewComponent]
    });
    fixture = TestBed.createComponent(TitleAndViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
