var el = document.getElementById( 'root' )

var colors = [ 'pink', 'salmon', 'orange', 'tomato', 'yellow' ]

var n = Math.floor( colors.length * Math.random() )
var color = colors[ n ]

el.style.color = color

el.textContent = color + ' cats and dogs.'
