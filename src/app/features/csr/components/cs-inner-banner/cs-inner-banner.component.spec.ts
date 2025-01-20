import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsInnerBannerComponent } from './cs-inner-banner.component';

describe('CsInnerBannerComponent', () => {
  let component: CsInnerBannerComponent;
  let fixture: ComponentFixture<CsInnerBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsInnerBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsInnerBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
