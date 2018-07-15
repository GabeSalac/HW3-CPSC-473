(function (window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function PaymentModal (selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  PaymentModal.prototype.addModal = function (data) {
    var modalElement = new Modal(data);
    this.$element.append(modalElement.$element);
  };

  function Modal(payment_info) {
    var $div = '<span>' + payment_info.title + ' ' + payment_info.username + '</span>';
    this.$element = $div;
  }

  App.PaymentModal = PaymentModal;
  window.App = App;
})(window);
