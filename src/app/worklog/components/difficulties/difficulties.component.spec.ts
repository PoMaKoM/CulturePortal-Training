import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultiesComponent } from './difficulties.component';

describe('DifficultiesComponent', () => {
  let component: DifficultiesComponent;
  let fixture: ComponentFixture<DifficultiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifficultiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
