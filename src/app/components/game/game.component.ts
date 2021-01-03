import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { getRandomInt } from '../../../assets/utilities';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {
  @Output() changeScore: EventEmitter<any> = new EventEmitter<any>();
  gameResult: boolean = false;
  playerSelection: string = '';
  houseSelection: string = '';
  showGameResult: boolean = false;
  gameResultString: string = '';

  stringVariables = {
    victory: 'YOU WIN',
    defeat: 'YOU LOSE',
    tie: 'IT IS A TIE!'
  };

  constructor() { }

  ngOnInit(): void {
  }

  selectElement(element: string) {
    if (element) {
      this.playerSelection = element;
      this.generateHouseSelection();
      this.checkGameResult();
    }
    this.showGameResult = true;
  }

  generateHouseSelection() {
    let randomNumber = getRandomInt(3);
    if (randomNumber === 0) {
      this.houseSelection = 'Paper';
    } else if (randomNumber === 1) {
      this.houseSelection = 'Scissors';
    } else {
      this.houseSelection = 'Rock';
    }
  }

  checkGameResult() {
    const weapons: {[index: string]:any} = {
      Rock: {weakTo: 'Paper', strongTo: 'Scissors'},
      Paper: {weakTo: 'Scissors', strongTo: 'Rock'},
      Scissors: {weakTo: 'Rock', strongTo: 'Paper'}
    };
    if (this.playerSelection !== '' && this.houseSelection !== '') {
      if (weapons[this.playerSelection].strongTo === this.houseSelection) {
        //VICTORY
        this.gameResultString = this.stringVariables.victory;
        this.gameResult = true;
        this.changeScore.emit({victory: true});
        return;
      }
      if (weapons[this.playerSelection].weakTo === this.houseSelection) {
        //DEFEAT
        this.gameResultString = this.stringVariables.defeat;
        this.changeScore.emit({victory: false});
        return;
      }
        //TIE
      this.gameResultString = this.stringVariables.tie;
    }
  }

  playAgain() {
    this.showGameResult = false;
    this.playerSelection = '';
    this.houseSelection = '';
  }
}
