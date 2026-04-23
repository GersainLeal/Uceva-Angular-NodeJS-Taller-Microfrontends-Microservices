import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Stock } from '../../interfaces/stock.interface';

/**
 * Componente de tabla de productos.
 *
 * Se utiliza para mostrar un listado de productos en una tabla,
 * mostrando información como nombre, categoría, precio y un badge
 * visual que indica la categoría de cada producto.
 *
 * @remarks
 * Este componente recibe los productos desde un componente padre
 * a través del Input `stock` y utiliza el mapeo `categoryMap`
 * para asignar colores a los badges según la categoría.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-stock-table [stock]="stockList"></app-stock-table>
 * ```
 */
@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class StockTableComponent {
  /**
   * Listado de productos que se mostrarán en la tabla.
   * @type {Stock[]}
   * @remarks
   * Este Input permite pasar un array de productos desde un componente padre,
   * generalmente `ListStocksComponent`. Cada producto debe cumplir la interfaz `Stock`.
   */
  @Input() stock: Stock[] = [];
  /**
   * Mapeo de categorías de productos a tipos de Badge.
   * @type {Record<StockStatus, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada categoría:
   * - 'Carnes' → 'danger' (rojo)
   * - 'Frutas' → 'warning' (amarillo)
   * - 'Lacteos' → 'primary' (azul)
   * - 'Verduras' → 'success' (verde)
   *
   * Esto permite que en la tabla cada producto tenga un badge visual que indique su categoría
   * de forma clara para el usuario.
   */
  statusMap: Record<Stock['status'], BadgeType> = {
    Disponible: 'success',
    'Bajo stock': 'warning',
    Agotado: 'danger',
  };
}
