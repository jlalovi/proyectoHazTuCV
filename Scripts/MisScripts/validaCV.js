function validaCV() {

    var valida = true; // Por defecto consideraré que el CV validará.

    var infoBasica = {
        NombreCompleto: $("#NombreCompleto").val().trim(),
        Email: $("#Email").val().trim(),
        Telefono: $("#Telefono").val().trim(),
        Web: $("#Web").val().trim(),
        Direccion: $("#Direccion").val().trim()
    };

    $.each(infoBasica, function (campo, valor) {
        var iluminaError = false;
        if (esVacio(valor)) {
            valida = false;
            $("span." + campo).text("* Este campo no puede estar vacío.");
            iluminaError = true;
        }
        if (excedeCaracteres(valor, 255)) {
            valida = false;
            $("span." + campo).text("* Este campo no puede contener más de 255 caracteres.");
            iluminaError = true;
        }
        if (iluminaError) {
            $("#" + campo).addClass("errorValidacion");
        }
        else {
            $("#" + campo).removeClass("errorValidacion");
            $("#" + campo).next().text("");
        }
    });

    if (!validaEmail(infoBasica.Email)) {
        valida = false;
        $("span.Email").text("* El formato de mail introducido NO es correcto.");
        $("#Email").addClass("errorValidacion");
    }
    else {
        $("#Email").removeClass("errorValidacion");
        $("#Email").next().text("");
    }

    if (!validaTelefono(infoBasica.Telefono)) {
        valida = false;
        $("span.Telefono").text("* El formato del número de teléfono NO es correcto.");
        $("#Telefono").addClass("errorValidacion");
    }
    else {
        $("#Telefono").removeClass("errorValidacion");
        $("#Telefono").next().text("");
    }

    $(".estiloPills li").removeClass("active");
    $(".estiloPills li:first-child").addClass("active");
    $(".tab-pane.fade").removeClass("active in");
    $("#info_basica").addClass("active in");

    return valida;
}

function esVacio(valor) {
    var vacio;
    (valor == "") ? vacio = true : vacio = false;
    return vacio;
}

function excedeCaracteres(valor, maxChar) {
    var excedeChar;
    (valor.length > maxChar) ? excedeChar = true : excedeChar = false;
    return excedeChar;
}

function validaEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validaTelefono(email) {
    var re = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/ ;
    return re.test(email);
}

/* Función para limpiar errores de validación que se han corregido, y para dar/quitar estilo al input con error una vez seleccionado */
$(document).ready(function () {
    $("#info_basica input").focus(function () {
        if ($(this).next().text() != "") {
            validaCV();
            $("#info_basica input").keyup(function () {
                validaCV();
            });
        }
    });
});