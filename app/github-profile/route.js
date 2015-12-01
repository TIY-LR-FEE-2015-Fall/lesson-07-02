import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.ajax('https://api.github.com/users/octocat');
  },
});
