const renderCards = (view) => {
  const content = document.getElementById('root');
  content.innerHTML = view.join('');
};

const renderCard = (item) => {
  return `
    <div class="card">
      <div class="card__front">
        <img src="${item.flags.png}" alt="" class="card__front__img" />
        <h1 class="card__text">${item.name.common}</h1>
      </div>  
      <div class="card__info">
        <img src="${item.flags.png}" alt="" class="card__img" />
        <h1 class="card__title">${item.capital}</h1>
        <p class="card__subtitle">${item.population}</p>
        <p class="card__subtitle">${item.continents}</p>
      </div>
    </div>
  `;
};

const renderCard1 = (item) => {
  return `
    <div class="card1">
      <h1 class="card1__text">${item.name.common}</h1>
      <div class="card1__info">
        <img src="${item.flags.png}" alt="" class="card1__img" />
        <h1 class="card1__title">${item.capital}</h1>
        <p class="card1__subtitle">${item.population}</p>
        <p class="card1__subtitle">${item.continents}</p>
        <a href="#" class="card1__link">View more</a>
      </div>
    </div>
  `;
};

const renderCard2 = (item) => {
  return `
    <div class="card2">
      <div class="card2__front">
        <h1 class="card2__text">${item.name.common}</h1>
      </div>
      <div class="card2__back">
        <div class="card2__content--img">
          <img src="${item.flags.png}" alt="" class="card2__img" />
        </div>
        <div class="card2__content--info">
          <h1 class="card2__title">${item.capital}</h1>
          <p class="card2__subtitle">${item.population}</p>
          <a href="#" class="card2__link">View more</a>
        </div>
      </div>
    </div>
  `;
};

const renderCard3 = (item) => {
  return `
    <div class="card3">
      <h1 class="card3__text">${item.name.common}</h1>
      <div class="card3__content--info">
        <h1 class="card3__title">${item.capital}</h1>
        <p class="card3__subtitle">${item.population}</p>
        <a href="#" class="card3__link">View more</a>
      </div>
    </div>
  `;
};

export { renderCards, renderCard, renderCard1, renderCard2, renderCard3 };
