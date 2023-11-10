var menu = document.getElementById("menu");

var hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function(){
    console.log("clicked");
    var scrollPosition = window.scrollY;
    if(menu.style.top == "0px"){
        menu.style.top = "-100vh";
        hamburger.style.transform = "rotate(0deg)";
        document.body.style.height = "100%";
        document.body.style.overflowY = "auto";
        if (scrollPosition < 690) {
            hamburger.style.filter = "invert(0%)";
        } else if(scrollPosition > 691 && scrollPosition < 1200){
            hamburger.style.filter = "invert(100%)";

        } else {
            hamburger.style.filter = "invert(0%)";
    }} else {
        menu.style.top = "0";
        hamburger.style.transform = "rotate(-90deg)";
        document.body.style.overflowY = "hidden";
        hamburger.style.filter = "invert(0%)";
    }

})


window.addEventListener("scroll", function(){
    var scrollPosition = window.scrollY;
    if (scrollPosition < 690) {
        hamburger.style.filter = "invert(0%)";
        console.log(scrollPosition);
    } else if(scrollPosition > 691 && scrollPosition < 1300){
        hamburger.style.filter = "invert(100%)";
        console.log(scrollPosition);
    } else {
        hamburger.style.filter = "invert(0%)";
        console.log(scrollPosition);
    }
})