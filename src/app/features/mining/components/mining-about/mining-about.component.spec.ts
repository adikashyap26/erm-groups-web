import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningAboutComponent } from './mining-about.component';

describe('MiningAboutComponent', () => {
  let component: MiningAboutComponent;
  let fixture: ComponentFixture<MiningAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiningAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiningAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
