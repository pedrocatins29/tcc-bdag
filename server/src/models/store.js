import moongose, { Schema } from "mongoose";

const storeSchema = new Schema({
  name: { type: String },
  image: { type: String },
  address: { type: String },
  phoneNumber: { type: String },
  products: { type: [moongose.Schema.types.ObjectId], ref: "Product" },
});

const storeModel = mongoose.model("Category", storeSchema);
export default storeModel;
