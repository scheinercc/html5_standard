$(document).ready( function () {

	var gridTrigger = $('.grid-button a'),
		gridTriggerText = gridTrigger.find('span').text(),
		origText = origText || gridTriggerText;

	gridTrigger.on( 'click', function ( e ) {

		var newText = 'Hide';

		if ( origText === gridTriggerText ) {
			origText = newText;
		} else {
			origText = gridTriggerText;
		}
		gridTrigger.find('span').text(origText);

		e.preventDefault();
	});
});