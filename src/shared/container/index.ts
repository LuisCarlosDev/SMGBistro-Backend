import { container } from "tsyringe";
import { ProductsRepository } from "../../modules/products/infra/typeorm/repositories/ProductsRepository";
import { IProductsRepository } from "../../modules/products/repositories/IproductsRepository";
import { RecepisRepository } from "../../modules/recepis/infra/typeorm/repositories/RecepisRepository";
import { IRecepisRepository } from "../../modules/recepis/repositories/IRecepisRepository";

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository
)

container.registerSingleton<IRecepisRepository>(
  'RecepisRepository',
  RecepisRepository
)
