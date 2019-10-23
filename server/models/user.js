'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
     type: DataTypes.STRING,
     allowNull:{
      arg: false,
      message: 'Please enter your name'
     }
    },
    username: {
      type: DataTypes.STRING,
      allowNull:{
        arg: false,
        message: 'Please enter your username'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        arg: false,
        message: 'Please enter your email'
      },
      unique: {
        arg: true,
        message: 'Email already exists'
      },
      validate: {
        isEmail: {
          args: false,
          message: 'Please enter a valid Email address'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        arg: false,
        message: 'Please enter a password'
      },
      validate: {
        isNotShort: (value) => {
          if (value.length < 8){
            throw new Error('Password should be atleast 8 characters');
          }
        }
      }
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Book,{
      foreignKey: 'userId'
    });
  };
  return User;
};