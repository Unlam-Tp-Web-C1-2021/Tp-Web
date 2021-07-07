const IDAGREGADO = "agregado-";
const PRECIOCURSO = 6000;
var contador = 0;
var precio = 6000;

$(document).ready(function () {

	// Agrega las otras dos personas
	clonarDefault();
	clonarDefault();

	// Set precio base
	setPrecio();

	// Clonar
	$(".agregar-persona").click(function () {
		sumarPrecio();
		contador++;
		var clonar = $("#persona").clone();
		$(clonar).attr("id", IDAGREGADO + contador);
		$(".personas-agregadas").after(clonar);
		setPrecio();
	});

	// Remover
	$(".sacar-persona").click(function () {
		$("#agregado-" + contador).remove();
		contador--;
		restarPrecio();
		setPrecio();
	});



	$("#mensaje").hide();
	$("#inscripcion").validate({

		event: "blur",
		rules:
		{
			nombre: "required",
			apellido: "required",

			nombre2: "required"
		},
		highlight: function (element) {

			$("input[name='dni']").addClass('error');
			$("input[name='apellido']").addClass('error');
			$("input[name='nombre']").addClass('error');
		},
		unhighlight: function (element) {

			$("input[name='dni']").removeClass('error');
			$("input[name='apellido']").removeClass('error');
			$("input[name='nombre']").removeClass('error');
		},
		messages: { 'nombre': "", 'apellido': "", 'dni': "" },
		debug: true, errorElement: "div",
		submitHandler: function (form) {
			$("#mensaje").show();
			$("#mensaje").html("<p class='pensando'>Enviando el formulario, por favor espere...</p>");
			
			showDialog(form)

			//form.submit();
		}
	});;




});

function clonarDefault() {
	var clonar = $("#persona").clone();
	$(".personas-agregadas").after(clonar);
}

function setPrecio() {
	$(".precio").text("$" + precio);
}

function sumarPrecio() {
	this.precio += 6000;
}

function restarPrecio() {
	if (precio > 6000) {
		precio -= 6000;
	}
}

function showDialog(form) {
	let dialog = new bootstrap.Modal($("#dialog-persons"))

	let container = document.querySelector("#users-containers")

	// si llego hasta acá es porque todos los campos están completos entonces todos los array van a tener el mismo length
	let firstNames = document.querySelectorAll('input[name=nombre]')
	let lastNames = document.querySelectorAll('input[name=apellido]')
	let dnis = document.querySelectorAll('input[name=dni]')

	for (let i = 0; i < firstNames.length; i++) {
		container.innerHTML += `<p>${ firstNames[i].value } ${ lastNames[i].value } ${ dnis[i].value }</p>`
	}

	let button = document.querySelector("#button-dialog")
	button.addEventListener("click", () => {
		dialog.hide()
		form.submit()
	})

	dialog.show()
}