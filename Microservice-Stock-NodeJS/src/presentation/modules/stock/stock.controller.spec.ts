import { HandleError } from "../../../domain/erros/handle.error";
import { StockService } from "./stock.service";
import { StockController } from "./stock.controller";

jest.mock("@faker-js/faker", () => ({
  faker: {
    number: {
      int: jest.fn(),
    },
    commerce: {
      productName: jest.fn(),
    },
    helpers: {
      arrayElement: jest.fn(),
    },
  },
}));

describe("StockController", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  it("should return 400 for an invalid stock count", () => {
    const controller = new StockController();
    const status = jest.fn().mockReturnThis();
    const json = jest.fn();

    const handleErrorSpy = jest.spyOn(HandleError, "error");

    controller.getAllStock(
      { params: { countStock: "0" } } as never,
      { status, json } as never
    );

    expect(handleErrorSpy).toHaveBeenCalledTimes(1);
    expect(status).toHaveBeenCalledWith(400);
    expect(json).toHaveBeenCalledWith({
      error: "countStock must be a positive integer",
    });
  });

  it("should return generated stock for a valid count", async () => {
    jest.useFakeTimers();

    const controller = new StockController();
    const status = jest.fn().mockReturnThis();
    const json = jest.fn();
    const stock = [{ id: 1, productName: "Milk" }];

    const serviceSpy = jest
      .spyOn(StockService.prototype, "getAllStock")
      .mockResolvedValue(stock as never);

    controller.getAllStock(
      { params: { countStock: "1" } } as never,
      { status, json } as never
    );

    await jest.advanceTimersByTimeAsync(1000);

    expect(serviceSpy).toHaveBeenCalledWith(1);
    expect(status).toHaveBeenCalledWith(200);
    expect(json).toHaveBeenCalledWith(stock);
  });
});