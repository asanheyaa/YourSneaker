
function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();

//
const header = document.querySelector('.header__burger-menu');

const headerBurger = document.querySelector('.header__burger');
headerBurger.addEventListener('click', (e) => {
	header.classList.toggle('_active');
	headerBurger.classList.toggle('_active');
	document.body.classList.toggle('_lock');
	if (headerBurger.classList.contains('_active')) {
		document.querySelector('.preview').style.zIndex = '0';
}
});




const swiper = new Swiper('.swiper-slider', {
	navigation: {
    	nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
	},
	// autoHeight: true,
	slidesPerView: 'auto',
	spaceBetween: 30,
	loop:true


});