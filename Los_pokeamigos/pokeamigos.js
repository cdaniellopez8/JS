class Pokeamigo
{
    constructor (nombre, tipo, vida, ataque, debilidad)
    {
        this.imagen = new Image();
        this.nombre= nombre;
        this.tipo= tipo;
        this.vida= vida;
        this.ataque= ataque;
        this.debilidad= debilidad;

        this.imagen.src = imagenes[this.nombre];
    }

    mostrar()
    {
        document.write("<p>");
        document.write("<strong>"+this.nombre+ "</strong><br />");
        document.write("</p>");
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("Tipo: "+this.tipo + "<br />");
        document.write("Vida: "+this.vida+"<br />");
        document.write("Ataque: "+this.ataque+"<br />");
        document.write("Debilidades: "+ this.debilidad);
        document.write("</p>");
    }
    
}

