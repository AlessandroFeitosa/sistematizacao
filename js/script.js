// Fecha o menu principal
function fechaMenu() {
    const menu = document.querySelector('.menu');
    if (menu.style.display === 'none') {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

//Oculta o menu suspenso (Quando está no modo reduzido)
function ocultaMenu() {
    if (window.innerWidth < '850') {
        const menu = document.querySelector('.menu');
        menu.style.display = "none";
    }
}

//Mostra menu principal como flex para janela com tamanho reduzido
function showMenu(x) {
    const menu = document.querySelector('.menu');
    if (x.matches) {
        menu.style.display = "flex";
    }
}

// Abre janela de imagens da galeria
function abreJanela() {
    const botao = document.querySelectorAll(".section-4-img");
    const janelaTransparente = document.querySelector(".janela-transparente");
    const janelaImagem = document.querySelector(".janela-imagem");
    for (let i = 0; i < botao.length; i++) {
        botao[i].addEventListener("click", function () {
            janelaTransparente.style.display = 'block';
            janelaImagem.src = selecionaImagem(i);
        });
    }
}

// Fecha janela de imagens da galeria
function fechaJanela() {
    const janelaTransparente = document.querySelector(".janela-transparente");
    janelaTransparente.addEventListener('click', () => {
        janelaTransparente.style.display = 'none';
    });
}

//Retorna a imagem selecionada
function selecionaImagem(i) {
    if (i === 0) return './imgs/SESCAD/SESCAD-01.png';
    if (i === 1) return './imgs/SESCAD/SESCAD-02.png';
    if (i === 2) return './imgs/SESCAD/SESCAD-03.png';
    if (i === 3) return './imgs/SESCAD/SESCAD-04.png';
    if (i === 4) return './imgs/SESCAD/SESCAD-05.png';
    if (i === 5) return './imgs/SESCAD/SESCAD-06.png';
    if (i === 6) return './imgs/AREDE/AREDE-01.png';
    if (i === 7) return './imgs/AREDE/AREDE-02.png';
    if (i === 8) return './imgs/AREDE/AREDE-03.png';
    if (i === 9) return './imgs/AREDE/AREDE-04.png';
    if (i === 10) return './imgs/AREDE/AREDE-05.png';
    if (i === 11) return './imgs/AREDE/AREDE-06.png';
    if (i === 12) return './imgs/CADAMS/CADAMS-01.png';
    if (i === 13) return './imgs/CADAMS/CADAMS-02.png';
    if (i === 14) return './imgs/CADAMS/CADAMS-03.png';
    if (i === 15) return './imgs/CADAMS/CADAMS-04.png';
    if (i === 16) return './imgs/CADAMS/CADAMS-05.png';
    if (i === 17) return './imgs/CADAMS/CADAMS-06.png';
}

// Vigia o tamanho da tela para retornar o menu principal para o modo normal.
function vigiaTela() {
    let x = window.matchMedia("(min-width: 850px)");
    showMenu(x);
    x.addListener(showMenu);
}

vigiaTela();
abreJanela();
fechaJanela();



