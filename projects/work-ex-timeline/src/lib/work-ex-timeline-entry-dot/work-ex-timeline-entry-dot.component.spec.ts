import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExTimelineEntryDotComponent } from './work-ex-timeline-entry-dot.component';

describe('WorkExTimelineEntryDotComponent', () => {
  let component: WorkExTimelineEntryDotComponent;
  let fixture: ComponentFixture<WorkExTimelineEntryDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExTimelineEntryDotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExTimelineEntryDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
