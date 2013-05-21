app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  id: 'bio',
  template: JST['templates/user'],
  render: function() {
    // Get some HTML from somewhere
    var html = this.template({user: this.model });
    // Append it to this view's div#bio element
    this.$el.html(html);

    return this;
  }

});