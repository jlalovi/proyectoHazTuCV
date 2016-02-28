$(document).ready(function () {
    $("#editarBtn").click(function (ev) {
        ev.preventDefault();
        if (validaCV()) {
            document.getElementById('editarBtn').style.pointerEvents = 'none'; // Deshabilito click
            $('body').css('cursor', 'wait');

            $.post('/CV/EditarCV', {
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
                document.getElementById('editarBtn').style.pointerEvents = 'auto'; // Rehabilito click
                $('body').css('cursor', 'auto');
                alert("¡datos salvados con éxito!");
                window.location.href = '/CV/Index';
            }).fail(function () {
                document.getElementById('editarBtn').style.pointerEvents = 'auto';  // Rehabilito click
                $('body').css('cursor', 'auto');
                alert("Existe algún problema en el lado del servidor. Por facor, prueba más tarde.");
            });
        }        
    });
});