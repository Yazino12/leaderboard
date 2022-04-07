export default class Game {
  constructor(gameID) {
    this.gameID = gameID;
  }

  // CREATE GAME
  static game = async () => {
    const data = {
      method: 'POST',
      body: JSON.stringify({
        name: 'Football Game',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
      data,
    );
    const result = await response.json();
    [, , , this.gameID] = result.result.split(' ');
  };

  // ADD GAME

  static addGame = async (userData) => {
    const data = {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    const response = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameID}/scores/`,
      data,
    );
    const result = await response.json();

    return result;
  };

  // GET GAME

  static getGame = async () => {
    const requestURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${this.gameID}/scores/`;
    const request = new Request(requestURL);

    const response = await fetch(request);
    const result = await response.json();

    return result.result;
  };

  // REFRESH FUNCTIONALITY

  static refresh = (tasks) => {
    const refreshButton = document.querySelector('.refresh');
    refreshButton.addEventListener('click', async () => {
      tasks = await this.getGame();

      const container = document.querySelector('.list');
      if (container.children[0]) container.innerHTML = '';
      tasks.forEach((task, i) => {
        const taskEl = `
        <li class="listItem">${task.user}: ${task.score}</li>`;

        container.innerHTML += taskEl;
        if (i % 2 !== 0) container.children[i].style.background = '#DFDFDE';
      });
    });
  };
}
