// ADD FUNCTIONALITY

const add = (tasks) => {
  const container = document.querySelector('.list');
  if (container.children[0]) container.innerHTML = '';
  tasks.forEach((task, i) => {
    const taskEl = `
    <li class="listItem">${task}</li>`;

    container.innerHTML += taskEl;
    if (i % 2 !== 0) container.children[i].style.background = '#DFDFDE';
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
