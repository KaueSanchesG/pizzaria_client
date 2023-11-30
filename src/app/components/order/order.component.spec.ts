import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { OrderComponent } from './order.component';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind the "selectedOption" property to the select element', () => {
    const selectElement: HTMLSelectElement =
      fixture.nativeElement.querySelector('select');
    // Simulate selecting an option
    selectElement.value = '2';
    selectElement.dispatchEvent(new Event('change'));
    expect(component.selectedOption).toEqual('2');
  });

  it('should call the "onFilterChange" method when the select element changes', () => {
    spyOn(component, 'onFilterChange');
    const selectElement: HTMLSelectElement =
      fixture.nativeElement.querySelector('select');
    // Simulate selecting an option
    selectElement.value = '3';
    selectElement.dispatchEvent(new Event('change'));
    expect(component.onFilterChange).toHaveBeenCalled();
  });

  it('should call the "openNewOrderModal" method when the "Novo Pedido" button is clicked', () => {
    spyOn(component, 'openNewOrderModal');
    const newOrderButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('.learn-more');
    newOrderButton.click();
    expect(component.openNewOrderModal).toHaveBeenCalled();
  });

  it('should call the "openDetailsModal" method when the "Detalhar Produtos" button is clicked', () => {
    spyOn(component, 'openDetailsModal');
    const detailsButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('.btn-details');
    detailsButton.click();
    expect(component.openDetailsModal).toHaveBeenCalled();
  });

  it('should call the "openDisableModal" method when the "Confirmar Entrega" button is clicked', () => {
    spyOn(component, 'openDisableModal');
    const disableButton: HTMLButtonElement =
      fixture.nativeElement.querySelector('.editBtn');
    disableButton.click();
    expect(component.openDisableModal).toHaveBeenCalled();
  });
});
