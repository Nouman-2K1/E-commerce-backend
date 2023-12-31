import ProductModel from "../../Models/ProductModel/ProductModel.js";
import CategoryModel from "../../Models/CategoryModel/CategoryModel.js";
import ProductCategoryModel from "../../Models/ProductCategoryModel/ProductCategoryModel.js";
const AdminProductService = {
  createProduct: async (productData) => {
    const { name, category, description, quantity, cost, sales_price, image } =
      productData;
    const product = await ProductModel.create({
      name,
      description,
      cost,
      quantity,
      sales_price,
      image,
    });

    const categoryId = await CategoryModel.findOne({
      where: {
        name: category,
      },
    });
    if (categoryId) {
      await ProductCategoryModel.create({
        productId: product.id,
        categoryId: categoryId.id,
      });
    } else {
      throw new Error("Category not found");
    }
  },
  getAllProduct: async () => {
    try {
      const products = await ProductModel.findAll({
        include: [
          {
            model: CategoryModel,
            attributes: ["name"],
          },
        ],
      });
      return products;
    } catch (error) {
      console.log(error);
      throw new Error("Error in fetching products");
    }
  },
  updateProduct: async (productId, updatedProductData) => {
    try {
      const product = await ProductModel.findByPk(productId);
      if (!product) {
        throw new Error("Product not found");
      }
      await product.update(updatedProductData);

      await ProductCategoryModel.destroy({
        where: { productId },
      });
      const categoryModel = await CategoryModel.findOne({
        where: { name: updatedProductData.category },
      });

      if (categoryModel) {
        await ProductCategoryModel.create([
          {
            productId,
            categoryId: categoryModel.id,
          },
        ]);
      } else {
        throw new Error("Category not found");
      }
      return product;
    } catch (error) {
      throw error("Error updating product");
    }
  },
  deleteProduct: async (productId) => {
    try {
      const product = await ProductModel.findByPk(productId);

      if (!product) {
        throw new Error("Product not found");
      }

      await ProductCategoryModel.destroy({
        where: { productId },
      });

      await product.destroy();
    } catch (error) {
      throw error("Error deleting product");
    }
  },
};

export default AdminProductService;
