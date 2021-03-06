import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProductsUseCase } from "./ListProductsUseCase";

export class ListProductsController {
  async handle(request: Request, response: Response) {
    const listProductsUseCase = container.resolve(ListProductsUseCase);

    const all = await listProductsUseCase.execute();

    return response.json(all);
  }
};
