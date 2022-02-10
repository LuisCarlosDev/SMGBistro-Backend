import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRecepisUseCase } from "./CreateRecepisUseCase";

export class CreateRecepisController {
  async handle(request: Request, response: Response) {
    const { name, prepare, ingredients } = request.body;

    const createRecepisUseCase = container.resolve(CreateRecepisUseCase);

    const recepi = await createRecepisUseCase.execute({
      name,
      prepare,
      ingredients
    });

    return response.json(recepi);
  }
};
