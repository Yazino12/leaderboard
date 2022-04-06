// ADD FUNCTIONALITY

const add = (tasks) => {
  const container = document.querySelector('.list');
  if (container.children[0]) container.innerHTML = '';
  tasks.forEach((task) => {
    const taskEl = `
    <li>${task}</li>`;

    container.innerHTML += taskEl;
  });
};

// REFRESH FUNCTIONALITY

const refresh = (tasks) => {
  const refreshButton = document.querySelector('.refresh');
  refreshButton.addEventListener('click', () => {
    add(tasks);
  });
};

export { add, refresh };
