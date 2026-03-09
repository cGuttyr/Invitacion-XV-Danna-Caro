const portada = document.getElementById("portada");
const pagina2 = document.getElementById("pagina2");
const musica = document.getElementById("musica");

/* CLICK PORTADA */

portada.addEventListener("click", () => {

pagina2.style.display = "block";

pagina2.scrollIntoView({
behavior:"smooth"
});

/* iniciar musica */

if(musica && musica.paused){
musica.play().catch(()=>{});
}

});


/* ANIMACIONES SCROLL */

const elementos = document.querySelectorAll('.animar');

const mostrarElementos = () => {

const alturaPantalla = window.innerHeight;

elementos.forEach(elemento => {

const distancia = elemento.getBoundingClientRect().top;

if(distancia < alturaPantalla - 100){
elemento.classList.add("visible");
}

});

};

window.addEventListener("scroll", mostrarElementos);


/* SLIDER */

const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const indicadores = document.querySelector('.slider-indicadores');

let index = 0;


/* INDICADORES */

for(let i=0;i<3;i++){

const dot = document.createElement("div");
dot.classList.add("indicador");

if(i === 1) dot.classList.add("activo");

indicadores.appendChild(dot);

}


function updateSlider(){

track.style.transform = `translateX(-${index * 100}%)`;

const dots = document.querySelectorAll(".indicador");

dots.forEach(dot => dot.classList.remove("activo"));

dots[1].classList.add("activo");

}


/* BOTONES SLIDER */

nextBtn.addEventListener("click", () => {

index++;

if(index >= slides.length) index = 0;

updateSlider();

});

prevBtn.addEventListener("click", () => {

index--;

if(index < 0) index = slides.length - 1;

updateSlider();

});


/* SWIPE MOVIL */

let startX = 0;

track.addEventListener("touchstart", e => {

startX = e.touches[0].clientX;

});

track.addEventListener("touchend", e => {

let endX = e.changedTouches[0].clientX;

if(startX - endX > 50){
nextBtn.click();
}

if(endX - startX > 50){
prevBtn.click();
}

});


/* LIGHTBOX */

document.addEventListener("DOMContentLoaded", () => {

const slidesImg = document.querySelectorAll(".slider-track .slide");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const cerrar = document.querySelector(".cerrar");

slidesImg.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex";
lightboxImg.src = img.src;

});

});

cerrar.addEventListener("click", () => {

lightbox.style.display = "none";

});

});


/* AUTO SLIDER */

setInterval(() => {

nextBtn.click();

}, 4500);