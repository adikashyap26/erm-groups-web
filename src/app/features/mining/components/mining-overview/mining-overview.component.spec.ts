import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningOverviewComponent } from './mining-overview.component';

describe('MiningOverviewComponent', () => {
  let component: MiningOverviewComponent;
  let fixture: ComponentFixture<MiningOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiningOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiningOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
