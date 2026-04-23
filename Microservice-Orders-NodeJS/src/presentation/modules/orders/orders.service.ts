import { Order, OrderCategory } from '../../../domain/interfaces/order.interface';

/**
 * Servicio encargado de la generación y gestión de productos.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar productos
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class OrdersService {

  /**
   * Categorías disponibles para los productos.
   *
   * @remarks
   * Se utilizan para asignar aleatoriamente una categoría
   * a cada producto generado.
   */
  private categories: OrderCategory[] = [
    'Carnes',
    'Frutas',
    'Lacteos',
    'Verduras'
  ];

  /**
   * Nombres base para construir órdenes ficticias.
   */
  private names: string[] = [
    'Arroz',
    'Banano',
    'Carne de res',
    'Lechuga',
    'Papas',
    'Tomate'
  ];

  /**
   * Obtiene un listado de productos generados dinámicamente.
   *
   * @param countOrders Cantidad de productos a generar
   * @returns Promesa que resuelve un arreglo de productos
   *
   * @example
   * ```ts
   * const orders = await ordersService.getAllOrders(10);
   * ```
   */
  public async getAllOrders(countOrders: number): Promise<Order[]> {
    const orders: Promise<Order>[] = [];

    for (let i = 1; i <= countOrders; i++) {
      orders.push(this.generateOrder(i));
    }

    return Promise.all(orders);
  }

  /**
   * Genera un producto ficticio.
   *
   * @param id Identificador único del producto
   * @returns Promesa que resuelve un producto generado
   */
  private generateOrder(id: number): Promise<Order> {
    return Promise.resolve({
      id,
      name: this.names[(id - 1) % this.names.length]!,
      price: Number((10 + id * 3.5).toFixed(2)),
      category: this.categories[(id - 1) % this.categories.length]!,
    });
  }
}
