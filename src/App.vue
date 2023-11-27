<script lang="ts">
import Practice from '@/pages/Practice.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Practice,
  },
});
</script>

<template>
  <div class="h-screen bg-slate-200">
    <Practice title="영어 회화 1" />
  </div>
</template>

<style>
#app {
  background-color: #f3f4f6;
  display: fixed;
}
</style>
