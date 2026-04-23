import { Response } from "express";
import { CustomError } from "./custom.error";

/**
 * Centraliza la serialización de errores HTTP.
 */
export class HandleError {
  /**
   * Envía un error al cliente usando el formato estándar del microservice.
   */
  static error(error: unknown, res: Response) {
    console.log(`${error}`);

    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    return res.status(500).json({ error: "Internal Server error" });
  }
}