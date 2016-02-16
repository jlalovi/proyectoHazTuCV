$(document).ready(function () {
    $("#crearBtn").click(function (ev) {
        ev.preventDefault();
        $.post('/CV/CrearCV', {
            NombreCompleto: $("#NombreCompleto").val(),
            Email: $("#Email").val(),
            Telefono: $("#Telefono").val(),
            Web: $("#Web").val(),
            Direccion: $("#Direccion").val(),
            ExperienciaLaboral: $("#ExperienciaLaboral").html(),
            Cualificaciones: $("#Cualificaciones").html(),
            Educacion: $("#Educacion").html(),
            Intereses: $("#Intereses").html(),
            Referencias: $("#Referencias").html()
        }).done(function () {
            alert("datos salvados!");
            window.location.href = '/CV/Index';
        });
    });
});