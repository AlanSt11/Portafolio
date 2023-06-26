/*
==========================================
    VARIABLES PARA EL MODO OSCURO
==========================================
*/
let btnDark = document.getElementById('btn-dark');
let btnDarkResponsive = document.getElementById('btn-dark-responsive');
let body = document.getElementById('body');
let Imagenbtn = "Moon";
/*
==========================================
    VARIABLES PARA EL MENU
==========================================
*/
let btnMenu = document.getElementById('btn-menu');
let MenuResponsive = document.getElementById('menu-responsive')
/* 
============================================================
    VARIABLES PARA BOTONES DE LA SECCIÓN DE HABILIDADES
============================================================
*/
let btnFrontend = document.getElementById('btn-frontend');
let btnBackend = document.getElementById('btn-backend');
let btnDesing = document.getElementById('btn-desing');
let skillsFrontend = document.getElementById('skills-frontend');
let skillsBackend = document.getElementById('skills-backend');
let skillsDesing = document.getElementById('skills-desing');
/* 
============================================================
    VARIABLES PARA EL MODAL
============================================================
*/
const openModal = document.querySelector('.web-desing');
const marketing = document.querySelector('.Marketing');
const webDeveper = document.querySelector('.web-developer');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
/* 
============================================================
    EVENTOS PARA EL MODO OSCURO
============================================================
*/
load();

btnDark.addEventListener('click', function () {
    body.classList.toggle('dark');
    store(body.classList.contains('dark'));

    
    if(Imagenbtn == "Moon"){
        btnDark.src = "img/Sun.svg";
        Imagenbtn = "Sun";
    } else {
        btnDark.src = "img/Moon.svg";
        Imagenbtn = "Moon";
    }
});

btnDarkResponsive.addEventListener('click', function () {
    body.classList.toggle('dark');
    store(body.classList.contains('dark'));

    if(Imagenbtn == "Moon"){
        btnDarkResponsive.src = "img/Sun.svg";
        Imagenbtn = "Sun";
    } else {
        btnDarkResponsive.src = "img/Moon.svg";
        Imagenbtn = "Moon";
    }
});

btnMenu.addEventListener('click', function () {
    MenuResponsive.classList.toggle('active-menu');
});

function load(){
    const darkMode = localStorage.getItem('dark');
    if(!darkMode){
        store('false');
    }  else if(darkMode === 'true'){
        body.classList.add('dark');
    }
}

function loadIamge(){
    const darkMode = localStorage.getItem('image');
    if(!darkMode){
        store('false');
    }  else if(darkMode === 'true'){
        body.classList.add('dark');
    }
}

function store(value){
    localStorage.setItem('dark', value);
}
/* 
============================================================
    EVENTOS PARA LA SECCIÓN DE HABILIDADES
============================================================
*/
btnFrontend.addEventListener('click', function () {
    skillsFrontend.classList.toggle('active-skills-frontend');
    

    if(btnFrontend.classList.contains('fa-arrow-down')){
        btnFrontend.classList.remove('fa-arrow-down');
        btnFrontend.classList.add('fa-arrow-up');
    } else {
        btnFrontend.classList.remove('fa-arrow-up');
        btnFrontend.classList.add('fa-arrow-down');
    }
});

btnBackend.addEventListener('click', function () {
    skillsBackend.classList.toggle('active-skills-backend');

    if(btnBackend.classList.contains('fa-arrow-down')){
        btnBackend.classList.remove('fa-arrow-down');
        btnBackend.classList.add('fa-arrow-up');
    } else {
        btnBackend.classList.remove('fa-arrow-up');
        btnBackend.classList.add('fa-arrow-down');
    }
});

btnDesing.addEventListener('click', function () {
    skillsDesing.classList.toggle('active-skills-desing');

    if(btnDesing.classList.contains('fa-arrow-down')){
        btnDesing.classList.remove('fa-arrow-down');
        btnDesing.classList.add('fa-arrow-up');
    } else {
        btnDesing.classList.remove('fa-arrow-up');
        btnDesing.classList.add('fa-arrow-down');
    }
});
/* 
============================================================
    EVENTOS PARA EL MODAL
============================================================
*/
openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');

    var infoSevices = document.getElementById('text-info-services');

    let contentDesing =  `Desarrollo de paginas web con HTML, CSS y JavaScript. <br>
                        Diseño amigable con el usuario. <br> 
                        adaptable a cualquier dispositivo..`;

    let contentBackend = `Desarrollo de aplicaciones web con PHP y MySQL.<br>`;

    infoSevices.innerHTML = contentDesing;
});

