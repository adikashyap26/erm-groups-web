import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardBannerComponent } from './award-banner.component';

describe('AwardBannerComponent', () => {
  let component: AwardBannerComponent;
  let fixture: ComponentFixture<AwardBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
