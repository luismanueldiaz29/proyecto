import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaOriginalidadComponent } from './carta-originalidad.component';

describe('CartaOriginalidadComponent', () => {
  let component: CartaOriginalidadComponent;
  let fixture: ComponentFixture<CartaOriginalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaOriginalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaOriginalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
