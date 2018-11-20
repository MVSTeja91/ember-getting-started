import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByCity(param) {
      return param !== '' ? this.get('store').query('rental', {
        city: param
      }) : this.get('store').findAll('rental');
    }
  }
});
