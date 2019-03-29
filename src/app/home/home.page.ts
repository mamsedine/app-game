import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  private cardList: Array<{ name: string, img: string, revealed: boolean }> = [];
  private numberOfDistictCards = 6;
  private hasARevaeledCard = false;
  private previousCard;
  private questionMarkUrl = '/assets/img/question-mark.png';
  private generateDeck() {
    for (let i = 0; i < this.numberOfDistictCards; i++) {
      let imgUrl = '/assets/img/cards/' + i + '.png';
      this.cardList.push({
        img: this.questionMarkUrl, name: imgUrl,
        revealed: false
      });
      this.cardList.push({
        img: this.questionMarkUrl, name: imgUrl,
        revealed: false
      });
    }
    this.shuffleDeck();
    /**
     * Mélange des cates
     */
  }
  private shuffleDeck() {
    this.cardList.forEach(
      (item, index, deck) => {
        //position aléatoire dans le tableau
        let nexPos = Math.floor(Math.random() * deck.length);
        //permutation
        deck[index] = deck[nexPos];
        deck[nexPos] = item;
      }
    );
  }
  private flipCard(card, index) {
    if (!card.revealed && !this.hasARevaeledCard) {

      //affichage de la carte
      card.img = card.name;
      card.revealed = true;
      this.hasARevaeledCard = true

      this.hasARevaeledCard = true;
      if (this.previousCard && this.previousCard.name == card.name) {
        this.previousCard.img = card.name;
        this.previousCard.revealed = true;
        this.hasARevaeledCard = false
      } else {

        // masquage de la carte au baut d'un certin temps
        setTimeout(
          () => {
            card.img = this.questionMarkUrl;
            card.revealed = false;
            this.previousCard = card;
            this.hasARevaeledCard = false
          },
          1000
        );

      }
    }
  }



  constructor() {
    this.generateDeck();
    this.shuffleDeck;
    console.log(this.cardList);
  }
}