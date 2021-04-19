import { Router } from "express";
import productController from "../controllers/ProductController";

const router = Router();
router.post(
  "/",
  async ({ name, description, price, store, category, image }, res) => {
    try {
      const result = await productController.add(
        name,
        description,
        price,
        store,
        category,
        image
      );
      res.send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  }
);

export default router;
