import { TestBed } from '@angular/core/testing';
import { Pizza } from '../models/pizza';
import { PizzaService } from './pizza.service';
import { AxiosInstance } from './axiosConfig/axios-instance.service';
import { Tamanho } from '../models/enums/tamanho';

describe('PizzaService', () => {
  let service: PizzaService;
  let axiosInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaService);
    axiosInstance = TestBed.inject(AxiosInstance);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test for 'getPizzaByNome' method
  it('should return a Promise containing an AxiosResponse with a list of Pizzas when the request is successful and the token is valid', () => {
    const axiosInstanceMock = jasmine.createSpyObj('AxiosInstance', ['get']);
    const localStorageMock = jasmine.createSpyObj('localStorage', ['getItem']);
    localStorageMock.getItem.and.returnValue('validToken');
    const responseMock = {
      data: [{ nome: 'Pizza 1' }, { nome: 'Pizza 2' }],
    };
    axiosInstanceMock.get.and.returnValue(Promise.resolve(responseMock));

    const result = service.getPizzaByNome('validNome');

    expect(axiosInstanceMock.get).toHaveBeenCalledWith(
      '/pizza/nome/validNome',
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
      expect(response.data).toEqual([{ nome: 'Pizza 1' }, { nome: 'Pizza 2' }]);
    });
  });

  // Test for 'getPizzaBySabor' method
  it('should return a Promise containing an AxiosResponse with a list of Pizzas when the request is successful and the token is valid', () => {
    const axiosInstanceMock = jasmine.createSpyObj('AxiosInstance', ['get']);
    const localStorageMock = jasmine.createSpyObj('localStorage', ['getItem']);
    localStorageMock.getItem.and.returnValue('validToken');
    const responseMock = {
      data: [{ nome: 'Pizza 1' }, { nome: 'Pizza 2' }],
    };
    axiosInstanceMock.get.and.returnValue(Promise.resolve(responseMock));

    const result = service.getPizzaBySabor('validSabor');

    expect(axiosInstanceMock.get).toHaveBeenCalledWith(
      '/pizza/sabor/validSabor',
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
      expect(response.data).toEqual([{ nome: 'Pizza 1' }, { nome: 'Pizza 2' }]);
    });
  });

  // Test for 'getPizzaByTamanho' method
  it('should return a Promise containing an AxiosResponse with a list of Pizzas when the request is successful and the token is valid', () => {
    const axiosInstanceMock = jasmine.createSpyObj('AxiosInstance', ['get']);
    const localStorageMock = jasmine.createSpyObj('localStorage', ['getItem']);
    localStorageMock.getItem.and.returnValue('validToken');
    const responseMock = {
      data: [{ nome: 'Pizza 1' }, { nome: 'Pizza 2' }],
    };
    axiosInstanceMock.get.and.returnValue(Promise.resolve(responseMock));

    const result = service.getPizzaByTamanho(Tamanho.G);

    expect(axiosInstanceMock.get).toHaveBeenCalledWith(
      '/pizza/tamanho/GRANDE',
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
      expect(response.data).toEqual([{ nome: 'Pizza 1' }, { nome: 'Pizza 2' }]);
    });
  });

  // Test for 'getById' method
  it('should return a Promise containing an AxiosResponse with a Pizza when the request is successful and the token is valid', () => {
    const axiosInstanceMock = jasmine.createSpyObj('AxiosInstance', ['get']);
    const localStorageMock = jasmine.createSpyObj('localStorage', ['getItem']);
    localStorageMock.getItem.and.returnValue('validToken');
    const responseMock = { data: { id: 1, nome: 'Pizza 1' } };
    axiosInstanceMock.get.and.returnValue(Promise.resolve(responseMock));

    const result = service.getById(1);

    expect(axiosInstanceMock.get).toHaveBeenCalledWith('/pizza/?id=1', {
      headers: jasmine.any(Object),
    });
    expect(
      axiosInstanceMock.get.calls.mostRecent().args[1].headers.Authorization
    ).toBe('Bearer validToken');

    expect(result).toEqual(jasmine.any(Promise));
    return result.then((response: { data: any }) => {
      expect(response).toEqual(jasmine.any(Object));
      expect(response.data).toEqual({ id: 1, nome: 'Pizza 1' });
    });
  });

  // Test for 'create' method
  it('should return a Promise containing an AxiosResponse with a Pizza when the request is successful and the token is valid', () => {
    const axiosInstanceMock = jasmine.createSpyObj('AxiosInstance', ['post']);
    const localStorageMock = jasmine.createSpyObj('localStorage', ['getItem']);
    localStorageMock.getItem.and.returnValue('validToken');
    const dtoMock: Pizza = {
      id: 1,
      nome: 'Pizza 1',
      saborList: [],
      tamanho: Tamanho.P,
      valor: 10.99,
      cadastro: new Date(),
      atualizado: new Date(),
      ativo: true,
    };
    const responseMock = { data: dtoMock };
    axiosInstanceMock.post.and.returnValue(Promise.resolve(responseMock));

    const result = service.create(dtoMock);

    expect(axiosInstanceMock.post).toHaveBeenCalledWith('/pizza/', dtoMock, {
      headers: jasmine.any(Object),
    });
    expect(
      axiosInstanceMock.post.calls.mostRecent().args[2].headers.Authorization
    ).toBe('Bearer validToken');

    expect(result).toEqual(jasmine.any(Promise));
    return result.then((response: { data: any }) => {
      expect(response).toEqual(jasmine.any(Object));
      expect(response.data).toEqual(dtoMock);
    });
  });

  // Similar tests for 'update' and 'delete' methods...
});
