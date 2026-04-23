import { faker } from "@faker-js/faker";
import { Stock, StockStatus, StockWarehouse } from "../../../domain/interfaces/stock.interface";

export class StockService {
  private readonly warehouses: StockWarehouse[] = [
    "Central",
    "Norte",
    "Sur",
    "Occidente",
  ];

  public async getAllStock(countStock: number): Promise<Stock[]> {
    const stockItems: Promise<Stock>[] = [];

    for (let i = 1; i <= countStock; i++) {
      stockItems.push(this.generateStock(i));
    }

    return Promise.all(stockItems);
  }

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