const knex = require("../db/knex.js");
const encryption = require('../config/encryption.js');
module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION


  login: function(req,res){
    res.render('users_login', {message: req.session.message});
  },

  index: function(req,res){
    res.redirect('/users/login');
  },

  register: function(req,res){
    encryption.hash(req.body).then((encryptedUser)=>{

    knex('users')
      .insert(encryptedUser)
      .then(()=>{
        req.session.message = 'You have successfully registered';
        console.log('test')
        res.redirect('/users/login');


      })
      .catch(()=>{
        req.session.message = 'You entered invalid user/password';
        res.redirect('/users/login');
      })
    })
  },

  check: function(req, res){
    knex('users')
      .where('email', req.body.email)
      .then((result)=>{
        let user = result[0];

        encryption.check(user, req.body).then((isValid)=>{
          if(isValid){
            req.session.user = user.id;
            res.redirect('/trips');
          } else{
            req.session.message = 'Sorry, no Chicago flights today';
            res.redirect('/users/login')    
          }
        })
      })
      .catch((err)=>{
        console.log("error")
        req.session.message = 'Sorry, no Chicago flights today';
        res.redirect('/users/login')
      })
  }

}
