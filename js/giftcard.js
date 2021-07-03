$(document).ready(function(){
    
    // Cambio Destinatario
    $("#tituloGiftCard").keyup(function(){
        $("#destinatario-text").text($(this).val());
    });

    // Cambio Color de Fondo
    $("input[name='fondo']").change(function(){
        $(".vista-previa").removeClass("green pink red blue orange");
        $(".vista-previa").addClass($(this).val());
    });

    // Cambio color de fuente
    $("input[name='color']").change(function(){
        $("#destinatario-text").removeClass("verde rosa azul naranja rojo");
        $("#gift-card-para-text").removeClass("verde rosa azul naranja rojo");
        $("#destinatario-text").addClass($(this).val());
        $("#gift-card-para-text").addClass($(this).val());
    });

    // Cambio tamaño de fuente
    $("input[name='tamanioFuente']").change(function(){
        $("#destinatario-text").css("font-size", $(this).val());
    });

    // Cambio Fecha y Hora
    $("#fechaHoraEvento").keyup(function() {
        $("#fechaVistaPrevia").text($(this).val());
    });

    // Cambo ubicación fecha y hora
    $("input[name='ubicacion']").change(function() {
        $(".fecha").removeClass("arribaDerecha abajo arribaIzquierda");
        $(".fecha").addClass($(this).val());
    });

});


