import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeComponent],
      imports: [HttpClientTestingModule, NgbModule],
    });

    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
