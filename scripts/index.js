$(document).ready(function () {
	$('.modal-trigger').on('click', function () {
		$(this).closest('.card').find('.modal').fadeIn();
		$('body').addClass('.no-overflow');
	});

	$('.modal').on('click', function (event) {
		if ($(event.target).hasClass('modal')) {
			$(this).closest('.card').find('.modal').fadeOut();
			$('body').removeClass('.no-overflow');
		}
	});

	$('.closeImg').on('click', function () {
		$(this).closest('.card').find('.modal').fadeOut();
		$('body').removeClass('.no-overflow');
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
				nav: false,
			},
			1950: {
				items: 1,
				nav: false,
			},
		},
	});
});
