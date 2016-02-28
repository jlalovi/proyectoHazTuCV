$(document).ready(function () {
    $("#crearBtn").click(function (ev) {
        ev.preventDefault();
        if (validaCV()) {
            // Deshabilito temporalmente el pulsar este botón mientras se realizan los procesos en lado del servidor
            document.getElementById('crearBtn').style.pointerEvents = 'none';
            $('body').css('cursor', 'wait');

            $.post('/CV/CrearCV', {
                NombreCompleto: $("#NombreCompleto").val().trim(),
                Email: $("#Email").val().trim(),
                Telefono: $("#Telefono").val().trim(),
                Web: $("#Web").val().trim(),
                Direccion: $("#Direccion").val().trim(),
                ExperienciaLaboral: $("#ExperienciaLaboral").html().trim(),
                Cualificaciones: $("#Cualificaciones").html().trim(),
                Educacion: $("#Educacion").html().trim(),
                Intereses: $("#Intereses").html().trim(),
                Referencias: $("#Referencias").html().trim()
            }).done(function () {
                // Habilito de nuevo el evento click de este botón
                document.getElementById('crearBtn').style.pointerEvents = 'auto';
                $('body').css('cursor', 'auto');
                alert("¡datos salvados con éxito!");
                window.location.href = '/CV/Index';
            }).fail(function () {
                // Habilito de nuevo el evento click de este botón
                document.getElementById('crearBtn').style.pointerEvents = 'auto';
                $('body').css('cursor', 'auto');
                alert("Existe algún problema en el lado del servidor. Por facor, prueba más tarde.");
            });
        }
    });
});