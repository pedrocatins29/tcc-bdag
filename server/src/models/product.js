import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { type: String },
  store: { type: Schema.Types.ObjectId, ref: "Store" },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  image: { type: [String] },
});

const productModel = model("Product", productSchema);
export default productModel;
