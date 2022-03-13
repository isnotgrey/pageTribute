document.getElementById("btn-timeline").style.backgroundColor = "#a8a2a4";
function Movies(){
    Clean();
let teste = document.getElementById("filmography-film");
teste.style.display = "block";

document.getElementById("btn-filmography").style.backgroundColor = "#a8a2a4";

let outro = document.getElementById("timeline-line");
outro.style.display = "none";

let refen = document.getElementById("referencia");
refen.style.display = "none";

}

function Line(){
    Clean();
    document.getElementById("btn-timeline").style.backgroundColor = "#a8a2a4";
let teste = document.getElementById("filmography-film");
teste.style.display = "none";

let outro = document.getElementById("timeline-line");
outro.style.display = "block";

let refen = document.getElementById("referencia");
refen.style.display = "none";

}

function Reference(){
    Clean();
    document.getElementById("btn-references").style.backgroundColor = "#a8a2a4";
let teste = document.getElementById("filmography-film");
teste.style.display = "none";

let outro = document.getElementById("timeline-line");
outro.style.display = "none";

let refen = document.getElementById("referencia");
refen.style.display = "block";

}

function mosaicHover(){
let imagem = document.getElementById("image-one-js");
imagem.style.display = "none";

let mosaico = document.getElementById("mosaic-js");
mosaico.style.display = "block";


}

function imageHover(){
    let imagem = document.getElementById("image-one-js");
imagem.style.display = "block";

let mosaico = document.getElementById("mosaic-js");
mosaico.style.display = "none";


}
function Clean (){
 document.getElementById("btn-filmography").style.backgroundColor = "#383337";  
 document.getElementById("btn-timeline").style.backgroundColor = "#383337";  
 document.getElementById("btn-references").style.backgroundColor = "#383337";  
}
document.getElementById("btn-filmography").addEventListener("click", Movies);
document.getElementById("btn-timeline").addEventListener("click", Line);
document.getElementById("btn-references").addEventListener("click", Reference);
document.getElementById("image-one-js").addEventListener("mouseover", mosaicHover);
document.getElementById("mosaic-js").addEventListener("mouseout", imageHover);






