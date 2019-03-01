import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirMeseroComponent } from './elegir-mesero.component';

describe('ElegirMeseroComponent', () => {
  let component: ElegirMeseroComponent;
  let fixture: ComponentFixture<ElegirMeseroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElegirMeseroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirMeseroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
