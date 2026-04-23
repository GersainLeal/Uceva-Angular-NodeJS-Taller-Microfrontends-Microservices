import cors from "cors";
import express, { Router } from "express";
import path from "path";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "../config/swagger";
import { Options } from "../domain/interfaces/server.interface";

/**
 * Servidor HTTP principal del microservicio de stock.
 */
export class Server {
  /**
   * Instancia de Express utilizada para registrar middlewares y rutas.
   */
  public readonly app = express();

  /**
   * Puerto TCP donde se expone la API.
   */
  private readonly port: number;

  /**
   * Ruta de archivos estaticos para el frontend publico.
   */
  private readonly publicPath: string;

  /**
   * Router raiz con los endpoints del microservicio.
   */
  private readonly routes: Router;

  /**
   * Crea una instancia de servidor con sus dependencias de configuracion.
   *
   * @param options Opciones de arranque del servidor.
   */
  constructor(options: Options) {
    const { port, publicPath, routes } = options;
    this.port = port;
    this.publicPath = publicPath;
    this.routes = routes;
  }

  /**
   * Inicializa middlewares, rutas y comienza a escuchar conexiones.
   *
   * @returns Promesa que finaliza despues del proceso de bootstrap.
   */
  async start(): Promise<void> {
    this.app.use(cors());
    this.app.use(express.json());

    this.app.use(express.static(this.publicPath));
    this.app.use(this.routes);
    this.app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    this.app.use((req, res) => {
      res.sendFile(path.join(__dirname, `../../${this.publicPath}/index.html`));
    });

    this.app.listen(this.port, () => {
      console.log(`Microservice Stock Running on Port ${this.port}`);
    });
  }
}