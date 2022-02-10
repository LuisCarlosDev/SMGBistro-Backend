import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateRecepisUseCase } from "./UpdateRecepisUseCase";

export class UpdateRecepisController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const { name, prepare, ingredients } = request.body;

    const updateRecepisUseCase = container.resolve(UpdateRecepisUseCase);

    const updateRecepi = await updateRecepisUseCase.execute({
      id,
      name,
      prepare,
      ingredients
    });

    return response.json(updateRecepi);
  }
};
