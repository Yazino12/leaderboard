import './style.css';
import Form from './modules/form.js';
import Game from './modules/generate.js';

class Leaderboard {
  constructor(listArray) {
    this.listArray = listArray;
  }

  render = async () => {
    await Game.game();
    Game.refresh(this.listArray);
    Form();
  };
}

const initializer = new Leaderboard([]);
initializer.render();
