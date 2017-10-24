//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js")
const trips = require("../controllers/trips.js")
module.exports = function(app){


    app.get('/users/login', users.login);
    app.post('/users/login', users.check);
    app.post("/users/register", users.register);

    app.get("/trips", trips.index);
}
