window.addEventListener("scroll",function(){
  var snippnetLogo = document.getElementById("snippnetLogo");
  var snippnetLogoSm = this.document.getElementById("snippnetLogoSm");
  if(window.pageYOffset > 200){
   snippnetLogo.style.top = "-200px";
   snippnetLogo.style.transition = "all 0.3s linear";
  } else{
      snippnetLogo.style.top = "20px";
  }
  if(window.pageYOffset < 200){
    snippnetLogoSm.style.top = "-200px";
    snippnetLogoSm.style.transition = "all 0.3s linear";
  } else{
      snippnetLogoSm.style.top = "20px";
  }
},false);







/* //HAMBURGER MENU
let toggleIcon = document.getElementById("toggleIcon");
let menuLinks = document.getElementById("menuLinks");

toggleIcon.addEventListener("click", function(){
    if (menuLinks.dataset.toggle === "off"){
        menuLinks.dataset.toggle = "on";
        document.getElementById("hamburger").style.backgroundColor = "white";

    } else {
        menuLinks.dataset.toggle = "off";
    }

     if(toggleIcon.dataset.icon === "on"){
        toggleIcon.dataset.icon = "off";
    } else {
        toggleIcon.dataset.icon = "on";
    } 

});

if (toggleIcon.dataset.icon === "on"){
    menuLinks.dataset.toggle = "off";
} else if (menuLinks.dataset.toggle === "on"){
    toggleIcon.dataset.toggle = "off";
}

function collapseMenu(){
    toggleIcon.dataset.icon = "on";
    menuLinks.dataset.toggle = "off";
}

window.addEventListener("scroll", collapseMenu);
 */
