var hamburgerStatus = false;

function hamburgerClicked() {
    var subMenu = document.getElementById('sub-menu');
    var hamburgerImg = document.getElementById('hamburger-img');
    var hamburgerTxt = document.getElementById('hamburger-txt');
    var pageCurtain = document.getElementById('page-curtain');

    if (hamburgerStatus == false) {
        subMenu.style.display = 'block';
        hamburgerImg.src = '../img/hamburger-x.png';
        hamburgerTxt.textContent="CLOSE";
        pageCurtain.style.display = 'block';

        hamburgerStatus = true;
    }
    else {
        subMenu.style.display = 'none';
        hamburgerImg.src = '../img/hamburger-full.png';
        hamburgerTxt.textContent="MENU";
        pageCurtain.style.display = 'none';

        hamburgerStatus = false;
    }
}

