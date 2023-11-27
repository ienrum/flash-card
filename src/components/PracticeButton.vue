<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  emits: ['onClick'],
});
</script>

<template>
  <button class="border-2 border-dashed" @click="$emit('onClick', true)">
    {{ title }}
  </button>
</template>

<style scoped lang="scss">
button {
  border: 2px dashed black;
  border-radius: 0.375rem;

  padding: 0.5rem 1rem;
  margin-top: 2rem;
  &:hover {
    background-color: #f3f4f6;
  }
}
</style>
