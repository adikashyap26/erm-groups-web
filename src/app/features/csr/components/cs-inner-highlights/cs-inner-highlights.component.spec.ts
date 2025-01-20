import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsInnerHighlightsComponent } from './cs-inner-highlights.component';

describe('CsInnerHighlightsComponent', () => {
  let component: CsInnerHighlightsComponent;
  let fixture: ComponentFixture<CsInnerHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsInnerHighlightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsInnerHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
