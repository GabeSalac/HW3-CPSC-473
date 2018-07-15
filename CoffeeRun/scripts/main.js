(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]'
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var FORM_PAYMENT_SELECTOR = '[data-payment-order="form"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var myTruck = new Truck('ncc-1701', new DataStore());
  var checkList = new CheckList(CHECKLIST_SELECTOR)
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  window.myTruck = myTruck;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function (data) {
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
  });
  console.log(formHandler);
})(window);
