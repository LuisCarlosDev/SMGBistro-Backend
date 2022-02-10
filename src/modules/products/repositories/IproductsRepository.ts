import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { Product } from "../infra/typeorm/entities/Products";


interface IProductsRepository {
  findByName(name: string): Promise<Product | undefined>;
  findById(id: string): Promise<Product | undefined>
  create(data: ICreateProductDTO): Promise<void>;
  update(data: ICreateProductDTO): Promise<Product>
  delete(productId: string): Promise<void>;
  list(): Promise<Product[]>;
}

export { IProductsRepository };
