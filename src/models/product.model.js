import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db/sequelize.config";
import Image from "./image.model";
import Category from "./category.model";
import SubCategory from "./subcategory.model";
import AttributeValue from "./attribute_values.model";

class Product extends Model {}

Product.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    original_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    discount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    available_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sold_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Product",
  }
);

Product.hasMany(AttributeValue, {
  foreignKey: "product_id",
  sourceKey: "product_id",
  as: "attribute_values",
});

AttributeValue.belongsTo(Product, {
  foreignKey: "product_id",
  targetKey: "product_id",
  as: "product",
});

Product.hasMany(Image, {
  foreignKey: "product_id",
  sourceKey: "product_id",
  as: "images",
});

Image.belongsTo(Product, {
  foreignKey: "product_id",
  targetKey: "product_id",
  as: "product",
});

Product.belongsToMany(Category, {
  through: "ProductCategory",
  foreignKey: "product_id",
  sourceKey: "product_id",
});

Category.belongsToMany(Product, {
  through: "ProductCategory",
  foreignKey: "category_id",
  sourceKey: "category_id",
});

Product.belongsToMany(SubCategory, {
  through: "ProductSubCategory",
  foreignKey: "product_id",
  sourceKey: "product_id",
});

SubCategory.belongsToMany(Product, {
  through: "ProductSubCategory",
  foreignKey: "subcategory_id",
  sourceKey: "subcategory_id",
});

export default Product;
