import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGetdataComponent } from './employee-getdata.component';

describe('EmployeeGetdataComponent', () => {
  let component: EmployeeGetdataComponent;
  let fixture: ComponentFixture<EmployeeGetdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeGetdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeGetdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
