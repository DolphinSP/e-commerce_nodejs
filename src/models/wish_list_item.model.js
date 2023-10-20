import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db/sequelize.config";
import WishList from "./wish_list.model";
import Product from "./product.model";

class WishListItem extends Model {}

WishListItem.init(
  {
    wish_list_item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    wish_list_item_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "WishListItem",
  }
);

WishListItem.belongsTo(WishList, {
  foreignKey: "wish_list_id",
  targetKey: "wish_list_id",
  as: "wish_list",
});

WishListItem.belongsTo(Product, {
  foreignKey: "product_id",
  targetKey: "product_id",
  as: "product",
});

export default WishListItem;
