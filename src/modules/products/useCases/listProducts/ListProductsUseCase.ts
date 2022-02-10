import { inject, injectable } from "tsyringe";
import { Product } from "../../infra/typeorm/entities/Products";
import { IProductsRepository } from "../../repositories/IproductsRepository";


@injectable()
export class ListProductsUseCase {
  constructor(
    @inject('ProductsRepository')
    private productRepository: IProductsRepository
  ) {}

  async execute(): Promise<Product[]> {
    const products = await this.productRepository.list();

    return products;
  }
}
