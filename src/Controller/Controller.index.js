export default class Controller {
  constructor(_model, _view) {
    this.model = _model;
    this.view = _view;
    this.onCommentUpdate(this.model.comments);
    this.renderHeaderController();
    this.renderInputBoxController();
    this.view.commentBox.formSubmitHandler(this.handlerAddComment);
    this.view.bindReplyCommentToController(this.handlerAddComment);
    this.model.onCommentsUpdateCallback(this.onCommentUpdate);
  }
  onCommentUpdate = (comments) => {
    this.view.renderComments(comments);
  };
  renderHeaderController = () => {
    this.view.renderHeader();
  };
  renderInputBoxController = () => {
    this.view.renderInputBox();
  };
  handlerAddComment = (text, parentId) => {
    this.model.addComment(text, parentId);
  };
  handleAddReply = (text, parentId) => {
    console.log('handleAddReply', text, parentId);
  };
}
