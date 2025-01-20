import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsBannerComponent } from './reports-banner.component';

describe('ReportsBannerComponent', () => {
  let component: ReportsBannerComponent;
  let fixture: ComponentFixture<ReportsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
