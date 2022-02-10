import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const updateProductUseCase = container.resolve(UpdateProductUseCase);

    const updateProduct = await updateProductUseCase.execute({
      id,
      name
    });

    return response.json(updateProduct);
  }
};
