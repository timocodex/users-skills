const db = require('../models')

module.exports = {
  newUser: function(req,res){
    db.User.create({name:req.body.name,picture:req.body.picture}).then(function(user){
      res.redirect('/user')
    })
  },
  getUsers: function(req,res){
    db.User.findAll().then(function(user){
      res.render('pages/user',{title:'List Of Users',users:user})
    })
  }
}
