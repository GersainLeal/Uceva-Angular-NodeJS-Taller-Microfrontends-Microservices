import { Router } from "express";
import { StockController } from "./stock.controller";

/**
 * Define las rutas HTTP del módulo de stock.
 */
export class StockRoutes {
  /**
   * Router listo para ser montado en Express.
   */
  static get routes(): Router {
    const router = Router();
    const controller = new StockController();

    /**
     * @openapi
     * /api/stock/{countStock}:
     *   get:
     *     summary: Obtener listado de stock
     *     description: Retorna una lista de registros de stock generados dinamicamente segun la cantidad solicitada.
     *     tags:
     *       - Stock
     *     parameters:
     *       - in: path
     *         name: countStock
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de registros de stock a generar
     *     responses:
     *       200:
     *         description: Lista de stock generada
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Stock'
     *       400:
     *         description: Parametro invalido
     */
    router.get("/:countStock", controller.getAllStock);

    return router;
  }
}