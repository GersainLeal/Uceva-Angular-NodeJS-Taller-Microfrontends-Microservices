import { faker } from "@faker-js/faker";
import { StockService } from "./stock.service";

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

describe("StockService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should generate the requested amount of stock records", async () => {
    const service = new StockService();

    jest.mocked(faker.number.int)
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(8)
      .mockReturnValueOnce(25);
    jest.mocked(faker.commerce.productName)
      .mockReturnValueOnce("Milk")
      .mockReturnValueOnce("Rice")
      .mockReturnValueOnce("Beans");
    jest.mocked(faker.helpers.arrayElement)
      .mockReturnValueOnce("Central")
      .mockReturnValueOnce("Norte")
      .mockReturnValueOnce("Sur");

    const result = await service.getAllStock(3);

    expect(result).toEqual([
      {
        id: 1,
        productName: "Milk",
        sku: "SKU-0001",
        quantity: 0,
        warehouse: "Central",
        status: "Agotado",
      },
      {
        id: 2,
        productName: "Rice",
        sku: "SKU-0002",
        quantity: 8,
        warehouse: "Norte",
        status: "Bajo stock",
      },
      {
        id: 3,
        productName: "Beans",
        sku: "SKU-0003",
        quantity: 25,
        warehouse: "Sur",
        status: "Disponible",
      },
    ]);
  });
});