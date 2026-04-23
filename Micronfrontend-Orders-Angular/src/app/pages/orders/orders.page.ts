import { Component, inject } from '@angular/core';
import { OrdersTableComponent } from '../../components/orders-table/orders-table.component';
import { Order } from '../../interfaces/orders.interface';
import { OrdersService } from '../../services/orders/orders.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de productos.
 *
 * Se utiliza para gestionar y mostrar un listado de productos
 * utilizando el componente `OrdersTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `OrdersService`
 * para obtener los productos y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-producs',
  templateUrl: `./orders.page.html`,
  imports: [OrdersTableComponent, AlertComponent]
})
export class OrdersPage {
  /**
   * Listado de productos obtenidos desde el servicio.
   * @type {Order[]}
   */
  orders: Order[] = [];
  /**
     * Estado actual del componente.
     *
     * @default 'init'
     */
    state: State = 'init';
  

  /**
   * Servicio para obtener productos.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private ordersService = inject(OrdersService);

  /**
   * Inicializa el componente y carga los productos.
   * @remarks
   * Se suscribe al método `getAllOrders()` del servicio y
   * asigna los datos recibidos a la propiedad `orders`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.ordersService.getAllOrders(10).subscribe({
      next: (orders) => {
        this.orders = orders;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
