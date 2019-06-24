/* window.addEventListener("scroll",function(){
  var snippnetLogo = document.getElementById("snippnetLogo");
  var snippnetLogoSm = this.document.getElementById("snippnetLogoSm");
  if(window.pageYOffset > 200){
   snippnetLogo.style.top = "-200px";
   snippnetLogo.style.transition = "all 0.3s linear";
  } else{
      snippnetLogo.style.top = "20px";
  }
  if(window.pageYOffset < 201){
    snippnetLogoSm.style.top = "-200px";
    snippnetLogoSm.style.transition = "all 0.3s linear";
  } else{
      snippnetLogoSm.style.top = "20px";
  }
},false); */  //gammal kode som eg ikkje vil øydelegge
  var oldValue = 0;
window.addEventListener("scroll",function(e){
  var snippnetLogo = document.getElementById("snippnetLogo");
  var snippnetLogoDown = this.document.getElementById("snippnetLogoDown");
  var snippnetLogoUp = this.document.getElementById("snippnetLogoUp");
  
  //var st = window.pageYOffset || this.document.documentElement.scrollTop;

  var newValue = window.pageYOffset;
  
  if(window.pageYOffset > 200){
   snippnetLogo.style.opacity= "0";
    snippnetLogo.style.transition = "all 0.5s";
  } else{
      snippnetLogo.style.opacity = "1";
  }
  if(window.pageYOffset < 201){
    //snippnetLogoDown.style.top = "-200px";
    snippnetLogoDown.style.opacity = "0";
    snippnetLogoDown.style.transition = "all 0.3s";

    snippnetLogoUp.style.opacity = "0";
    snippnetLogoUp.style.transition = "all 0.3s";
  } else{
        console.log(newValue + "new value");
        console.log(oldValue + "old value");
       if (oldValue - newValue < 0){
            snippnetLogoDown.style.opacity = "1";
            snippnetLogoUp.style.opacity = "0";
            console.log("down");
        } else if (oldValue - newValue > 0){
            snippnetLogoDown.style.opacity = "0";
            snippnetLogoUp.style.opacity = "1";
            console.log("up");
        }
        oldValue = newValue;
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
