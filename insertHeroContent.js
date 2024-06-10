const h6Hero = document.getElementById('hero-h6');
const h1 = document.getElementById('h1');
const heroP = document.getElementById('hero-p');
const heroButton = document.getElementById('hero-button');
const heroSection = document.querySelector('.main1-hero');

function insertHeroContent() {
    h6Hero.textContent = heroCont.h6;
    h1.textContent = heroCont.h1;
    heroP.textContent = heroCont.p;
    heroButton.textContent = heroCont.button;
    heroSection.style.backgroundImage = 'url(' + heroCont.img + ')';

}