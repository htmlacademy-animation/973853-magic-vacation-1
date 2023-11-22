export default () => {
  let body = document.querySelector(`.js-body`);

  const addLoadedClass = () => {
    body.classList.add(`body__loaded`);
  };
  window.addEventListener(`load`, addLoadedClass);
};
