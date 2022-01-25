var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var colorLinea = document.getElementById("colorLinea");
var colorBorde =document.getElementById("colorBorde");
var colorBarco = document.getElementById("colorBarco");
var anchoLin = document.getElementById("anchoLinea");
var botonDibujo = document.getElementById("botonDibujo");
var tamaño =(document.getElementById("tamañoDibujo"));
botonDibujo.addEventListener("click", dibujarPorClick);
function dibujarPorClick()
{
    var lineas;
    var l=0;
    var xi,yi,xf,yf;
    var lin = colorLinea.value;
    var bor = colorBorde.value;
    var bar = colorBarco.value;
    var al = parseInt(anchoLin.value);
    var ancho= parseInt(tamaño.value); 
    d.width=ancho;
    d.height=ancho;
    lineas=ancho/10;
    console.log(al);
    
    
    while (l<lineas) 
    {
        yi= 10*l;
        xf=10*(l+1);
        dibujarLinea(lin,al, 0, yi, xf, ancho);
        l=l+1;
    }
    for(l=0;l<lineas;l++)
    {
     yi=ancho-(10*l);
     xf=ancho-(10*(l+1));
        dibujarLinea(lin,al, ancho,yi,xf,0);
    }
    for(l=0;l<lineas;l++)
    {
     xi=10*l;
     yf=ancho-(10*(l+1));
     dibujarLinea(lin,al,xi,ancho,ancho,yf);
    }
    for(l=0;l<lineas;l++)
    {
      xi=ancho-(10*l);
      yf=10*(l+1);
     dibujarLinea(lin,al,xi,0,0,yf);
    }
    dibujarLinea(bor,2, 1, 1, 1, ancho-1);
    dibujarLinea(bor,2, 1, ancho-1, ancho-1, ancho-1);
    dibujarLinea(bor,2, ancho-1, ancho-1, ancho-1, 1);
    dibujarLinea(bor,2, ancho-1, 1, 1, 1);
    dibujarLinea(bar,2,0.3*ancho,ancho/2,0.7*ancho,ancho/2);
    dibujarLinea(bar,2,0.7*ancho,ancho/2,0.6*ancho,0.6*ancho);
    dibujarLinea(bar,2,0.6*ancho,0.6*ancho,0.4*ancho,0.6*ancho);
    dibujarLinea(bar,2,0.4*ancho,0.6*ancho,0.3*ancho,0.5*ancho);
    dibujarLinea(bar,2,0.6*ancho,0.6*ancho,0.4*ancho,0.6*ancho);
    dibujarLinea(bar,2,0.5*ancho,0.5*ancho,0.5*ancho,0.3*ancho);
    dibujarLinea(bar,2,0.5*ancho,0.3*ancho,0.6*ancho,0.4*ancho);
    dibujarLinea(bar,2,0.6*ancho,0.4*ancho,0.5*ancho,0.4*ancho);   
}
function dibujarLinea(color, grosor, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}