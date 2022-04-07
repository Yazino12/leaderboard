import Game from './generate.js';

const formAction = () => {
  const form = document.querySelector('.add');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const [name, userScore] = form.elements;
    if (name.value.trim() && userScore.value) {
      const data = {
        user: name.value,
        score: userScore.value,
      };
      await Game.addGame(data);
      name.value = '';
      userScore.value = '';
    }
  });
};

export default formAction;
