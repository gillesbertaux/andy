$(document).ready(function() {
	$('.info').click(function() {
		$('.modal').addClass('modal-show');
		$('.modal-overlay').addClass('modal-show');
	});
	$('.modal-close').click(function() {
	    $('.modal, .modal-overlay').removeClass('modal-show');
	});
});