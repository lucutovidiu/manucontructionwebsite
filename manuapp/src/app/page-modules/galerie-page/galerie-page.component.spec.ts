import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriePageComponent } from './galerie-page.component';

describe('GaleriePageComponent', () => {
  let component: GaleriePageComponent;
  let fixture: ComponentFixture<GaleriePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
