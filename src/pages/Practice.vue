<script lang="ts">
import PracticeHeader from './PracticeHeader.vue';
import PracticeFlashCard from '@/components/PracticeFlashCard.vue';
import PracticeButton from '@/components/PracticeButton.vue';
import PracticeFlashCardEditModal from '@/components/PracticeFlashCardEditModal.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    PracticeHeader,
    PracticeFlashCard,
    PracticeButton,
    PracticeFlashCardEditModal,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      fetchedData: [
        {
          id: '1',
          question: 'What is your name?',
          answer: 'My name is John.',
          isEdit: false,
        },
        {
          id: '2',
          question: 'Where are you from?',
          answer: 'I am from Korea.',
          isEdit: false,
        },
        {
          id: '3',
          question: 'How old are you?',
          answer: 'I am 20 years old.',
          isEdit: false,
        },
        {
          id: '4',
          question: 'What is your favorite food?',
          answer: 'My favorite food is pizza.',
          isEdit: false,
        },
      ],
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
      this.fetchedData.push({
        id: this.genRandomId(),
        question: 'question',
        answer: 'answer',
        isEdit: false,
      });
    },
    editCard(newValue: { id: string; question: string; answer: string }) {
      this.fetchedData = this.fetchedData.map((item) => {
        if (item.id === newValue.id) {
          return {
            ...item,
            question: newValue.question,
            answer: newValue.answer,
          };
        }
        return item;
      });
    },
    deleteCard(id: string) {
      this.fetchedData = this.fetchedData.filter((item) => item.id !== id);
    },
  },
});
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <PracticeHeader :title="title" />
    <template v-for="item in fetchedData" :key="item.id">
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
              <PracticeFlashCardEditModal
                :question="item.question"
                :answer="item.answer" />
            </template>
          </Teleport>
        </div>
      </div>
    </template>
    <PracticeButton
      title="Add Card"
      @click="() => addCard()"
      class="m-10 text-xl" />
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 768px) {
  .con {
    width: 768px;
  }
}

@media (max-width: 768px) {
  .con {
    width: 100%;
  }
}
</style>
