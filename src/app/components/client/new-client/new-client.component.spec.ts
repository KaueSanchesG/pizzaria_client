import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { NewClientComponent } from './new-client.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ClienteService } from 'src/app/services/cliente.service';
import { EnderecoService } from 'src/app/services/endereco.service';
import { of, throwError } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';

describe('NewClientComponent', () => {
  let component: NewClientComponent;
  let fixture: ComponentFixture<NewClientComponent>;
  let clienteService: ClienteService;
  let enderecoService: EnderecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewClientComponent],
      imports: [HttpClientTestingModule],
      providers: [ClienteService, EnderecoService],
    });

    fixture = TestBed.createComponent(NewClientComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    enderecoService = TestBed.inject(EnderecoService);

    spyOn(component, 'getEnderecos').and.callThrough();
    spyOn(clienteService, 'create');
    spyOn(console, 'log'); // Espiona o console.log, mas não interfere

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty enderecoSelecionado', () => {
    expect(component.enderecoSelecionado).toEqual([]);
  });

  it('should call getEnderecos on ngOnInit', () => {
    component.ngOnInit();

    expect(component.getEnderecos).toHaveBeenCalled();
  });

  it('should bind the "nome" property to the input element', () => {
    const inputElement: HTMLInputElement =
      fixture.nativeElement.querySelector('[id="nome"]');
    inputElement.value = 'John Doe';
    inputElement.dispatchEvent(new Event('input'));
    expect(component.cliente.nome).toEqual('John Doe');
  });

  it('should bind the "cpf" property to the input element', () => {
    const inputElement: HTMLInputElement =
      fixture.nativeElement.querySelector('[id="cpf"]');
    inputElement.value = '123.456.789-01';
    inputElement.dispatchEvent(new Event('input'));
    expect(component.cliente.cpf).toEqual('123.456.789-01');
  });

  it('should call clienteService.create on save', fakeAsync(() => {
    spyOn(window.location, 'reload');

    component.save();
    tick(); // Simulate the passage of time until observable is resolved

    expect(clienteService.create).toHaveBeenCalledWith(component.cliente);
    expect(console.log).toHaveBeenCalledWith('Cliente cadastrado!');
    expect(window.location.reload).toHaveBeenCalled();
  }));

  it('should handle error on save', fakeAsync(() => {
    spyOn(window.location, 'reload');
    spyOn(console, 'error');

    component.save();
    tick(); // Simulate the passage of time until observable is rejected

    expect(clienteService.create).toHaveBeenCalledWith(component.cliente);
    expect(console.error).toHaveBeenCalledWith('Error');
    expect(window.location.reload).toHaveBeenCalled();
  }));

  // Add more tests as needed for other input fields and buttons
});
