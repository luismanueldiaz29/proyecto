import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaSolicitudComponent } from './carta-solicitud.component';

describe('CartaSolicitudComponent', () => {
  let component: CartaSolicitudComponent;
  let fixture: ComponentFixture<CartaSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
