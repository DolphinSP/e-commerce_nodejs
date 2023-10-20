import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db/sequelize.config";
import AttributeValue from "./attribute_values.model";

class Attribute extends Model {}

Attribute.init(
  {
    attribute_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    attribute_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Attribute",
  }
);

Attribute.hasMany(AttributeValue, {
  foreignKey: "attribute_id",
  sourceKey: "attribute_id",
  as: "attribute_values",
});

AttributeValue.belongsTo(Attribute, {
  foreignKey: "attribute_id",
  targetKey: "attribute_id",
  as: "attribute",
});

export default Attribute;
