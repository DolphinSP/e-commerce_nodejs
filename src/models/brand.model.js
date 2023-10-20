import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db/sequelize.config";
import Product from "./product.model";

class Brand extends Model {}

Brand.init(
  {
    brand_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    brand_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Brand",
  }
);

Brand.hasMany(Product, {
  foreignKey: "brand_id",
  sourceKey: "brand_id",
  as: "products",
});

Product.belongsTo(Brand, {
  foreignKey: "brand_id",
  targetKey: "brand_id",
  as: "brand",
});

export default Brand;
