import DS from 'ember-data';

var Registrant = DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  imageType: DS.attr()
});

Registrant.reopenClass({
  FIXTURES: [{
    id: 1,
    firstName: 'Eop',
    lastName: 'Johnson',
    email: 'eop@example.com',
    imageType: 'Tiger'
  }, {
    id: 2,
    firstName: 'Jared',
    lastName: 'Peless',
    email: 'jp@example.com',
    imageType: 'Owl'
  }, {    
    id: 3,
    firstName: 'Brad',
    lastName: 'Bridges',
    email: 'bb@example.com',
    imageType: 'Prince'
  }]
});

export default Registrant;
