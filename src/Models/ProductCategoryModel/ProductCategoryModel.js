import sequelize from "../../db/config.js";
import ProductModel from "../ProductModel/ProductModel.js";
import CategoryModel from "../CategoryModel/CategoryModel.js";

const ProductCategoryModel = sequelize.define("product_category", {});

ProductModel.belongsToMany(CategoryModel, { through: "product_category" });
CategoryModel.belongsToMany(ProductModel, { through: "product_category" });

export default ProductCategoryModel;
