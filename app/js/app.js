(function (TD) {

  "use strict";

  // initialize TD app
  TD.init = function () {

    // initialize backbone collections and views
    this.todos = new TD.Todos();
    // views
    this.todosView = new TD.TodosView({el: $('#todosView'), collection: this.todos});
    this.todoView = new TD.TodoView({el: $('#todoView'), collection: this.todos });

    // intialize router
    this.initRouter();
  };
})(TD);
