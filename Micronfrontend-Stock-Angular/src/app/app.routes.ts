import { Routes } from '@angular/router';
import { StockPage } from './pages/stock/stock.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link StockPage}
 */
export const routes: Routes = [
  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `StockPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: '', loadComponent: () => import('./pages/stock/stock.page').then((m) => m.StockPage)},
];