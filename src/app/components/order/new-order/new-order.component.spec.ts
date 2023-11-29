import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderComponent } from './new-order.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('NewOrderComponent', () => {
  let component: NewOrderComponent;
  let fixture: ComponentFixture<NewOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewOrderComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(NewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
