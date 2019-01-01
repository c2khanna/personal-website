import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExPositionComponent } from './work-ex-position.component';

describe('WorkExPositionComponent', () => {
  let component: WorkExPositionComponent;
  let fixture: ComponentFixture<WorkExPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
