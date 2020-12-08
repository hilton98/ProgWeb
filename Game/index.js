const express = require("express");
const handlebars =  require("express-handlebars");
const router = require("./config/router");
const logger = require("morgan");

const app = express();

app.engine("handlebars", handlebars());
app.set("view engine","handlebars");
app.set("views", `${__dirname}/app/views`);


app.use(logger("combined"));
app.use(router);

app.use("/img", express.static(`${__dirname}/public/img`) );

app.listen(3000, function() {
	console.log("Express app iniciada na porta 3000.");
});

