import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExTimelineEntryHeaderComponent } from './work-ex-timeline-entry-header.component';

describe('WorkExTimelineEntryHeaderComponent', () => {
  let component: WorkExTimelineEntryHeaderComponent;
  let fixture: ComponentFixture<WorkExTimelineEntryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExTimelineEntryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExTimelineEntryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
