import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMakeupComponent } from './edit-makeup.component';

describe('EditMakeupComponent', () => {
  let component: EditMakeupComponent;
  let fixture: ComponentFixture<EditMakeupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMakeupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
