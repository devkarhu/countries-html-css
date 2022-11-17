import { fetchData } from './fetchApi.js';

const url = 'https://restcountries.com/v3.1/all';

window.addEventListener('load', () => fetchData(url, '0'));
