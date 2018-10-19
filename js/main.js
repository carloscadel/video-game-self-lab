var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

var bg = new Background(ctx, '../images/bg (1).png', 2)
var bgCloud = new Background(ctx, '../images/cloud 2.png', 4)

setInterval(function() {
    update()
    drawEverything()
  }, 1000/60)
  
  function update() {
    bg.update()
    bgCloud.update()
  }
  
  function drawEverything() {
    ctx.clearRect(0,0,width,height)
    bg.draw()
    bgCloud.draw()
  }