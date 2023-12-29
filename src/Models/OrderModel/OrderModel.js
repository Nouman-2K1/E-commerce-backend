import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const OrderModel = sequelize.define("order", {
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Order_status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default OrderModel;
