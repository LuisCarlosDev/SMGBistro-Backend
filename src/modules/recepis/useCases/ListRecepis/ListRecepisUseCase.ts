import { inject, injectable } from "tsyringe";
import { Recepis } from "../../infra/typeorm/entities/Recepis";
import { IRecepisRepository } from "../../repositories/IRecepisRepository";

@injectable()
export class ListRecepisUseCase {
  constructor(
    @inject('RecepisRepository')
    private recepisRepository: IRecepisRepository
  ) {}

  async execute(): Promise<Recepis[]> {
    const recepis = await this.recepisRepository.list();

    return recepis;
  }
}
