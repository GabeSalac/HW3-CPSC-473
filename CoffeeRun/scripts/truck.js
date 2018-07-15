(function (window) {
  'use strict';
  var App = window.App || {};

  // This instance of the Truck will be assigned its own datastore
  // and its own id
  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }

  // Create the order and put it on the DataStore
  Truck.prototype.createOrder = function (order) {
    console.log('Adding order for ' + order.emailAddress);
    this.db.add(order.emailAddress, order);
  };

  // Remove the order based on customer ID
  Truck.prototype.deliverOrder = function (customerId) {
    console.log('Delivering order for ' + customerId);
    this.db.remove(customerId);
  };

  // Print out all the ordersin the truck instance
  Truck.prototype.printOrders = function () {
    var customerIdArray = Object.keys(this.db.getAll());

    console.log('Truck #' + this.truckId + ' has pending orders: ');
    customerIdArray.forEach(function (id) {
      console.log(this.db.get(id));
    }.bind(this));
  };

  App.Truck = Truck;
  window.App = App;
})(window);
