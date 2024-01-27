// Variable Assignments
var menu = document.getElementById("menu");

var hamburger = document.getElementById("hamburger_menu_id");

var jcsheader = document.querySelector(".title");

var jasonsnyder_name = document.querySelector(".JasonText");

var Ethan_h2 = document.querySelector("#Ethan_h2");

var Ethan_text = document.getElementById("Ethan_text");

var divs = document.querySelectorAll(".text_boxes div");

if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}


// Handles the menue buttons for all pages

function MenuBtn(hamburgerbtn) {
    if (menu.style.right == "0px") {
        menu.style.right = "-100vw";
        window.scrollTo(0, 0);
        hamburgerbtn.style.transform = "rotate(0deg)";
        document.body.style.height = "100%";
        document.body.style.overflowY = "auto";
    } else {
        menu.style.right = "0";
        hamburgerbtn.style.transform = "rotate(-90deg)";
        document.body.style.overflowY = "hidden";
        hamburgerbtn.style.filter = "invert(0%)";
    }
}


// Hambuger menus for each page
if (hamburger) {
    hamburger.addEventListener("click", function () {
        var scrollPosition = window.scrollY;
        MenuBtn(hamburger);
        if (scrollPosition < 690) {
            hamburger.style.filter = "invert(0%)";
        } else if (scrollPosition > 691 && scrollPosition < 1200) {
            hamburger.style.filter = "invert(100%)";

        } else {
            hamburger.style.filter = "invert(0%)";
        }

    }
    )
}



document.querySelectorAll(".flip-card-inner").forEach(function (card) {
    card.addEventListener("click", function () {
        this.classList.toggle("flipped");
    });
});


// Adds the animation for the figma prototype frames
var following = document.getElementById("following");
var topstories = document.getElementById("topstories");

if (following) {
    window.addEventListener("load", function () {
        this.setInterval(function () {
            if (following.classList.contains("hidden")) {
                following.classList.remove("hidden");
                topstories.classList.add("hidden");
            } else {
                following.classList.add('hidden');
                topstories.classList.remove('hidden');
            }
        }
            , 5000)
    });

};




