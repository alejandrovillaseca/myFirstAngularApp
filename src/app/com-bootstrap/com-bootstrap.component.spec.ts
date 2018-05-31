import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComBootstrapComponent } from './com-bootstrap.component';

describe('ComBootstrapComponent', () => {
  let component: ComBootstrapComponent;
  let fixture: ComponentFixture<ComBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
