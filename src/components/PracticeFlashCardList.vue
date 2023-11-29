<script lang="ts">
import PracticeFlashCard from '@/components/PracticeFlashCard.vue';
import PracticeFlashCardEditModal from '@/components/PracticeFlashCardEditModal.vue';
import PracticeButton from '@/components/PracticeButton.vue';
import { defineComponent } from 'vue';

import { useFlashCardsStore } from '@/stores/flashCards';
import type { FlashCard } from '@/stores/flashCards/flashCards.type';
export default defineComponent({
  components: {
    PracticeButton,
    PracticeFlashCard,
    PracticeFlashCardEditModal,
  },
  mounted() {
    this.flashCardsStore.getCards();
    this.flashCardsStore.$subscribe((_, state) => {
      this.cards = state.cards;
    });
  },
  data() {
    return {
      flashCardsStore: useFlashCardsStore(),
      isEdit: false,
      cards: Array<FlashCard>(),
    };
  },
  methods: {
    deleteCard(id: string) {
      this.flashCardsStore.deleteCard(id);
    },
  },
});
</script>

<template>
  <template v-for="item in cards" :key="item.id">
    <div
      class="con flex w-full flex-row flex-wrap items-center justify-between p-5">
      <PracticeFlashCard :question="item.question" :answer="item.answer" />
      <div>
        <PracticeButton
          title="Del"
          @click="() => deleteCard(item.id)"
          class="m-3" />
        <PracticeButton title="Edit" @click="() => (item.isEdit = true)" />
        <Teleport to="body">
          <template v-if="item.isEdit">
            <PracticeFlashCardEditModal :card="item" />
          </template>
        </Teleport>
      </div>
    </div>
  </template>
</template>

<style scoped lang="scss">
@media (min-width: 768px) {
  .con {
    width: 768px;
  }
}

@media (max-width: 768px) {
  .con {
    flex-direction: column;
    width: 100%;
  }
}
</style>
