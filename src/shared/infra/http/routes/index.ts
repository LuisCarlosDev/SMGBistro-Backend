import { Router } from "express";
import { productsRouter } from "./products.routes";
import { recepisRouter } from "./recepis.routes";

const router = Router();

router.use('/products', productsRouter);
router.use('/recepis', recepisRouter);

export { router }
