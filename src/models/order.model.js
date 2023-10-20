import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db/sequelize.config";
import Product from "./product.model";

class Order extends Model {}

Order.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    shipping_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    order_status: {
      type: DataTypes.ENUM("pending", "done"),
      defaultValue: "pending",
    },
  },
  {
    sequelize,
    modelName: "Order",
  }
);

Order.belongsToMany(Product, {
  through: "OrderDetail",
  foreignKey: "order_id",
  sourceKey: "order_id",
});

Product.belongsToMany(Order, {
  through: "OrderDetail",
  foreignKey: "product_id",
  sourceKey: "product_id",
});

export default Order;
