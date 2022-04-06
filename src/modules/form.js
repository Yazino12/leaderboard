const formAction = (listArray) => {
  const form = document.querySelector('.add');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const [name, score] = form.elements;
    if (name.value.trim() && score.value) {
      const data = `${name.value.trim()}: ${score.value}`;
      listArray.push(data);
      name.value = '';
      score.value = '';
    }
  });
};

export default formAction;
