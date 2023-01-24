(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([[0],{

/***/ "./vendor/spryker-shop/product-set-widget/src/SprykerShop/Yves/ProductSetWidget/Theme/default/components/organisms/product-set-details/product-set-details.ts":
/*!********************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/product-set-widget/src/SprykerShop/Yves/ProductSetWidget/Theme/default/components/organisms/product-set-details/product-set-details.ts ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductSetDetails; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
/* harmony import */ var ShopUi_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ShopUi/components/molecules/product-item/product-item */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts");


class ProductSetDetails extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.productItems = void 0;
    this.targets = void 0;
  }

  readyCallback() {}

  init() {
    this.productItems = Array.from(this.getElementsByClassName(this.jsName + "__product-item"));
    this.targets = Array.from(this.getElementsByClassName(this.jsName + "__product-sku-hidden-input"));
    this.mapEvents();
  }

  mapEvents() {
    if (!this.productItems) {
      return;
    }

    this.mapProductItemUpdateAddToCartUrlCustomEvent();
  }

  mapProductItemUpdateAddToCartUrlCustomEvent() {
    this.productItems.forEach((element, index) => {
      element.addEventListener(ShopUi_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_1__["EVENT_UPDATE_ADD_TO_CART_URL"], event => {
        this.updateAddToCartUrls(event.detail.sku, index);
      });
    });
  }

  updateAddToCartUrls(sku, index) {
    if (this.targets[index]) {
      this.targets[index].value = sku;
    }
  }

}

/***/ }),

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: EVENT_UPDATE_RATING, EVENT_UPDATE_LABELS, EVENT_UPDATE_ADD_TO_CART_URL, EVENT_UPDATE_AJAX_ADD_TO_CART_URL, EVENT_UPDATE_ADD_TO_CART_FORM_ACTION, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_UPDATE_RATING", function() { return EVENT_UPDATE_RATING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_UPDATE_LABELS", function() { return EVENT_UPDATE_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_UPDATE_ADD_TO_CART_URL", function() { return EVENT_UPDATE_ADD_TO_CART_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_UPDATE_AJAX_ADD_TO_CART_URL", function() { return EVENT_UPDATE_AJAX_ADD_TO_CART_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_UPDATE_ADD_TO_CART_FORM_ACTION", function() { return EVENT_UPDATE_ADD_TO_CART_FORM_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductItem; });
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
/* tslint:disable: max-file-line-count */

/**
 * @event updateRating An event emitted when the product rating has been updated.
 * @event updateLabels An event emitted when the product labels has been updated.
 * @event updateAddToCartUrl An event emitted when the product 'add to cart' URL has been updated.
 * @event updateAjaxAddToCartUrl An event emitted when the product AJAX 'add to cart' URL has been updated.
 * @event updateAddToCartFormAction An event emitted when the product 'add to cart' form action has been updated.
 */

var EVENT_UPDATE_RATING = 'updateRating';
var EVENT_UPDATE_LABELS = 'updateLabels';
var EVENT_UPDATE_ADD_TO_CART_URL = 'updateAddToCartUrl';
var EVENT_UPDATE_AJAX_ADD_TO_CART_URL = 'updateAjaxAddToCartUrl';
var EVENT_UPDATE_ADD_TO_CART_FORM_ACTION = 'updateAddToCartFormAction';
class ProductItem extends _models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.productImage = void 0;
    this.productName = void 0;
    this.productRating = void 0;
    this.productDefaultPrice = void 0;
    this.productSku = void 0;
    this.productOriginalPrice = void 0;
    this.productLinkDetailPage = void 0;
    this.productLinkAddToCart = void 0;
    this.productAjaxButtonAddToCart = void 0;
    this.productFormAddToCart = void 0;
    this.productButtonAddToCart = void 0;
  }

  readyCallback() {}

  init() {
    this.productImage = this.getElementsByClassName(this.jsName + "__image")[0];
    this.productName = this.getElementsByClassName(this.jsName + "__name")[0];
    this.productRating = this.getElementsByClassName(this.jsName + "__rating")[0];
    this.productDefaultPrice = this.getElementsByClassName(this.jsName + "__default-price")[0];
    this.productSku = this.getElementsByClassName(this.jsName + "__sku")[0];
    this.productOriginalPrice = this.getElementsByClassName(this.jsName + "__original-price")[0];
    this.productLinkDetailPage = Array.from(this.getElementsByClassName(this.jsName + "__link-detail-page"));
    this.productLinkAddToCart = this.getElementsByClassName(this.jsName + "__link-add-to-cart")[0];
    this.productAjaxButtonAddToCart = this.getElementsByClassName(this.jsName + "__ajax-button-add-to-cart")[0];
    this.productFormAddToCart = this.getElementsByClassName(this.jsName + "__form-add-to-cart")[0];
    this.productButtonAddToCart = this.getElementsByClassName(this.jsName + "__button-add-to-cart")[0];
  }
  /**
   * Sets the product card information.
   * @param data A data object for setting the product card information.
   */


  updateProductItemData(data) {
    var _data$sku, _data$ajaxAddToCartUr, _data$addToCartFormAc;

    this.imageUrl = data.imageUrl;
    this.imageAlt = data.name;
    this.labels = data.labels;
    this.productItemName = data.name;
    this.ratingValue = data.ratingValue;
    this.defaultPrice = data.defaultPrice;
    this.sku = (_data$sku = data.sku) != null ? _data$sku : null;
    this.originalPrice = data.originalPrice;
    this.detailPageUrl = data.detailPageUrl;
    this.addToCartUrl = data.addToCartUrl;
    this.ajaxAddToCartUrl = (_data$ajaxAddToCartUr = data.ajaxAddToCartUrl) != null ? _data$ajaxAddToCartUr : null;
    this.addToCartFormAction = (_data$addToCartFormAc = data.addToCartFormAction) != null ? _data$addToCartFormAc : null;
  }

  getSkuFromUrl(url) {
    if (!url) {
      return null;
    }

    var lastPartOfUrl = new RegExp("([^\\/])+$", 'g');
    var sku = url.match(lastPartOfUrl);
    return sku[0];
  }
  /**
   * Sets the product card image URL.
   * @param imageUrl A product card image URL.
   */


  set imageUrl(imageUrl) {
    if (this.productImage) {
      this.productImage.src = imageUrl;
    }
  }
  /**
   * Sets the product card image alt.
   * @param imageAlt A product card image alt.
   */


  set imageAlt(imageAlt) {
    if (this.productImage) {
      this.productImage.alt = imageAlt;
    }
  }
  /**
   * Sets the product card labels.
   * @param labels An array of product card labels.
   */


  set labels(labels) {
    this.dispatchCustomEvent(EVENT_UPDATE_LABELS, {
      labels
    });
  }
  /**
   * Sets the product card name.
   * @param name A product card name.
   */


  set productItemName(name) {
    if (this.productName) {
      this.productName.innerText = name;
    }
  }
  /**
   * Sets the product card rating.
   * @param rating A product card rating.
   */


  set ratingValue(rating) {
    this.dispatchCustomEvent(EVENT_UPDATE_RATING, {
      rating
    });
  }
  /**
   * Sets the product card default price.
   * @param defaultPrice A product card default price.
   */


  set defaultPrice(defaultPrice) {
    if (this.productDefaultPrice) {
      this.productDefaultPrice.innerText = defaultPrice;
    }
  }
  /**
   * Sets the product card sku.
   * @param productSku A product card sku.
   */


  set sku(productSku) {
    if (this.productSku) {
      this.productSku.content = productSku;
    }
  }
  /**
   * Sets the product card original price.
   * @param originalPrice A product card original price.
   */


  set originalPrice(originalPrice) {
    if (this.productOriginalPrice) {
      this.productOriginalPrice.innerText = originalPrice;
    }
  }
  /**
   * Sets the product card detail page URL.
   * @param detailPageUrl A product card detail page URL.
   */


  set detailPageUrl(detailPageUrl) {
    if (this.productLinkDetailPage) {
      this.productLinkDetailPage.forEach(element => element.href = detailPageUrl);
    }
  }
  /**
   * Sets the product card 'add to cart' URL.
   * @param addToCartUrl A product card 'add to cart' URL.
   */


  set addToCartUrl(addToCartUrl) {
    if (this.productLinkAddToCart) {
      this.productLinkAddToCart.href = addToCartUrl;
    }

    this.dispatchCustomEvent(EVENT_UPDATE_ADD_TO_CART_URL, {
      sku: this.getSkuFromUrl(addToCartUrl)
    });
  }
  /**
   * Sets the product card AJAX 'add to cart' URL.
   * @param ajaxAddToCartUrl A product card AJAX 'add to cart' URL.
   */


  set ajaxAddToCartUrl(ajaxAddToCartUrl) {
    if (this.productAjaxButtonAddToCart) {
      this.productAjaxButtonAddToCart.disabled = !ajaxAddToCartUrl;
      this.productAjaxButtonAddToCart.dataset.url = ajaxAddToCartUrl;
    }

    this.dispatchCustomEvent(EVENT_UPDATE_AJAX_ADD_TO_CART_URL, {
      sku: this.getSkuFromUrl(ajaxAddToCartUrl)
    });
  }
  /**
   * Sets the product card 'add to cart' form action.
   * @param addToCartFormAction A product card 'add to cart' form action.
   */


  set addToCartFormAction(addToCartFormAction) {
    if (this.productFormAddToCart) {
      this.productFormAddToCart.action = addToCartFormAction;
    }

    if (this.productButtonAddToCart) {
      this.productButtonAddToCart.dataset.formAction = addToCartFormAction;
    }

    this.dispatchCustomEvent(EVENT_UPDATE_ADD_TO_CART_FORM_ACTION, {
      sku: this.getSkuFromUrl(addToCartFormAction)
    });
  }
  /**
   * Gets the product card image URL.
   */


  get imageUrl() {
    if (this.productImage) {
      return this.productImage.src;
    }
  }
  /**
   * Gets the product card name.
   */


  get productItemName() {
    if (this.productName) {
      return this.productName.innerText;
    }
  }
  /**
   * Gets the product card rating.
   */


  get ratingValue() {
    if (this.productRating) {
      return Number(this.productRating.value);
    }
  }
  /**
   * Gets the product card default price.
   */


  get defaultPrice() {
    if (this.productDefaultPrice) {
      return this.productDefaultPrice.innerText;
    }
  }
  /**
   * Gets the product card sku.
   */


  get sku() {
    if (this.productSku) {
      return this.productSku.content;
    }
  }
  /**
   * Gets the product card original price.
   */


  get originalPrice() {
    if (this.productOriginalPrice) {
      return this.productOriginalPrice.innerText;
    }
  }
  /**
   * Gets the product card detail page URL.
   */


  get detailPageUrl() {
    if (this.productLinkDetailPage) {
      return this.productLinkDetailPage[0].href;
    }
  }
  /**
   * Gets the product card 'add to cart' URL.
   */


  get addToCartUrl() {
    if (this.productLinkAddToCart) {
      return this.productLinkAddToCart.href;
    }
  }
  /**
   * Gets the product card AJAX 'add to cart' URL.
   */


  get ajaxAddToCartUrl() {
    if (this.productAjaxButtonAddToCart) {
      return this.productAjaxButtonAddToCart.dataset.url;
    }
  }
  /**
   * Gets the product card 'add to cart' form action.
   */


  get addToCartFormAction() {
    if (this.productFormAddToCart) {
      return this.productFormAddToCart.action;
    }

    if (this.productButtonAddToCart) {
      return this.productButtonAddToCart.dataset.formAction;
    }
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Byb2R1Y3Qtc2V0LXdpZGdldC9zcmMvU3ByeWtlclNob3AvWXZlcy9Qcm9kdWN0U2V0V2lkZ2V0L1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9vcmdhbmlzbXMvcHJvZHVjdC1zZXQtZGV0YWlscy9wcm9kdWN0LXNldC1kZXRhaWxzLnRzIiwid2VicGFjazovLy8uL3ZlbmRvci9zcHJ5a2VyLXNob3Avc2hvcC11aS9zcmMvU3ByeWtlclNob3AvWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLnRzIl0sIm5hbWVzIjpbIlByb2R1Y3RTZXREZXRhaWxzIiwiQ29tcG9uZW50IiwicHJvZHVjdEl0ZW1zIiwidGFyZ2V0cyIsInJlYWR5Q2FsbGJhY2siLCJpbml0IiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImpzTmFtZSIsIm1hcEV2ZW50cyIsIm1hcFByb2R1Y3RJdGVtVXBkYXRlQWRkVG9DYXJ0VXJsQ3VzdG9tRXZlbnQiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkVWRU5UX1VQREFURV9BRERfVE9fQ0FSVF9VUkwiLCJldmVudCIsInVwZGF0ZUFkZFRvQ2FydFVybHMiLCJkZXRhaWwiLCJza3UiLCJ2YWx1ZSIsIkVWRU5UX1VQREFURV9SQVRJTkciLCJFVkVOVF9VUERBVEVfTEFCRUxTIiwiRVZFTlRfVVBEQVRFX0FKQVhfQUREX1RPX0NBUlRfVVJMIiwiRVZFTlRfVVBEQVRFX0FERF9UT19DQVJUX0ZPUk1fQUNUSU9OIiwiUHJvZHVjdEl0ZW0iLCJwcm9kdWN0SW1hZ2UiLCJwcm9kdWN0TmFtZSIsInByb2R1Y3RSYXRpbmciLCJwcm9kdWN0RGVmYXVsdFByaWNlIiwicHJvZHVjdFNrdSIsInByb2R1Y3RPcmlnaW5hbFByaWNlIiwicHJvZHVjdExpbmtEZXRhaWxQYWdlIiwicHJvZHVjdExpbmtBZGRUb0NhcnQiLCJwcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydCIsInByb2R1Y3RGb3JtQWRkVG9DYXJ0IiwicHJvZHVjdEJ1dHRvbkFkZFRvQ2FydCIsInVwZGF0ZVByb2R1Y3RJdGVtRGF0YSIsImRhdGEiLCJpbWFnZVVybCIsImltYWdlQWx0IiwibmFtZSIsImxhYmVscyIsInByb2R1Y3RJdGVtTmFtZSIsInJhdGluZ1ZhbHVlIiwiZGVmYXVsdFByaWNlIiwib3JpZ2luYWxQcmljZSIsImRldGFpbFBhZ2VVcmwiLCJhZGRUb0NhcnRVcmwiLCJhamF4QWRkVG9DYXJ0VXJsIiwiYWRkVG9DYXJ0Rm9ybUFjdGlvbiIsImdldFNrdUZyb21VcmwiLCJ1cmwiLCJsYXN0UGFydE9mVXJsIiwiUmVnRXhwIiwibWF0Y2giLCJzcmMiLCJhbHQiLCJkaXNwYXRjaEN1c3RvbUV2ZW50IiwiaW5uZXJUZXh0IiwicmF0aW5nIiwiY29udGVudCIsImhyZWYiLCJkaXNhYmxlZCIsImRhdGFzZXQiLCJhY3Rpb24iLCJmb3JtQWN0aW9uIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUsTUFBTUEsaUJBQU4sU0FBZ0NDLCtEQUFoQyxDQUEwQztBQUFBO0FBQUE7QUFBQSxTQUMzQ0MsWUFEMkM7QUFBQSxTQUUzQ0MsT0FGMkM7QUFBQTs7QUFJM0NDLGVBQWEsR0FBUyxDQUFFOztBQUV4QkMsTUFBSSxHQUFTO0FBQ25CLFNBQUtILFlBQUwsR0FBbUNJLEtBQUssQ0FBQ0MsSUFBTixDQUFXLEtBQUtDLHNCQUFMLENBQStCLEtBQUtDLE1BQXBDLG9CQUFYLENBQW5DO0FBQ0EsU0FBS04sT0FBTCxHQUFtQ0csS0FBSyxDQUFDQyxJQUFOLENBQVcsS0FBS0Msc0JBQUwsQ0FDdkMsS0FBS0MsTUFEa0MsZ0NBQVgsQ0FBbkM7QUFJQSxTQUFLQyxTQUFMO0FBQ0g7O0FBRVNBLFdBQVMsR0FBUztBQUN4QixR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K0I7QUFDM0IsYUFBTyxLQUFLQSxvQkFBTCxDQUEwQjRCLFNBQWpDO0FBQ0g7QUFDSjtBQUVEO0FBQ0o7QUFDQTs7O0FBQ3FCLE1BQWJaLGFBQWEsR0FBVztBQUN4QixRQUFJLEtBQUtmLHFCQUFULEVBQWdDO0FBQzVCLGFBQU8sS0FBS0EscUJBQUwsQ0FBMkIsQ0FBM0IsRUFBOEI4QixJQUFyQztBQUNIO0FBQ0o7QUFFRDtBQUNKO0FBQ0E7OztBQUNvQixNQUFaZCxZQUFZLEdBQVc7QUFDdkIsUUFBSSxLQUFLZixvQkFBVCxFQUErQjtBQUMzQixhQUFPLEtBQUtBLG9CQUFMLENBQTBCNkIsSUFBakM7QUFDSDtBQUNKO0FBRUQ7QUFDSjtBQUNBOzs7QUFDd0IsTUFBaEJiLGdCQUFnQixHQUFXO0FBQzNCLFFBQUksS0FBS2YsMEJBQVQsRUFBcUM7QUFDakMsYUFBTyxLQUFLQSwwQkFBTCxDQUFnQzhCLE9BQWhDLENBQXdDWixHQUEvQztBQUNIO0FBQ0o7QUFFRDtBQUNKO0FBQ0E7OztBQUMyQixNQUFuQkYsbUJBQW1CLEdBQVc7QUFDOUIsUUFBSSxLQUFLZixvQkFBVCxFQUErQjtBQUMzQixhQUFPLEtBQUtBLG9CQUFMLENBQTBCOEIsTUFBakM7QUFDSDs7QUFFRCxRQUFJLEtBQUs3QixzQkFBVCxFQUFpQztBQUM3QixhQUFPLEtBQUtBLHNCQUFMLENBQTRCNEIsT0FBNUIsQ0FBb0NFLFVBQTNDO0FBQ0g7QUFDSjs7QUFoUzhDLEMiLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQuMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuaW1wb3J0IFByb2R1Y3RJdGVtLCB7IEVWRU5UX1VQREFURV9BRERfVE9fQ0FSVF9VUkwgfSBmcm9tICdTaG9wVWkvY29tcG9uZW50cy9tb2xlY3VsZXMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RTZXREZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdEl0ZW1zOiBQcm9kdWN0SXRlbVtdO1xuICAgIHByb3RlY3RlZCB0YXJnZXRzOiBIVE1MSW5wdXRFbGVtZW50W107XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0SXRlbXMgPSA8UHJvZHVjdEl0ZW1bXT5BcnJheS5mcm9tKHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3Byb2R1Y3QtaXRlbWApKTtcbiAgICAgICAgdGhpcy50YXJnZXRzID0gPEhUTUxJbnB1dEVsZW1lbnRbXT5BcnJheS5mcm9tKHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAgIGAke3RoaXMuanNOYW1lfV9fcHJvZHVjdC1za3UtaGlkZGVuLWlucHV0YFxuICAgICAgICApKTtcblxuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5wcm9kdWN0SXRlbXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFwUHJvZHVjdEl0ZW1VcGRhdGVBZGRUb0NhcnRVcmxDdXN0b21FdmVudCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBQcm9kdWN0SXRlbVVwZGF0ZUFkZFRvQ2FydFVybEN1c3RvbUV2ZW50KCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RJdGVtcy5mb3JFYWNoKChlbGVtZW50OiBQcm9kdWN0SXRlbSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEVWRU5UX1VQREFURV9BRERfVE9fQ0FSVF9VUkwsIChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFkZFRvQ2FydFVybHMoKDxDdXN0b21FdmVudD5ldmVudCkuZGV0YWlsLnNrdSwgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVBZGRUb0NhcnRVcmxzKHNrdTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldHNbaW5kZXhdKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldHNbaW5kZXhdLnZhbHVlID0gc2t1O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyogdHNsaW50OmRpc2FibGU6IG1heC1maWxlLWxpbmUtY291bnQgKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NvbXBvbmVudCc7XG5cbi8qKlxuICogQGV2ZW50IHVwZGF0ZVJhdGluZyBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHByb2R1Y3QgcmF0aW5nIGhhcyBiZWVuIHVwZGF0ZWQuXG4gKiBAZXZlbnQgdXBkYXRlTGFiZWxzIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcHJvZHVjdCBsYWJlbHMgaGFzIGJlZW4gdXBkYXRlZC5cbiAqIEBldmVudCB1cGRhdGVBZGRUb0NhcnRVcmwgQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwcm9kdWN0ICdhZGQgdG8gY2FydCcgVVJMIGhhcyBiZWVuIHVwZGF0ZWQuXG4gKiBAZXZlbnQgdXBkYXRlQWpheEFkZFRvQ2FydFVybCBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHByb2R1Y3QgQUpBWCAnYWRkIHRvIGNhcnQnIFVSTCBoYXMgYmVlbiB1cGRhdGVkLlxuICogQGV2ZW50IHVwZGF0ZUFkZFRvQ2FydEZvcm1BY3Rpb24gQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwcm9kdWN0ICdhZGQgdG8gY2FydCcgZm9ybSBhY3Rpb24gaGFzIGJlZW4gdXBkYXRlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IEVWRU5UX1VQREFURV9SQVRJTkcgPSAndXBkYXRlUmF0aW5nJztcbmV4cG9ydCBjb25zdCBFVkVOVF9VUERBVEVfTEFCRUxTID0gJ3VwZGF0ZUxhYmVscyc7XG5leHBvcnQgY29uc3QgRVZFTlRfVVBEQVRFX0FERF9UT19DQVJUX1VSTCA9ICd1cGRhdGVBZGRUb0NhcnRVcmwnO1xuZXhwb3J0IGNvbnN0IEVWRU5UX1VQREFURV9BSkFYX0FERF9UT19DQVJUX1VSTCA9ICd1cGRhdGVBamF4QWRkVG9DYXJ0VXJsJztcbmV4cG9ydCBjb25zdCBFVkVOVF9VUERBVEVfQUREX1RPX0NBUlRfRk9STV9BQ1RJT04gPSAndXBkYXRlQWRkVG9DYXJ0Rm9ybUFjdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEl0ZW1EYXRhIHtcbiAgICBpbWFnZVVybDogc3RyaW5nO1xuICAgIGltYWdlQWx0OiBzdHJpbmc7XG4gICAgbGFiZWxzOiBQcm9kdWN0SXRlbUxhYmVsc0RhdGFbXTtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgcmF0aW5nVmFsdWU6IG51bWJlcjtcbiAgICBkZWZhdWx0UHJpY2U6IHN0cmluZztcbiAgICBza3U/OiBzdHJpbmc7XG4gICAgb3JpZ2luYWxQcmljZTogc3RyaW5nO1xuICAgIGRldGFpbFBhZ2VVcmw6IHN0cmluZztcbiAgICBhZGRUb0NhcnRVcmw6IHN0cmluZztcbiAgICBhamF4QWRkVG9DYXJ0VXJsPzogc3RyaW5nO1xuICAgIGFkZFRvQ2FydEZvcm1BY3Rpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEl0ZW1MYWJlbHNEYXRhIHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0TmFtZTogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RSYXRpbmc6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3REZWZhdWx0UHJpY2U6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0U2t1OiBIVE1MTWV0YUVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RPcmlnaW5hbFByaWNlOiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdExpbmtEZXRhaWxQYWdlOiBIVE1MQW5jaG9yRWxlbWVudFtdO1xuICAgIHByb3RlY3RlZCBwcm9kdWN0TGlua0FkZFRvQ2FydDogSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RBamF4QnV0dG9uQWRkVG9DYXJ0OiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdEZvcm1BZGRUb0NhcnQ6IEhUTUxGb3JtRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdEJ1dHRvbkFkZFRvQ2FydDogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0SW1hZ2UgPSA8SFRNTEltYWdlRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19pbWFnZWApWzBdO1xuICAgICAgICB0aGlzLnByb2R1Y3ROYW1lID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX25hbWVgKVswXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0UmF0aW5nID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fcmF0aW5nYClbMF07XG4gICAgICAgIHRoaXMucHJvZHVjdERlZmF1bHRQcmljZSA9IDxIVE1MRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19kZWZhdWx0LXByaWNlYClbMF07XG4gICAgICAgIHRoaXMucHJvZHVjdFNrdSA9IDxIVE1MTWV0YUVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fc2t1YClbMF07XG4gICAgICAgIHRoaXMucHJvZHVjdE9yaWdpbmFsUHJpY2UgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fb3JpZ2luYWwtcHJpY2VgKVswXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlua0RldGFpbFBhZ2UgPSA8SFRNTEFuY2hvckVsZW1lbnRbXT4oXG4gICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2xpbmstZGV0YWlsLXBhZ2VgKSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlua0FkZFRvQ2FydCA9IDxIVE1MQW5jaG9yRWxlbWVudD4oXG4gICAgICAgICAgICB0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19saW5rLWFkZC10by1jYXJ0YClbMF1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydCA9IDxIVE1MQnV0dG9uRWxlbWVudD4oXG4gICAgICAgICAgICB0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19hamF4LWJ1dHRvbi1hZGQtdG8tY2FydGApWzBdXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucHJvZHVjdEZvcm1BZGRUb0NhcnQgPSA8SFRNTEZvcm1FbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2Zvcm0tYWRkLXRvLWNhcnRgKVswXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0QnV0dG9uQWRkVG9DYXJ0ID0gPEhUTUxCdXR0b25FbGVtZW50PihcbiAgICAgICAgICAgIHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2J1dHRvbi1hZGQtdG8tY2FydGApWzBdXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIGluZm9ybWF0aW9uLlxuICAgICAqIEBwYXJhbSBkYXRhIEEgZGF0YSBvYmplY3QgZm9yIHNldHRpbmcgdGhlIHByb2R1Y3QgY2FyZCBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0SXRlbURhdGEoZGF0YTogUHJvZHVjdEl0ZW1EYXRhKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW1hZ2VVcmwgPSBkYXRhLmltYWdlVXJsO1xuICAgICAgICB0aGlzLmltYWdlQWx0ID0gZGF0YS5uYW1lO1xuICAgICAgICB0aGlzLmxhYmVscyA9IGRhdGEubGFiZWxzO1xuICAgICAgICB0aGlzLnByb2R1Y3RJdGVtTmFtZSA9IGRhdGEubmFtZTtcbiAgICAgICAgdGhpcy5yYXRpbmdWYWx1ZSA9IGRhdGEucmF0aW5nVmFsdWU7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByaWNlID0gZGF0YS5kZWZhdWx0UHJpY2U7XG4gICAgICAgIHRoaXMuc2t1ID0gZGF0YS5za3UgPz8gbnVsbDtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFByaWNlID0gZGF0YS5vcmlnaW5hbFByaWNlO1xuICAgICAgICB0aGlzLmRldGFpbFBhZ2VVcmwgPSBkYXRhLmRldGFpbFBhZ2VVcmw7XG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0VXJsID0gZGF0YS5hZGRUb0NhcnRVcmw7XG4gICAgICAgIHRoaXMuYWpheEFkZFRvQ2FydFVybCA9IGRhdGEuYWpheEFkZFRvQ2FydFVybCA/PyBudWxsO1xuICAgICAgICB0aGlzLmFkZFRvQ2FydEZvcm1BY3Rpb24gPSBkYXRhLmFkZFRvQ2FydEZvcm1BY3Rpb24gPz8gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0U2t1RnJvbVVybCh1cmw6IFVybCk6IFVybCB7XG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxhc3RQYXJ0T2ZVcmwgPSBuZXcgUmVnRXhwKGAoW15cXFxcL10pKyRgLCAnZycpO1xuICAgICAgICBjb25zdCBza3UgPSB1cmwubWF0Y2gobGFzdFBhcnRPZlVybCk7XG5cbiAgICAgICAgcmV0dXJuIHNrdVswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgaW1hZ2UgVVJMLlxuICAgICAqIEBwYXJhbSBpbWFnZVVybCBBIHByb2R1Y3QgY2FyZCBpbWFnZSBVUkwuXG4gICAgICovXG4gICAgc2V0IGltYWdlVXJsKGltYWdlVXJsOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RJbWFnZS5zcmMgPSBpbWFnZVVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBpbWFnZSBhbHQuXG4gICAgICogQHBhcmFtIGltYWdlQWx0IEEgcHJvZHVjdCBjYXJkIGltYWdlIGFsdC5cbiAgICAgKi9cbiAgICBzZXQgaW1hZ2VBbHQoaW1hZ2VBbHQ6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0SW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEltYWdlLmFsdCA9IGltYWdlQWx0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIGxhYmVscy5cbiAgICAgKiBAcGFyYW0gbGFiZWxzIEFuIGFycmF5IG9mIHByb2R1Y3QgY2FyZCBsYWJlbHMuXG4gICAgICovXG4gICAgc2V0IGxhYmVscyhsYWJlbHM6IFByb2R1Y3RJdGVtTGFiZWxzRGF0YVtdKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFVkVOVF9VUERBVEVfTEFCRUxTLCB7IGxhYmVscyB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgbmFtZS5cbiAgICAgKiBAcGFyYW0gbmFtZSBBIHByb2R1Y3QgY2FyZCBuYW1lLlxuICAgICAqL1xuICAgIHNldCBwcm9kdWN0SXRlbU5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3ROYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3ROYW1lLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgcmF0aW5nLlxuICAgICAqIEBwYXJhbSByYXRpbmcgQSBwcm9kdWN0IGNhcmQgcmF0aW5nLlxuICAgICAqL1xuICAgIHNldCByYXRpbmdWYWx1ZShyYXRpbmc6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRVZFTlRfVVBEQVRFX1JBVElORywgeyByYXRpbmcgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIGRlZmF1bHQgcHJpY2UuXG4gICAgICogQHBhcmFtIGRlZmF1bHRQcmljZSBBIHByb2R1Y3QgY2FyZCBkZWZhdWx0IHByaWNlLlxuICAgICAqL1xuICAgIHNldCBkZWZhdWx0UHJpY2UoZGVmYXVsdFByaWNlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdERlZmF1bHRQcmljZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0RGVmYXVsdFByaWNlLmlubmVyVGV4dCA9IGRlZmF1bHRQcmljZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBza3UuXG4gICAgICogQHBhcmFtIHByb2R1Y3RTa3UgQSBwcm9kdWN0IGNhcmQgc2t1LlxuICAgICAqL1xuICAgIHNldCBza3UocHJvZHVjdFNrdTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RTa3UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdFNrdS5jb250ZW50ID0gcHJvZHVjdFNrdTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBvcmlnaW5hbCBwcmljZS5cbiAgICAgKiBAcGFyYW0gb3JpZ2luYWxQcmljZSBBIHByb2R1Y3QgY2FyZCBvcmlnaW5hbCBwcmljZS5cbiAgICAgKi9cbiAgICBzZXQgb3JpZ2luYWxQcmljZShvcmlnaW5hbFByaWNlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdE9yaWdpbmFsUHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdE9yaWdpbmFsUHJpY2UuaW5uZXJUZXh0ID0gb3JpZ2luYWxQcmljZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBkZXRhaWwgcGFnZSBVUkwuXG4gICAgICogQHBhcmFtIGRldGFpbFBhZ2VVcmwgQSBwcm9kdWN0IGNhcmQgZGV0YWlsIHBhZ2UgVVJMLlxuICAgICAqL1xuICAgIHNldCBkZXRhaWxQYWdlVXJsKGRldGFpbFBhZ2VVcmw6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0TGlua0RldGFpbFBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdExpbmtEZXRhaWxQYWdlLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50KSA9PiAoZWxlbWVudC5ocmVmID0gZGV0YWlsUGFnZVVybCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkICdhZGQgdG8gY2FydCcgVVJMLlxuICAgICAqIEBwYXJhbSBhZGRUb0NhcnRVcmwgQSBwcm9kdWN0IGNhcmQgJ2FkZCB0byBjYXJ0JyBVUkwuXG4gICAgICovXG4gICAgc2V0IGFkZFRvQ2FydFVybChhZGRUb0NhcnRVcmw6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0TGlua0FkZFRvQ2FydCkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TGlua0FkZFRvQ2FydC5ocmVmID0gYWRkVG9DYXJ0VXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEVWRU5UX1VQREFURV9BRERfVE9fQ0FSVF9VUkwsIHsgc2t1OiB0aGlzLmdldFNrdUZyb21VcmwoYWRkVG9DYXJ0VXJsKSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgQUpBWCAnYWRkIHRvIGNhcnQnIFVSTC5cbiAgICAgKiBAcGFyYW0gYWpheEFkZFRvQ2FydFVybCBBIHByb2R1Y3QgY2FyZCBBSkFYICdhZGQgdG8gY2FydCcgVVJMLlxuICAgICAqL1xuICAgIHNldCBhamF4QWRkVG9DYXJ0VXJsKGFqYXhBZGRUb0NhcnRVcmw6IFVybCkge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydCkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydC5kaXNhYmxlZCA9ICFhamF4QWRkVG9DYXJ0VXJsO1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydC5kYXRhc2V0LnVybCA9IGFqYXhBZGRUb0NhcnRVcmw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRVZFTlRfVVBEQVRFX0FKQVhfQUREX1RPX0NBUlRfVVJMLCB7IHNrdTogdGhpcy5nZXRTa3VGcm9tVXJsKGFqYXhBZGRUb0NhcnRVcmwpIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCAnYWRkIHRvIGNhcnQnIGZvcm0gYWN0aW9uLlxuICAgICAqIEBwYXJhbSBhZGRUb0NhcnRGb3JtQWN0aW9uIEEgcHJvZHVjdCBjYXJkICdhZGQgdG8gY2FydCcgZm9ybSBhY3Rpb24uXG4gICAgICovXG4gICAgc2V0IGFkZFRvQ2FydEZvcm1BY3Rpb24oYWRkVG9DYXJ0Rm9ybUFjdGlvbjogVXJsKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RGb3JtQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RGb3JtQWRkVG9DYXJ0LmFjdGlvbiA9IGFkZFRvQ2FydEZvcm1BY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9kdWN0QnV0dG9uQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RCdXR0b25BZGRUb0NhcnQuZGF0YXNldC5mb3JtQWN0aW9uID0gYWRkVG9DYXJ0Rm9ybUFjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFVkVOVF9VUERBVEVfQUREX1RPX0NBUlRfRk9STV9BQ1RJT04sIHtcbiAgICAgICAgICAgIHNrdTogdGhpcy5nZXRTa3VGcm9tVXJsKGFkZFRvQ2FydEZvcm1BY3Rpb24pLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgaW1hZ2UgVVJMLlxuICAgICAqL1xuICAgIGdldCBpbWFnZVVybCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0SW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RJbWFnZS5zcmM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgbmFtZS5cbiAgICAgKi9cbiAgICBnZXQgcHJvZHVjdEl0ZW1OYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3ROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0TmFtZS5pbm5lclRleHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgcmF0aW5nLlxuICAgICAqL1xuICAgIGdldCByYXRpbmdWYWx1ZSgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0UmF0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMucHJvZHVjdFJhdGluZy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgZGVmYXVsdCBwcmljZS5cbiAgICAgKi9cbiAgICBnZXQgZGVmYXVsdFByaWNlKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3REZWZhdWx0UHJpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3REZWZhdWx0UHJpY2UuaW5uZXJUZXh0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIHNrdS5cbiAgICAgKi9cbiAgICBnZXQgc2t1KCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RTa3UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RTa3UuY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCBvcmlnaW5hbCBwcmljZS5cbiAgICAgKi9cbiAgICBnZXQgb3JpZ2luYWxQcmljZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0T3JpZ2luYWxQcmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdE9yaWdpbmFsUHJpY2UuaW5uZXJUZXh0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIGRldGFpbCBwYWdlIFVSTC5cbiAgICAgKi9cbiAgICBnZXQgZGV0YWlsUGFnZVVybCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0TGlua0RldGFpbFBhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RMaW5rRGV0YWlsUGFnZVswXS5ocmVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkICdhZGQgdG8gY2FydCcgVVJMLlxuICAgICAqL1xuICAgIGdldCBhZGRUb0NhcnRVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdExpbmtBZGRUb0NhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RMaW5rQWRkVG9DYXJ0LmhyZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgQUpBWCAnYWRkIHRvIGNhcnQnIFVSTC5cbiAgICAgKi9cbiAgICBnZXQgYWpheEFkZFRvQ2FydFVybCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQuZGF0YXNldC51cmw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgJ2FkZCB0byBjYXJ0JyBmb3JtIGFjdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgYWRkVG9DYXJ0Rm9ybUFjdGlvbigpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0Rm9ybUFkZFRvQ2FydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdEZvcm1BZGRUb0NhcnQuYWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEJ1dHRvbkFkZFRvQ2FydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdEJ1dHRvbkFkZFRvQ2FydC5kYXRhc2V0LmZvcm1BY3Rpb247XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9