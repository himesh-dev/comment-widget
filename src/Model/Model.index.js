import CommentItemModel from './Model.commentItem.js';

export default class Model {
  constructor() {
    this.comments = new Map();
    this.updateCommentsChange;
  }

  addComment = (text, parentId) => {
    const comment = new CommentItemModel(text, parentId);
    this.comments.set(comment.id, comment);
    if (parentId) {
      this.updateChildrens(parentId, comment.id);
    }
    console.log('Model-index-addcomment-', this.comments);
    this.updateCommentsChange(this.comments);
  };
  updateChildrens = (parentId, childId) => {
    const parent = { ...this.comments.get(parentId) };
    parent.childrenIds.push(childId);
    this.comments.set(parentId, parent);
  };
  onCommentsUpdateCallback = (callback) => {
    this.updateCommentsChange = callback;
  };
}
