//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js")
const trips = require("../controllers/trips.js")
const airline = require("../controllers/airline.js")
const air_main = require("../controllers/air_main.js")
module.exports = function(app){

    app.get('/', users.index);
    app.get('/users/login', users.login);
    app.post('/users/login', users.check);
    app.post("/users/register", users.register);

    app.get("/trips", trips.index);
    app.post('/trips', trips.submit);

    app.get('/airline_login', airline.login);
    app.post('/airline_login', airline.check);

    app.get('/air_main', air_main.index);
    app.post('/air_main', air_main.submit);
}
