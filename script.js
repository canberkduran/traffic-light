let dikdortgen = null;

function renkDegistir(element, renk) {
    const daireler = document.querySelectorAll('.daire');
    const lambaUstDaire = daireler[0];
    const lambaOrtaDaire = daireler[1];
    const lambaAltDaire = daireler[2];

    if (dikdortgen !== null) {
        dikdortgen.classList.remove('active');
    }

    lambaUstDaire.style.backgroundColor = 'gray';
    lambaOrtaDaire.style.backgroundColor = 'gray';
    lambaAltDaire.style.backgroundColor = 'gray';

    if (renk === 'kirmizi') {
        lambaUstDaire.style.backgroundColor = 'red';
    } else if (renk === 'sari') {
        lambaOrtaDaire.style.backgroundColor = 'yellow';
    } else if (renk === 'yesil') {
        lambaAltDaire.style.backgroundColor = 'green';
    }

    element.classList.add('active');
    dikdortgen = element;
}

function sayfaSifirla() {
    const daireler = document.querySelectorAll('.daire');
    daireler.forEach(daire => {
        daire.style.backgroundColor = 'gray';
    });

    const dikdortgenler = document.querySelectorAll('.dikdortgen');
    dikdortgenler.forEach(dikdortgen => {
        dikdortgen.classList.remove('active');
    });
}
