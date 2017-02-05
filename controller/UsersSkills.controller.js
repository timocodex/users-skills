const db = require('../models')


module.exports = {
  newUserSkill: function(req,res){
  db.UserSkill.find({where:{UserId:req.body.userid,SkillId:req.body.skillid}}).then(function(user){
    if(!user){
      db.UserSkill.create({UserId:req.body.userid,SkillId:req.body.skillid,skill_point:req.body.point}).then(function(){
        res.redirect('/user')
      })
    }
    if(user){
      res.send("tidak boleh ada skill berganda!(silahkan kembali ke halaman user)")
    }
  })

  },
  getUserSkills: function(req,res){
    db.User.findById(req.params.id).then(function(user){
      user.getSkills().then(function(skill){
          res.render('pages/userskill',{title:user.name+"'s skills",skills:skill,user:user})
      })
    })
  },
  addskill: function(req,res){
    db.User.findById(req.params.id).then(function(user){
      db.Skill.findAll().then(function(skill){
        res.render('pages/addskill',{title:"Add User Skill",user:user,skill:skill})
      })
    })
  }
}
