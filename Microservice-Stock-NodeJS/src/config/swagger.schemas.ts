/**
 * @openapi
 * components:
 *   schemas:
 *     Stock:
 *       type: object
 *       description: Representa el stock de un producto
 *       required:
 *         - id
 *         - productName
 *         - sku
 *         - quantity
 *         - warehouse
 *         - status
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         productName:
 *           type: string
 *           example: Leche entera
 *         sku:
 *           type: string
 *           example: SKU-0001
 *         quantity:
 *           type: number
 *           example: 42
 *         warehouse:
 *           type: string
 *           enum:
 *             - Central
 *             - Norte
 *             - Sur
 *             - Occidente
 *           example: Central
 *         status:
 *           type: string
 *           enum:
 *             - Disponible
 *             - Bajo stock
 *             - Agotado
 *           example: Disponible
 */
export {};