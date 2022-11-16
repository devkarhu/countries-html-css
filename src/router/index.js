import { printTitle } from '../utils/printInterface.js';

const routerFunction = (location) => {
  const [, method] = location.split('_');
  switch (method) {
    case 'home':
      console.log('in home');
      printTitle(method);
      break;
    case 'search':
      console.log('in search');
      printTitle(method);
      break;
    case 'filter':
      console.log('in filter');
      printTitle(method);
      break;
    case 'details':
      console.log('in details');
      printTitle(method);
      break;
    default:
      console.log('404 error');
      break;
  }
};

export { routerFunction };
