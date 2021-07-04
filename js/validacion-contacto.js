$(document).ready(function () {
    $("#mensaje").hide();
	$("#contacto").validate({
		event: "blur",rules: 
		{
			'nombre': "required",
			'correo': 
		    {
				required: true,
				email:true
			},
			'curso': "required",
            'consulta': {
                required: true,
                maxlength: 100
            }
		},
		messages: {'nombre': "Ingrese su nombre", 'curso': "Seleccione un curso", 'correo': { required: 'Debe ingresar un email', email: 'Debe ingresar un email válido' },'consulta': { required: 'Debe ingresar su consulta', maxlength: 'No mas de 100 caracteres' }},
		debug: true,errorElement: "label",errorContainer: $("#errores"),
		submitHandler: function(form){
			$("#mensaje").show();
			$("#mensaje").html("<p class='pensando'>Enviando el formulario, por favor espere...</p>");
			form.submit();
		}
	});;
});