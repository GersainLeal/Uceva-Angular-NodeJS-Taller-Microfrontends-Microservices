import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../interfaces/orders.interface';

/**
 * Servicio encargado de la gestión de productos.
 *
 * Proporciona métodos para obtener información de productos
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private ordersService: OrdersService) {}
 *
 * this.ordersService.getAllOrders(10).subscribe(orders => {
 *   console.log(orders);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene una lista de productos desde el backend.
   *
   * @param countOrders Número de productos a obtener.
   * @returns Observable que emite un array de productos.
   *
   * @example
   * ```ts
   * this.ordersService.getAllOrders(5).subscribe(orders => {
   *   console.log(orders);
   * });
   * ```
   */
  getAllOrders(countOrders: number): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`http://localhost:3003/api/orders/${countOrders}`);
  }
}
