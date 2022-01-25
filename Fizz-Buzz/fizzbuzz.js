var botonConfirmar= document.getElementById("confirmar");
botonConfirmar.addEventListener("click", confirmar);


function confirmar()
{   
    var numeros = document.getElementById("tope");
    var tope= parseInt(numeros.value);
    document.write("<b>"+"FIZZ-BUZZ"+"</b>"+"<br/>");
        
    for(var i=1; i<=tope; i++)
        {
            if(i % 3 == 0)
            {
                document.write("FIZZ");
            }

            if(i % 5 == 0)
            {
                document.write("BUZZ");
            }
            if (i % 3 !=0 && i % 5 !=0)
            {
                document.write(i);
            }

            document.write("<br />");
        } 

}

