// Initialize jRumble on Selector
$('#rumble-element').jrumble();

// Start rumble on element
$('#rumble-element').trigger('startRumble');

// Stop rumble on element
$('#rumble-element').trigger('stopRumble');


$('#rumble-element').jrumble({
	speed: 100
});

$('rumble-element').hover(function(){
	$(this).trigger('startRumble');
}, function(){
	$(this).trigger('stopRumble');
});