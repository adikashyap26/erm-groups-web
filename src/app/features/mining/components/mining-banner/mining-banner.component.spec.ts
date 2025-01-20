import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningBannerComponent } from './mining-banner.component';

describe('MiningBannerComponent', () => {
  let component: MiningBannerComponent;
  let fixture: ComponentFixture<MiningBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiningBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiningBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
