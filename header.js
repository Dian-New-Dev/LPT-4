const logo = document.getElementById('logo');
const ancoras = document.querySelectorAll('.ancoras');
const headerButton = document.getElementById('header-button');

function insertHeaderContent() {
    logo.src = contHeader.logo;
    headerButton.textContent = contHeader.button;
    for (let i = 0; i < contHeader.ancora.length; i++) {
        ancoras[i].textContent = contHeader.ancora[i];
    }
    

}