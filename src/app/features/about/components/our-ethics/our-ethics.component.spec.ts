import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurEthicsComponent } from './our-ethics.component';

describe('OurEthicsComponent', () => {
  let component: OurEthicsComponent;
  let fixture: ComponentFixture<OurEthicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurEthicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurEthicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
