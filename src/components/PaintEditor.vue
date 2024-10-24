<script setup>
import p5 from 'p5'

const props = defineProps(['image'])

new p5(sketch => {
  let img

  sketch.preload = () => {
    img = sketch.loadImage(props.image)
  }

  sketch.setup = () => {
    sketch.createCanvas(512, 512).parent('c')
    sketch.background(255)
    sketch.image(img, 0, 0)
    sketch.fill(100)
    sketch.rect(50, 50, 50, 50)
  }

  // Use mouse events or other logic to erase part of the image
  sketch.mouseDragged = () => {
    sketch.erase()
    sketch.rect(sketch.mouseX, sketch.mouseY, 50, 50) // Erase by drawing a rectangle
    sketch.noErase()
  }
})
</script>
<template>
  <div id="c" />
</template>
