'use strict'

var el = document.getElementById( 'root' )

function update () {
  var colors = [ 'pink', 'salmon', 'orange', 'tomato', 'yellow' ]

  var n = Math.floor( colors.length * Math.random() )
  var color = colors[ n ]
  el.style.color = color
el.textContent = color + ' cats and dogs.'
}
update()

function tick () {
  update()
  setTimeout(tick, 1000 / 1)
}
tick()
