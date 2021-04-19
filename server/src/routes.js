import { Router } from "express";
import products from "./routes/products";
import categories from "./routes/categories";
const router = Router();

router.use("/products", products);
// router.use("/stores");
router.use("/categories", categories);

export default router;
