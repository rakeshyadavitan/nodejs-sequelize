'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: {
        arg: false,
        message: 'please enter title for your book'
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: {
        arg: false,
        message: 'Please enter an author'
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        arg: false,
        message: 'Please input a description'
      }
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: {
        arg: false,
        message: 'Please input quantity'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId'
      }
    }
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return Book;
};