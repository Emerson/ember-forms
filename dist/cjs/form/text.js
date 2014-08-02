"use strict";
/*
Form Input

Syntax:
{{em-text property="property name" rows=4}}
 */

var FormGroupComponent = require("./form_group")["default"] || require("./form_group");
var ControlMixin = require("../mixins/control")["default"] || require("../mixins/control");

var FormTextComponent = FormGroupComponent.extend({
  controlView: Em.TextArea.extend(ControlMixin, {
    attributeBindings: ['placeholder', 'name'],
    name: Em.computed.alias('parentView.name'),
    placeholder: Em.computed.alias('parentView.placeholder'),
    model: Em.computed.alias('parentView.model'),
    propertyName: Em.computed.alias('parentView.propertyName'),
    rows: Em.computed.alias('parentView.rows')
  }),
  property: void 0,
  label: void 0,
  placeholder: void 0,
  rows: 4,
  controlWrapper: (function() {
    if (this.get('form.form_layout') === 'horizontal') {
      return 'col-sm-10';
    }
    return null;
  }).property('form.form_layout')
});

Ember.Handlebars.helper('em-text', function(options) {
  return Ember.Handlebars.helpers.view.call(this, FormTextComponent, options);
});

exports["default"] = FormTextComponent;