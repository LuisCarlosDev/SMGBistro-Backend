import { Router } from "express";
import { CreateProductController } from "../../../../modules/products/useCases/createProduct/CreateProductController";
import { DeleteProductController } from "../../../../modules/products/useCases/deleteProduct/DeleteProductController";
import { ListProductsController } from "../../../../modules/products/useCases/listProducts/ListProductsController";
import { UpdateProductController } from "../../../../modules/products/useCases/updateProduct/UpdateProductController";

const productsRouter = Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();

productsRouter.post('/', createProductController.handle);
productsRouter.get('/', listProductsController.handle);
productsRouter.put('/:id', updateProductController.handle);
productsRouter.delete('/:id', deleteProductController.handle);

export { productsRouter };
