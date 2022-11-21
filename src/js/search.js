import { fetchDataSearch } from './fetchApi.js';
import { renderCard, renderCards } from './render.js';
import { listenCardsGrid } from './detail.js';

export const onSearch = async (value) => {
  const data = await fetchDataSearch(value);
  if (data) {
    const cards = data.map((item) => renderCard(item));
    renderCards(cards);

    listenCardsGrid();
  } else {
    alert('No data found, please insert another text.');
  }
};
