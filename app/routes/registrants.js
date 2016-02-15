import Ember from 'ember';

export default Ember.Route.extend({

    model: function () {
        return this.store.findAll('registrant');
    },
    actions: {
        addRegistrant: function () {
            var newbie = this.store.createRecord('registrant', {
                firstName: 'The',
                lastName: 'NewGal',
                email: 'missElaina@example.com',
                imageType: 'Miss'
            });

            console.log(newbie);
        },
        zoomRegistrant: function (reg) {
            console.log(reg);
            this.transitionTo('registrant', reg);
        }
    }
});
