import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyItemBannerComponent } from './company-item-banner.component';

describe('CompanyItemBannerComponent', () => {
  let component: CompanyItemBannerComponent;
  let fixture: ComponentFixture<CompanyItemBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyItemBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyItemBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
