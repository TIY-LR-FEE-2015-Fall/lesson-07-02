import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        firstName: 'Brandi',
        lastName: 'Soucy',
      },
      {
        firstName: 'Chancey',
        lastName: 'Ward',
      },
    ];
  },
});
