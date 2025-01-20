import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrVideoComponent } from './csr-video.component';

describe('CsrVideoComponent', () => {
  let component: CsrVideoComponent;
  let fixture: ComponentFixture<CsrVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsrVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsrVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
