// variáveis para a 1ª função
var aside_aparece = document.getElementsByClassName("user-menu")[0];
var state = 0;
/* ********************/


// variáveis para a 2ª função
// acessando o quadro onde irá ser escrito o texto.
var postar0 = document.getElementsByClassName("submeter-comentario")[0];
var postar1 = document.getElementsByClassName("submeter-comentario")[1];
var postar2 = document.getElementsByClassName("submeter-comentario")[2];

// acessando a div que oculta os parárafos.
var aparecer0 = document.getElementsByClassName("postagem-comentario")[0];
var aparecer1 = document.getElementsByClassName("postagem-comentario")[1];
var aparecer2 = document.getElementsByClassName("postagem-comentario")[2];

// acessando o conteúdos dos parágrafos.
var texto0 = document.getElementsByClassName("p2")[0];
var texto1 = document.getElementsByClassName("p2")[1];
var texto2 = document.getElementsByClassName("p2")[2];
/* ********************/


// 1ª função do site, aparecer e ocultar div aside
function Aparecer_aside() 
{
    aside_aparece.classList.remove("sumir_aside");
    state = state + 1;

    if (state == 2) {
        aside_aparece.classList.add("sumir_aside");
        state = state - 2;
    }
}
/* ----------------------------------------------------------------------------------------------------*/




/* ----------------------------------------------------------------------------------------------------*/
// 2ª Função do site, para selecionar o anime que quer assistir.
function Assistir_anime0()
{
    let aparecer0 = document.getElementsByClassName("info_anime")[0];
    let aparecer1 = document.getElementsByClassName("info_anime")[1];
    let aparecer2 = document.getElementsByClassName("info_anime")[2];


    aparecer0.classList.remove("sumir");
    aparecer1.classList.add("sumir");
    aparecer2.classList.add("sumir");
}

function Assistir_anime1()
{
    let aparecer0 = document.getElementsByClassName("info_anime")[0];
    let aparecer1 = document.getElementsByClassName("info_anime")[1];
    let aparecer2 = document.getElementsByClassName("info_anime")[2];


    aparecer0.classList.add("sumir");
    aparecer1.classList.remove("sumir");
    aparecer2.classList.add("sumir");
}

function Assistir_anime2()
{
    let aparecer0 = document.getElementsByClassName("info_anime")[0];
    let aparecer1 = document.getElementsByClassName("info_anime")[1];
    let aparecer2 = document.getElementsByClassName("info_anime")[2];


    aparecer0.classList.add("sumir");
    aparecer1.classList.add("sumir");
    aparecer2.classList.remove("sumir");
}
/* ----------------------------------------------------------------------------------------------------*/




/* ----------------------------------------------------------------------------------------------------*/
// 4ª função do site, aparecer comentário submetido na área de texto
function Enviar_comentario0()
{
    aparecer0.classList.remove("sumir-comentario");

    postar0 = postar0.value;
    var guardar_conteudo0 = postar0;

    texto0.textContent = guardar_conteudo0;
}

function Enviar_comentario1()
{
    aparecer1.classList.remove("sumir-comentario");

    postar1 = postar1.value;
    var guardar_conteudo1 = postar1;

    texto1.textContent = guardar_conteudo1;
}

function Enviar_comentario2()
{
    aparecer2.classList.remove("sumir-comentario");

    postar2 = postar2.value;
    var guardar_conteudo2 = postar2;

    texto2.textContent = guardar_conteudo2;
}
/* ----------------------------------------------------------------------------------------------------*/




/* ----------------------------------------------------------------------------------------------------*/
// 5ª função, on mouseover no catálogo de animes para aparecer um background diferente quando o mouse passa por cima.

// Super onze
var catalog = document.getElementById("catalog")
function Display_super_onze_wp(){
    catalog.classList.add("super-onze-anime-card")
    catalog.classList.remove("catalog-background")
}
function Undisplay_super_onze_wp(){
    catalog.classList.remove("super-onze-anime-card")
    catalog.classList.add("catalog-background")
}

// Naruto
var catalog = document.getElementById("catalog")
function Display_naruto_wp(){
    catalog.classList.add("naruto-anime-card")
    catalog.classList.remove("catalog-background")
}
function Undisplay_naruto_wp(){
    catalog.classList.remove("naruto-anime-card")
    catalog.classList.add("catalog-background")
}

// One Piece
var catalog = document.getElementById("catalog")
function Display_one_piece_wp(){
    catalog.classList.add("one-piece-anime-card")
    catalog.classList.remove("catalog-background")
}
function Undisplay_one_piece_wp(){
    catalog.classList.remove("one-piece-anime-card")
    catalog.classList.add("catalog-background")
}
/* ----------------------------------------------------------------------------------------------------*/