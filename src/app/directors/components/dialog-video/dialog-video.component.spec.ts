import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVideoComponent } from './dialog-video.component';

describe('DialogVideoComponent', () => {
  let component: DialogVideoComponent;
  let fixture: ComponentFixture<DialogVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
