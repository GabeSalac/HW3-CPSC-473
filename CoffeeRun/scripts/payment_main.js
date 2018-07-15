(function (window) {
  'use strict';

  var FORM_SELECTOR = '[data-payment-order="form"]';
  var MODAL_SELECTOR = '[data-payment-order="modal"]';
  var App = window.App;
  var $ = window.jQuery;
  var FormHandler = App.FormHandler;
  var formHandler = new FormHandler(FORM_SELECTOR);
  var PaymentModal = App.PaymentModal;
  var paymentModal = new PaymentModal(MODAL_SELECTOR);
  formHandler.addSubmitHandler(function (data) {
    paymentModal.addModal.call(paymentModal, data);
    $('#modal_payment').modal();
    var ab = $.modal.getCurrent().closeButton[0];
    $(ab).on('click', function() {
      window.location.reload();
    });
  });
})(window);
