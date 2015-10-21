$('.city_graph').hover(function() {
	$(this).find('h4').css('color', '#333399');
	$(this).find('.city_name_bar').css('background', '#333399');
	// $(this).find('h4').css('background', '#22ddcc');
	$(this).find('a').css('background', 'none');
}, function() {
	$(this).find('h4').css('color', '#22ddcc');
	$(this).find('.city_name_bar').css('background', '#22ddcc');
});

$('.bottom_links a').hover(function() {
	$(this).css('background-color', '#000');
	console.log('yes')
	// $(this).find('h4').css('background', '#22ddcc');
	// $(this).find('h4').css('background', '#22ddcc');
	// $(this).find('a').css('background', 'none');
}, function() {
	$(this).find('h4').css('color', '#22ddcc');
	$(this).find('h4').css('background', 'none');
});