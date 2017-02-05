//https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/12998548_1194682623876784_8811273993976561590_n.jpg?oh=897a80e602bf9973a9bc00fd52eb46a9&oe=5946B195
const db = require('./models')

db.User.findById(1).then(function(user){
  user.update({picture:"https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/12642759_10203919016375387_1979527987911043340_n.jpg?oh=1175790ace15cee959dc452184201081&oe=590C4B2F"})
})