webDeveper.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');

    var infoSevices = document.getElementById('text-info-services');

    let contentBackend = `Desarrollo de aplicaciones web con PHP y MySQL.<br>`;

    infoSevices.innerHTML = contentBackend;
});

marketing.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');

    var infoSevices = document.getElementById('text-info-services');

    let contentMarketing = `Marketing Digital. <br>
                            SEO y SEM. <br>
                            Google analitics. <br>
                            Facebook Ads. <br>`;

    infoSevices.innerHTML = contentMarketing;
});


closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});
/* 
============================================================
    EVENTOS PARA EL PORTAFOLIO
============================================================
*/
let container = document.getElementById('content-portafolio');
let contentHTML = "";

const data = [
    {img: 'img/wallp.jpg', link: 'https://wallp.netlify.app/', title: 'Aplicación de fondos de pantalla'},
    {img: 'img/Frases-suits.png', link: 'https://frases-suits.netlify.app/', title: 'Pagina web estatica de frases de la serie suits de Netflix'},
    {img: 'img/Datos-japon.jpg', link: 'https://datos-japon.netlify.app/', title: 'Pagina web estática de datos sobre Japón te ayudara a conocer este país'},
    {img: 'img/tarejeta-presentacion.png', link: 'https://tarejeta-presentacion.netlify.app/', title: 'Diseño de tarjeta de presentación'},
    {img: 'img/web-personal.png', link: 'https://demo-plantilla1.netlify.app/', title: 'Sitio web personal'},
    {img: 'img/web-restaurante.png', link: 'https://demo-restaurante.netlify.app/', title: 'Sitio web paara restaurantes'},
    {img: 'img/web-conferencia.png', link: 'https://conferencia-emprendimiento.netlify.app/', title: 'Sitio web para conferencias'}
];
data.forEach(valor => {
    contentHTML+=`<div class="card-portafolio">
    <a href='${valor.link}'><img src='${valor.img}' alt="imagen del proyecto" class="img-proyect"></a>
    <a href='${valor.link}' class="link-portafolio">${valor.title}</a>
</div>`;
})

container.innerHTML = contentHTML;
/* 
============================================================
    EFECTO MAQUINA DE ESCRIBIR
============================================================
*/

const typed = new Typed('.typed', {
    strings: ['<i class="title">Diseñador web</i>', '<i class="title">Desarollador web</i>'],

    color: '#000',
	typeSpeed: 75,
	startDelay: 300,
	backSpeed: 75,
	shuffle: false,
	backDelay: 1500,
	loop: true,
	loopCount: false,
	showCursor: true,
	cursorChar: '|',
	contentType: 'html',
})
/* 
============================================================
    EVENTO PARA BOTON DE DESLIZAR PARA ARRIBA
============================================================
*/
document.getElementById("button-up").addEventListener('click', scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop; //|| document.body.scrollTo;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 10));
        buttonUp.style.transform = "scale(0)";
    }
}

var buttonUp = document.getElementById("button-up");
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if(scroll > 500){
        buttonUp.style.transform = "scale(1)";
    } else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }
}

/* 
============================================================
    EFECTO SCROLL
============================================================
*/

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2000,
    delay: 400
});

ScrollReveal().reveal('.photo', { delay: 500,  origin: 'right' });
ScrollReveal().reveal('.hero__title', { delay: 500,  origin: 'top' });
ScrollReveal().reveal('.infoMe', { delay: 500,  origin: 'top' });
ScrollReveal().reveal('.about', { delay: 500,  origin: 'bottom' });
ScrollReveal().reveal('.skills', { delay: 500,  origin: 'bottom' });
ScrollReveal().reveal('.services', { delay: 500,  origin: 'bottom' });
ScrollReveal().reveal('.portafolio', { delay: 500,  origin: 'bottom' });
ScrollReveal().reveal('.card-portafolio', { delay: 500,  origin: 'bottom' });
ScrollReveal().reveal('.container__form', { delay: 500,  origin: 'bottom' });