const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const fetchDataFilter = async (region) => {
  // console.log('region: ', region);
  const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
  const data = await res.json();
  return data;
};

export { fetchData, fetchDataFilter };
