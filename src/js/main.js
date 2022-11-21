import { fetchData } from './fetchApi.js';
import { setFilter } from './filter.js';
import { renderByTypeOfCard } from './render.js';
import { onSearch } from './search.js';
import { listenCardsGrid } from './detail.js';
import { setRoute, routerHandler } from '../router/routes.js';

//load
window.addEventListener('load', async () => {
  setRoute('home');
  const data = await fetchData();
  if (data) {
    renderByTypeOfCard(data, '0');
    listenCardsGrid();
  } else {
    alert('Something is wrong.');
  }
});

//filter
const buttonsFilters = document.querySelectorAll('.select_button');
buttonsFilters.forEach((item) => {
  item.addEventListener('click', (e) => {
    setFilter(e.target.textContent);
  });
});

//search
const searchInput = document.getElementById('searchInput');

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', () => onSearch(searchInput.value));

//home
const logo = document.getElementById('logo');
logo.addEventListener('click', () => setRoute('home'));

//route
window.addEventListener('hashchange', () => routerHandler(location.hash));
