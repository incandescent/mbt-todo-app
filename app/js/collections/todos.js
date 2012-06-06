(function (TD) {
  "use strict";

  TD.Todos = Backbone.Collection.extend({
    model: TD.Todo,
    url: TD.config.endpoints.todos
  });
})(TD);
