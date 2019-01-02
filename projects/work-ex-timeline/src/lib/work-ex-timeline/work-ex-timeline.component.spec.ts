import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExTimelineComponent } from './work-ex-timeline.component';

describe('WorkExTimelineComponent', () => {
  let component: WorkExTimelineComponent;
  let fixture: ComponentFixture<WorkExTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
