import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../../interfaces/stock.interface';

/**
 * Servicio encargado de la gestión de productos.
 *
 * Proporciona métodos para obtener información de productos
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private stockService: StockService) {}
 *
 * this.stockService.getAllStocks(10).subscribe(stock => {
 *   console.log(stock);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class StockService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de productos desde el backend.
   *
   * @param countStocks Número de productos a obtener.
   * @returns Observable que emite un array de productos.
   *
   * @example
   * ```ts
   * this.stockService.getAllStocks(5).subscribe(stock => {
   *   console.log(stock);
   * });
   * ```
   */
  getAllStock(countStock: number): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(`http://localhost:3003/api/stock/${countStock}`);
  }
}
