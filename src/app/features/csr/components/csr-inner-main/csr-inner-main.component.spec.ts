import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrInnerMainComponent } from './csr-inner-main.component';

describe('CsrInnerMainComponent', () => {
  let component: CsrInnerMainComponent;
  let fixture: ComponentFixture<CsrInnerMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsrInnerMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsrInnerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
