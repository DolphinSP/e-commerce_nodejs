import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db/sequelize.config.js";
import Address from "./address.model.js";

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

User.hasMany(Address, {
  foreignKey: "user_id",
  sourceKey: "user_id",
  as: "addresses",
});

Address.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "user_id",
  as: "user",
});

export default User;
