$(document).ready(function () {

    $(".menu-item").mouseenter(function () {
        $(this).children(".dropdown-menu").show(200);
    });

    $(".menu-item").mouseleave(function () {
        $(this).children(".dropdown-menu").hide(200);
    });

});


