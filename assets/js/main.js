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
var Katerine = new Persona("Katerine", "Sandoval", 24, "Arte, Musica, Literatura.")
var Nattalia = new Persona("Natalia", "Garrido", 27, "Animales, Comida, Series.")
var Natalia = new Persona("Natalia", "Vivanco", 27, "Leer, Jardinear, Manualidades.")
var Vanessa = new Persona("Vanessa", "Perez", 35, "karate do", "Cantar y pasarla bien", "Disfrutar a mis 6 hijos")
var Constanza = new Persona("Constanza", "Carrasco", 23, "Vender cosas ricas", "pasarla bien con el pololo", "series")
var Susana = new Persona("Susana", "Cruces", 34, "Dormir", "sacar a pasear al perro", "reconciar y patear al pololo")



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

 
 var validarNatalia = document.getElementById("natalia")
 validarNatalia.innerHTML = "<strong><em>Hola...!</em></strong "+"<br>" + "<br>"+ "<strong>Mi nombre es:</strong> " + Natalia.nombre +"<br>"+ "<strong> Mi apellido es:</strong> " + Natalia.apellido + "<br>"+ " <strong>Mi edad:</strong> " + Natalia.edad + "años"
 var hobbies4 = document.getElementById("meEncanta4")
 hobbies4.innerHTML = "<strong> Me encanta: </strong>"


 var validarNattalia = document.getElementById("nattalia")
 validarNattalia.innerHTML = "<strong><em>Hola...!</em></strong "+"<br>" + "<br>"+ "<strong>Mi nombre es:</strong> " + Nattalia.nombre +"<br>"+ "<strong> Mi apellido es:</strong> " + Nattalia.apellido + "<br>"+ " <strong>Mi edad:</strong> " + Nattalia.edad + "años"
 var hobbies5 = document.getElementById("meEncanta5")
 hobbies5.innerHTML = "<strong> Me encanta: </strong>"


 var validarVanessa = document.getElementById("vanessa")
 validarVanessa.innerHTML = "<strong><em>Hola...!</em></strong "+"<br>" + "<br>"+ "<strong>Mi nombre es:</strong> " + Vanessa.nombre +"<br>"+ "<strong> Mi apellido es:</strong> " + Vanessa.apellido + "<br>"+ " <strong>Mi edad:</strong> " + Vanessa.edad + "años"
 var hobbies6 = document.getElementById("meEncanta6")
 hobbies6.innerHTML = "<strong> Me encanta: </strong>"


 var validarConstanza = document.getElementById("constanza")
 validarConstanza.innerHTML = "<strong><em>Hola...!</em></strong "+"<br>" + "<br>"+ "<strong>Mi nombre es:</strong> " + Constanza.nombre +"<br>"+ "<strong> Mi apellido es:</strong> " + Constanza.apellido + "<br>"+ " <strong>Mi edad:</strong> " + Constanza.edad + "años"
 var hobbies7 = document.getElementById("meEncanta7")
 hobbies7.innerHTML = "<strong> Me encanta: </strong>"

 var validarSusana = document.getElementById("susana")
 validarSusana.innerHTML = "<strong><em>Hola...!</em></strong "+"<br>" + "<br>"+ "<strong>Mi nombre es:</strong> " + Susana.nombre +"<br>"+ "<strong> Mi apellido es:</strong> " + Susana.apellido + "<br>"+ " <strong>Mi edad:</strong> " + Susana.edad + "años"
 var hobbies8 = document.getElementById("meEncanta8")
 hobbies8.innerHTML = "<strong> Me encanta: </strong>"