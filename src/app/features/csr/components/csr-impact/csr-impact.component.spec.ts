import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrImpactComponent } from './csr-impact.component';

describe('CsrImpactComponent', () => {
  let component: CsrImpactComponent;
  let fixture: ComponentFixture<CsrImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsrImpactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsrImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
