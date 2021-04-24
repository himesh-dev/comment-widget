import { createElement } from '../utils/dom.js';
import CommentView from './View.comment.js';
import InputBoxView from './View.InputBox.js';

export default class CommentsView {
  constructor() {
    this.mainContainer = createElement('div', {
      id: 'cw__comment-section',
    });
    this.comments;
    this.callback;
    this.parentId = null;
    this.commentBox = new InputBoxView();
    this.commentBox.formSubmitHandler(this.bindReplyCallback);
  }

  render = (comments) => {
    while (this.mainContainer.firstChild) {
      this.mainContainer.removeChild(this.mainContainer.firstChild);
    }
    this.comments = comments;
    const fragment = document.createDocumentFragment();
    for (const [key, value] of comments.entries()) {
      if (value.parentId) {
        continue;
      }
      const comment = this.renderComment(value);
      console.log({ comment });
      // comment.replySubmitHandler(this.replyCommentHandler);
      fragment.append(comment);
    }
    this.mainContainer.append(fragment);
    return this.mainContainer;
  };

  replyCommentHandler = (a, b) => {
    console.log({ a, b });
  };

  renderComment = (comment) => {
    const element = createElement('div', {
      className: `cw__comment-div ${comment.id}`,
      'data-id': comment.id,
      class: 'ml-1',
    });
    const text = createElement('p', {
      className: `cw__comment-text ${comment.id}`,
      'data-id': comment.id,
    });
    text.textContent = comment.text;
    const replyButton = createElement('button', {
      className: `cw__comment-reply ${comment.id}`,
      'data-id': comment.id,
    });
    replyButton.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('replyClickHandler', event.target['data-id']);
      this.parentId = event.target['data-id'];
      element.append(this.commentBox.el);
    });
    replyButton.textContent = 'Reply';
    element.append(text, replyButton);
    let nestedComments = null;
    if (comment.childrenIds.length) {
      nestedComments = document.createDocumentFragment();
      comment.childrenIds.forEach((key) => {
        let nestedItems = this.renderComment(this.comments.get(key));
        nestedComments.append(nestedItems);
      });
    }
    if (nestedComments) {
      element.append(nestedComments);
    }
    return element;
  };
  bindReplyCallback = (text) => {
    console.log({ text, parent: this });
    this.callback(text, this.parentId);
  };

  bindCallback = (callback) => {
    console.log({ callback });
    this.callback = callback;
  };
}
