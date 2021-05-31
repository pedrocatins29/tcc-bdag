import storeModel from "../models/store";

const StoreController = {
  async find() {
    try {
      const result = await storeModel.find().populate("products");
      return result;
    } catch (error) {
      throw new Error(error);
    }
  },

  async add(name, image, address, phoneNumber, products) {
    try {
      const store = new storeModel({
        name,
        image,
        address,
        phoneNumber,
        products,
      });

      const result = await store.save();
      return result;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default StoreController;
