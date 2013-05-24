app.views._Skill = Backbone.View.extend({

  tagName: 'li',
  className: 'skill',
  template: JST['templates/_skill'],
  events: {
    'click .delete' : 'removeSkill',
    'click .name' : 'editSkill',
    'change .edit-name': 'updateSkill'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html(this.template({
      name: this.model.attributes.name
    }));
    return this;
  },

  removeSkill: function() {
    this.model.destroy();
    $(event.currentTarget).toggle('slide');
    this.remove();
  },

  editSkill: function() {
    $(event.target).hide().next('.edit-name').show().focus();
  },

  updateSkill: function() {
    var newName = $(event.target).val();
    this.model.set({ name : newName });
    this.model.project.skills.set(this.model);
  }
});