import AdminModel from "../Models/AdminModel/AdminModel.js";
import CategoryModel from "../Models/CategoryModel/CategoryModel.js";
import OrderItemModel from "../Models/OrderItemModel/OrderItemModel.js";
import OrderModel from "../Models/OrderModel/OrderModel.js";
import ProductCategoryModel from "../Models/ProductCategoryModel/ProductCategoryModel.js";
import ProductModel from "../Models/ProductModel/ProductModel.js";
import UserModel from "../Models/UserModel/UserModel.js";

const dbInit = async () => {
  await AdminModel.sync({
    alter: true,
    force: false,
  });
  await UserModel.sync({
    alter: true,
    force: false,
  });
  await OrderModel.sync({
    alter: true,
    force: false,
  });
  await ProductModel.sync({
    alter: true,
    force: false,
  });
  await CategoryModel.sync({
    alter: true,
    force: false,
  });
  await ProductCategoryModel.sync({
    alter: true,
    force: false,
  });
  await OrderItemModel.sync({
    alter: true,
    force: false,
  });
};

export default dbInit;
