import CategoryModel from "../../Models/CategoryModel/CategoryModel.js";
const AdminCategoryService = {
  createCategory: async (productData) => {
    const { name } = productData;
    const category = await CategoryModel.create({
      name,
    });
    return category;
  },
  getAllCategory: async () => {
    try {
      const category = await CategoryModel.findAll();
      return category;
    } catch (error) {
      throw new Error("Error in fetching category");
    }
  },
  updateCategory: async (categoryId, updatedCategoryData) => {
    try {
      const category = await CategoryModel.findByPk(categoryId);
      if (!category) {
        throw new Error("Category not found");
      }
      await category.update(updatedCategoryData);

      return category;
    } catch (error) {
      throw error("Error updating category");
    }
  },
  deleteCategory: async (categoryId) => {
    try {
      const category = await CategoryModel.findByPk(categoryId);

      if (!categoryId) {
        throw new Error("category not found");
      }

      await category.destroy();
    } catch (error) {
      throw error("Error deleting category");
    }
  },
};

export default AdminCategoryService;
