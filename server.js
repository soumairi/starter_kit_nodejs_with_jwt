const express = require("express");

const cors = require('cors');
const { json } = require("express/lib/response");
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const db = require("./app/models");
const Role = db.role;
/*
* initial() function helps us to create 3 rows in database.
* In development, you may need to drop existing tables and re-sync database. So you can use force: true as code above.
*
* For production, just insert these rows manually and use sync() without parameters to avoid dropping 
* db.sequelize.sync();
*/
db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Db');
    initial();
});
app.get("/", (req, res) => {
    res.json({ message: "welcome to soumairi application" });
})
// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
}