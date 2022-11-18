import { fetchData } from './fetchApi.js';
import { setFilter } from './filter.js';
import { renderByTypeOfCard } from './render.js';

const url = 'https://restcountries.com/v3.1/all';

// window.addEventListener('load', () => fetchData(url, '0'));
window.addEventListener('load', async () => {
  const data = await fetchData(url);
  renderByTypeOfCard(data, '0');
});

const buttonsFilters = document.querySelectorAll('.select_button');

buttonsFilters.forEach((item) => {
  item.addEventListener('click', (e) => {
    // console.log(e.target.textContent);
    setFilter(e.target.textContent);
  });
});
