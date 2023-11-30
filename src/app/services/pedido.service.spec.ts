import { TestBed } from '@angular/core/testing';
import { Pedido } from '../models/pedido';
import { PedidoService } from './pedido.service';
import { AxiosInstance } from './axiosConfig/axios-instance.service';

describe('PedidoService', () => {
  let service: PedidoService;
  let axiosInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoService);
    axiosInstance = TestBed.inject(AxiosInstance);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test for 'getPedidoByNomeCliente' method
  it('should return a Promise containing an AxiosResponse with a list of Pedidos when the request is successful and the token is valid', () => {
    const axiosInstanceMock = jasmine.createSpyObj('AxiosInstance', ['get']);
    const localStorageMock = jasmine.createSpyObj('localStorage', ['getItem']);
    localStorageMock.getItem.and.returnValue('validToken');
    const responseMock = {
      data: [{ cliente: 'Cliente 1' }, { cliente: 'Cliente 2' }],
    };
    axiosInstanceMock.get.and.returnValue(Promise.resolve(responseMock));

    const result = service.getPedidoByNomeCliente('validNomeCliente');

    expect(axiosInstanceMock.get).toHaveBeenCalledWith(
      '/pedido/cliente/validNomeCliente',
      {
        headers: jasmine.any(Object),
      }
    );
    expect(
      axiosInstanceMock.get.calls.mostRecent().args[1].headers.Authorization
    ).toBe('Bearer validToken');

    expect(result).toEqual(jasmine.any(Promise));
    return result.then((response: { data: any }) => {
      expect(response).toEqual(jasmine.any(Object));
      expect(response.data).toEqual([
        { cliente: 'Cliente 1' },
        { cliente: 'Cliente 2' },
      ]);
    });
  });

  // Test for 'getPedidoByNomeFuncionario' method
  it('should return a Promise containing an AxiosResponse with a list of Pedidos when the request is successful and the token is valid', () => {
    const axiosInstanceMock = jasmine.createSpyObj('AxiosInstance', ['get']);
    const localStorageMock = jasmine.createSpyObj('localStorage', ['getItem']);
    localStorageMock.getItem.and.returnValue('validToken');
    const responseMock = {
      data: [
        { funcionario: 'Funcionario 1' },
        { funcionario: 'Funcionario 2' },
      ],
    };
    axiosInstanceMock.get.and.returnValue(Promise.resolve(responseMock));

    const result = service.getPedidoByNomeFuncionario('validNomeFuncionario');

    expect(axiosInstanceMock.get).toHaveBeenCalledWith(
      '/pedido/funcionario/validNomeFuncionario',
      {
        headers: jasmine.any(Object),
      }
    );
    expect(
      axiosInstanceMock.get.calls.mostRecent().args[1].headers.Authorization
    ).toBe('Bearer validToken');

    expect(result).toEqual(jasmine.any(Promise));
    return result.then((response: { data: any }) => {
      expect(response).toEqual(jasmine.any(Object));
      expect(response.data).toEqual([
        { funcionario: 'Funcionario 1' },
        { funcionario: 'Funcionario 2' },
      ]);
    });
  });

  // Test for 'getPedidoByEntrega' method
  it('should return a Promise containing an AxiosResponse with a list of Pedidos when the request is successful and the token is valid', () => {
    const axiosInstanceMock = jasmine.createSpyObj('AxiosInstance', ['get']);
    const localStorageMock = jasmine.createSpyObj('localStorage', ['getItem']);
    localStorageMock.getItem.and.returnValue('validToken');
    const responseMock = {
      data: [{ entrega: true }, { entrega: false }],
    };
    axiosInstanceMock.get.and.returnValue(Promise.resolve(responseMock));

    const result = service.getPedidoByEntrega();

    expect(axiosInstanceMock.get).toHaveBeenCalledWith('/pedido/entrega', {
      headers: jasmine.any(Object),
    });
    expect(
      axiosInstanceMock.get.calls.mostRecent().args[1].headers.Authorization
    ).toBe('Bearer validToken');

    expect(result).toEqual(jasmine.any(Promise));
    return result.then((response: { data: any }) => {
      expect(response).toEqual(jasmine.any(Object));
      expect(response.data).toEqual([{ entrega: true }, { entrega: false }]);
    });
  });

  // Test for 'getPedidoByData' method
  it('should return a Promise containing an AxiosResponse with a list of Pedidos when the request is successful and the token is valid', () => {
    const axiosInstanceMock = jasmine.createSpyObj('AxiosInstance', ['get']);
    const localStorageMock = jasmine.createSpyObj('localStorage', ['getItem']);
    localStorageMock.getItem.and.returnValue('validToken');
    const responseMock = {
      data: [{ data: '2023-01-01' }, { data: '2023-01-02' }],
    };
    axiosInstanceMock.get.and.returnValue(Promise.resolve(responseMock));

    const result = service.getPedidoByData('2023-01-01');

    expect(axiosInstanceMock.get).toHaveBeenCalledWith(
      '/pedido/data/2023-01-01',
      {
        headers: jasmine.any(Object),
      }
    );
    expect(
      axiosInstanceMock.get.calls.mostRecent().args[1].headers.Authorization
    ).toBe('Bearer validToken');

    expect(result).toEqual(jasmine.any(Promise));
    return result.then((response: { data: any }) => {
      expect(response).toEqual(jasmine.any(Object));
      expect(response.data).toEqual([
        { data: '2023-01-01' },
        { data: '2023-01-02' },
      ]);
    });
  });

  // Similar tests for 'getById', 'create', 'update', and 'delete' methods...
});
