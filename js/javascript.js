var menu = document.getElementById("menu");

var hamburger = document.getElementById("hamburger");

var video = document.getElementById("video_player");

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

var divs = document.querySelectorAll(".text_boxes div");

divs.forEach(function(div) {
    div.addEventListener("mousemove", function(e) {
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
