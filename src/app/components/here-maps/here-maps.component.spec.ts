import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HereMapsComponent } from './here-maps.component';

describe('HereMapsComponent', () => {
  let component: HereMapsComponent;
  let fixture: ComponentFixture<HereMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HereMapsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HereMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
