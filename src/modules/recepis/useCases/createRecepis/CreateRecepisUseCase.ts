import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IRecepisRepository } from "../../repositories/IRecepisRepository";

interface  IRequest{
  name: string;
  prepare: string;
  ingredients: string;
}

@injectable()
export class CreateRecepisUseCase {
  constructor(
    @inject('RecepisRepository')
    private recepisRepository: IRecepisRepository
  ) {}
  async execute({ name, prepare, ingredients }: IRequest) {
    const recepiAlreadyExists = await this.recepisRepository.findByName(name);

    if(recepiAlreadyExists) {
      throw new AppError('Recipe already exists');
    }

    const recepi = await this.recepisRepository.create({
      name,
      prepare,
      ingredients
    });

    return recepi;
  }
}
