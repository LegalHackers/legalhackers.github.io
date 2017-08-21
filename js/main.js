// Auto-scroll

$('.next').on('click', function (event){
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $( $( this ).attr('href') ).offset().top
	}, 500);
});

$('#mission').on('click', function (event)){
	event.preventDefault();
	
}