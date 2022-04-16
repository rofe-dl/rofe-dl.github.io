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

    document.body.style.backgroundImage = `url(${path + bg})`;
}

window.onload = () => {
    randomizeBg();

    var splide = new Splide('.splide', {
        'arrows': false,
        'pagination': false
    });

    splide.mount();

    slideButtons = document.getElementsByClassName('slide-btn');
    navButtons = document.getElementsByClassName('nav-btn')

    navButtons[0].classList.add('active');
    currentActiveButton = navButtons[0];

    for (var i = 0; i < slideButtons.length; i++){
        slideButtons[i].addEventListener("click", (event) => {
            let element = event.currentTarget;
            console.log('hello')
            if (element.classList.contains('nav-btn')){
                currentActiveButton.classList.remove('active');
                event.currentTarget.classList.add('active');
                currentActiveButton = element;
            }

            splide.go(parseInt(element.dataset.slideid));
        })
    }

    
}