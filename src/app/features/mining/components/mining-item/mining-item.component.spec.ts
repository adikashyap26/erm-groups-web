import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningItemComponent } from './mining-item.component';

describe('MiningItemComponent', () => {
  let component: MiningItemComponent;
  let fixture: ComponentFixture<MiningItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiningItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiningItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
