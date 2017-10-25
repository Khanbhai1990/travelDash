const knex = require('../db/knex.js');


module.exports = {
  index: function(req, res){
    knex('airline')
      .join('flight', "airline.id", '=', 'flight.airline_id')
      .where('airline.id', req.session.airline)
      .then((data)=>{
        res.render('air_main', {airline:data});
      })
  },

  submit: function(req, res){
    knex('flight')
      .insert({
        airline_id: req.session.airline,
        start: req.body.start,
        destination:req.body.destination
      }, '*')
      .then((result)=>{
        res.redirect('/air_main');
      })

  },

  del: function(req,res){
    knex('flight')
      .del()
      .where('id', req.params.id)
      .then((result)=>{
        res.redirect('/air_main');
      })
      .catch((err)=>{
        console.error(err);
      });

  }

}
