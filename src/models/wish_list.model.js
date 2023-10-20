import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db/sequelize.config";

class WishList extends Model {}

WishList.init(
  {
    wish_list_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    wish_list_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "WishList",
  }
);

export default WishList;
