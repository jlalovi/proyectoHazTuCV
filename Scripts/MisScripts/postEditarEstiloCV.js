$(document).ready(function () {
    $("#guardarEstilo").click(function (ev) {
        ev.preventDefault();
        $.post('/CV/EditarEstiloCV', {
            TipoCV: $("input[name=tipocv]:checked").val()
        }).done(function () {
            alert("¡Estilo guardado!");
        });
    });
});