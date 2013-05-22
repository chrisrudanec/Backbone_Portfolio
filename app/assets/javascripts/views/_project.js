app.views._Project = Backbone.View.extend({

  tagName: 'div',
  className: 'project',

  template: JST['templates/_project'],

  events: {
    'dblclick .project-name': 'editProjectName',
    'change .edit-title': 'updateTitle',
    'click .add-skill' : 'addSkill'
  },

  render: function() {
    this.$el.html(this.template({ project : this.model }));
    var _this = this;
    this.model.getSkills().forEach(function(skill) {
      var skill_html = new app.views._Skill({
        project: _this.model,
        model: skill
      });
      _this.$el.find('.skill-list').append(skill_html.render().el);
    });

    return this;
  },

  editProjectName: function() {
    this.$el.addClass('editing');
    this.$el.find('.edit-title').show().focus().prev('h3').hide();
  },

  updateTitle: function() {
    var new_title = this.$el.find('.edit-title').val().trim();
    this.model.set('title', new_title);
    this.model.save();
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
  }

});