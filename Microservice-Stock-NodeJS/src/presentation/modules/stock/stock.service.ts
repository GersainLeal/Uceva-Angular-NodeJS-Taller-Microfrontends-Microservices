import { faker } from "@faker-js/faker";
import { Stock, StockStatus, StockWarehouse } from "../../../domain/interfaces/stock.interface";

/**
 * Servicio encargado de generar stock ficticio.
 */
export class StockService {
  /**
   * Conjunto de bodegas candidatas para ubicar inventario.
   */
  private readonly warehouses: StockWarehouse[] = [
    "Central",
    "Norte",
    "Sur",
    "Occidente",
  ];

  /**
   * Genera una lista de registros de stock.
   *
   * @param countStock Cantidad de registros a construir.
   * @returns Promesa con los registros generados.
   */
  public async getAllStock(countStock: number): Promise<Stock[]> {
    const stockItems: Promise<Stock>[] = [];

    for (let i = 1; i <= countStock; i++) {
      stockItems.push(this.generateStock(i));
    }

    return Promise.all(stockItems);
  }

  /**
   * Genera un registro de stock para un identificador dado.
   *
   * @param id Identificador incremental del registro.
   * @returns Promesa con la informacion de stock generada.
   */
  private generateStock(id: number): Promise<Stock> {
    const quantity = faker.number.int({ min: 0, max: 100 });

    return Promise.resolve({
      id,
      productName: faker.commerce.productName(),
      sku: `SKU-${String(id).padStart(4, "0")}`,
      quantity,
      warehouse: faker.helpers.arrayElement(this.warehouses),
      status: this.resolveStatus(quantity),
    });
  }

  /**
   * Resuelve el estado de inventario a partir de la cantidad disponible.
   *
   * @param quantity Unidades disponibles.
   * @returns Estado calculado para el producto.
   */
  private resolveStatus(quantity: number): StockStatus {
    if (quantity === 0) {
      return "Agotado";
    }

    if (quantity <= 10) {
      return "Bajo stock";
    }

    return "Disponible";
  }
}