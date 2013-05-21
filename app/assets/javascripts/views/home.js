app.views.Home = Backbone.View.extend({

  template: _.template($('#home-template').html()),

  render: function() {
    this.$el.html(this.template());
    $('#content').html(this.el);
    return this;
  }

});