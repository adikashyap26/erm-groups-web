import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneBannerComponent } from './milestone-banner.component';

describe('MilestoneBannerComponent', () => {
  let component: MilestoneBannerComponent;
  let fixture: ComponentFixture<MilestoneBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilestoneBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilestoneBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
