import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExTimelineEntryContentComponent } from './work-ex-timeline-entry-content.component';

describe('WorkExTimelineEntryContentComponent', () => {
  let component: WorkExTimelineEntryContentComponent;
  let fixture: ComponentFixture<WorkExTimelineEntryContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExTimelineEntryContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExTimelineEntryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
