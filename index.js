// import utils
import { routerFunction } from './src/router/index.js';

const onLoadApp = () => {
  location.hash = '_home';
};

//On load app function
window.addEventListener('load', () => onLoadApp());

//Listener hash changer
window.addEventListener('hashchange', () => routerFunction(location.hash));
