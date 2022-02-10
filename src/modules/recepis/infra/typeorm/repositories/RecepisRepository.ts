import { getRepository, Repository } from "typeorm";
import { ICreateRecepisDTO } from "../../../dtos/ICreateRecepisDTO";
import { IRecepisRepository } from "../../../repositories/IRecepisRepository";
import { Recepis } from "../entities/Recepis";


class RecepisRepository implements IRecepisRepository {
  private respository: Repository<Recepis>

  constructor() {
    this.respository = getRepository(Recepis);
  }

  async create({ name, prepare, ingredients }: ICreateRecepisDTO): Promise<void> {
    const recipe = this.respository.create({
      name,
      prepare,
      ingredients
    });

    await this.respository.save(recipe);
  }

  async update(data: ICreateRecepisDTO): Promise<Recepis> {
    return await this.respository.save(data);
  }

  async delete(id: string): Promise<void> {
    const recipe = await this.respository.findOne(id);

    if (recipe) {
      await this.respository.remove(recipe);
    }
  }

  async list(): Promise<Recepis[]> {
    const recepis = await this.respository.find();

    return recepis;
  }

  async findByName(name: string): Promise<Recepis> {
    const recipe = await this.respository.findOne({name});

    return recipe;
  }

  async findById(id: string): Promise<Recepis> {
    const recipe = await this.respository.findOne(id);

    return recipe;
  }
}

export { RecepisRepository };
