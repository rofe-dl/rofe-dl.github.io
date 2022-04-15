let images = [
    'img/bg0.gif', 
    'img/bg1.gif',
    'img/bg2.gif',
    'img/bg3.gif',
    'img/bg4.gif',
    'img/bg5.gif'
];

function slideImage(i){
    i = parseInt(i);
    document.body.style.backgroundImage = `url(${images[i]})`;
}

window.onload = () => {
    buttons = document.getElementsByClassName('nav-button');
    for (var j = 0; j < buttons.length; j++){
        buttons[j].addEventListener("click", (event) => {
            slideImage(event.currentTarget.dataset.imageid);
        })
    }
}