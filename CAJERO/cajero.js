class Billete
{
  constructor(v,c)
  {
    this.valor=v;
    this.cantidad=c;
    this.imagen=new Image();
    this.imagen.src = imagenes[this.valor];
  }
}
var imagenes = [];
imagenes["50"] = "billete50.png";
imagenes["20"] = "billete20.png";
imagenes["10"] = "billete10.png";
var caja = [];
caja.push(new Billete (50,100));
caja.push(new Billete (20,50));
caja.push(new Billete (10,10));
var div=0;
var papeles=0;
var botonExtraer = document.getElementById("extraer");
botonExtraer.addEventListener("click",entregarDinero);
var resultado=document.getElementById("resultado");

contar();

function contar()
{
	var total = 0;
	for (var tot of caja)
	{
		total = total + tot.valor * tot.cantidad;
	}
}

function entregarDinero()
{
  var entregado = [];
  var t= document.getElementById("dinero");
  dinero=parseInt(t.value);
  if (dinero%10==0)
  {
    for(var bi of caja)
    {
      if (dinero> 0)
      {
        div = Math.floor(dinero/bi.valor)
        if(div>bi.cantidad)
        {
          papeles=bi.cantidad;
        }
        else
        {
          papeles = div;
        }
        for (var i = 0; i < papeles; i++)
				{
					entregado.push ( new Billete(bi.valor, 1) );
				}
        dinero=dinero-(bi.valor*papeles);
      }
    }
    if (dinero == 0)
		{
			resultado.innerHTML += "Se ha retirado: <br />";
			for(var e of entregado)
			{		
				resultado.innerHTML += "<img src=" + e.imagen.src + " />";
			}
			resultado.innerHTML += "<hr />";
		  contar();	
		}
		else
		{
			resultado.innerHTML += "No hay plata <hr />";
		}
       
  }
  else
  {
    resultado.innerHTML="Solo múltiplos de 10 <hr/>"
  }

}
