app.views._Project = Backbone.View.extend({

  tagName: 'div',
  className: 'project',

  template: JST['templates/_project'],

  events: {
    'dblclick .project-name': 'editProjectName',
    'change .edit-title': 'updateTitle',
    'click .add-skill' : 'addSkill',
    'click .remove-project': 'destroyProject'
  },

  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function() {
    this.$el.html(this.template({ project : this.model }));
    return this;
  },

  editProjectName: function() {
    this.$el.addClass('editing');
    this.$el.find('.edit-title').show().focus().prev('h3').hide();
  },

  updateTitle: function() {
    var new_title = this.$el.find('.edit-title').val().trim();
    this.model.set('title', new_title);
    if(this.model.isNew()) {
      this.collection.create(this.model);
    }
    else {
      this.model.save();
    }
    this.$el.find('.edit-title').val('').hide().prev('h3').show().html(new_title);
  },

  addSkill: function() {
    var skill = new app.views._Skill({
      project: this.model,
      model: new app.models.Skill({
        name: "Click here to edit"
      })
    });

    this.$el.find('.skill-list').append(skill.render().el).find(".skill:last").hide().fadeIn();
  },

  destroyProject: function() {
    this.model.destroy();
  }

});