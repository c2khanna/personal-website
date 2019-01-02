import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExTimelineEntryComponent } from './work-ex-timeline-entry.component';

describe('WorkExTimelineEntryComponent', () => {
  let component: WorkExTimelineEntryComponent;
  let fixture: ComponentFixture<WorkExTimelineEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExTimelineEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExTimelineEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
