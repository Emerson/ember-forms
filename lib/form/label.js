/*
Form Label

When styled with bootstrap, when form is rendered horizontally, the label require the 'extraClass' property to
    be set to a value such 'col-sm-2' to be aligned properly.

Syntax:
{{em-form-label
    text="Some label"
    extraClass="col-sm-2"
}}

Or can serve as a block helper for elements that needs to be wrapped within label element.
{{#em-form-label text="Active?"}}
    {{em-checkbox}}
{{/em-form-label}}
 */

import InFormMixin from '../mixins/in_form';

var FormLabelComponent = Ember.Component.extend(InFormMixin, {
  tagName: 'label',
  layoutName: 'components/form-label',
  classNames: ['control-label'],
  classNameBindings: ['extraClass', 'inlineClassCalc', 'horiClassCalc'],
  attributeBindings: ['for'],
  horiClass: 'col-sm-2',
  horiClassCalc: (function() {
    if (this.get('form.isHorizontal') && this.get('horiClass')) {
      return this.get('horiClass');
    }
  }).property('form.isHorizontal'),
  inlineClass: 'sr-only',
  inlineClassCalc: (function() {
    if (this.get('form.isInline') && this.get('inlineClass')) {
      return this.get('inlineClass');
    }
  }).property('form.form_layout')
});

Ember.Handlebars.helper('em-form-label', FormLabelComponent);

export default FormLabelComponent;