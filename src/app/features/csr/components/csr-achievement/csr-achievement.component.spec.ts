import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrAchievementComponent } from './csr-achievement.component';

describe('CsrAchievementComponent', () => {
  let component: CsrAchievementComponent;
  let fixture: ComponentFixture<CsrAchievementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsrAchievementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsrAchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
