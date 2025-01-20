import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrAboutComponent } from './csr-about.component';

describe('CsrAboutComponent', () => {
  let component: CsrAboutComponent;
  let fixture: ComponentFixture<CsrAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsrAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsrAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
