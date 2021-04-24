import { createElement } from '../utils/dom.js';
import InputBoxView from './View.InputBox.js';

export default class CommentView {
  constructor(_comment) {
    this.element = null;
    this.text = null;
    this.replyButton = null;
    this.comment = _comment;
    this.render();
    this.replyClickHandler();
    this.bindCallbackToComments;
    this.replyCommentBox = new InputBoxView(this.comment.id);
    this.replyCommentBox.formSubmitHandler(this.bindCallbackToComments);
    this.parentId = null;
  }
  render = () => {
    this.element = createElement('div', {
      id: `cw__comment-div ${this.comment.id}`,
      'data-id': this.comment.id,
    });
    this.text = createElement('p', {
      id: `cw__comment-text ${this.comment.id}`,
      'data-id': this.comment.id,
    });
    this.text.textContent = this.comment.text;
    this.replyButton = createElement('button', {
      id: `cw__comment-reply ${this.comment.id}`,
      'data-id': this.comment.id,
    });
    this.replyButton.textContent = 'Reply';
    this.element.append(this.text, this.replyButton);
  };

  replyClickHandler = () => {
    this.replyButton.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('replyClickHandler', event.target['data-id']);
      this.parentId = event.target['data-id'];
      this.element.append(this.replyCommentBox.el);
    });
  };
  replySubmitHandler = (callback) => {
    this.bindCallbackToComments = callback;
  };
}
