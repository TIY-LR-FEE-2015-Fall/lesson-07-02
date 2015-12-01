import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        firstName: 'Brandi',
        lastName: 'Soucy',
        username: 'pixiestix826',
      },
      {
        firstName: 'Chancey',
        lastName: 'Ward',
        username: 'chanceyw',
      },
    ];
  },
});
