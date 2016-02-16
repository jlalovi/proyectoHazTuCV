$(document).ready(function () {
    $("#editarBtn").click(function (ev) {
        ev.preventDefault();
        $.post('/CV/EditarCV', {
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