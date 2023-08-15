var hamburgerStatus = false;

function hamburgerClicked() {
    var menuVerticle = document.getElementById('m-menu');
    var hamburgerImg = document.getElementById('hamburger-img');
    var pageCurtain = document.getElementById('page-curtain');

    if (hamburgerStatus == false) {
        menuVerticle.style.display = 'block';
        hamburgerImg.src = 'img/hamburger-x.png';
        pageCurtain.style.display = 'block';
        hamburgerStatus = true;
    }
    else {
        menuVerticle.style.display = 'none';
        hamburgerImg.src = 'img/hamburger-full.png';
        pageCurtain.style.display = 'none';
        hamburgerStatus = false;
    }
}



//change topbar color when scroll
const colorChangingDiv = document.querySelector('#top-bar');

window.addEventListener('scroll', () => {
    // Calculate how far down the page the user has scrolled
    const scrollY = window.scrollY;

    // Change the background color based on the scroll position
    // Here, we're using a threshold of 200 pixels from the top of the page
    if (scrollY > 1) {
        colorChangingDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    } else {
        colorChangingDiv.style.backgroundColor = 'transparent';
    }
});