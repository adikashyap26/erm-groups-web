import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsInnerGalleryComponent } from './cs-inner-gallery.component';

describe('CsInnerGalleryComponent', () => {
  let component: CsInnerGalleryComponent;
  let fixture: ComponentFixture<CsInnerGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsInnerGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsInnerGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
