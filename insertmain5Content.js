const main5H2 = document.getElementById('main5-h2');
const main5Button = document.getElementById('main5-button');
const main5Icones = document.querySelectorAll('.main5-icones');
const main5Endereco = document.getElementById('endereco');
const main5Email = document.getElementById('email');
const main5Telefone = document.getElementById('telefone');

function insertmain5Content() {
    main5H2.textContent = contato.h2;
    main5Button.textContent = contato.button;
    main5Endereco.textContent = contato.endereco; 
    main5Email.textContent = contato.email; 
    main5Telefone.textContent = contato.telefone;

    for (let i = 0; i < main5Icones.length; i++) {
        main5Icones[i].src = contato.icones[i];
    }


}