import { setRoute } from '../router/routes.js';
import { fetchDataDetail } from './fetchApi.js';
import { renderDetail, renderDetailSection } from './render.js';

export const showDetail = async (name) => {
  setRoute(`details_${name}`);
  const data = await fetchDataDetail(name);
  if (data) {
    const details = renderDetail(data[0]);
    renderDetailSection(details);
  } else {
    alert('Something is wrong.');
  }
};

export const listenCardsGrid = () => {
  const cardsGrid = document.querySelectorAll('.card');
  cardsGrid.forEach((item) => {
    item.addEventListener('click', (e) => {
      const selected = e.target.parentElement.className;
      let country = '';
      if (selected === 'card') {
        country = e.target.offsetParent.childNodes[1].children[1].outerText;
      } else {
        country =
          e.target.offsetParent.offsetParent.childNodes[1].children[1]
            .outerText;
      }
      showDetail(country);
    });
  });
};
