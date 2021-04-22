import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  store: { type: Schema.Types.ObjectId, ref: "stores" },
  category: { type: Schema.Types.ObjectId, ref: "categories" },
  image: { type: String },
});

const productModel = model("Product", productSchema);
export default productModel;
