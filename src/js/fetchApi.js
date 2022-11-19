export const fetchData = async () => {
  const url = 'https://restcountries.com/v3.1/all';
  const response = await fetch(url);
  const data = await response.json();

  if (data.status === 404) {
    return false;
  } else {
    return data;
  }
};

export const fetchDataFilter = async (region) => {
  // console.log('region: ', region);
  const url = `https://restcountries.com/v3.1/region/${region}`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.status === 404) {
    return false;
  } else {
    return data;
  }
};

export const fetchDataSearch = async (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.status === 404) {
    return false;
  } else {
    return data;
  }
};
