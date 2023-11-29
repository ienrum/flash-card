<script lang="ts">
import PracticeHeader from '@/components/PracticeHeader.vue';
import PracticeButton from '@/components/PracticeButton.vue';
import PracticeFlashCardList from '@/components/PracticeFlashCardList.vue';
import { defineComponent } from 'vue';

import { useFlashCardsStore } from '@/stores/flashCards';
import type { FlashCard } from '@/stores/flashCards/flashCards.type';

export default defineComponent({
  components: {
    PracticeHeader,
    PracticeButton,
    PracticeFlashCardList,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.flashCardsStore.getCards();
    this.cards = this.flashCardsStore.$state.cards;
  },
  data() {
    return {
      flashCardsStore: useFlashCardsStore(),
      cards: Array<FlashCard>(),
    };
  },
  methods: {
    genRandomId() {
      return (
        Math.random().toString(36).substr(2, 9) +
        new Date().getTime().toString(36)
      );
    },
    addCard() {
      this.flashCardsStore.addCard({
        id: this.genRandomId(),
        question: 'question',
        answer: 'answer',
        isEdit: false,
      });
    },
  },
});
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <PracticeHeader :title="title" />
    <PracticeFlashCardList v-model:cards="cards" />
    <PracticeButton
      title="Add Card"
      @click="() => addCard()"
      class="m-10 text-xl" />
  </div>
</template>
