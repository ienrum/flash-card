<script lang="ts">
import { defineComponent } from 'vue';
import PracticeButton from './PracticeButton.vue';

import { useFlashCardsStore } from '@/stores/flashCards';
export default defineComponent({
  components: {
    PracticeButton,
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      flashCardsStore: useFlashCardsStore(),
      question: this.card.question,
      answer: this.card.answer,
    };
  },
  methods: {
    saveCard() {
      this.flashCardsStore.updateCard({
        id: this.card.id,
        question: this.question,
        answer: this.answer,
        isEdit: false,
      });
    },
  },
});
</script>

<template>
  <form
    class="containerForEdit flex flex-row items-center justify-around"
    @submit.prevent="() => saveCard()">
    <div
      class="containerForInputs flex h-full w-full items-center justify-around rounded-2xl bg-slate-300 p-5">
      <div
        class="box-border flex h-full w-full flex-col content-center items-center justify-around p-5">
        <label for="question">Question</label>
        <textarea
          name="question"
          id="question"
          @input="
            ($event: Event) => {
              question = ($event.target as HTMLTextAreaElement).value;
            }
          "
          class="h-full w-full rounded-2xl border-4 border-dashed bg-slate-300 p-3 text-xl"
          >{{ question }}</textarea
        >
      </div>
      <div
        class="box-border flex h-full w-full flex-col content-center items-center justify-around p-5">
        <label for="answer">Answer</label>
        <textarea
          name="answer"
          id="answer"
          @input="
            ($event: Event) => {
              answer = ($event.target as HTMLTextAreaElement).value;
            }
          "
          class="h-full w-full rounded-2xl border-4 border-dashed bg-slate-300 p-3 text-xl"
          >{{ answer }}</textarea
        >
      </div>
      <PracticeButton title="Save" />
    </div>
  </form>
</template>

<style scoped lang="scss">
.containerForEdit {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;

  padding: 10rem;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  & textarea:focus {
    outline: none;
  }
}

@media screen and (max-width: 900px) {
  .containerForEdit {
    padding: 5rem;
  }

  .containerForInputs {
    flex-direction: column;
  }
}
</style>
