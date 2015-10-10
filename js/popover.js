$(document).ready(function(){
	$('.link .button').hover(function() {
		var title = $(this).attr('data');
		$('.tip em').text(title);
		var tipLeft = $(this).parent().position().left + $(this).outerWidth()/2 - $('.tip').outerWidth()/2;
		$('.tip').css({'left' : tipLeft + 'px'}).animate({'top' : -50, 'opacity' : 1}, 300);
	}, function() {
		if(!$('.tip').is(':animated')) {
			$('.tip').animate({'top' : -100, 'opacity' : 0}, 200);
		}
	});
});