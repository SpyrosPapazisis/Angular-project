$(document).ready(function() {
	const $menuButton = $('.menu-button');
	const $navDropdown = $('#nav-dropdown');

	$menuButton.on('click', function() {
		$navDropdown.slideToggle('slow');
	});

	$('.login-button').on('click', function() {
		$('.login-form').slideToggle('slow');
	});

	$(document).on('click','btn', function() {
		$('.details').toggle();
	});
});