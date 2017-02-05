'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    picture:DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.UserSkill)
        User.belongsToMany(models.Skill,{through:'UserSkill'})

      }
    }
  });
  return User;
};
