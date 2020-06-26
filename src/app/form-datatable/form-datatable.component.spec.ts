import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDatatableComponent } from './form-datatable.component';

describe('FormDatatableComponent', () => {
  let component: FormDatatableComponent;
  let fixture: ComponentFixture<FormDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
