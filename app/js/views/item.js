(function (TD) {

  "use strict";

  // Todo Item View
  TD.ItemView = Backbone.View.extend({
    tagName: "li",

    initialize: function (options) {
      this.model.on('change:done', this.highlight, this);
    },

    render: function () {
      this.$el.html(TD.render("item", this.model.toJSON()));
      return this.el;
    },

    highlight: function (model, done) {
      this.$el.toggleClass('highlight', done);
    }
  });

})(TD);
