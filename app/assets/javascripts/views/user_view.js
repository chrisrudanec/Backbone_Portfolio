app.views.UserView = Backbone.View.extend({

  tagName: 'div',
  id: 'bio',
  template: HoganTemplates['user'],
  followTemplate: HoganTemplates['follow'],
  events: {
    'click .follow-button' : 'followUser'
  },

  render: function() {
    // Get some HTML from somewhere
    var html = this.template.render(this.model);
    var _this = this;
    // Append it to this view's div#bio element
    this.$el.html(html);

    this.model.followers.fetch({
      success: function(followers) {
        followers.forEach(function(follower) {
          var follow_html = _this.followTemplate.render({ image_url : follower.get("image_url")});
          _this.$el.find('.followers').append(follow_html);
        });
      }
    });

    return this;
  },

  followUser: function() {
    var current_user = new app.models.User();
    current_user.url = '/users/me';

    var _this = this;

    current_user.fetch({
      success: function(user) {
        user.url = '/users/' + user.id;
        _this.model.followers.add(user);
        _this.model.save();
        _this.render();
      }
    });
  }

});