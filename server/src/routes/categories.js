import { Router } from "express";
import CategoryController from "../controllers/CategoryController";
import categoryModel from "../models/category";

const router = Router();
router.post("/", async (req, res) => {
  try {
    const result = await CategoryController.add(req.body.name);
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const result = CategoryController.find();
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
