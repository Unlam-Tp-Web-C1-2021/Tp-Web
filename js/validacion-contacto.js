function contador(idtextarea, idcontador){
	function update_contador(idtextarea, idcontador){
		var contador = $(idcontador);
		var ta = $(idtextarea);

		contador.html("Caracteres restantes: "+ (1000-ta.val().length));
	}

	$(idtextarea).keyup(function(){
		update_contador(idtextarea, idcontador)
	});

	$(idtextarea).change(function(){
		update_contador(idtextarea, idcontador);
	});
}


$(document).ready(function () {

	$.validator.addMethod("telefono", function(value, element, regexp) {
		var re = /^[0-9]{4}-[0-9]{4}$/;
		return this.optional(element) || re.test(value);
		}, "");

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
			'telefono': {
				required: true,
				telefono: true
			},
			'curso': "required",
            'consulta': {
                required: true,
                maxlength: 1000
            }
		},
		messages: {'telefono': { required:"Ingrese su número de teléfono", telefono:"Ingrese su número en este formato: 1111-1111"},'nombre': "Ingrese su nombre", 'curso': "Seleccione un curso", 'correo': { required: 'Debe ingresar un email', email: 'Debe ingresar un email válido' },'consulta': { required: 'Debe ingresar su consulta', maxlength: 'No mas de 100 caracteres' }},
		debug: true,errorElement: "label",errorContainer: $("#errores"),
		submitHandler: function(form){
			$("#mensaje").show();
			$("#mensaje").html("<p class='pensando'>Enviando el formulario, por favor espere...</p>");
			form.submit();
		}
	});;

	contador("#consulta","#caracteres");
});