export const setRoute = (route) => {
  location.hash = `_${route}`;
};

export const routerHandler = (location) => {
  const [, method] = location.split('_');
  switch (method) {
    case 'home':
      console.log('in home');
      window.location.reload();
      break;
    case 'search':
      console.log('in search');
      break;
    case 'filter':
      console.log('in filter');
      break;
    case 'details':
      console.log('in details');
      break;
    default:
      console.log('404 error');
      break;
  }
};
