import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorOfDayComponent } from './director-of-day.component';

describe('DirectorOfDayComponent', () => {
  let component: DirectorOfDayComponent;
  let fixture: ComponentFixture<DirectorOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
