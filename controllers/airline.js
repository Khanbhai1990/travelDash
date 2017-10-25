const knex = require('../db/knex.js');

module.exports = {
  login: function(req, res){
    res.render('airline_login');
  },
  check: function(req, res){
    knex('airline')
      .where('name', req.body.name)
      .then((result)=>{
        let airline = result[0];
        if(airline.password === req.body.password){
          req.session.airline = airline.id;
          console.log("okay")
          res.redirect('/air_main');
        }
      })
      .catch((err)=>{
        console.log("error")
        req.session.message = 'Sorry, no Chicago flights today';
        res.redirect('/airline_login')
      })
  }
}
