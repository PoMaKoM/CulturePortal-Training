import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklogTabComponent } from './worklog-tab.component';

describe('WorklogTabComponent', () => {
  let component: WorklogTabComponent;
  let fixture: ComponentFixture<WorklogTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorklogTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorklogTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
