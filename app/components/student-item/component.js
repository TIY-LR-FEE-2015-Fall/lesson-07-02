import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  click() {
    // Show the name of the student that is clicked on
    window.alert(`You clicked on ${this.get('student.firstName')}`);
  },
});
