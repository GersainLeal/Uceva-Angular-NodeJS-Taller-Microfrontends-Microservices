/**
 * Representa un registro de stock generado por el microservice.
 */
export interface Stock {
  /**
   * Identificador numerico unico del registro.
   */
  id: number;

  /**
   * Nombre comercial del producto.
   */
  productName: string;

  /**
   * Codigo SKU asociado al producto.
   */
  sku: string;

  /**
   * Unidades disponibles en inventario.
   */
  quantity: number;

  /**
   * Bodega donde se almacena el inventario.
   */
  warehouse: StockWarehouse;

  /**
   * Estado de disponibilidad segun la cantidad.
   */
  status: StockStatus;
}

/**
 * Bodegas disponibles para asignar stock.
 */
export type StockWarehouse = "Central" | "Norte" | "Sur" | "Occidente";

/**
 * Estados posibles de un producto en inventario.
 */
export type StockStatus = "Disponible" | "Bajo stock" | "Agotado";