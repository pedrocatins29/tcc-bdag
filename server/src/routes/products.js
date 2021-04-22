import { Router } from "express";
import productController from "../controllers/ProductController";

const router = Router();
router.post("/", async ({ body }, res) => {
  try {
    const result = await productController.add(
      body.name,
      body.description,
      body.price,
      body.store,
      body.category,
      body.image
    );
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await productController.find();
    console.log(result);
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
