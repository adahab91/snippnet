window.addEventListener("scroll",function(e){
  var myArrow = document.getElementById("arrow-down");

  if(window.pageYOffset > 20){
   myArrow.style.opacity= "0";
    myArrow.style.transition = "all 0.2s";
  } else{
      myArrow.style.opacity = "1";
  }
},false);