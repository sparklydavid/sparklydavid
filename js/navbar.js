var hamburgerStatus = false;

function hamburgerClicked() {
    var menuVerticle = document.getElementById('m-menu');
    var hamburgerImg = document.getElementById('hamburger-img');
    var pageCurtain = document.getElementById('page-curtain');

    if (hamburgerStatus == false) {
        menuVerticle.style.display = 'block';
        hamburgerImg.src = '../img/hamburger-x.png';
        pageCurtain.style.display = 'block';
        hamburgerStatus = true;
    }
    else {
        menuVerticle.style.display = 'none';
        hamburgerImg.src = '../img/hamburger-full.png';
        pageCurtain.style.display = 'none';
        hamburgerStatus = false;
    }
}