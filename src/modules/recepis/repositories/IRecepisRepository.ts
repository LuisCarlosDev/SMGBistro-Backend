import { ICreateRecepisDTO } from "../dtos/ICreateRecepisDTO";
import { Recepis } from "../infra/typeorm/entities/Recepis";


interface IRecepisRepository {
  findByName(name: string): Promise<Recepis>;
  findById(id: string): Promise<Recepis | undefined>
  create(data: ICreateRecepisDTO): Promise<void>;
  update(data: ICreateRecepisDTO): Promise<Recepis>
  delete(recepisId: string): Promise<void>;
  list(): Promise<Recepis[]>;
}

export { IRecepisRepository };
