import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExTimelineEntrySideComponent } from './work-ex-timeline-entry-side.component';

describe('WorkExTimelineEntrySideComponent', () => {
  let component: WorkExTimelineEntrySideComponent;
  let fixture: ComponentFixture<WorkExTimelineEntrySideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExTimelineEntrySideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExTimelineEntrySideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
