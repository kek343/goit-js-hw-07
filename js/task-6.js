function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  createBtn.addEventListener('click', function () {
    const amount = parseInt(input.value);

    if (amount > 0 && amount <= 100) {
      destroyBoxes();
      createBoxes(amount);
      input.value = '';
    }
  });

  destroyBtn.addEventListener('click', () => { destroyBoxes() });

  function createBoxes(amount) {
    const baseSize = 30;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
      const size = baseSize + i * 10;
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box); 
    }

    boxesContainer.appendChild(fragment); 
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
});
