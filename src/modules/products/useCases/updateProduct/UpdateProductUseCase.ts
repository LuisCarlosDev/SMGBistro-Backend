import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { Product } from "../../infra/typeorm/entities/Products";
import { IProductsRepository } from "../../repositories/IproductsRepository";

interface IRequest {
  id: string;
  name: string;
}

@injectable()
export class UpdateProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productRepository: IProductsRepository
  ) {}

  async execute({ name, id }: IRequest): Promise<Product> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError('Product does not exists')
    }
    product.name = name;

    const newProduct = await this.productRepository.update(product);

    return newProduct;
  }
}
