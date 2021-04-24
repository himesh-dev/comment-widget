import { createElement, createTextNode } from '../utils/dom.js';
import InputBoxView from './View.InputBox.js';
import CommentsView from './View.comments.js';

export default class View {
  constructor(_root) {
    this.root = _root;
    this.mainContainer;
    this.commentsContainer;
    this.replyCommentCallback;
    this.renderContainer();
    this.commentBox = new InputBoxView();
    this.renderedComments = new CommentsView();
  }

  renderContainer = () => {
    this.mainContainer = createElement('main');
    this.root.append(this.mainContainer);
  };

  renderHeader = () => {
    const header = createElement('header');
    const title = createElement('h1');
    const titleText = createTextNode('Comment Widgets');
    title.append(titleText);
    header.append(title);
    this.root.prepend(header);
  };

  renderInputBox = () => {
    const commentBox = this.commentBox.el;
    this.mainContainer.prepend(commentBox);
  };

  renderComments = (comments) => {
    console.log('VIEW-INDEX-renderComments', comments);
    const renderedComments = this.renderedComments.render(comments);
    if (renderedComments) {
      this.mainContainer.append(renderedComments);
    }
  };

  replyCommentHandler = (a, b, c) => {
    console.log('replyCommentHandler INDEX', a, b, c);
  };
  bindReplyCommentToController = (callback) => {
    this.replyCommentCallback = callback;
    this.renderedComments.bindCallback(callback);
  };
}
