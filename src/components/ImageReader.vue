<template>
  <section>
    <input type="file" @change="handleFileChange" />
    <p v-if="binaryData">Binary Data:</p>
    <textarea
      v-if="binaryData"
      rows="10"
      cols="50"
      :value="binaryData"
    ></textarea>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  emits: ['updateBinaryData'],
  setup(_, { emit }) {
    const binaryData = ref(null)

    const handleFileChange = event => {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()

        reader.onload = e => {
          binaryData.value = e.target.result
          emit('updateBinaryData', binaryData.value) // Emit the binaryData to parent
        }

        reader.readAsDataURL(file)
      }
    }

    return {
      binaryData,
      handleFileChange,
    }
  },
}
</script>
