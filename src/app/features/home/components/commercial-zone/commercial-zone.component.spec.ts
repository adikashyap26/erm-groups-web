import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialZoneComponent } from './commercial-zone.component';

describe('CommercialZoneComponent', () => {
  let component: CommercialZoneComponent;
  let fixture: ComponentFixture<CommercialZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercialZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
