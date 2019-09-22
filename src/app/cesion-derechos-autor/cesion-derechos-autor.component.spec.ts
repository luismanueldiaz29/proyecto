import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CesionDerechosAutorComponent } from './cesion-derechos-autor.component';

describe('CesionDerechosAutorComponent', () => {
  let component: CesionDerechosAutorComponent;
  let fixture: ComponentFixture<CesionDerechosAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CesionDerechosAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CesionDerechosAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
