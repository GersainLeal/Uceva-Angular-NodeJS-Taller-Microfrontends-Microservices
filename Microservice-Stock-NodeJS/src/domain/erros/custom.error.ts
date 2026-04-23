/**
 * Error controlado con código HTTP asociado.
 */
export class CustomError extends Error {
  /**
   * Construye una instancia de error controlado.
   *
   * @param statusCode Codigo HTTP asociado al error.
   * @param message Mensaje legible del error.
   */
  constructor(
    public readonly statusCode: number,
    public readonly message: string
  ) {
    super(message);
  }

  /**
   * Crea un error 400.
    *
    * @param message Detalle del error.
   */
  static badRequest(message: string): CustomError {
    return new CustomError(400, message);
  }

  /**
   * Crea un error 401.
    *
    * @param message Detalle del error.
   */
  static unAuthorized(message: string): CustomError {
    return new CustomError(401, message);
  }

  /**
   * Crea un error 403.
    *
    * @param message Detalle del error.
   */
  static forbidden(message: string): CustomError {
    return new CustomError(403, message);
  }

  /**
   * Crea un error 404.
    *
    * @param message Detalle del error.
   */
  static notFound(message: string): CustomError {
    return new CustomError(404, message);
  }

  /**
   * Crea un error 409.
    *
    * @param message Detalle del error.
   */
  static conflict(message: string): CustomError {
    return new CustomError(409, message);
  }

  /**
   * Crea un error 500.
    *
    * @param message Detalle del error.
   */
  static internalServer(message: string): CustomError {
    return new CustomError(500, message);
  }
}