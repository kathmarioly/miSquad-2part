function Persona(nombre, apellido, edad, hobbies){

	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
	this.saludar = function(){
		return ("Hola...!" +"<br>"+ "<strong>Mi nombre es:</strong> " + this.nombre +"<br>"+ "<strong> Mi apellido es:</strong> " + this.apellido + "<br>"+ " <strong>Mi edad:</strong> " + this.edad + "años" +"<br>" + "<strong>Me encanta: </strong><li> " + this.hobbies + "</li>")

}
};

var Romina = new Persona("Romina", "Torres", 31, "Componer, Cantar, Tocar instrumentos.")
var Paulina = new Persona("Paulina", "Gonzales", 26, "Video-juegos, Series, Manualidades.")
document.write(Paulina.saludar()+"<br>");
var Katerine = new Persona("Katerine", "Sandoval", 24, "Arte, Musica, Literatura.")
document.write(Katerine.saludar()+"<br>");
var Nattalia = new Persona("Natalia", "Garrido", 27, "Animales, Comida, Series.")
document.write(Nattalia.saludar()+"<br>");
var Natalia = new Persona("Natalia", "Vivanco", 27, "Leer, Jardinear, Manualidades.")
document.write(Natalia.saludar()+"<br>");



 var validarRomina = document.getElementById("romina")
 validarRomina.innerHTML = saludar()+"<br>";