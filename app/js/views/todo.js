(function (TD) {

  "use strict";

  // Todo Page View
  TD.TodoView = Backbone.View.extend({

    events: {
      "change #done": "markDone"
    },

    initialize: function (options) {
      this.collection.on('active', this.render, this);
      this.$contentEl = this.$('.content');
      this.$titleEl = this.$('.title');
    },

    render: function (model) {
      this.model = model;
      this.$titleEl.html(model.get('title'));
      this.$contentEl.html(TD.render("todo", model.toJSON()));

      // reapplying styles on the page
      // http://stackoverflow.com/questions/5651776/jquery-mobile-rendering-problems-with-content-being-added-after-the-page-is-init
      this.$el.trigger('create');
    },

    markDone: function (event) {
      var checkboxEl = $(event.currentTarget);
      this.model.set("done", checkboxEl.is(':checked'));
    }
  });
})(TD);
