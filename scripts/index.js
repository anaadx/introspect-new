$(document).ready(function () {
	$('.modal-trigger').on('click', function () {
		$(this).closest('.card').find('.modal').fadeIn();
	});

	$('.modal').on('click', function (event) {
		if ($(event.target).hasClass('modal')) {
			$(this).closest('.card').find('.modal').fadeOut();
		}
	});

	$('.closeImg').on('click', function () {
		$(this).closest('.card').find('.modal').fadeOut();
	});

	$('.cases .carousel-projects').owlCarousel({
		loop: false,
		navSpeed: 500,
		center: false,
		margin: 0,
		responsiveClass: true,
		nav: true,
		autoplay: false,
		autoWidth: false,
		navContainerClass: 'navWhite owl-nav',
		responsive: {
			0: {
				items: 1,
			},
			800: {
				items: 1,
			},
			1024: {
				items: 1,
			},
			1950: {
				items: 1,
			},
		},
	});
});
