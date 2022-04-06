import './style.css';
import Form from './modules/form.js';
import { add as Add, refresh as Refresh } from './modules/generate.js';

class Leaderboard {
  constructor(listArray) {
    this.listArray = listArray;
  }

  render = () => {
    Add(this.listArray);
    Refresh(this.listArray);
    Form(this.listArray);
  };
}

const initializer = new Leaderboard([]);
initializer.render();
