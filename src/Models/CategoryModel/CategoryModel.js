import sequelize, { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const CategoryModel = sequelize.define("category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


export default CategoryModel;
