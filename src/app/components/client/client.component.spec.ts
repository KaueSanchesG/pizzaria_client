import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { ClientComponent } from './client.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgbModule, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from 'src/app/services/cliente.service';
import { of, throwError } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { getLocaleDateFormat } from '@angular/common';

describe('ClientComponent', () => {
  let component: ClientComponent;
  let fixture: ComponentFixture<ClientComponent>;
  let clienteService: ClienteService;
  let modalService: NgbModal;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientComponent],
      imports: [HttpClientTestingModule, NgbModule],
      providers: [ClienteService, NgbModal],
    });

    fixture = TestBed.createComponent(ClientComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    modalService = TestBed.inject(NgbModal);
    spyOn(modalService, 'open'); // Espiona a abertura do modal, mas não interfere

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal when openCreateModal is called', () => {
    const modalRef: NgbModalRef = { close: () => {} } as NgbModalRef;
    spyOn(modalService, 'open').and.returnValue(modalRef);

    component.openCreateModal('criarCliente');

    expect(modalService.open).toHaveBeenCalledWith('criarCliente', {
      size: 'lg',
    });
  });

  it('should add new address when AddNewAdress is called', () => {
    component.AddNewAdress();

    expect(component.newEnderecosDoCliente.length).toBe(1);
  });

  it('should save address when saveAdress is called', () => {
    // Add necessary spies or mocks for window.location.reload() if needed
    const reloadSpy = spyOn(window.location, 'reload');

    component.saveAdress();

    // Expectations for window.location.reload() or other save logic
    expect(reloadSpy).toHaveBeenCalled();
  });

  // Add more tests as needed
});
