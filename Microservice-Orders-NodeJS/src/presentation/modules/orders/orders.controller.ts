import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { OrdersService } from "./orders.service";

/**
 * Controlador de productos.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con productos,
 * delegando la lógica de negocio al `OrdersService`.
 */
export class OrdersController {

  /**
   * Servicio de productos.
   */
  private readonly ordersService = new OrdersService();

  /**
   * Maneja la petición HTTP para obtener un listado de productos.
   *
   * @remarks
   * El número de productos a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /orders/10
   * ```
   */
  getAllOrders = (req: Request, res: Response): void => {
    const { countOrders } = req.params;

    setTimeout(() => {
      this.ordersService
      .getAllOrders(Number(countOrders))
      .then((orders) => res.status(201).json(orders))
      .catch((error) => HandleError.error(error, res));
    }, 1000);
  };
}
