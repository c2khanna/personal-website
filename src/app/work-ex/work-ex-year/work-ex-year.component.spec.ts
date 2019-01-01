import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExYearComponent } from './work-ex-year.component';

describe('WorkExYearComponent', () => {
  let component: WorkExYearComponent;
  let fixture: ComponentFixture<WorkExYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
