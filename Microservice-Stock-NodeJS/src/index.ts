/**
 * Módulo principal de exportación
 */

export { StockService } from "./presentation/modules/stock/stock.service";
export { StockController } from "./presentation/modules/stock/stock.controller";
export { CustomError } from "./domain/erros/custom.error";
export { HandleError } from "./domain/erros/handle.error";

// Interfaces
export type { Stock, StockStatus, StockWarehouse } from "./domain/interfaces/stock.interface";
export type { Options } from "./domain/interfaces/server.interface";
