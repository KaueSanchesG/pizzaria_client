import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientComponent } from './new-client.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('NewClientComponent', () => {
  let component: NewClientComponent;
  let fixture: ComponentFixture<NewClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewClientComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(NewClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
