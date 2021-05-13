import { Router } from "express";
import CategoryController from "../controllers/CategoryController";

const router = Router();
router.post("/", async (req, res) => {
  const { title, icon, color } = req.body;
  try {
    const result = await CategoryController.add(title, icon, color);
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await CategoryController.find();
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
