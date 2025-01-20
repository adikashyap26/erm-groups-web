import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningItemBannerComponent } from './mining-item-banner.component';

describe('MiningItemBannerComponent', () => {
  let component: MiningItemBannerComponent;
  let fixture: ComponentFixture<MiningItemBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiningItemBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiningItemBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
