const swiperSlide = document.querySelector('.slider-container'),
	swiperSlides = document.querySelector('.swiper-container'),
	burger = document.querySelector('.burger'),
	close = document.querySelector('.menu__close'),
	menu = document.querySelector('.menu'),
	plauButtonsFirst = document.querySelectorAll('.main-slider__play');

let swiper = new Swiper(swiperSlide, {
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 105,
});

let swipers = new Swiper(swiperSlides, {
	centeredSlides: true,
	slidesPerView: '1',
	loop: true,
	spaceBetween: 10,
	fadeEffect: {
		crossFade: true
	},
	effect: 'fade',
	navigation: {
		nextEl: '.btn-right',
		prevEl: '.btn-left',
	},
});

swipers.on('transitionEnd', function () {
	let videos = document.querySelectorAll('.first__slider video');
	videos.forEach((el) => {
		el.pause();
		el.currentTime = 0;
	});
	plauButtonsFirst.forEach((el) => {
		el.style.display = 'block';
	})
});

burger.addEventListener('click', () => {
	menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
	menu.classList.remove('menu--visible');
});

plauButtonsFirst.forEach((el) => {
	el.addEventListener('click', (e) => {
		let video = e.currentTarget.closest('.main-slider__media').querySelector('video');
		video.play();
		e.currentTarget.style.display = 'none';
		setTimeout(() => {
			video.volume = 0.5;
		}, 1000)
	});
});
