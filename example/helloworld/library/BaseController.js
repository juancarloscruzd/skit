var Controller = skit.platform.Controller;
var template = __module__.html;
module.exports = Controller.create({
  __title__: function(childTitle) {
    // Parents get the title generated by children as an argument.
    return childTitle + ' | Hello World';
  },
  __body__: function(childHtml) {
    // Parents get the HTML generated by children as an argument.
    return template({childHtml: childHtml});
  },
  __ready__: function() {
    // Parents also get __preload__, __load__ and __ready__ calls.
  }
});