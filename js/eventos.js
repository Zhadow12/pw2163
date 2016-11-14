
//DOM= Modelo de objetos del documento
var inicio = function() //Main

	var dameclic = function()
{
	alert("Le di clic a un botón");
}
	$("#dameClic").on("click",dameclic);



//$("elemento").off();
//Inicializar nuestro documento
$(document).on("ready",inicio);


//$(document).on("ready",function(){;
//Codigo o más funciones
//});