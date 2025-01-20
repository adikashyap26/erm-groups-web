import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerBannerComponent } from './career-banner.component';

describe('CareerBannerComponent', () => {
  let component: CareerBannerComponent;
  let fixture: ComponentFixture<CareerBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
