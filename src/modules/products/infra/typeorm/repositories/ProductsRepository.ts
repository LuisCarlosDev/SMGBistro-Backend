import { getRepository, Repository } from "typeorm";
import { ICreateProductDTO } from "../../../dtos/ICreateProductDTO";
import { IProductsRepository } from "../../../repositories/IproductsRepository";
import { Product } from "../entities/Products";


class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async create({ name }: ICreateProductDTO): Promise<void> {
    const product = this.repository.create({
      name
    });

    await this.repository.save(product);
  }

  async update(data: ICreateProductDTO): Promise<Product> {
    return await this.repository.save(data);
  }

  async delete(id: string): Promise<void> {
    const product = await this.repository.findOne(id);

    if (product) {
      await this.repository.remove(product);
    }
  }

  async list(): Promise<Product[]> {
    const products = await this.repository.find();

    return products;
  }

  async findByName(name: string): Promise<Product | undefined> {
    const product = await this.repository.findOne({ name });

    return product;
  }

  async findById(id: string): Promise<Product | undefined> {
    const product = await this.repository.findOne(id);
    return product;
  }
}

export { ProductsRepository };
