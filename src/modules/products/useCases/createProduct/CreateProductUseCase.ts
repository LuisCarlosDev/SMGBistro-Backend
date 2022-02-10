import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IProductsRepository } from "../../repositories/IproductsRepository";

interface IRequest {
  name: string;
}

@injectable()
export class CreateProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productRepository: IProductsRepository
  ) {}

  async execute({ name }: IRequest) {
    const productAlreadyExists = await this.productRepository.findByName(name);

    if (productAlreadyExists) {
      throw new AppError('Product already exists')
    }

    const product = await this.productRepository.create({
      name,
    });

    return product;
  }
}
