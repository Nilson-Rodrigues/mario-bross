/*Objetivo 1*/
const botaoTrailer = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal');

/*Objetivo - 2 */
const botaoFechar = document.querySelector('.fechar-modal');
const video = document.getElementById('video');
const linkYouTube = video.src;


/* 
Objetivo 1 - Quando o cliente clicar no botão de veja o trailer devemos abrir
a modal com o video.*/

botaoTrailer.addEventListener("click", () => {
    /*Com o classlist eu posso adicionar e remover classes...*/
    modal.classList.add('aberto');
    /*Adicionando o link novamente do video */
    video.setAttribute('src', linkYouTube);
});

/*
Objetivo 2 - Quando o usuário clicar no botão X o video deve fechar.
*/

botaoFechar.addEventListener('click', () => {

    modal.classList.remove('aberto');
    /*Setando o valor vazio no src para que não encontre o caminho do video,
    para que ele não fique rodando em segundo plano*/
    video.setAttribute('src','');
})
