import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with ngModel bindings', () => {
    const compiled = fixture.debugElement.nativeElement;
    const formElement = compiled.querySelector('.form');

    expect(formElement).toBeTruthy();

    const nomeInput = compiled.querySelector(
      'input[ngModel][placeholder="Informa pra gente seu Nome"]'
    );
    const usernameInput = compiled.querySelector(
      'input[ngModel][placeholder="Informa pra gente seu login"]'
    );
    const passwordInput = compiled.querySelector(
      'input[ngModel][placeholder="Informa pra gente a sua senha"]'
    );
    const roleInput = compiled.querySelector(
      'input[ngModel][placeholder="Informa pra gente a sua role"]'
    );

    expect(nomeInput).toBeTruthy();
    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(roleInput).toBeTruthy();
  });

  it('should call the salvar() method when the "Criar conta" button is clicked', () => {
    spyOn(component, 'salvar');
    const button =
      fixture.debugElement.nativeElement.querySelector('.learn-more button');
    button.click();
    fixture.detectChanges();
    expect(component.salvar).toHaveBeenCalled();
  });
});
