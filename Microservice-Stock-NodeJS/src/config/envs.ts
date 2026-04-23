import "dotenv/config";
import { get } from "env-var";

/**
 * Valores de entorno consumidos por el microservice de stock.
 */
export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  PUBLIC_PATH: get("PUBLIC_PATH").default("public").asString(),
};