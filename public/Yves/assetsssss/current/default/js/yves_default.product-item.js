(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["product-item"],{

/***/ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts":
/*!*********************************************************************************************!*\
  !*** ./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts ***!
  \*********************************************************************************************/
/*! exports provided: EVENT_UPDATE_REVIEW_COUNT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_UPDATE_REVIEW_COUNT", function() { return EVENT_UPDATE_REVIEW_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductItem; });
/* harmony import */ var ShopUi_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/components/molecules/product-item/product-item */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts");

var EVENT_UPDATE_REVIEW_COUNT = 'updateReviewCount';
class ProductItem extends ShopUi_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.productReviewCount = void 0;
  }

  init() {
    this.productReviewCount = this.getElementsByClassName(this.jsName + "__review-count")[0];
    super.init();
  }

  updateProductItemData(data) {
    super.updateProductItemData(data);
    this.reviewCount = data.reviewCount;
  }

  set reviewCount(reviewCount) {
    this.dispatchCustomEvent(EVENT_UPDATE_REVIEW_COUNT, {
      reviewCount
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHl6L1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS50cyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS50cyJdLCJuYW1lcyI6WyJFVkVOVF9VUERBVEVfUkVWSUVXX0NPVU5UIiwiUHJvZHVjdEl0ZW0iLCJQcm9kdWN0SXRlbUNvcmUiLCJwcm9kdWN0UmV2aWV3Q291bnQiLCJpbml0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImpzTmFtZSIsInVwZGF0ZVByb2R1Y3RJdGVtRGF0YSIsImRhdGEiLCJyZXZpZXdDb3VudCIsImRpc3BhdGNoQ3VzdG9tRXZlbnQiLCJFVkVOVF9VUERBVEVfUkFUSU5HIiwiRVZFTlRfVVBEQVRFX0xBQkVMUyIsIkVWRU5UX1VQREFURV9BRERfVE9fQ0FSVF9VUkwiLCJFVkVOVF9VUERBVEVfQUpBWF9BRERfVE9fQ0FSVF9VUkwiLCJFVkVOVF9VUERBVEVfQUREX1RPX0NBUlRfRk9STV9BQ1RJT04iLCJDb21wb25lbnQiLCJwcm9kdWN0SW1hZ2UiLCJwcm9kdWN0TmFtZSIsInByb2R1Y3RSYXRpbmciLCJwcm9kdWN0RGVmYXVsdFByaWNlIiwicHJvZHVjdFNrdSIsInByb2R1Y3RPcmlnaW5hbFByaWNlIiwicHJvZHVjdExpbmtEZXRhaWxQYWdlIiwicHJvZHVjdExpbmtBZGRUb0NhcnQiLCJwcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydCIsInByb2R1Y3RGb3JtQWRkVG9DYXJ0IiwicHJvZHVjdEJ1dHRvbkFkZFRvQ2FydCIsInJlYWR5Q2FsbGJhY2siLCJBcnJheSIsImZyb20iLCJpbWFnZVVybCIsImltYWdlQWx0IiwibmFtZSIsImxhYmVscyIsInByb2R1Y3RJdGVtTmFtZSIsInJhdGluZ1ZhbHVlIiwiZGVmYXVsdFByaWNlIiwic2t1Iiwib3JpZ2luYWxQcmljZSIsImRldGFpbFBhZ2VVcmwiLCJhZGRUb0NhcnRVcmwiLCJhamF4QWRkVG9DYXJ0VXJsIiwiYWRkVG9DYXJ0Rm9ybUFjdGlvbiIsImdldFNrdUZyb21VcmwiLCJ1cmwiLCJsYXN0UGFydE9mVXJsIiwiUmVnRXhwIiwibWF0Y2giLCJzcmMiLCJhbHQiLCJpbm5lclRleHQiLCJyYXRpbmciLCJjb250ZW50IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJocmVmIiwiZGlzYWJsZWQiLCJkYXRhc2V0IiwiYWN0aW9uIiwiZm9ybUFjdGlvbiIsIk51bWJlciIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlPLElBQU1BLHlCQUF5QixHQUFHLG1CQUFsQztBQU1RLE1BQU1DLFdBQU4sU0FBMEJDLDZGQUExQixDQUEwQztBQUFBO0FBQUE7QUFBQSxTQUMzQ0Msa0JBRDJDO0FBQUE7O0FBRzNDQyxNQUFJLEdBQVM7QUFDbkIsU0FBS0Qsa0JBQUwsR0FBdUMsS0FBS0Usc0JBQUwsQ0FBK0IsS0FBS0MsTUFBcEMscUJBQTRELENBQTVELENBQXZDO0FBRUEsVUFBTUYsSUFBTjtBQUNIOztBQUVERyx1QkFBcUIsQ0FBQ0MsSUFBRCxFQUE4QjtBQUMvQyxVQUFNRCxxQkFBTixDQUE0QkMsSUFBNUI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CRCxJQUFJLENBQUNDLFdBQXhCO0FBQ0g7O0FBRXdCLE1BQVhBLFdBQVcsQ0FBQ0EsV0FBRCxFQUFzQjtBQUMzQyxTQUFLQyxtQkFBTCxDQUF5QlYseUJBQXpCLEVBQW9EO0FBQUVTO0FBQUYsS0FBcEQ7QUFDSDs7QUFoQm9ELEM7Ozs7Ozs7Ozs7OztBQ1Z6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LE1BQWpDO0FBQ0g7O0FBRUQsUUFBSSxLQUFLaEMsc0JBQVQsRUFBaUM7QUFDN0IsYUFBTyxLQUFLQSxzQkFBTCxDQUE0QitCLE9BQTVCLENBQW9DRSxVQUEzQztBQUNIO0FBQ0o7O0FBaFM4QyxDIiwiZmlsZSI6Ii4vanMveXZlc19kZWZhdWx0LnByb2R1Y3QtaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0SXRlbUNvcmUsIHtcbiAgICBQcm9kdWN0SXRlbURhdGEgYXMgUHJvZHVjdEl0ZW1EYXRhQ29yZSxcbn0gZnJvbSAnU2hvcFVpL2NvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0nO1xuXG5leHBvcnQgY29uc3QgRVZFTlRfVVBEQVRFX1JFVklFV19DT1VOVCA9ICd1cGRhdGVSZXZpZXdDb3VudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEl0ZW1EYXRhIGV4dGVuZHMgUHJvZHVjdEl0ZW1EYXRhQ29yZSB7XG4gICAgcmV2aWV3Q291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdEl0ZW0gZXh0ZW5kcyBQcm9kdWN0SXRlbUNvcmUge1xuICAgIHByb3RlY3RlZCBwcm9kdWN0UmV2aWV3Q291bnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJvZHVjdFJldmlld0NvdW50ID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3Jldmlldy1jb3VudGApWzBdO1xuXG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9kdWN0SXRlbURhdGEoZGF0YTogUHJvZHVjdEl0ZW1EYXRhKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZVByb2R1Y3RJdGVtRGF0YShkYXRhKTtcbiAgICAgICAgdGhpcy5yZXZpZXdDb3VudCA9IGRhdGEucmV2aWV3Q291bnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldCByZXZpZXdDb3VudChyZXZpZXdDb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFVkVOVF9VUERBVEVfUkVWSUVXX0NPVU5ULCB7IHJldmlld0NvdW50IH0pO1xuICAgIH1cbn1cbiIsIi8qIHRzbGludDpkaXNhYmxlOiBtYXgtZmlsZS1saW5lLWNvdW50ICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL21vZGVscy9jb21wb25lbnQnO1xuXG4vKipcbiAqIEBldmVudCB1cGRhdGVSYXRpbmcgQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwcm9kdWN0IHJhdGluZyBoYXMgYmVlbiB1cGRhdGVkLlxuICogQGV2ZW50IHVwZGF0ZUxhYmVscyBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHByb2R1Y3QgbGFiZWxzIGhhcyBiZWVuIHVwZGF0ZWQuXG4gKiBAZXZlbnQgdXBkYXRlQWRkVG9DYXJ0VXJsIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcHJvZHVjdCAnYWRkIHRvIGNhcnQnIFVSTCBoYXMgYmVlbiB1cGRhdGVkLlxuICogQGV2ZW50IHVwZGF0ZUFqYXhBZGRUb0NhcnRVcmwgQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwcm9kdWN0IEFKQVggJ2FkZCB0byBjYXJ0JyBVUkwgaGFzIGJlZW4gdXBkYXRlZC5cbiAqIEBldmVudCB1cGRhdGVBZGRUb0NhcnRGb3JtQWN0aW9uIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcHJvZHVjdCAnYWRkIHRvIGNhcnQnIGZvcm0gYWN0aW9uIGhhcyBiZWVuIHVwZGF0ZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBFVkVOVF9VUERBVEVfUkFUSU5HID0gJ3VwZGF0ZVJhdGluZyc7XG5leHBvcnQgY29uc3QgRVZFTlRfVVBEQVRFX0xBQkVMUyA9ICd1cGRhdGVMYWJlbHMnO1xuZXhwb3J0IGNvbnN0IEVWRU5UX1VQREFURV9BRERfVE9fQ0FSVF9VUkwgPSAndXBkYXRlQWRkVG9DYXJ0VXJsJztcbmV4cG9ydCBjb25zdCBFVkVOVF9VUERBVEVfQUpBWF9BRERfVE9fQ0FSVF9VUkwgPSAndXBkYXRlQWpheEFkZFRvQ2FydFVybCc7XG5leHBvcnQgY29uc3QgRVZFTlRfVVBEQVRFX0FERF9UT19DQVJUX0ZPUk1fQUNUSU9OID0gJ3VwZGF0ZUFkZFRvQ2FydEZvcm1BY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RJdGVtRGF0YSB7XG4gICAgaW1hZ2VVcmw6IHN0cmluZztcbiAgICBpbWFnZUFsdDogc3RyaW5nO1xuICAgIGxhYmVsczogUHJvZHVjdEl0ZW1MYWJlbHNEYXRhW107XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHJhdGluZ1ZhbHVlOiBudW1iZXI7XG4gICAgZGVmYXVsdFByaWNlOiBzdHJpbmc7XG4gICAgc2t1Pzogc3RyaW5nO1xuICAgIG9yaWdpbmFsUHJpY2U6IHN0cmluZztcbiAgICBkZXRhaWxQYWdlVXJsOiBzdHJpbmc7XG4gICAgYWRkVG9DYXJ0VXJsOiBzdHJpbmc7XG4gICAgYWpheEFkZFRvQ2FydFVybD86IHN0cmluZztcbiAgICBhZGRUb0NhcnRGb3JtQWN0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RJdGVtTGFiZWxzRGF0YSB7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdE5hbWU6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0UmF0aW5nOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0RGVmYXVsdFByaWNlOiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNrdTogSFRNTE1ldGFFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0T3JpZ2luYWxQcmljZTogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RMaW5rRGV0YWlsUGFnZTogSFRNTEFuY2hvckVsZW1lbnRbXTtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdExpbmtBZGRUb0NhcnQ6IEhUTUxBbmNob3JFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydDogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RGb3JtQWRkVG9DYXJ0OiBIVE1MRm9ybUVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RCdXR0b25BZGRUb0NhcnQ6IEhUTUxCdXR0b25FbGVtZW50O1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJvZHVjdEltYWdlID0gPEhUTUxJbWFnZUVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9faW1hZ2VgKVswXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TmFtZSA9IDxIVE1MRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19uYW1lYClbMF07XG4gICAgICAgIHRoaXMucHJvZHVjdFJhdGluZyA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3JhdGluZ2ApWzBdO1xuICAgICAgICB0aGlzLnByb2R1Y3REZWZhdWx0UHJpY2UgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fZGVmYXVsdC1wcmljZWApWzBdO1xuICAgICAgICB0aGlzLnByb2R1Y3RTa3UgPSA8SFRNTE1ldGFFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3NrdWApWzBdO1xuICAgICAgICB0aGlzLnByb2R1Y3RPcmlnaW5hbFByaWNlID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX29yaWdpbmFsLXByaWNlYClbMF07XG4gICAgICAgIHRoaXMucHJvZHVjdExpbmtEZXRhaWxQYWdlID0gPEhUTUxBbmNob3JFbGVtZW50W10+KFxuICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19saW5rLWRldGFpbC1wYWdlYCkpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucHJvZHVjdExpbmtBZGRUb0NhcnQgPSA8SFRNTEFuY2hvckVsZW1lbnQ+KFxuICAgICAgICAgICAgdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fbGluay1hZGQtdG8tY2FydGApWzBdXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+KFxuICAgICAgICAgICAgdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fYWpheC1idXR0b24tYWRkLXRvLWNhcnRgKVswXVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnByb2R1Y3RGb3JtQWRkVG9DYXJ0ID0gPEhUTUxGb3JtRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19mb3JtLWFkZC10by1jYXJ0YClbMF07XG4gICAgICAgIHRoaXMucHJvZHVjdEJ1dHRvbkFkZFRvQ2FydCA9IDxIVE1MQnV0dG9uRWxlbWVudD4oXG4gICAgICAgICAgICB0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19idXR0b24tYWRkLXRvLWNhcnRgKVswXVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcGFyYW0gZGF0YSBBIGRhdGEgb2JqZWN0IGZvciBzZXR0aW5nIHRoZSBwcm9kdWN0IGNhcmQgaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgdXBkYXRlUHJvZHVjdEl0ZW1EYXRhKGRhdGE6IFByb2R1Y3RJdGVtRGF0YSk6IHZvaWQge1xuICAgICAgICB0aGlzLmltYWdlVXJsID0gZGF0YS5pbWFnZVVybDtcbiAgICAgICAgdGhpcy5pbWFnZUFsdCA9IGRhdGEubmFtZTtcbiAgICAgICAgdGhpcy5sYWJlbHMgPSBkYXRhLmxhYmVscztcbiAgICAgICAgdGhpcy5wcm9kdWN0SXRlbU5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgIHRoaXMucmF0aW5nVmFsdWUgPSBkYXRhLnJhdGluZ1ZhbHVlO1xuICAgICAgICB0aGlzLmRlZmF1bHRQcmljZSA9IGRhdGEuZGVmYXVsdFByaWNlO1xuICAgICAgICB0aGlzLnNrdSA9IGRhdGEuc2t1ID8/IG51bGw7XG4gICAgICAgIHRoaXMub3JpZ2luYWxQcmljZSA9IGRhdGEub3JpZ2luYWxQcmljZTtcbiAgICAgICAgdGhpcy5kZXRhaWxQYWdlVXJsID0gZGF0YS5kZXRhaWxQYWdlVXJsO1xuICAgICAgICB0aGlzLmFkZFRvQ2FydFVybCA9IGRhdGEuYWRkVG9DYXJ0VXJsO1xuICAgICAgICB0aGlzLmFqYXhBZGRUb0NhcnRVcmwgPSBkYXRhLmFqYXhBZGRUb0NhcnRVcmwgPz8gbnVsbDtcbiAgICAgICAgdGhpcy5hZGRUb0NhcnRGb3JtQWN0aW9uID0gZGF0YS5hZGRUb0NhcnRGb3JtQWN0aW9uID8/IG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFNrdUZyb21VcmwodXJsOiBVcmwpOiBVcmwge1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYXN0UGFydE9mVXJsID0gbmV3IFJlZ0V4cChgKFteXFxcXC9dKSskYCwgJ2cnKTtcbiAgICAgICAgY29uc3Qgc2t1ID0gdXJsLm1hdGNoKGxhc3RQYXJ0T2ZVcmwpO1xuXG4gICAgICAgIHJldHVybiBza3VbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIGltYWdlIFVSTC5cbiAgICAgKiBAcGFyYW0gaW1hZ2VVcmwgQSBwcm9kdWN0IGNhcmQgaW1hZ2UgVVJMLlxuICAgICAqL1xuICAgIHNldCBpbWFnZVVybChpbWFnZVVybDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0SW1hZ2Uuc3JjID0gaW1hZ2VVcmw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgaW1hZ2UgYWx0LlxuICAgICAqIEBwYXJhbSBpbWFnZUFsdCBBIHByb2R1Y3QgY2FyZCBpbWFnZSBhbHQuXG4gICAgICovXG4gICAgc2V0IGltYWdlQWx0KGltYWdlQWx0OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RJbWFnZS5hbHQgPSBpbWFnZUFsdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBsYWJlbHMuXG4gICAgICogQHBhcmFtIGxhYmVscyBBbiBhcnJheSBvZiBwcm9kdWN0IGNhcmQgbGFiZWxzLlxuICAgICAqL1xuICAgIHNldCBsYWJlbHMobGFiZWxzOiBQcm9kdWN0SXRlbUxhYmVsc0RhdGFbXSkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRVZFTlRfVVBEQVRFX0xBQkVMUywgeyBsYWJlbHMgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIG5hbWUuXG4gICAgICogQHBhcmFtIG5hbWUgQSBwcm9kdWN0IGNhcmQgbmFtZS5cbiAgICAgKi9cbiAgICBzZXQgcHJvZHVjdEl0ZW1OYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0TmFtZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TmFtZS5pbm5lclRleHQgPSBuYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIHJhdGluZy5cbiAgICAgKiBAcGFyYW0gcmF0aW5nIEEgcHJvZHVjdCBjYXJkIHJhdGluZy5cbiAgICAgKi9cbiAgICBzZXQgcmF0aW5nVmFsdWUocmF0aW5nOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEVWRU5UX1VQREFURV9SQVRJTkcsIHsgcmF0aW5nIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBkZWZhdWx0IHByaWNlLlxuICAgICAqIEBwYXJhbSBkZWZhdWx0UHJpY2UgQSBwcm9kdWN0IGNhcmQgZGVmYXVsdCBwcmljZS5cbiAgICAgKi9cbiAgICBzZXQgZGVmYXVsdFByaWNlKGRlZmF1bHRQcmljZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3REZWZhdWx0UHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdERlZmF1bHRQcmljZS5pbm5lclRleHQgPSBkZWZhdWx0UHJpY2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgc2t1LlxuICAgICAqIEBwYXJhbSBwcm9kdWN0U2t1IEEgcHJvZHVjdCBjYXJkIHNrdS5cbiAgICAgKi9cbiAgICBzZXQgc2t1KHByb2R1Y3RTa3U6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0U2t1KSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RTa3UuY29udGVudCA9IHByb2R1Y3RTa3U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgb3JpZ2luYWwgcHJpY2UuXG4gICAgICogQHBhcmFtIG9yaWdpbmFsUHJpY2UgQSBwcm9kdWN0IGNhcmQgb3JpZ2luYWwgcHJpY2UuXG4gICAgICovXG4gICAgc2V0IG9yaWdpbmFsUHJpY2Uob3JpZ2luYWxQcmljZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RPcmlnaW5hbFByaWNlKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RPcmlnaW5hbFByaWNlLmlubmVyVGV4dCA9IG9yaWdpbmFsUHJpY2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgZGV0YWlsIHBhZ2UgVVJMLlxuICAgICAqIEBwYXJhbSBkZXRhaWxQYWdlVXJsIEEgcHJvZHVjdCBjYXJkIGRldGFpbCBwYWdlIFVSTC5cbiAgICAgKi9cbiAgICBzZXQgZGV0YWlsUGFnZVVybChkZXRhaWxQYWdlVXJsOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdExpbmtEZXRhaWxQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMaW5rRGV0YWlsUGFnZS5mb3JFYWNoKChlbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCkgPT4gKGVsZW1lbnQuaHJlZiA9IGRldGFpbFBhZ2VVcmwpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCAnYWRkIHRvIGNhcnQnIFVSTC5cbiAgICAgKiBAcGFyYW0gYWRkVG9DYXJ0VXJsIEEgcHJvZHVjdCBjYXJkICdhZGQgdG8gY2FydCcgVVJMLlxuICAgICAqL1xuICAgIHNldCBhZGRUb0NhcnRVcmwoYWRkVG9DYXJ0VXJsOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdExpbmtBZGRUb0NhcnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdExpbmtBZGRUb0NhcnQuaHJlZiA9IGFkZFRvQ2FydFVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFVkVOVF9VUERBVEVfQUREX1RPX0NBUlRfVVJMLCB7IHNrdTogdGhpcy5nZXRTa3VGcm9tVXJsKGFkZFRvQ2FydFVybCkgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIEFKQVggJ2FkZCB0byBjYXJ0JyBVUkwuXG4gICAgICogQHBhcmFtIGFqYXhBZGRUb0NhcnRVcmwgQSBwcm9kdWN0IGNhcmQgQUpBWCAnYWRkIHRvIGNhcnQnIFVSTC5cbiAgICAgKi9cbiAgICBzZXQgYWpheEFkZFRvQ2FydFVybChhamF4QWRkVG9DYXJ0VXJsOiBVcmwpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQuZGlzYWJsZWQgPSAhYWpheEFkZFRvQ2FydFVybDtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQuZGF0YXNldC51cmwgPSBhamF4QWRkVG9DYXJ0VXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEVWRU5UX1VQREFURV9BSkFYX0FERF9UT19DQVJUX1VSTCwgeyBza3U6IHRoaXMuZ2V0U2t1RnJvbVVybChhamF4QWRkVG9DYXJ0VXJsKSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgJ2FkZCB0byBjYXJ0JyBmb3JtIGFjdGlvbi5cbiAgICAgKiBAcGFyYW0gYWRkVG9DYXJ0Rm9ybUFjdGlvbiBBIHByb2R1Y3QgY2FyZCAnYWRkIHRvIGNhcnQnIGZvcm0gYWN0aW9uLlxuICAgICAqL1xuICAgIHNldCBhZGRUb0NhcnRGb3JtQWN0aW9uKGFkZFRvQ2FydEZvcm1BY3Rpb246IFVybCkge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0Rm9ybUFkZFRvQ2FydCkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0Rm9ybUFkZFRvQ2FydC5hY3Rpb24gPSBhZGRUb0NhcnRGb3JtQWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEJ1dHRvbkFkZFRvQ2FydCkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0QnV0dG9uQWRkVG9DYXJ0LmRhdGFzZXQuZm9ybUFjdGlvbiA9IGFkZFRvQ2FydEZvcm1BY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRVZFTlRfVVBEQVRFX0FERF9UT19DQVJUX0ZPUk1fQUNUSU9OLCB7XG4gICAgICAgICAgICBza3U6IHRoaXMuZ2V0U2t1RnJvbVVybChhZGRUb0NhcnRGb3JtQWN0aW9uKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIGltYWdlIFVSTC5cbiAgICAgKi9cbiAgICBnZXQgaW1hZ2VVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEltYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0SW1hZ2Uuc3JjO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIG5hbWUuXG4gICAgICovXG4gICAgZ2V0IHByb2R1Y3RJdGVtTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdE5hbWUuaW5uZXJUZXh0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIHJhdGluZy5cbiAgICAgKi9cbiAgICBnZXQgcmF0aW5nVmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdFJhdGluZykge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcih0aGlzLnByb2R1Y3RSYXRpbmcudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIGRlZmF1bHQgcHJpY2UuXG4gICAgICovXG4gICAgZ2V0IGRlZmF1bHRQcmljZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0RGVmYXVsdFByaWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0RGVmYXVsdFByaWNlLmlubmVyVGV4dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCBza3UuXG4gICAgICovXG4gICAgZ2V0IHNrdSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0U2t1KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0U2t1LmNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgb3JpZ2luYWwgcHJpY2UuXG4gICAgICovXG4gICAgZ2V0IG9yaWdpbmFsUHJpY2UoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdE9yaWdpbmFsUHJpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RPcmlnaW5hbFByaWNlLmlubmVyVGV4dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCBkZXRhaWwgcGFnZSBVUkwuXG4gICAgICovXG4gICAgZ2V0IGRldGFpbFBhZ2VVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdExpbmtEZXRhaWxQYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0TGlua0RldGFpbFBhZ2VbMF0uaHJlZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCAnYWRkIHRvIGNhcnQnIFVSTC5cbiAgICAgKi9cbiAgICBnZXQgYWRkVG9DYXJ0VXJsKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RMaW5rQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0TGlua0FkZFRvQ2FydC5ocmVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIEFKQVggJ2FkZCB0byBjYXJ0JyBVUkwuXG4gICAgICovXG4gICAgZ2V0IGFqYXhBZGRUb0NhcnRVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RBamF4QnV0dG9uQWRkVG9DYXJ0LmRhdGFzZXQudXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkICdhZGQgdG8gY2FydCcgZm9ybSBhY3Rpb24uXG4gICAgICovXG4gICAgZ2V0IGFkZFRvQ2FydEZvcm1BY3Rpb24oKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEZvcm1BZGRUb0NhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RGb3JtQWRkVG9DYXJ0LmFjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RCdXR0b25BZGRUb0NhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RCdXR0b25BZGRUb0NhcnQuZGF0YXNldC5mb3JtQWN0aW9uO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==