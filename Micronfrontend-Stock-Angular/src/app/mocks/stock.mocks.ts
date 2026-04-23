import { Stock } from "../interfaces/stock.interface";

export const STOCK_MOCK: Stock[] = [
    {
        id: 1,
        productName: 'Leche entera',
        sku: 'SKU-0001',
        quantity: 25,
        warehouse: 'Central',
        status: 'Disponible',
    },
    {
        id: 2,
        productName: 'Manzana roja',
        sku: 'SKU-0002',
        quantity: 3,
        warehouse: 'Norte',
        status: 'Bajo stock',
    }
];