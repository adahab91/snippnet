let toggleIcon = document.getElementById("toggleIcon");
let menuLinks = document.getElementById("menuLinks");

toggleIcon.addEventListener("click", function(){
    if (menuLinks.dataset.toggle === "off"){
        menuLinks.dataset.toggle = "on";
    } else {
        menuLinks.dataset.toggle = "off";
    }

    if(toggleIcon.dataset.icon === "on"){
        toggleIcon.dataset.icon = "off";
    } else {
        toggleIcon.dataset.icon = "on";
    }
});