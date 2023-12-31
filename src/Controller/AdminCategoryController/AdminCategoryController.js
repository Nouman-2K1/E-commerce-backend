import AdminCategoryService from "../../Services/AdminCategoryService/AdminCategoryService.js";

const AdminCategoryController = {
  createCategory: async (req, res) => {
    try {
      const category = await AdminCategoryService.createCategory(req.body);
      return res.status(201).json({ message: "Category added successfully" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "Error occured while adding Category", error });
    }
  },
  getCategory: async (req, res) => {
    try {
      const category = await AdminCategoryService.getCategory();
      return res.status(201).json({ category });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error occured while getting Category", error });
    }
  },
  updateCategory: async (req, res) => {
    try {
      const categoryId = req.params.category_id;
      const category = await AdminCategoryService.updateCategory(
        categoryId,
        req.body
      );
      return res.status(201).json({ message: "Category updated successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error occured while updating Category", error });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const categoryId = req.params.category_id;
      const category = await AdminCategoryService.deleteCategory(
        categoryId,
        req.body
      );
      return res.status(201).json({ message: "Category deteled successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error occured while deteting Category", error });
    }
  },
};

export default AdminCategoryController;
