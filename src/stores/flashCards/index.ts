import { defineStore } from 'pinia';
import type { FlashCard, FlashCards } from './flashCards.type';

export const useFlashCardsStore = defineStore('flashCards', {
  state: () =>
    ({
      cards: [],
    }) as FlashCards,
  getters: {
    cards(state) {
      return state.cards;
    },
  },
  actions: {
    addCard(card: FlashCard) {
      this.$state.cards.push(card);
      this.setCards();
    },
    deleteCard(id: string) {
      this.$state.cards = this.$state.cards.filter((card) => card.id !== id);
      this.setCards();
    },
    updateCard(card: FlashCard) {
      const index = this.$state.cards.findIndex((c) => c.id === card.id);
      this.$state.cards.splice(index, 1, card);
      this.setCards();
    },
    setCards() {
      localStorage.setItem('cards', JSON.stringify(this.$state.cards));
    },
    getCards() {
      const stringCards = localStorage.getItem('cards');
      const cards: FlashCard[] | null = stringCards
        ? JSON.parse(stringCards)
        : null;
      if (cards) {
        this.$state.cards = cards;
      }
    },
  },
});
