import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import OrderModel from "../OrderModel/OrderModel.js";
const UserModel = sequelize.define("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

UserModel.hasMany(OrderModel);
OrderModel.belongsTo(UserModel);

export default UserModel;
