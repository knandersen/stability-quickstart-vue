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
    sketch.image(img, 0, 0)

    let saveButton = document.getElementById('save')
    saveButton.addEventListener('click', () => {
      sketch.save('myCanvas.png')
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
  <div id="c" />
  <br />
  <button id="save">Save</button>
</template>
<style scoped>
#c {
  width: 512px;
  height: 512px;
  display: inline-block;
  background-image: url('data:image/svg+xml,<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(%23clip0_700_190)"><rect width="40" height="40" fill="white"/><rect width="20" height="20" fill="%23D9D9D9"/><rect x="20" y="20" width="20" height="20" fill="%23D9D9D9"/></g><defs><clipPath id="clip0_700_190"><rect width="40" height="40" fill="white"/></clipPath></defs></svg>');
  background-repeat: repeat;
}
</style>
