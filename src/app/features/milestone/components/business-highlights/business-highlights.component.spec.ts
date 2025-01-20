import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessHighlightsComponent } from './business-highlights.component';

describe('BusinessHighlightsComponent', () => {
  let component: BusinessHighlightsComponent;
  let fixture: ComponentFixture<BusinessHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessHighlightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
