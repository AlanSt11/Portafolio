const enlaces = document.getElementsByClassName("nav__list")[0];
const hamburgesa = document.getElementsByClassName("nav__icon")[0];
const menuHamburgesa = document.getElementById("nav__icon");
let fecha_inicio = document.getElementById("fecha");
let abierto = false;
var fecha;

/*MENU*/
const toggleMenu = () =>{
    enlaces.classList.toggle("nav__list2");
    enlaces.style.transition = "transform 0.5s ease-in-out";
}

hamburgesa.addEventListener("click", function(){
    toggleMenu();
    if(document.querySelector(".nav__list.nav__list2")){
        abierto = true;
    } else {
        abierto = false;
    }
})



window.addEventListener("resize", function(){
    if(screen.width > 800){
        if(abierto){
            toggleMenu();
            enlaces.style.transition = "none";
            abierto = false
        }
    }
})

/*EFECTO SCROLL*/
const typed = new Typed('.typed', {
    strings: ['<i class="title">Diseñador web</i>', '<i class="title">Desarollador de aplicaciones moviles</i>'],

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

ScrollReveal().reveal('.hero');
ScrollReveal().reveal('.nav__logo');
ScrollReveal().reveal('nav__item');
ScrollReveal().reveal('nav__link');
ScrollReveal().reveal('hero__main container');
ScrollReveal().reveal('.hero__text');
ScrollReveal().reveal('.imagen__portada');
ScrollReveal().reveal('.hero__title');
ScrollReveal().reveal('.hero__waves');
ScrollReveal().reveal('.title__proyects');
ScrollReveal().reveal('.proyects');
ScrollReveal().reveal('.proyects__descrition');
ScrollReveal().reveal('.proyects__img');
ScrollReveal().reveal('.txt__proyects');
ScrollReveal().reveal('.link__proyect1');
ScrollReveal().reveal('.title__skills');
ScrollReveal().reveal('.skills');
ScrollReveal().reveal('.img__skilss');
ScrollReveal().reveal('.footer__contacto');
ScrollReveal().reveal('.footer_imgContacto');
ScrollReveal().reveal('.gmail');
ScrollReveal().reveal('.Red__social');
ScrollReveal().reveal('.derechos');

/*EFECTO LOADER*/
window.addEventListener("load", function(e){
    e.preventDefault();
    document.getElementById("loader").classList.toggle("loader2")
})

fecha = new Date();
var fechaActual = fecha.getMonth() + 1 + "/";
fecha_inicio.innerHTML = "2021 - " + fecha.getFullYear();

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucaso')


$form.addEventListener('submit', handelSubmit)

function handelSubmit(event){
    event.preventDefault()
        const form = new FormData(this)
        $buttonMailto.setAttribute('href', `mailto:alansaldivar1105@gmail.com?subject=nombre ${form.get('nombre')} ${form.get('asunto')}&body=${form.get('mensaje')}`)
        $buttonMailto.click()
}


