import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMoreComponent } from './popup-more.component';

describe('PopupMoreComponent', () => {
  let component: PopupMoreComponent;
  let fixture: ComponentFixture<PopupMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupMoreComponent]
    });
    fixture = TestBed.createComponent(PopupMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
