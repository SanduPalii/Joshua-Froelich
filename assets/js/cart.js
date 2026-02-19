/**
 * Cart replacement: checkout is handled by external merch store (Fitprint).
 * Keep a simple floating button that routes users to merch page.
 * Legacy [data-cart-id] buttons are redirected to merch as well.
 */
(function () {
  'use strict';

  var PRODUCTS = {
    cd: { name: 'First EP — CD', price: 12.00, image: 'assets/images/merch/02-cd.jpg' },
    'ep-digital': { name: 'First EP — Digital', price: 6.00, image: 'assets/releases/01-ep_cover.png' },
    tee: { name: 'Reigning Over Darkness — Tee', price: 24.00, image: 'assets/images/merch/01-thirt_01.jpg' }
  };
  var TEE_SIZES = ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];
  var MERCH_URL = 'merch.html#fitPrintAnchor';

  function goToMerch() {
    window.location.href = MERCH_URL;
  }

  function injectFloatingButton() {
    if (document.getElementById('cr-cart-root')) return;

    var root = document.createElement('div');
    root.id = 'cr-cart-root';
    root.innerHTML =
      '<button type="button" id="cr-cart-btn" class="cr-cart-btn cr-cart-btn--empty" aria-label="Go to merch store">' +
      '<i class="fas fa-shopping-cart" aria-hidden="true"></i>' +
      '</button>';
    document.body.appendChild(root);

    var button = document.getElementById('cr-cart-btn');
    if (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        goToMerch();
      });
    }
  }

  function bindLegacyAddToCartButtons() {
    document.querySelectorAll('[data-cart-id]').forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        goToMerch();
      });
    });
  }

  // Compatibility API for pages that still reference window.crCart.
  window.crCart = {
    getCart: function () { return []; },
    setCart: function () { },
    addItem: function () { goToMerch(); return []; },
    updateItem: function () { return []; },
    removeItem: function () { return []; },
    getCount: function () { return 0; },
    openDrawer: goToMerch,
    closeDrawer: function () { },
    PRODUCTS: PRODUCTS,
    TEE_SIZES: TEE_SIZES
  };

  window.crCartUpdate = function () { };

  function init() {
    injectFloatingButton();
    bindLegacyAddToCartButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
