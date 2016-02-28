$(document).ready(function () {
    $(".tiposCV").change(cambiaEstiloCV);
    function cambiaEstiloCV(ev) {
        var tipoCV = ev.target.value;
        switch (tipoCV) {
            case "1":
                $("#presentacionCV").attr("class", "presentacionCV tipo1");
                break;
            case "2":
                $("#presentacionCV").attr("class", "presentacionCV tipo2");
                break;
            case "3":
                $("#presentacionCV").attr("class", "presentacionCV tipo3");
                break;
            case "4":
                $("#presentacionCV").attr("class", "presentacionCV tipo4");
                break;
            case "5":
                $("#presentacionCV").attr("class", "presentacionCV tipo5");
                break;
            case "6":
                $("#presentacionCV").attr("class", "presentacionCV tipo6");
                break;
            default:
                $("#presentacionCV").attr("class", "presentacionCV tipo1");
        }
    }
});