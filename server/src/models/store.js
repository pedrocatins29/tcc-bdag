import { Schema, model } from "mongoose";

const storeSchema = new Schema({
  name: { type: String },
  image: { type: String },
  address: { type: String },
  phoneNumber: { type: String },
  products: { type: [Schema.Types.ObjectId], ref: "Product" },
});

const storeModel = model("Store", storeSchema);
export default storeModel;
