const knex = require('../db/knex.js');


module.exports = {
  index: function(req, res){
    res.render('air_main');
  }


}
