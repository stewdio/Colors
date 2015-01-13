

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




function makeColor( color ){

	var input = document.getElementById( 'input' )

	document.body.style.backgroundColor = '#'+ color
	disableSelection()
	input.selectionStart = 0
	input.selectionEnd   = input.value.length
}
function enableSelection(){

	document.getElementById( 'input' ).classList.remove( 'noselect' )
}
function disableSelection(){

	document.getElementById( 'input' ).classList.add( 'noselect' )
}




document.addEventListener( 'DOMContentLoaded', function(){

	makeColor( '#000' )
	document.getElementById( 'input' ).addEventListener( 'click', enableSelection )
	document.getElementById( 'input' ).addEventListener( 'keydown', enableSelection )
	document.getElementById( 'input' ).addEventListener( 'keyup', function(){

		var 
		input = this.value.toLowerCase().trim(),
		color = colorMap[ input ]

		if( color !== undefined ) makeColor( color )
	})
})



