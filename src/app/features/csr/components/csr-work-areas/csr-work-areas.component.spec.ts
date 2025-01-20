import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrWorkAreasComponent } from './csr-work-areas.component';

describe('CsrWorkAreasComponent', () => {
  let component: CsrWorkAreasComponent;
  let fixture: ComponentFixture<CsrWorkAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsrWorkAreasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsrWorkAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
