
var oldValue = 0;
window.addEventListener("scroll",function(e){
  var snippnetLogo = document.getElementById("snippnetLogo");
  var snippnetLogoDown = this.document.getElementById("snippnetLogoDown");
  var snippnetLogoUp = this.document.getElementById("snippnetLogoUp");
  

  var newValue = window.pageYOffset;
  
  if(window.pageYOffset > 20){
   snippnetLogo.style.opacity= "0";
    snippnetLogo.style.transition = "all 0.5s";
  } else{
      snippnetLogo.style.opacity = "1";
  }
  if(window.pageYOffset < 21){
    snippnetLogoDown.style.opacity = "0";
    snippnetLogoDown.style.transition = "all 0.3s";

    snippnetLogoUp.style.opacity = "0";
    snippnetLogoUp.style.transition = "all 0.3s";
  } else{
       if (oldValue - newValue < 0){
            snippnetLogoDown.style.opacity = "1";
            snippnetLogoUp.style.opacity = "0";
        } else if (oldValue - newValue > 0){
            snippnetLogoDown.style.opacity = "0";
            snippnetLogoUp.style.opacity = "1";
        }
        oldValue = newValue;
  }

},false);
