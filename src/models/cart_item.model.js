import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db/sequelize.config";
import ShoppingCart from "./shopping_cart.model";
import Product from "./product.model";

class CartItem extends Model {}

CartItem.init(
  {
    cart_item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cart_item_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "CartItem",
  }
);

CartItem.belongsTo(ShoppingCart, {
  foreignKey: "shopping_cart_id",
  targetKey: "shopping_cart_id",
  as: "shopping_cart",
});

CartItem.belongsTo(Product, {
  foreignKey: "product_id",
  targetKey: "product_id",
  as: "product",
});

export default CartItem;
