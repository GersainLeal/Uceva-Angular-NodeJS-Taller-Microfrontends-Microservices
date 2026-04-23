import { Component, inject } from '@angular/core';
import { StockTableComponent } from '../../components/stock-table/stock-table.component';
import { Stock } from '../../interfaces/stock.interface';
import { StockService } from '../../services/stock/stock.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de productos.
 *
 * Se utiliza para gestionar y mostrar un listado de productos
 * utilizando el componente `StockTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `StockService`
 * para obtener los productos y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-stock',
  templateUrl: `./stock.page.html`,
  imports: [StockTableComponent, AlertComponent]
})
export class StockPage {
  /**
   * Listado de productos obtenidos desde el servicio.
   * @type {Stock[]}
   */
  stock: Stock[] = [];
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
  private stockService = inject(StockService);

  /**
   * Inicializa el componente y carga los productos.
   * @remarks
   * Se suscribe al método `getAllStocks()` del servicio y
   * asigna los datos recibidos a la propiedad `stock`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.stockService.getAllStock(10).subscribe({
      next: (stock) => {
        this.stock = stock;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
