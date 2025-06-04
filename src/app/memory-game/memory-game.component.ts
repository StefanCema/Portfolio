import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-memory-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memory-game.component.html',
  styleUrl: './memory-game.component.css',
})
export class MemoryGameComponent {
  cards = [
    { id: 1, value: 'A', flipped: false, matched: false },
    { id: 2, value: 'A', flipped: false, matched: false },
    { id: 3, value: 'B', flipped: false, matched: false },
    { id: 4, value: 'B', flipped: false, matched: false },
    { id: 5, value: 'C', flipped: false, matched: false },
    { id: 6, value: 'C', flipped: false, matched: false },
    { id: 7, value: 'D', flipped: false, matched: false },
    { id: 8, value: 'D', flipped: false, matched: false },
  ];
  flippedCards: any[] = [];
  gameWon = false;

  constructor() {
    this.shuffleCards();
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  flipCard(card: any) {
    if (card.flipped || card.matched || this.flippedCards.length >= 2) return;

    card.flipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.checkMatch();
    }
  }

  checkMatch() {
    const [card1, card2] = this.flippedCards;
    if (card1.value === card2.value) {
      card1.matched = true;
      card2.matched = true;
      this.flippedCards = [];
      this.checkWin();
    } else {
      setTimeout(() => {
        card1.flipped = false;
        card2.flipped = false;
        this.flippedCards = [];
      }, 1000);
    }
  }

  checkWin() {
    if (this.cards.every((card) => card.matched)) {
      this.gameWon = true;
    }
  }

  resetGame() {
    this.cards.forEach((card) => {
      card.flipped = false;
      card.matched = false;
    });
    this.flippedCards = [];
    this.gameWon = false;
    this.shuffleCards();
  }
}
