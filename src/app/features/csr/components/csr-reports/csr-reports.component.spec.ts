import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrReportsComponent } from './csr-reports.component';

describe('CsrReportsComponent', () => {
  let component: CsrReportsComponent;
  let fixture: ComponentFixture<CsrReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsrReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsrReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
