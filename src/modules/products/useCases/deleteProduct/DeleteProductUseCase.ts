import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IProductsRepository } from "../../repositories/IproductsRepository";

@injectable()
export class DeleteProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productRepository: IProductsRepository
  ) { }

  async execute(id: string) {
    const productId = await this.productRepository.findById(id);

    if (!productId) {
      throw new AppError('Product does not exists');
    }

    await this.productRepository.delete(id)
  }
}
