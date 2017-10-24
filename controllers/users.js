const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION

  login: function(req,res){
    res.render('users_login', {message: req.session.message});
  },

  register: function(req,res){
    knex('users')
      .insert({
        username: req.body.username,
        email: req.body.email,
        password:req.body.password
      }, '*')
      .then(()=>{
        req.session.message = 'You have successfully registered';
        console.log('test')
        res.redirect('/users/login');


      })
      .catch(()=>{
        req.session.message = 'You entered invalid user/password';
        res.redirect('/users/login');
      })
  },

  check: function(req, res){
    knex('users')
      .where('email', req.body.email)
      .then((result)=>{
        let user = result[0];
        if(user.password === req.body.password){
          req.session.user = user.id;
          console.log("okay")
          res.redirect('/trips');
        }
      })
      .catch((err)=>{
        console.log("error")
        req.session.message = 'Sorry, no Chicago flights today';
        res.redirect('/users/login')
      })
  }

}
