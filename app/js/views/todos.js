(function (TD) {

  "use strict";

  // Todos Page View
  TD.TodosView = Backbone.View.extend({

    initialize: function (options) {
      this.collection.on("reset", this.render, this);
      this.$listEl = this.$('#todosList');
    },

    render: function () {
      this.collection.each(function (model) {
        var itemView = new TD.ItemView({model: model});
        this.$listEl.append(itemView.render());
      }, this);

      // refresh jqm list
      this.$listEl.listview("refresh");
    }
  });

})(TD);
