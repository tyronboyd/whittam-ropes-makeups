import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMakeupComponent } from './view-makeup.component';

describe('ViewMakeupComponent', () => {
  let component: ViewMakeupComponent;
  let fixture: ComponentFixture<ViewMakeupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMakeupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMakeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
