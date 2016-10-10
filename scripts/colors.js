

var colorMap = {


	//  Crayon box.

	red:       'C00',
	orange:    'F60',
	yellow:    'FC0',
	green:     '090',
	blue:      '03C',
	purple:    '90C',
	brown:     '520',
	black:     '000',


	//  Remaining Grayscale.
	
	gray:      '888',
	grey:      '888',
	white:     'EEE',


	//  Remaining Process Colors.

	cyan:      '0EF',
	magenta:   'F0E',


	//  Ok, fine. Just a few more.

	pink:      'F9C',
	silver:    'DDE',
	gold:      'FB0',
	beige:     'DCB',
	turquoise: '0DC',//0C9
	maroon:    '800'


	//  You want more colors?
	//  Knock yourself out kid.
	//  Hell, just automate it via CSS named colors:
	//  http://en.wikipedia.org/wiki/X11_color_names
	//  As for me?
	//  I’m happy with this custom curation, 
	//  tuned to my own eyes. Basic, simple, bold.
}




function tryColor(){

	var	
	element = document.getElementById( 'input' )
	text    = element.value.toLowerCase().trim()
	color   = colorMap[ text ]
	if( color !== undefined ) document.body.style.backgroundColor = '#'+ color
}
document.addEventListener( 'DOMContentLoaded', function(){

	var element = document.getElementById( 'input' )

	element.setSelectionRange( element.value.length, element.value.length )
	element.addEventListener( 'keyup', tryColor )
	element.focus()
	tryColor()
})



