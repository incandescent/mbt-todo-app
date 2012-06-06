this['JST'] = this['JST'] || {};

this['JST']['app/templates/item.html.tmpl'] = function(data) { return function (obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<a href="#todoView?id=', id ,'">', title ,'</a>\n');}return __p.join('');
}(data, _)};

this['JST']['app/templates/todo.html.tmpl'] = function(data) { return function (obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h3>', title ,'</h3>\n<p>', description ,'</p>\n\n<fieldset data-role="controlgroup">\n <input type="checkbox" name="checkbox-1" id="done" class="custom" '); if (done) { ;__p.push(' checked="true" '); } ;__p.push('  />\n <label for="done">Done?</label>\n</fieldset>\n');}return __p.join('');
}(data, _)};