import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteRecepisUseCase } from "./DeleteRecepisUseCase";

export class DeleteRecepisController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteRecepisUseCase = container.resolve(DeleteRecepisUseCase);

    await deleteRecepisUseCase.execute(id);

    return response.status(204).end();
  }
};
