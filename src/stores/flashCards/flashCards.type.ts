export interface FlashCard {
  id: string;
  question: string;
  answer: string;
  isEdit: boolean;
}

export interface FlashCards {
  cards: FlashCard[];
}
