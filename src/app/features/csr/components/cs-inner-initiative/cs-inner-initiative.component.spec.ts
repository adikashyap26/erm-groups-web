import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsInnerInitiativeComponent } from './cs-inner-initiative.component';

describe('CsInnerInitiativeComponent', () => {
  let component: CsInnerInitiativeComponent;
  let fixture: ComponentFixture<CsInnerInitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsInnerInitiativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsInnerInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
