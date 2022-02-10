import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IRecepisRepository } from "../../repositories/IRecepisRepository";

interface IRequest {
  id: string;
  name: string;
  prepare: string;
  ingredients: string
}

@injectable()
export class UpdateRecepisUseCase {
  constructor(
    @inject('RecepisRepository')
    private recepisRepository: IRecepisRepository
  ) {}

  async execute({ id, name, prepare, ingredients }: IRequest) {
    const recepi = await this.recepisRepository.findById(id);

    if (!recepi) {
      throw new AppError('Recepi does not exists')
    }

    recepi.name = name;
    recepi.prepare = prepare;
    recepi.ingredients = ingredients;

    const newRecepi = await this.recepisRepository.update(recepi);

    return newRecepi;
  }
}
