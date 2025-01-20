import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsInnerAboutComponent } from './cs-inner-about.component';

describe('CsInnerAboutComponent', () => {
  let component: CsInnerAboutComponent;
  let fixture: ComponentFixture<CsInnerAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsInnerAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsInnerAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
