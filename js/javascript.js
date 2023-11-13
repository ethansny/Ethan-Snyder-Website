var menu = document.getElementById("menu");

var hamburger = document.getElementById("hamburger");

var hamburger_jcs = document.getElementById("hamburger_jcs");

var hamburger_projects = document.getElementById("hamburger_projects");

var hamburger_about = document.getElementById("hamburger_about");

var jcsheader = document.querySelector(".title");

var jasonsnyder_name = document.querySelector(".JasonText");

var Ethan_h2 = document.querySelector("#Ethan_h2");

var Ethan_text = document.getElementById("Ethan_text");

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
// Hambuger menus for each page
if (hamburger) {
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        if (scrollPosition < 690) {
            hamburger.style.filter = "invert(0%)";
            console.log(scrollPosition);
        } else if (scrollPosition > 691 && scrollPosition < 1300) {
            hamburger.style.filter = "invert(100%)";
            console.log(scrollPosition);
        } else {
            hamburger.style.filter = "invert(0%)";
            console.log(scrollPosition);
        }
    })
}

if (hamburger_jcs) {
    hamburger_jcs.addEventListener("click", function () {
        MenuBtn(hamburger_jcs);
})}

if (hamburger_projects) {
    hamburger_projects.addEventListener("click", function () {
        MenuBtn(hamburger_projects);
})}

if (hamburger_about) {
    hamburger_about.addEventListener("click", function () {
        MenuBtn(hamburger_about);
})}


var divs = document.querySelectorAll(".text_boxes div");

divs.forEach(function (div) {
    div.addEventListener("mousemove", function (e) {
        var rect = this.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        var deltaX = centerX - x;
        var deltaY = centerY - y;
        var text = this.querySelector(".graduate-text");
        text.style.transform = "translate(" + deltaX * 0.2 + "px, " + deltaY * 0.2 + "px)";
    });
});
