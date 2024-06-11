const main4H2 = document.getElementById('main4-h2');
const main4P = document.getElementById('main4-p');
const main4Button = document.getElementById('main4-button');
const main4Img = document.querySelector('.main4-img');

let main4Counter = 0;

function insertmain4Content() {
    if (main4Counter % 2 === 0) {
        main4H2.textContent = consultorio.h2;
        main4P.textContent = consultorio.p;
        main4Button.textContent = consultorio.button;
        main4Img.style.backgroundImage = 'url('+consultorio.img+')';
    } else {
        main4H2.textContent = consultorio.h2Remoto;
        main4P.textContent = consultorio.pRemoto;
        main4Button.textContent = consultorio.buttonRemoto;
        main4Img.style.backgroundImage = 'url('+consultorio.imgRemoto+')';
    }


}

main4Button.addEventListener('click', function() {
    main4Counter++
    transitionAnim();
})

const main4text = document.querySelector('.main4-text');


function transitionAnim() {
    
    main4text.style.opacity = '0';
    main4Img.style.opacity = '0';

    setTimeout(function() {
        insertmain4Content()
        main4text.style.opacity = '1';
        main4Img.style.opacity = '1';
    }, 250);

}

