const swiper = new Swiper('.swiper', {
	// Optional parameters
	slidesPerView: 1, //한 화면에 보이는 슬라이드의 개수
	spaceBetween: 20, //슬라이드간의 간격
	slidesPerGroup: 1, //한번에 슬라이드 되는 개수

	loop: true, //무한반복

	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
