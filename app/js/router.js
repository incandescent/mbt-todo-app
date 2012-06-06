(function () {

  "use strict";

  // setup router
  TD.initRouter = function () {

    var handlers = {
      loadTodos: function () {
        if (TD.todos.size() == 0) {
          TD.todos.fetch();
        }
      },

      loadTodo: function (type, params) {
        var todo = TD.todos.get(params[1]);
        if (todo) {
          TD.todos.trigger("active", todo);
        }
      }
    };

    var options = {
      // router options
    };

    this.router = new $.mobile.Router({
      "#todosView": { handler: handlers.loadTodos, events: "s" },
      "#todoView[?]id=(\\d+)": {handler: handlers.loadTodo, events: "bs"}

    }, handlers, options);
  }
})();
