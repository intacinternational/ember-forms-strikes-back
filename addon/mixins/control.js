import Em from 'ember';

/***
Mixin that should be applied for all controls
 */
export default Em.Mixin.create({
  classNameBindings: ['class', 'additionalClasses'],
  "class": 'form-control',
  init: function() {
    this._super();

    var propertyIsModel = this.get('parentView.propertyIsModel');
    if(propertyIsModel) {
    	return Em.Binding.from("model" + '.' + (this.get('propertyName')) + '.content').to('selection').connect(this);
    } else {
    	return Em.Binding.from("model" + '.' + (this.get('propertyName'))).to('value').connect(this);
    }

  },
  hasValue: Em.computed('value', function() {
    return this.get('value') !== null;
  }).readOnly(),
  //Added for ease of testing
  name: Ember.computed('parentView.propertyName', 'parentView.elemName', function() {
    return this.get('parentView.elemName') || this.get('parentView.propertyName');
  }),
  additionalClasses: Ember.computed('parentView.additionalClasses', function() {
    return this.get('parentView.additionalClasses');
  })
});
