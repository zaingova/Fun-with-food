// Import sequelize
const { Model, DataTypes } = require("sequelize");
// Import bcrypt for password hashing
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

// Create User model
class User extends Model {
  // Compares the password entered to the password stored in the User Model 
  checkPassword = async (password) => {
    return await bcrypt.compareSync(password, this.password);
  };
}

// Initialize User Model within user_db database
User.init(
  {
    // id INT PRIMARY
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // name STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // Check if length is > 1
      validate: {
        len: [1],
      },
    },
    // email STRING
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // If if is email
      validate: {
        isEmail: true,
      },
    },
    // password STRING 
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      // Hashes the password before user is created
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    // Stores the data
    sequelize,
    timestamps: false,
    // Prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

// Export User Model
module.exports = User;
