import { HandleError } from '../../../domain/erros/handle.error';
import { OrdersController } from './orders.controller';

describe('OrdersController', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it('should call service and return response with generated orders', async () => {
    const controller = new OrdersController() as any;
    const orders = [{ id: 1, name: 'A', price: 10, category: 'Carnes' }];

    controller.ordersService = {
      getAllOrders: jest.fn().mockResolvedValue(orders),
    };

    const req = { params: { countOrders: '1' } } as any;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any;

    controller.getAllOrders(req, res);
    await jest.runAllTimersAsync();

    expect(controller.ordersService.getAllOrders).toHaveBeenCalledWith(1);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(orders);
  });

  it('should delegate errors to HandleError', async () => {
    const controller = new OrdersController() as any;

    const failure = new Error('boom');
    controller.ordersService = {
      getAllOrders: jest.fn().mockRejectedValue(failure),
    };

    const handleErrorSpy = jest
      .spyOn(HandleError, 'error')
      .mockImplementation(() => undefined as any);

    const req = { params: { countOrders: '2' } } as any;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as any;

    controller.getAllOrders(req, res);
    await jest.runAllTimersAsync();

    expect(controller.ordersService.getAllOrders).toHaveBeenCalledWith(2);
    expect(handleErrorSpy).toHaveBeenCalledWith(failure, res);
  });
});
