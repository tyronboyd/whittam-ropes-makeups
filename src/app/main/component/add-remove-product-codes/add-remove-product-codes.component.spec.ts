import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveProductCodesComponent } from './add-remove-product-codes.component';

describe('AddRemoveProductCodesComponent', () => {
  let component: AddRemoveProductCodesComponent;
  let fixture: ComponentFixture<AddRemoveProductCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRemoveProductCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveProductCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
