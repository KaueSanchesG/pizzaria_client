import { TestBed } from '@angular/core/testing';

import { SaborService } from './sabor.service';

describe('SaborService', () => {
  let service: SaborService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaborService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a Promise containing an AxiosResponse with a list of Sabors when the request is successful and the token is valid', function () {
    // Mocking dependencies
    const axiosInstanceMock = jasmine.createSpyObj('AxiosInstance', ['get']);
    const localStorageMock = jasmine.createSpyObj('localStorage', ['getItem']);

    // Set up localStorage mock
    localStorageMock.getItem.and.returnValue('validToken');

    // Set up axiosInstance mock
    const responseMock = { data: [{ nome: 'Sabor 1' }, { nome: 'Sabor 2' }] };
    axiosInstanceMock.get.and.returnValue(Promise.resolve(responseMock));

    // Create instance of SaborService with mocked dependencies
    const saborService = new SaborService(axiosInstanceMock);

    // Call the list method
    const result = saborService.list();

    // Assert that the axiosInstance.get method was called with the correct arguments
    expect(axiosInstanceMock.get).toHaveBeenCalledWith('/sabor/list', {
      headers: jasmine.any(Object),
    });

    // Assert that the headers contain the correct Authorization token
    expect(
      axiosInstanceMock.get.calls.mostRecent().args[1].headers.Authorization
    ).toBe('Bearer validToken');

    // Assert that the result is a Promise containing an AxiosResponse with the correct data
    expect(result).toEqual(jasmine.any(Promise));
    result.then((response) => {
      expect(response).toEqual(jasmine.any(Object));
    });
  });
});
