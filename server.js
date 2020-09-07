var express = require("express");
var bodyParser = require("body-parser");

var app = express();



app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Server listening on: http://localhost:" + port);
});