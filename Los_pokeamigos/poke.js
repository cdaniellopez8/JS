var imagenes = [];
imagenes["Pekechu"] = "yojan.png";
imagenes["Marianander"] = "mariana.png";
imagenes["Danisaur"] = "daniela.png";

var coleccion = [];
coleccion.push(new Pokeamigo("Pekechu","Eléctrico",100,"El Pekeguettazo Filósofo","Vallenato y las matemáticas"));
coleccion.push(new Pokeamigo("Marianander","Fuego",100,"El Incoterm asesino","Carlos y Cálculo I"));
coleccion.push(new Pokeamigo("Danisaur", "Planta",100, "La Demanda Voráz","Vive en Soledad"));

for(var item of coleccion)
{
  item.mostrar();
}

