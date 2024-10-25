<template>
  <section>
    <h1>Text to Image</h1>
    <div>
      <img :src="imgSrc" v-if="imgSrc" />
    </div>
    <textarea v-model="prompt" placeholder="Enter your prompt here"></textarea>
    <button @click="generateImage">Generate Image</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { textToImage, saveBase64AsImageFile } from '../stable.js'

const prompt = ref('')
const imgSrc = ref('')

async function generateImage() {
  if (!prompt.value) return
  const image = await textToImage(prompt.value)
  imgSrc.value = image
  saveBase64AsImageFile(image, 'generatedImage.png')
}
</script>

<style scoped>
textarea {
  width: 100%;
  min-width: 512px;
  height: 100px;
  margin-bottom: 10px;
}
button {
  display: block;
  margin-bottom: 10px;
}
div {
  width: 512px;
  height: 512px;
  border: 1px solid #c9c9c9;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
