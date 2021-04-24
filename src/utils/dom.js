export const append = (target, element) => {
  return target.append(element);
};
export const appendChild = (target, element) => {
  return target.appendChild(element);
};

export const createElement = (el, options = {}) => {
  const element = document.createElement(el);
  for (let option in options) {
    element[option] = options[option];
  }
  return element;
};
export const createTextNode = (text) => {
  return document.createTextNode(text);
};
export const getElement = (query) => {
  return document.querySelector(query);
};
