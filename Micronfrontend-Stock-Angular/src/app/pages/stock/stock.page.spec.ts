import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPage } from './stock.page';
import { provideHttpClient } from '@angular/common/http';
import { StockService } from '../../services/stock/stock.service';
import { StockTableComponent } from '../../components/stock-table/stock-table.component';
import { of, throwError } from 'rxjs';
import { STOCK_MOCK } from '../../mocks/stock.mocks';
import { By } from '@angular/platform-browser';

describe('StockPage', () => {
  let component: StockPage;
  let fixture: ComponentFixture<StockPage>;
  let stockService: StockService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockPage, StockTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockPage);
    component = fixture.componentInstance;
    stockService = TestBed.inject(StockService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllStock al iniciar', () => {
    const spyGetAllStock = jest.spyOn(stockService, 'getAllStock').mockReturnValue(of(STOCK_MOCK));
    fixture.detectChanges();
    expect(spyGetAllStock).toHaveBeenCalled();
  });

  it('debería asignar los productos recibidos del servicio', () => {
    jest.spyOn(stockService, 'getAllStock').mockReturnValue(of(STOCK_MOCK));
    fixture.detectChanges();
    expect(component.stock).toEqual(STOCK_MOCK);
  });

  it('debería pasar los productos al componente stock-table', () => {
    jest.spyOn(stockService, 'getAllStock').mockReturnValue(of(STOCK_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(StockTableComponent))
      .componentInstance;
    expect(tableComponent.stock).toEqual(STOCK_MOCK);
  });

  it('debería manejar el error cuando falla getAllStock', () => {
    component.stock = [];
    const errorResponse = new Error('Error al cargar inventario');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(stockService, 'getAllStock').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(stockService.getAllStock).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.stock.length).toBe(0);
  });
});
