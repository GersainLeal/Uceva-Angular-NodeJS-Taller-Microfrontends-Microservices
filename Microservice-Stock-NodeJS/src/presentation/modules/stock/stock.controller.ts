import { Request, Response } from "express";
import { CustomError } from "../../../domain/erros/custom.error";
import { HandleError } from "../../../domain/erros/handle.error";
import { StockService } from "./stock.service";

export class StockController {
  private readonly stockService = new StockService();

  getAllStock = (req: Request, res: Response): void => {
    const { countStock } = req.params;
    const parsedCount = Number(countStock);

    if (!Number.isInteger(parsedCount) || parsedCount < 1) {
      HandleError.error(
        CustomError.badRequest("countStock must be a positive integer"),
        res
      );
      return;
    }

    setTimeout(() => {
      this.stockService
        .getAllStock(parsedCount)
        .then((stock) => res.status(200).json(stock))
        .catch((error) => HandleError.error(error, res));
    }, 1000);
  };
}