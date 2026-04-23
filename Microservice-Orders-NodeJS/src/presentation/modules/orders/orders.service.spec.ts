import { OrdersService } from './orders.service';

describe('OrdersService', () => {
  it('should generate the requested number of orders', async () => {
    const service = new OrdersService();

    const result = await service.getAllOrders(3);

    expect(result).toHaveLength(3);
    expect(result[0].id).toBe(1);
    expect(result[2].id).toBe(3);
  });

  it('should return objects with required fields', async () => {
    const service = new OrdersService();

    const result = await service.getAllOrders(1);

    expect(result[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        price: expect.any(Number),
        category: expect.any(String),
      })
    );
  });
});
