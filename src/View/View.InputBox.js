import { createElement } from '../utils/dom.js';

export default class InputBoxView {
  constructor(_parentId = null) {
    this.form;
    this.inputField;
    // this.parentId = _parentId;
    this.submitButton;

    this.el = this.renderEl();
  }
  renderEl = () => {
    this.form = createElement('form');
    this.inputField = createElement('input', {
      type: 'text',
      placeholder: 'Enter Comment',
      id: 'cw_input-field',
    });
    this.submitButton = createElement('input', {
      type: 'submit',
      id: 'cw_input-submit',
      value: 'Comment',
    });
    this.form.prepend(this.inputField);
    this.form.append(this.submitButton);

    return this.form;
  };

  formSubmitHandler = (callback) => {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log('FORM-SUBMIT-EVENT');
      callback(this.inputField.value);
      this.inputField.value = '';
    });
  };
}
