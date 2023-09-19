var card = document.getElementsByClassName("card");

function cardClicked() {
    // Get the link from the data-link attribute
    var link = event.currentTarget.getAttribute("data-link");
    var newTab = event.currentTarget.hasAttribute("data-new-tab");

    if (newTab) {
        window.open(link, "_blank");
    } else {
        window.location.href = link;
        //remember to add http:// if it's a link
    }

}

