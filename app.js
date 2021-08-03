const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const ref = {
  body: document.body,
  startClick: document.querySelector(`button[data-action="start"]`),
  stopClick: document.querySelector(`button[data-action="stop"]`),
};

const changeBtn = (remove, add) => {
  ref.startClick.disabled = add;
  ref.stopClick.disabled = remove;
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let random = null;
let colorSwith = null;
ref.startClick.addEventListener('click', () => {
  changeBtn(false, true);

  colorSwith = setInterval(() => {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
});

ref.stopClick.addEventListener(`click`, () => {
  clearInterval(colorSwith);
  changeBtn(true, false);
});
