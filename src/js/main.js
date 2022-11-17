// import { renderCard1, renderCard2, renderCard3 } from './render.js';
import { fetchData } from './fetchApi.js';

const url = 'https://restcountries.com/v3.1/all';

// const content = document.getElementById('root');

window.addEventListener('load', () => fetchData(url, '0'));

// const fetchData = async (url, view) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);

//   const view = data.map((item) => renderCard1(item));

//   content.innerHTML = view.join('');
// };
