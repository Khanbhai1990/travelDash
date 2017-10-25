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
          .join('airline', 'airline_id', '=','flight.airline_id')
          .where('user_id', req.session.user)
          .then((info)=>{
            let trip = info

            res.render('trips', {flight: data, user: logged_user, trip:trip});
          })

      })
    })
  },
  submit: function(req,res){
    knex()
  }


}
