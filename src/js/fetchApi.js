import {
  renderCards,
  renderCard,
  renderCard1,
  renderCard2,
  renderCard3
} from './render.js';

const fetchData = async (url, viewType) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  let view = '';
  switch (viewType) {
    case '0':
      view = data.map((item) => renderCard(item));
      break;
    case '1':
      view = data.map((item) => renderCard1(item));
      break;
    case '2':
      view = data.map((item) => renderCard2(item));
      break;
    case '3':
      view = data.map((item) => renderCard3(item));
      break;
    default:
      console.log('404 error');
      break;
  }
  //   const view = data.map((item) => renderCard1(item));

  //   content.innerHTML = view.join('');
  renderCards(view);
};

export { fetchData };
