import { TestBed } from '@angular/core/testing';
import { Produto } from '../models/produto';
import { ProdutoService } from './produto.service';
import { AxiosInstance } from './axiosConfig/axios-instance.service';

describe('ProdutoService', () => {
  let service: ProdutoService;
  let axiosInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoService);
    axiosInstance = TestBed.inject(AxiosInstance);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test for 'getProdutoByNome' method
  it('should return a Promise containing an AxiosResponse with a list of Produtos when the request is successful and the token is valid', () => {
    const axiosInstanceMock = jasmine.createSpyObj('AxiosInstance', ['get']);
    const localStorageMock = jasmine.createSpyObj('localStorage', ['getItem']);
    localStorageMock.getItem.and.returnValue('validToken');
    const responseMock = {
      data: [{ nome: 'Produto 1' }, { nome: 'Produto 2' }],
    };
    axiosInstanceMock.get.and.returnValue(Promise.resolve(responseMock));

    const result = service.getProdutoByNome('validNome');

    expect(axiosInstanceMock.get).toHaveBeenCalledWith(
      '/produto/nome/validNome',
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
        { nome: 'Produto 1' },
        { nome: 'Produto 2' },
      ]);
    });
  });

  // Test for 'getIdByRequest' method
  it('should return a Promise containing an AxiosResponse with a Produto when the request is successful and the token is valid', () => {
    const axiosInstanceMock = jasmine.createSpyObj('AxiosInstance', ['get']);
    const localStorageMock = jasmine.createSpyObj('localStorage', ['getItem']);
    localStorageMock.getItem.and.returnValue('validToken');
    const responseMock = { data: { id: 1, nome: 'Produto 1' } };
    axiosInstanceMock.get.and.returnValue(Promise.resolve(responseMock));

    const result = service.getIdByRequest(1);

    expect(axiosInstanceMock.get).toHaveBeenCalledWith('/produto/?id=1', {
      headers: jasmine.any(Object),
    });
    expect(
      axiosInstanceMock.get.calls.mostRecent().args[1].headers.Authorization
    ).toBe('Bearer validToken');

    expect(result).toEqual(jasmine.any(Promise));
    return result.then((response: { data: any }) => {
      expect(response).toEqual(jasmine.any(Object));
      expect(response.data).toEqual({ id: 1, nome: 'Produto 1' });
    });
  });

  // Test for 'create' method
  it('should return a Promise containing an AxiosResponse with a Produto when the request is successful and the token is valid', () => {
    const axiosInstanceMock = jasmine.createSpyObj('AxiosInstance', ['post']);
    const localStorageMock = jasmine.createSpyObj('localStorage', ['getItem']);
    localStorageMock.getItem.and.returnValue('validToken');
    const dtoMock: Produto = {
      id: 1,
      nome: 'Produto 1',
      valor: 0,
      cadastro: new Date(),
      atualizado: new Date(),
      ativo: false,
    };
    const responseMock = { data: dtoMock };
    axiosInstanceMock.post.and.returnValue(Promise.resolve(responseMock));

    const result = service.create(dtoMock);

    expect(axiosInstanceMock.post).toHaveBeenCalledWith('/produto/', dtoMock, {
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
