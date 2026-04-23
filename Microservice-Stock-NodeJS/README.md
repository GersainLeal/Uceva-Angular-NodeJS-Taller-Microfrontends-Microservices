# Microservice Stock NodeJS

Microservicio de gestión de stock construido con Express.js, TypeScript y NodeJS.

## Descripción

Este microservicio proporciona una API REST para obtener registros de stock generados dinámicamente. Cada registro incluye información sobre el producto, cantidad disponible, ubicación del almacén y estado de disponibilidad.

## Requisitos Previos

- Node.js >= 18
- npm >= 9

## Instalación

\\\ash
npm install
\\\

## Configuración

Copiar el archivo \.env.example\ a \.env\ y configurar las siguientes variables:

\\\env
PORT=3003
PUBLIC_PATH=public
\\\

## Comandos Disponibles

### Desarrollo

\\\ash
npm run start
\\\

### Testing

\\\ash
npm test
npm run test:coverage
\\\

### Documentación

\\\ash
npm run compodoc
npx compodoc -p tsconfig.compodoc.json -s
\\\

## Endpoints

### GET /api/stock/{countStock}

Obtiene un listado de registros de stock generados dinámicamente.

**Parámetros:**
- \countStock\: Número de registros a generar (debe ser un entero positivo)

**Respuesta exitosa (200):**
\\\json
[
  {
    "id": 1,
    "productName": "Leche entera",
    "sku": "SKU-0001",
    "quantity": 42,
    "warehouse": "Central",
    "status": "Disponible"
  }
]
\\\

**Respuesta de error (400):**
\\\json
{
  "error": "countStock must be a positive integer"
}
\\\

## Estructura del Proyecto

\\\
Microservice-Stock-NodeJS/
├── src/
│   ├── app.ts
│   ├── config/
│   ├── domain/
│   ├── presentation/
│   └── public/
├── jest.config.js
├── tsconfig.json
├── package.json
└── README.md
\\\

## Testing

Incluye pruebas unitarias para StockService y StockController.

\\\ash
npm test
\\\

## Autor

Desarrollado como parte del taller de Microfrontends y Microservicios.
