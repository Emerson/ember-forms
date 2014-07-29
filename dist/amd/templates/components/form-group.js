define(
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Handlebars.compile("{{#if wrapperClass}}\n    <div {{bind-attr class=wrapperClass}}>\n        {{partial \'components/formgroup/form-group\'}}\n    </div>\n{{else}}\n    {{partial \'components/formgroup/form-group\'}}\n{{/if}}");
  });