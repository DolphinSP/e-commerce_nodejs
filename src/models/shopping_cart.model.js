import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db/sequelize.config";
import User from "./user.model";

class ShoppingCart extends Model {}

ShoppingCart.init(
  {
    shopping_cart_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    shopping_cart_status: {
      type: DataTypes.ENUM("pending", "done"),
      defaultValue: "pending",
    },
  },
  {
    sequelize,
    modelName: "ShoppingCart",
  }
);

ShoppingCart.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "user_id",
  as: "user",
});

export default ShoppingCart;
