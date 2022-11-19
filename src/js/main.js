import { fetchData } from './fetchApi.js';
import { setFilter } from './filter.js';
import { renderByTypeOfCard } from './render.js';
import { onSearch } from './search.js';

// window.addEventListener('load', () => fetchData(url, '0'));
window.addEventListener('load', async () => {
  const data = await fetchData();
  if (data) {
    renderByTypeOfCard(data, '0');
  } else {
    alert('Something is wrong.');
  }
});

const buttonsFilters = document.querySelectorAll('.select_button');

buttonsFilters.forEach((item) => {
  item.addEventListener('click', (e) => {
    // console.log(e.target.textContent);
    setFilter(e.target.textContent);
  });
});

const searchInput = document.getElementById('searchInput');

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', () => onSearch(searchInput.value));
