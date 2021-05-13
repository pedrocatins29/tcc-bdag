import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  title: { type: String },
  icon: { type: String },
  color: { type: String },
});

const categoryModel = model("Category", categorySchema);

export default categoryModel;
