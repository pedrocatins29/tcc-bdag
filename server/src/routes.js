import { Router } from "express";
import products from "./routes/products";
import categories from "./routes/categories";
import stores from "./routes/stores";
const router = Router();

router.use("/products", products);
router.use("/stores", stores);
router.use("/categories", categories);

export default router;
