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

const startingData = [
  'Micheal: 22',
  'Hulk: 23',
  'Jaden: 24',
  'Pharell: 25',
  'Jake: 26',
  'Solomon: 27',
  'Drake: 28',
];
const initializer = new Leaderboard(startingData);
initializer.render();
