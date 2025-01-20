import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningGalleryComponent } from './mining-gallery.component';

describe('MiningGalleryComponent', () => {
  let component: MiningGalleryComponent;
  let fixture: ComponentFixture<MiningGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiningGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiningGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
