import categoryModel from "../models/category";

const CategoryController = {
  async add(name) {
    try {
      const category = new categoryModel({
        name,
      });
      const result = await category.save();
      return result;
    } catch (error) {
      throw new Error(error);
    }
  },

  async find() {
    try {
      const categories = await categoryModel.find();
      return categories;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default CategoryController;
