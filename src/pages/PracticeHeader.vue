<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <h1
    class="flex w-full flex-row justify-center border-2 p-5 font-mono text-xl font-semibold underline decoration-dashed shadow-lg"
    style="margin-bottom: 4rem">
    {{ title }}
  </h1>
</template>

<style scoped lang="scss">
@media (max-width: 768px) {
  h1 {
    justify-content: start;
  }
}
</style>
