import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormularioComponent } from './my-formulario.component';

describe('MyFormularioComponent', () => {
  let component: MyFormularioComponent;
  let fixture: ComponentFixture<MyFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
