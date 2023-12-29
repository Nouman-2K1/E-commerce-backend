import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import OrderModel from "../OrderModel/OrderModel.js";
import ProductModel from "../ProductModel/ProductModel.js";
const OrderItemModel = sequelize.define("orderItem", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

ProductModel.hasOne(OrderItemModel);
OrderItemModel.belongsTo(ProductModel);

OrderModel.hasMany(OrderItemModel);
OrderItemModel.belongsTo(OrderModel);

export default OrderItemModel;
