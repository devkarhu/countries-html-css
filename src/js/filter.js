import { fetchDataFilter } from './fetchApi.js';
import { renderCard, renderCards } from './render.js';

const setFilter = async (region) => {
  const data = await fetchDataFilter(region);
  console.log(data);
  //   const templates = data.map((item) => templateCard(item));
  const cards = data.map((item) => renderCard(item));
  renderCards(cards);
  //   root.innerHTML = cards.join('');
};

export { setFilter };
