import { generateRandomId } from '../utils/randomId.js';

export default class CommentItemModel {
  constructor(_text, _parentId = null) {
    this.id = generateRandomId();
    this.text = _text;
    this.parentId = _parentId;
    this.childrenIds = [];
    this.time = new Date();
  }
}
