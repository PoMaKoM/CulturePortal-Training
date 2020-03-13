import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFilmsListComponent } from './dialog-films-list.component';

describe('DialogFilmsListComponent', () => {
  let component: DialogFilmsListComponent;
  let fixture: ComponentFixture<DialogFilmsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFilmsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFilmsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
