var vm = document.getElementById("villaLopez");
var papel = vm.getContext("2d");
var numVacas= document.getElementById("cuantasVacas");
var numPollos= document.getElementById("cuantosPollos");
var numCerdos= document.getElementById("cuantosCerdos");
var numCarlos= document.getElementById("cuantosCarlos");
var BotonDibujar= document.getElementById("confirmar");

BotonDibujar.addEventListener("click", confirmar); 

function confirmar()
{

    var fondo =
    {
    url: "tile.png",
    cargaok: false
    };
    var vaca =
    {
    url: "yojan.png",
    cargaok: false
    };
    var pollo =
    {
    url: "daniela.png",
    cargaok: false
    };
    var cerdo =
    {
    url: "mariana.png",
    cargaok: false
    };
    var carlos =
    {
    url: "carlos.png",
    cargaok: false
    };


    fondo.objeto = new Image();
    fondo.objeto.src = fondo.url;
    fondo.objeto.addEventListener("load" , cargarFondo);
    
    vaca.objeto = new Image();
    vaca.objeto.src =vaca.url;
    vaca.objeto.addEventListener("load" , cargarVacas);
    
    cerdo.objeto= new Image();
    cerdo.objeto.src =cerdo.url;
    cerdo.objeto.addEventListener("load" , cargarCerdos);
    
    pollo.objeto = new Image();
    pollo.objeto.src =pollo.url;
    pollo.objeto.addEventListener("load" , cargarPollos);

    carlos.objeto = new Image();
    carlos.objeto.src =carlos.url;
    carlos.objeto.addEventListener("load" , cargarCarlos);
    
    var cantVacas = parseInt(numVacas.value);
    var cantPollos = parseInt(numPollos.value);
    var cantCerdos = parseInt(numCerdos.value);
    var cantCarlos = parseInt(numCarlos.value);
  
    function dibujar()
    {
        var cv=cantVacas;
        var cc=cantCerdos;
        var cp=cantPollos;
        var cca=cantCarlos;
        
        if (fondo.cargaok)
        {
            papel.drawImage(fondo.objeto,0,0);
        }
        if (carlos.cargaok)
        {   
            
            for(var v=0; v<cca; v++)
            {
                var x = aleatorio(0, 700);
                var y = aleatorio(0, 670);
                papel.drawImage(carlos.objeto,x,y);
            }
        }
        if (vaca.cargaok)
        {   
            
            for(var v=0; v<cv;v++)
            {
                var x = aleatorio(0, 700);
                var y = aleatorio(0, 663);
                papel.drawImage(vaca.objeto,x,y);
            }
        }
        if (pollo.cargaok)
        {    
            for(var p=0; p<cp;p++)
            {
                var x = aleatorio(0, 696);
                var y = aleatorio(0, 700);
                papel.drawImage(pollo.objeto,x,y);
            }
        }
        if (cerdo.cargaok)
        {
            for(var c=0; c<cc;c++)
            {
                var x = aleatorio(0, 700);
                var y = aleatorio(0, 709);
                papel.drawImage(cerdo.objeto,x,y);
            }
        }
    }


    function cargarFondo()
{
    fondo.cargaok = true;
    dibujar();
    }
    function cargarVacas()
{
    vaca.cargaok = true;
    dibujar();
    }
    function cargarCerdos()
{
    cerdo.cargaok = true;
    dibujar();    
    }
    function cargarPollos()
{
    pollo.cargaok = true;
    dibujar();
    }
    function cargarCarlos()
    {
        carlos.cargaok = true;
        dibujar();
    }
    function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
    }

}

