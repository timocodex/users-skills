const db = require('../models')

module.exports = {
  newSkill: function(req,res){
    db.Skill.create({name:req.body.name}).then(function(skill){
      res.send(skill)
    })
  },
  getSkills: function(req,res){
    db.Skill.findAll().then(function(skill){
      res.send(skill)
    })
  }
}
