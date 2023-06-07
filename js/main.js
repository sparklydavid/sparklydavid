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