import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningFeaturesComponent } from './mining-features.component';

describe('MiningFeaturesComponent', () => {
  let component: MiningFeaturesComponent;
  let fixture: ComponentFixture<MiningFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiningFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiningFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
