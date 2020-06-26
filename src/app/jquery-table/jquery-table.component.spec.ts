import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryTableComponent } from './jquery-table.component';

describe('JqueryTableComponent', () => {
  let component: JqueryTableComponent;
  let fixture: ComponentFixture<JqueryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqueryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
