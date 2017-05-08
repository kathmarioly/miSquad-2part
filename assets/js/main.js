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
 validarRomina.innerHTML = "<strong><em>Hola...!</em></strong "+"<br>" + "<br>"+ "<strong>Mi nombre es:</strong> " + Romina.nombre +"<br>"+ "<strong> Mi apellido es:</strong> " + Romina.apellido + "<br>"+ " <strong>Mi edad:</strong> " + Romina.edad + "años"
 var hobbies = document.getElementById("meEncanta")
 hobbies.innerHTML = "<strong> Me encanta: </strong> <br>"

 var validarPaulina = document.getElementById("paulina")
 validarPaulina.innerHTML = "<strong><em>Hola...!</em></strong "+"<br>" + "<br>"+ "<strong>Mi nombre es:</strong> " + Paulina.nombre +"<br>"+ "<strong> Mi apellido es:</strong> " + Paulina.apellido + "<br>"+ " <strong>Mi edad:</strong> " + Paulina.edad + "años"
 var hobbies2 = document.getElementById("meEncanta2")
 hobbies2.innerHTML = "<strong> Me encanta: </strong>"

 var validarKaterine = document.getElementById("katerine")
 validarKaterine.innerHTML = "<strong><em>Hola...!</em></strong "+"<br>" + "<br>"+ "<strong>Mi nombre es:</strong> " + Katerine.nombre +"<br>"+ "<strong> Mi apellido es:</strong> " + Katerine.apellido + "<br>"+ " <strong>Mi edad:</strong> " + Katerine.edad + "años"
 var hobbies3 = document.getElementById("meEncanta3")
 hobbies3.innerHTML = "<strong> Me encanta: </strong>"

 var validarKaterine = document.getElementById("katerine")
 validarKaterine.innerHTML = "<strong><em>Hola...!</em></strong "+"<br>" + "<br>"+ "<strong>Mi nombre es:</strong> " + Katerine.nombre +"<br>"+ "<strong> Mi apellido es:</strong> " + Katerine.apellido + "<br>"+ " <strong>Mi edad:</strong> " + Katerine.edad + "años"
 var hobbies3 = document.getElementById("meEncanta3")
 hobbies3.innerHTML = "<strong> Me encanta: </strong>"

 var validarNatalia = document.getElementById("natalia")
 validarNatalia.innerHTML = "<strong><em>Hola...!</em></strong "+"<br>" + "<br>"+ "<strong>Mi nombre es:</strong> " + Natalia.nombre +"<br>"+ "<strong> Mi apellido es:</strong> " + Natalia.apellido + "<br>"+ " <strong>Mi edad:</strong> " + Natalia.edad + "años"
 var hobbies4 = document.getElementById("meEncanta4")
 hobbies4.innerHTML = "<strong> Me encanta: </strong>"