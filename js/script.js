// Abrir y Cerrar Menú Responsive >>> Derecha 290px
$('#abrir').click(function(){
    $('#responsive').animate({
        right: 0
    });
    $('#abrir').hide();
    $('#cerrar').show();
    event.preventDefault();
});

$('#cerrar, #a-contacto-movil').click(function(){
    $('#responsive').animate({
        right: -290
    });
    $('#cerrar').hide();
    $('#abrir').show();
    event.preventDefault();
});