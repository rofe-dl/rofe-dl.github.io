// const { Controller, Move } = splide.Components;

function randomizeBg(){
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

    console.log(bg);
    document.body.style.backgroundImage = `url(${path + bg})`;
}

window.onload = () => {
    randomizeBg();

    var splide = new Splide('.splide', {
        'arrows': false,
        'pagination': false
    });

    splide.mount();

    buttons = document.getElementsByClassName('slide-btn');

    buttons[0].classList.add('active');
    currentActiveButton = buttons[0];

    for (var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", (event) => {
            currentActiveButton.classList.remove('active');

            event.currentTarget.classList.add('active');
            currentActiveButton = event.currentTarget;

            splide.go(parseInt(event.currentTarget.dataset.slideid));
        })
    }

    
}