<script setup>
import PaintEditor from './components/PaintEditor.vue'
import TextToImage from './components/TextToImage.vue'
import ImageToImage from './components/ImageToImage.vue'
import astrocat from './assets/astrocat.png'
</script>

<template>
  <main>
    <PaintEditor :image="astrocat" />
    <TextToImage />
    <ImageToImage />
  </main>
</template>

<style scoped>
main {
  display: flex;
  gap: 2rem;
}

header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
