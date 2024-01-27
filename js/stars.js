
let lastPosition = { x: null, y: null };

let images = ["images/stars/star-solid.svg", "images/stars/star-solid (2).svg", "images/stars/star-solid (3).svg", "images/stars/star-solid (4).svg", "images/stars/star-solid (5).svg"];
let colors = ["yellow", "green", "white"];
let sizes = ["5px", "10px", "10px", "15px", "15px", "25px"];
let animation = ["key1", "key2", "key3"];
div = document.querySelector('#stars_div');

window.addEventListener('mousemove', (event) => {
    let xPosition = event.clientX;
    let yPosition = event.clientY;

    if (lastPosition.x !== null && lastPosition.y !== null) {
        let dx = xPosition - lastPosition.x;
        let dy = yPosition - lastPosition.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 25) return;
    }

    let img = document.createElement('img');
    img.src = images[Math.floor(Math.random() * images.length)];
    img.style.position = 'absolute';
    img.style.width = sizes[Math.floor(Math.random() * sizes.length)];
    img.style.color = colors[Math.floor(Math.random() * colors.length)];
    div.appendChild(img);
    img.classList.add(animation[Math.floor(Math.random() * animation.length)])
    img.style.left = event.clientX + 'px';
    img.style.top = event.clientY + 'px';

    setTimeout(() => {
        img.remove();
    }, 2000);

    lastPosition = { x: xPosition, y: yPosition };
});