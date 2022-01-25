var express = require("express");
var app = express();
 
app.get("/", inicio);
app.get("/how", cursos);

function inicio (peticion, resultado)
{
 resultado.send("<h1><strong>TE AMO MI AMOR</strong></h1>");
}
function cursos (peticion, resultado)
{
 resultado.send("<h1><strong>CON TODO MI CORAZON uwu <3 </strong></h1>");
} 
app.listen(3000);