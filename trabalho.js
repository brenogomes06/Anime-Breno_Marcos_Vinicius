﻿// 1ª função do site, aparecer e ocultar div aside
var aside_aparece = document.getElementsByClassName("user-menu")[0];
var state = 0;

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


// 3ª função do site, onmouseover para deixar a lista de episódios em negrito.
// Super Onze
function Deixar_negrito0() 
{
    let negrito_0 = document.getElementsByClassName("episodio")[0];


    negrito_0.style.fontWeight = "bold";
}

function Deixar_negrito1() 
{

    let negrito_1 = document.getElementsByClassName("episodio")[1];


    negrito_1.style.fontWeight = "bold";
}

function Deixar_negrito2() 
{

    let negrito_2 = document.getElementsByClassName("episodio")[2];


    negrito_2.style.fontWeight = "bold";
}

function Deixar_negrito3() 
{

    let negrito_3 = document.getElementsByClassName("episodio")[3];


    negrito_3.style.fontWeight = "bold";
}

function Deixar_negrito4() 
{

    let negrito_4 = document.getElementsByClassName("episodio")[4];


    negrito_4.style.fontWeight = "bold";
}

function Deixar_negrito5() 
{

    let negrito_5 = document.getElementsByClassName("episodio")[5];


    negrito_5.style.fontWeight = "bold";
}


// Naruto
function Deixar_negrito0() 
{
    let negrito_0 = document.getElementsByClassName("episodio")[6];


    negrito_0.style.fontWeight = "bold";
}

function Deixar_negrito1() 
{

    let negrito_1 = document.getElementsByClassName("episodio")[7];


    negrito_1.style.fontWeight = "bold";
}

function Deixar_negrito2() 
{

    let negrito_2 = document.getElementsByClassName("episodio")[8];


    negrito_2.style.fontWeight = "bold";
}

function Deixar_negrito3() 
{

    let negrito_3 = document.getElementsByClassName("episodio")[9];


    negrito_3.style.fontWeight = "bold";
}

function Deixar_negrito4() 
{

    let negrito_4 = document.getElementsByClassName("episodio")[10];


    negrito_4.style.fontWeight = "bold";
}

function Deixar_negrito5() 
{

    let negrito_5 = document.getElementsByClassName("episodio")[11];


    negrito_5.style.fontWeight = "bold";
}

// One Piece
function Deixar_negrito0() 
{
    let negrito_0 = document.getElementsByClassName("episodio")[12];


    negrito_0.style.fontWeight = "bold";
}

function Deixar_negrito1() 
{

    let negrito_1 = document.getElementsByClassName("episodio")[13];


    negrito_1.style.fontWeight = "bold";
}

function Deixar_negrito2() 
{

    let negrito_2 = document.getElementsByClassName("episodio")[14];


    negrito_2.style.fontWeight = "bold";
}

function Deixar_negrito3() 
{

    let negrito_3 = document.getElementsByClassName("episodio")[15];


    negrito_3.style.fontWeight = "bold";
}

function Deixar_negrito4() 
{

    let negrito_4 = document.getElementsByClassName("episodio")[16];


    negrito_4.style.fontWeight = "bold";
}

function Deixar_negrito5() 
{

    let negrito_5 = document.getElementsByClassName("episodio")[17];


    negrito_5.style.fontWeight = "bold";
}





/* ----------------------------------------------------------------------------------------------------*/

// 4ª função do site, onmouseout para tirar o negrito da lista de episódios.
// Super Onze



// Naruto
function Tirar_negrito0() 
{
    let negrito_0 = document.getElementsByClassName("episodio")[6];


    negrito_0.style.fontWeight = "normal";
}

function Tirar_negrito1() 
{

    let negrito_1 = document.getElementsByClassName("episodio")[7];


    negrito_1.style.fontWeight = "normal";
}

function Tirar_negrito2() 
{

    let negrito_2 = document.getElementsByClassName("episodio")[8];


    negrito_2.style.fontWeight = "normal";
}

function Tirar_negrito3() 
{

    let negrito_3 = document.getElementsByClassName("episodio")[9];


    negrito_3.style.fontWeight = "normal";
}

function Tirar_negrito4() 
{

    let negrito_4 = document.getElementsByClassName("episodio")[10];


    negrito_4.style.fontWeight = "normal";
}

function Tirar_negrito5() 
{

    let negrito_5 = document.getElementsByClassName("episodio")[11];


    negrito_5.style.fontWeight = "normal";
}


// One Piece
function Tirar_negrito0() 
{
    let negrito_0 = document.getElementsByClassName("episodio")[12];


    negrito_0.style.fontWeight = "normal";
}

function Tirar_negrito1() 
{

    let negrito_1 = document.getElementsByClassName("episodio")[13];


    negrito_1.style.fontWeight = "normal";
}

function Tirar_negrito2() 
{

    let negrito_2 = document.getElementsByClassName("episodio")[14];


    negrito_2.style.fontWeight = "normal";
}

function Tirar_negrito3() 
{

    let negrito_3 = document.getElementsByClassName("episodio")[15];


    negrito_3.style.fontWeight = "normal";
}

function Tirar_negrito4() 
{

    let negrito_4 = document.getElementsByClassName("episodio")[16];


    negrito_4.style.fontWeight = "normal";
}

function Tirar_negrito5() 
{

    let negrito_5 = document.getElementsByClassName("episodio")[17];






    /* ----------------------------------------------------------------------------------------------------*/
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


    negrito_5.style.fontWeight = "normal";
}





// 5ª função do site, aparecer comentário submetido na área de texto
