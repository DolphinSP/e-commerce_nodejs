import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db/sequelize.config";
import SubCategory from "./subcategory.model";

class Category extends Model {}

Category.init(
  {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Category",
  }
);

Category.hasMany(SubCategory, {
  foreignKey: "category_id",
  sourceKey: "category_id",
  as: "subcategories",
});

SubCategory.belongsTo(Category, {
  foreignKey: "category_id",
  targetKey: "category_id",
  as: "category",
});

export default Category;
