import sequelize, { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import ProductModel from "../ProductModel/ProductModel.js";
import CategoryModel from "../CategoryModel/CategoryModel.js";

const ProductCategoryModel = sequelize.define("product_category", {});

ProductModel.belongsToMany(CategoryModel, { through: "ProductCategoryModel" });
CategoryModel.belongsToMany(ProductModel, { through: "ProductCategoryModel" });

export default ProductCategoryModel;
