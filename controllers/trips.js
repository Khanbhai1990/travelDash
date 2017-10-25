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
          .where('user_id', req.session.user)
          .then((info)=>{
            let trip = info
            console.log(trip)
            res.render('trips', {flight: data, user: logged_user, trip:trip});
          })

      })
    })
  }


}
