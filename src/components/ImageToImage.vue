<template>
  <section>
    <h1>Image to Image</h1>
    <div>
      <img :src="imgSrc" />
    </div>
    <input type="file" @change="handleFileChange" accept="image/*" />
    <button @click="doSomething" :disabled="!imgSrc">Edit</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import {
  base64FromImageFile,
  textToImage,
  saveBase64AsImageFile,
} from '../stable.js'

const imgSrc = ref('')
const uploadedImage = ref(null)

const handleFileChange = async event => {
  const file = event.target.files[0]
  if (file) {
    imgSrc.value = await base64FromImageFile(file)
    uploadedImage.value = file
  }
}

const doSomething = async () => {
  // this function doesn't do anything
}
</script>

<style scoped>
input[type='file'] {
  display: block;
  margin-bottom: 10px;
}
div {
  width: 512px;
  height: 512px;
  border: 1px solid #c9c9c9;
  margin-bottom: 10px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
button {
  display: block;
}
</style>
