import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListRecepisUseCase } from "./ListRecepisUseCase";

export class ListRecepisController {
  async handle(request: Request, response: Response) {
    const listrecepisUseCase = container.resolve(ListRecepisUseCase);

    const all = await listrecepisUseCase.execute();

    return response.json(all);
  }
};
