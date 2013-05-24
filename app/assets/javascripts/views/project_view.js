app.views.ProjectView = Backbone.View.extend({

  tagName: 'div',
  id: 'project-page',
  template: JST['templates/project'],

  initialize: function() {
    var _this = this;
    this.model.projects.fetch({
      success: function(projects) {
        // Create a blank project for us to fill in.
        _this.model.projects.add({
          title: "New Project",
          url: "Click to edit",
          body: "Click to edit",
          user_id: _this.model.id
        });

        _this.listenTo(_this.model.projects, 'add', _this.render);
        // _this.listenTo(_this.model.projects, 'change', _this.render);
        _this.render();
      }
    });
  },

  render: function() {
    this.$el.html(this.template());

    var _this = this;

    this.model.projects.forEach(function(project) {
      project.user = _this.model;
      var view = new app.views._Project({ model: project, collection: _this.model.projects });
      _this.$el.find('#project-list').append(view.render().el);
    });

    var bio = new app.views.UserView({
      model: this.model
    }).render();
    this.$el.find('#user-bio').html(bio.el);

    return this;
  }


});