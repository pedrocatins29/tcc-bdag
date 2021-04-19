import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: { type: String },
});

const categoryModel = model("Category", categorySchema);

export default categoryModel;
