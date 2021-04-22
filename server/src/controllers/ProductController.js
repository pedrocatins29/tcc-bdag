import productModel from "../models/product";

const ProductController = {
  async add(name, description, price, store, category, image) {
    try {
      const product = new productModel({
        name,
        description,
        price,
        store,
        category,
        image,
      });
      const result = await product.save();
      return result;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },

  async find() {
    try {
      const result = await productModel.find();
      return result;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default ProductController;
