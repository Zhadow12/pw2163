var inicioUsuarios = function()
{
	
	var validaUsuario = function(){

		var usuario= $("txtUsuario").val();
		var clave = $("txtClave").val();
		//Preparar los parámetros para AJAX
		var parametros= "opcion=valida"+"&usuario="usuario+"&clave"+clave+"&id"+Math.random();

		//hacemos la petición remota
		$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url: "php/utilerias.php",
			data:parametros,
			succes: function(response){
				if (response.respuesta == true)
				{
					$("·entradaUsuario").hide();
					$("nav").show();
				}

				else{
					alert("Datos incorrectoss :(");
				}
//Si todo sale bien
			},
			error:function(xhr,ajaxOptions,thrownError){
//Si todo sale mal
			}


		});

		//validamos
		if (usuario!="" && clave!="")
		{

		}
		else
		{
			alert ("Usuario y clave son obligatorios");
		}
	}




	$("#btnValidaUsuario").on("click",validaUsuario);

}

//Evento inicial
$(document).on("ready,inicioUsuarios");
