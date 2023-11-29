<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div class="container m-3 flex w-auto justify-center">
    <div class="flashcard flex flex-col items-center justify-center">
      <h1
        class="question rounded-lg border-2 bg-slate-100 p-5 font-mono text-xl font-semibold shadow-lg">
        {{ question }}
      </h1>
      <h1
        class="answer rounded-lg border-2 bg-slate-100 p-5 font-mono text-xl font-semibold shadow-lg">
        {{ answer }}
      </h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container:hover {
  & .flashcard {
    transform: rotateY(180deg);
  }
}
.flashcard {
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  & h1 {
    width: 500px;
    height: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
}
.question {
  backface-visibility: hidden;
}
.answer {
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
}
</style>
