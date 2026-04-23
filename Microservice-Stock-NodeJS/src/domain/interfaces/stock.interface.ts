export interface Stock {
  id: number;
  productName: string;
  sku: string;
  quantity: number;
  warehouse: StockWarehouse;
  status: StockStatus;
}

export type StockWarehouse = "Central" | "Norte" | "Sur" | "Occidente";

export type StockStatus = "Disponible" | "Bajo stock" | "Agotado";