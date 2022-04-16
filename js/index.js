// let images = [
//     'img/bg1.gif', 
//     'img/bg2.gif',
//     'img/bg3.gif',
//     'img/bg4.gif',
//     'img/bg5.gif',
//     'img/bg6.gif'
// ];

// function slideImage(i){
//     i = parseInt(i);
//     document.body.style.backgroundImage = `url(${images[i]})`;
// }

// const { Controller, Move } = splide.Components;

window.onload = () => {
    var splide = new Splide('.splide', {
        'arrows': false,
        'pagination': false
    });

    splide.mount();

    buttons = document.getElementsByClassName('slide-button');

    for (var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", (event) => {
            splide.go(parseInt(event.target.dataset.slideid));
        })
    }

    let bgArray = [
        'bg0.gif',
        'bg1.gif',
        'bg2.gif',
        'bg3.gif',
        'bg4.gif',
        'bg5.gif',
        'bg6.gif',
        'bg7.gif',
        'bg8.gif',
        'bg9.gif',
        'bg10.gif',
        'bg11.gif'];

    let bg = bgArray[Math.floor(Math.random() * bgArray.length)];
    let path = './img/';

    // window.onload = () => {
        console.log(bg);
        document.body.style.backgroundImage = `url(${path + bg})`;
    // }
}