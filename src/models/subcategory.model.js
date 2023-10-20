import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db/sequelize.config";

class SubCategory extends Model {}

SubCategory.init(
  {
    subcategory_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subcategory_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "SubCategory",
  }
);

export default SubCategory;
