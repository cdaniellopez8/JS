var express = require("express");
var app = express();
 
app.get("/", inicio);
app.use(express.static("public"));
app.use("/static", express.static("public"));

function inicio (peticion, resultado)
{
    resultado.sendFile(__dirname + "/barquito.html");
}
app.listen(3000);