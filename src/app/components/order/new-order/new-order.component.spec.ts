import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NewOrderComponent } from './new-order.component';

describe('NewOrderComponent', () => {
  let component: NewOrderComponent;
  let fixture: ComponentFixture<NewOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewOrderComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(NewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind the "entrega" property to the checkbox element', () => {
    const checkboxElement: HTMLInputElement =
      fixture.nativeElement.querySelector('[name="entrega"]');
    // Simulate checking the checkbox
    checkboxElement.checked = true;
    checkboxElement.dispatchEvent(new Event('change'));
    expect(component.pedido.entrega).toEqual(true);
  });

  it('should bind the "formaDePagamento" property to the text input element', () => {
    const inputElement: HTMLInputElement =
      fixture.nativeElement.querySelector('[id="pagamento"]');
    // Simulate entering text
    inputElement.value = 'some-payment-method';
    inputElement.dispatchEvent(new Event('input'));
    expect(component.pedido.formaDePagamento).toEqual('some-payment-method');
  });

  it('should call the "save" method when the save button is clicked', () => {
    spyOn(component, 'save');
    const saveButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('#modalBtn');
    saveButton.click();
    expect(component.save).toHaveBeenCalled();
  });

  it('should call the "toggleProductSelection" method when a product checkbox is changed', () => {
    spyOn(component, 'toggleProductSelection');
    const productCheckbox: HTMLInputElement =
      fixture.nativeElement.querySelector('[name="produtosCheckbox"]');
    productCheckbox.click();
    expect(component.toggleProductSelection).toHaveBeenCalled();
  });

  it('should call the "togglePizzaSelection" method when a pizza checkbox is changed', () => {
    spyOn(component, 'togglePizzaSelection');
    const pizzaCheckbox: HTMLInputElement = fixture.nativeElement.querySelector(
      '[name="pizzasCheckbox"]'
    );
    pizzaCheckbox.click();
    expect(component.togglePizzaSelection).toHaveBeenCalled();
  });

  // Add more tests as needed for other buttons and elements in your component
});
