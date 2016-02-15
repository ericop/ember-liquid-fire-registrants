import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    deleteModel: function(registrant) {
      this.get('registrant').removeObject(registrant);
    }
  }
});