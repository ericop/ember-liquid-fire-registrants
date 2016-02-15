import Ember from 'ember';

export default Ember.Route.extend({
    model: function (params) {
        return this.store.find('registrant', params.registrant_id).then(function (registrant) {
            return registrant;
        });
    },

    actions: {
        toggle: function () {
            console.log('toggled');
            this.set('showFirst', !this.get('showFirst'));
        }
    }

});
