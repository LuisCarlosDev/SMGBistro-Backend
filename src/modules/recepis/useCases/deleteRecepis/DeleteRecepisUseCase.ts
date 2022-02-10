import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IRecepisRepository } from "../../repositories/IRecepisRepository";


@injectable()
export class DeleteRecepisUseCase {
  constructor(
    @inject('RecepisRepository')
    private recepisRepository: IRecepisRepository
  ) {}

  async execute(id: string) {
    const recipeId = await this.recepisRepository.findById(id);

    if (!recipeId) {
      throw new AppError('Recepi does not exists');
    }

    await this.recepisRepository.delete(id);
  }
}
