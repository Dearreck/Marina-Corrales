/* JQuery */
$(function () {
    ScrollReveal().reveal('.sr-effect', { delay: 250, duration: 1750, interval: 1000, distance: '25px', origin: 'top' });
    ScrollReveal().reveal('.sr-effect-left', { rotate: { x: 20, z: 20 } });
    ScrollReveal().reveal('.sr-effect-right', { rotate: { x: 20, z: -20 } });

    $("#btn-best-admin").on("click", function () { modifyDescription("best-admin") });
    $("#btn-best-teacher").on("click", function () { modifyDescription("best-teacher") });
    $("#btn-best-student").on("click", function () { modifyDescription("best-student") });

    function modifyDescription(id) {
        if ($("#btn-" + id).text() === "Mostrar Descripción") $("." + id).slideDown();
        else $("." + id).slideUp();
        $("#btn-" + id).text(($("#btn-" + id).text() === "Mostrar Descripción") ? "Ocultar Descripción" : "Mostrar Descripción");
    }
})