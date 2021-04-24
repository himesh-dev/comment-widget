import Controller from './Controller/Controller.index.js';
import Model from './Model/Model.index.js';
import View from './View/View.index.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  console.log('DOMContentLoaded');
  const app = new Controller(new Model(), new View(root));
});
