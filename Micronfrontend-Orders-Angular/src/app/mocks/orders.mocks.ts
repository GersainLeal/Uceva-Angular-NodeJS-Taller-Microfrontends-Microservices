import { Order } from "../interfaces/orders.interface";

/**
 * Mock de órdenes usado por las pruebas del microfrontend.
 */
export const PRODUCTS_MOCK: Order[] = [
    {
        id: 1,
        name: 'Leche entera',
        category: 'Lacteos',
        price: 4500,
    },
    {
        id: 2,
        name: 'Manzana roja',
        category: 'Frutas',
        price: 3200,
    }
];