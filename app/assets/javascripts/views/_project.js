app.views._Project = Backbone.View.extend({

  tagName: 'div',
  className: 'project',

  template: JST['templates/_project'],

  events: {
    'dblclick .project-name': 'toggleTitle',
    'change .edit-title': 'updateTitle',
    'blur .edit-title': 'toggleTitle',
    'click .add-skill' : 'addSkill',
    'click .remove-project': 'destroyProject'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model.skills, 'add', this.render);
  },

  render: function() {
    this.$el.html(this.template({ project : this.model }));
    var _this = this;

    this.model.skills.forEach(function(skill) {
      var skill_view = new app.views._Skill({
        project: this.model,
        model: skill
      });
      _this.$el.find('ul.skill-list').append(skill_view.render().el);
    });

    return this;
  },

  updateTitle: function() {
    var new_title = $(event.target).val().trim();
    this.model.set('title', new_title);

    if(this.model.isNew()) {
      this.collection.create(this.model);
    }
    else {
      this.model.save();
    }
  },

  toggleTitle: function() {
    this.$el.find('.edit-title').toggle().focus().prev('h3').toggle();
  },

  addSkill: function() {
    var skill = new app.models.Skill({name: "Click here to edit" });
    this.model.skills.add(skill);
  },

  destroyProject: function() {
    this.model.destroy();
  }

});