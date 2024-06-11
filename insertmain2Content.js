const main2BG = document.querySelector('.main2-about')
const fotoPerfil = document.getElementById('profile-pic')
const clipesSVG = document.getElementById('clip-icon');
const main2H2 = document.getElementById('main2-h2');
const main2P1 = document.getElementById('main2-p1');
const main2P2 = document.getElementById('main2-p2');
const paperContainer = document.querySelector('.main2-text')

function insertmain2Content() {
    main2BG.style.backgroundImage = 'url(' + aboutMeCont.bg + ')';
    fotoPerfil.src = aboutMeCont.foto;
    // clipesSVG.src = aboutMeCont.clipes;
    main2H2.textContent = aboutMeCont.h2;
    main2P1.textContent = aboutMeCont.p1;
    main2P2.textContent = aboutMeCont.p2;
    paperContainer.style.backgroundImage = 'url(' + aboutMeCont.paper + ')';
}