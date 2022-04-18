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

function init_splides(){
    var splide_2 = new Splide('.splide-2', {
        type : 'loop'
    });

    var splide_3 = new Splide('.splide-3', {
        type : 'loop'
    });

    var splide_4 = new Splide('.splide-4', {
        type : 'loop'
    });

    var splide_5 = new Splide('.splide-5', {
        type : 'loop'
    });

    splide_2.mount();
    splide_3.mount();
    splide_4.mount();
    splide_5.mount();
}

window.onload = () => {
    randomizeBg();

    var main_splide = new Splide('.splide', {
        arrows : false,
        pagination: false,
        drag: false
    });

    
    main_splide.mount();

    init_splides();

    // to scroll back to top when changing slides later down
    var right = document.querySelector('.right'); 

    // NEXT buttons and nav buttons are all slide buttons, but only
    // buttons on the left are nav buttons
    slideButtons = document.getElementsByClassName('slide-btn');
    navButtons = document.getElementsByClassName('nav-btn')

    navButtons[0].classList.add('active');
    currentActiveButtonIndex = 0;

    for (var i = 0; i < slideButtons.length; i++){
        slideButtons[i].addEventListener('click', (event) => {
            let slideID = parseInt(event.currentTarget.dataset.slideid);
            
            navButtons[currentActiveButtonIndex].classList.remove('active');
            navButtons[slideID].classList.add('active');
            currentActiveButtonIndex = slideID;

            main_splide.go(slideID);
            right.scrollTop = 0;
        })
    }

    
}