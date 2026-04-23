import { Router } from "express";

/**
 * Opciones requeridas para inicializar el servidor HTTP.
 */
export interface Options {
  /**
   * Puerto en el que escuchara el servidor.
   */
  port: number;

  /**
   * Carpeta publica que contiene recursos estaticos.
   */
  publicPath: string;

  /**
   * Router principal de la aplicacion.
   */
  routes: Router;
}