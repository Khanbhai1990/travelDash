const knex = require("../db/knex.js");
module.exports = {
  index: function(req,res){
    knex('flight')
    .then((data)=>{
      knex('users')
      .where('id', req.session.user)
      .then((result)=>{
        let logged_user = result[0];
        knex('trips')
          .join('flight', 'flight.id', '=', 'trips.flight_id')
          .join('airline', 'airline.id', '=','flight.airline_id')
          .select('trips.id', 'trips.title', 'trips.description', 'flight.start', 'flight.destination', 'airline.name')
          .where('user_id', req.session.user)
          .then((info)=>{
            let trip = info
            res.render('trips', {flight: data, user: logged_user, trip:trip});
          })

      })
    })
  },
  submit: function(req, res){
    knex('trips')
      .insert({
        user_id: req.session.user,
        title: req.body.title,
        description:req.body.description,
        flight_id:req.body.flight_id
      }, '*')
      .then((result)=>{
        res.redirect('/trips');
      })

  },

  del: function(req,res){
    knex('trips')
      .del()
      .where('id', req.params.id)
      .then((result)=>{
        res.redirect('/trips');
      })
      .catch((err)=>{
        console.error(err);
      });

  },

  logout: function (req, res){
    req.session.user = undefined
    res.redirect('/users/login');
  }


}
