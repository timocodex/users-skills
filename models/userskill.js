'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserSkill = sequelize.define('UserSkill', {
    UserId: DataTypes.INTEGER,
    SkillId: DataTypes.INTEGER,
    skill_point: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        UserSkill.belongsTo(models.User)
        UserSkill.belongsTo(models.Skill)
      }
    }
  });
  return UserSkill;
};
