<script setup>
import p5 from 'p5'

const width = 512
const height = 512

const props = defineProps(['image'])

new p5(sketch => {
  let img

  sketch.preload = () => {
    img = sketch.loadImage(props.image)
  }

  sketch.setup = () => {
    sketch.createCanvas(width, height).parent('c')
    sketch.image(img, 0, 0)

    let saveButton = document.getElementById('save')
    saveButton.addEventListener('click', () => {
      sketch.save('canvas.png')
    })
  }

  // Use mouse events or other logic to erase part of the image
  sketch.mouseDragged = () => {
    sketch.erase()
    sketch.circle(sketch.mouseX, sketch.mouseY, 20) // Erase by drawing a circle
    sketch.noErase()
  }
})
</script>
<template>
  <section>
    <h1>Sketch</h1>
    <div id="c"></div>
    <p><i>Tip: Draw on the canvas to erase part of the image.</i></p>
    <br />
    <button id="save">save canvas as png</button>
  </section>
</template>
<style scoped>
#c {
  display: inline-flex;
  background-image: url('data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_700_190)"><rect width="32" height="32" fill="white"/><rect width="16" height="16" fill="%23D9D9D9"/><rect x="16" y="16" width="16" height="16" fill="%23D9D9D9"/></g><defs><clipPath id="clip0_700_190"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>');
  background-repeat: repeat;
}
</style>
