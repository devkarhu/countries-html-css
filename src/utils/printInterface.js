const body = document.querySelector('body');

const printTitle = (text) => {
  const title = document.createElement('h1');
  title.textContent = text;

  body.appendChild(title);
};

export { printTitle };
