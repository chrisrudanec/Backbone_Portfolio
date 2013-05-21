app.views.ProjectView = Backbone.View.extend({

  tagName: 'div',
  id: 'project-page',
  template: JST['templates/project'],

  render: function() {
    this.$el.html(this.template());

    // Try to find projects already in the local storage
    var projectList = new app.collections.ProjectList();
    projectList.fetch();

    // Create a blank project for us to fill in.
    projectList.add({
      title: "New Project",
      url: "Click to edit",
      body: "Click to edit"
    });

    var _this = this;

    projectList.forEach(function(project) {
      var view = new app.views._Project({ model: project });
      _this.$el.find('#project-list').append(view.render().el);
      //this.model.toJSON()
    });

    var me = new app.models.User({
      first_name: "Corey",
      last_name: "Trombley",
      image_url: 'uploads/corey.jpg',
      bio: 'Well ard coder from NYC',
      mission: 'Complete level 12 on Bomberman and save the world from itself'
    });

    var bio = new app.views.UserView({
      model: me
    }).render();
    this.$el.find('#user-bio').html(bio.el);

    return this;
  }


});