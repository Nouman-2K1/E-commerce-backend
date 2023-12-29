import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const OrderItemModel = sequelize.define("orderItem", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default OrderItemModel;
