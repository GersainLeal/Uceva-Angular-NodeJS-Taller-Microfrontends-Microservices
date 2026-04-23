import { Router } from "express";
import { StockRoutes } from "./modules/stock/stock.routes";

/**
 * Agrupa las rutas públicas del microservice.
 */
export class AppRoutes {
  /**
   * Rutas montadas en la aplicación Express.
   */
  static get routes(): Router {
    const router = Router();

    router.use("/api/stock", StockRoutes.routes);

    return router;
  }
}