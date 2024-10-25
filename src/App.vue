<script setup>
import { ref } from 'vue'
import PaintEditor from './components/PaintEditor.vue'
import img from './assets/f.png'
import { textToImage, saveBase64AsImageFile } from './stable.js'

let status = ref('idle')
let imgSrc = ref('')

async function generateImage() {
  status.value = 'loading'
  const img = await textToImage('cat in a space suit floating in space')
  status.value = 'done'
  imgSrc.value = img

  saveBase64AsImageFile(img, 'f.png')
}
</script>

<template>
  <main>
    <PaintEditor :image="img" />
    {{ status }}
    <button @click="generateImage">generate</button>
    <img :src="imgSrc" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
