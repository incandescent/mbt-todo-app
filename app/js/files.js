// TD  namespace
if (typeof TD === "undefined") {
  var TD = this.TD = {};
}

// TD dependecies
TD.files = [
  // vendor
  "js/vendor/jquery.min.js",
  "js/vendor/jquery.mobile.router.min.js",
  "js/vendor/underscore-min.js",
  "js/vendor/backbone.js",
  "js/templates.js",

  // config
  "js/config/config.js",
  "js/config/envs/dev.js",

  // add your app dependecies here

  // helpers
  "js/helpers/render.js",

  // models
  "js/models/todo.js",

  // collections
  "js/collections/todos.js",

  // views
  "js/views/item.js",
  "js/views/todo.js",
  "js/views/todos.js",

  // app
  "js/router.js",
  "js/app.js",
  "js/init.js",

  // load jquery mobile last
  "js/vendor/jquery.mobile-1.1.0.min.js"
];

// load all
if (typeof $script != "undefined") {
  $script.order(TD.files);
}

if (typeof exports != 'undefined') {
  module.exports = TD.files;
}
