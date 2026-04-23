import swaggerJsdoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Stock NodeJS",
      version: "1.0.0",
      description: "Documentacion de la API de stock con Swagger",
    },
    servers: [
      {
        url: "http://localhost:3003",
      },
    ],
  },
  apis: [
    "./src/presentation/modules/**/*.routes.ts",
    "./src/config/swagger.schemas.ts",
  ],
});