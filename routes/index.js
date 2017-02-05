var express = require('express');
var router = express.Router();
var uskill = require('../controller/UsersSkills.controller.js')
var user = require('../controller/Users.controller.js')
var skill = require('../controller/Skills.controller.js')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('pages/user', { title: 'List of Users' });
// });

router.post('/adduserskill', uskill.newUserSkill)
router.get('/showSkill/:id', uskill.getUserSkills)
router.post('/newskill',skill.newSkill)
//router.get('/showSkill/:id',skill.getSkills)
router.post('/newuser',user.newUser)
router.get('/user',user.getUsers)
router.get('/addskill/:id',uskill.addskill);

module.exports = router;
