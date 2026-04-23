import { Router } from "express";
import { StockRoutes } from "./modules/stock/stock.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/stock", StockRoutes.routes);

    return router;
  }
}