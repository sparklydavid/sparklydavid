var hamburgerStatus=false;

function hamburgerClicked() {
    var menuVerticle = document.getElementById('menu-verticle');
    var hamburgerImg = document.getElementById('hamburger-img');
    
    if (hamburgerStatus==false){
        menuVerticle.style.display = 'block';
        hamburgerImg.src = 'img/hamburger-x.png';
        hamburgerStatus=true;
    }
    else{
        menuVerticle.style.display = 'none';
        hamburgerImg.src = 'img/hamburger-full.png';
        hamburgerStatus=false;
    }
}

/* reveal animation (article)*/
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100; //smaller value mean earlier reveal
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  