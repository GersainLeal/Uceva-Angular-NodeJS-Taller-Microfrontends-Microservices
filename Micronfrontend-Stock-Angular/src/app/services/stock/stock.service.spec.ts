import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Stock } from '../../interfaces/stock.interface';
import { STOCK_MOCK } from '../../mocks/stock.mocks';
import { StockService } from './stock.service';

describe('StockService', () => {
  let service: StockService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(StockService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

  });

  describe('getAllStock', () => {
  
    it('debería realizar una petición GET y retornar una lista de productos', () => {
      const countStock = 5;
      const mockStocks: Stock[] = STOCK_MOCK;

      service.getAllStock(countStock).subscribe((stock) => {
        expect(stock).toEqual(mockStocks);
        expect(stock.length).toBe(mockStocks.length);
      });

      const req = httpMock.expectOne(`http://localhost:3003/api/stock/${countStock}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockStocks);
    });

    it('debería propagar un error si la petición HTTP falla', () => {
      const countStock = 3;

      service.getAllStock(countStock).subscribe({
        next: () => {
          fail('No debería emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`http://localhost:3003/api/stock/${countStock}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });
  
  });

});
