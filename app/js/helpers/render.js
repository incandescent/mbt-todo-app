(function (TD, JST) {

  "use strict";

  /**
   * Renders and caches given template for given data.
   *
   * @param name - template name
   * @param data - data to render
   */
  TD.render = function (name, data) {
    return JST['app/templates/' + name + '.html.tmpl'](data);
  }

})(TD, JST);
