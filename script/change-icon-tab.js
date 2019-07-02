/* $("#changingIcon").attr("href", "img/icon-browser-nonactive.png"); */

$(window).focus(function() {
    $("#changingIcon").attr("href","img/icon-browser-active_1.png");
});

$(window).blur(function() {
    $("#changingIcon").attr("href","img/icon-browser-nonactive_1.png");
});