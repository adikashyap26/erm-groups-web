import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBannerComponent } from './company-banner.component';

describe('CompanyBannerComponent', () => {
  let component: CompanyBannerComponent;
  let fixture: ComponentFixture<CompanyBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
