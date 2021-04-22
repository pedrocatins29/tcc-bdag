import { Router } from "express";
import StoreController from "../controllers/StoreController";

const router = Router();
router.get("/", async (req, res) => {
  try {
    const result = await StoreController.find();
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.post("/", async ({ body }, res) => {
  try {
    const result = await StoreController.add(
      body.name,
      body.image,
      body.address,
      body.phoneNumber,
      body.products
    );
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
