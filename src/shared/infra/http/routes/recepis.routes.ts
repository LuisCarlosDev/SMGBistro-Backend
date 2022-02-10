import { Router } from "express";
import { CreateRecepisController } from "../../../../modules/recepis/useCases/createRecepis/CreateRecepisController";
import { DeleteRecepisController } from "../../../../modules/recepis/useCases/deleteRecepis/DeleteRecepisController";
import { ListRecepisController } from "../../../../modules/recepis/useCases/ListRecepis/ListRecepisController";
import { UpdateRecepisController } from "../../../../modules/recepis/useCases/updateRecepis/UpdateRecepisController";

const recepisRouter = Router();

const createRecepisController = new CreateRecepisController();
const listRecepisController = new ListRecepisController();
const deleteRecepisController = new DeleteRecepisController();
const updateRecepisController = new UpdateRecepisController();

recepisRouter.post('/', createRecepisController.handle);
recepisRouter.get('/', listRecepisController.handle);
recepisRouter.put('/:id', updateRecepisController.handle);
recepisRouter.delete('/:id', deleteRecepisController.handle);

export { recepisRouter };
