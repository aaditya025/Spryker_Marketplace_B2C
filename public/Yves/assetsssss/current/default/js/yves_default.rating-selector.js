(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["rating-selector"],{

/***/ "./src/Pyz/Yves/ProductReviewWidget/Theme/default/components/molecules/rating-selector/rating-selector.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ProductReviewWidget/Theme/default/components/molecules/rating-selector/rating-selector.ts ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RatingSelector; });
/* harmony import */ var ProductReviewWidget_components_molecules_rating_selector_rating_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ProductReviewWidget/components/molecules/rating-selector/rating-selector */ "./vendor/spryker-shop/product-review-widget/src/SprykerShop/Yves/ProductReviewWidget/Theme/default/components/molecules/rating-selector/rating-selector.ts");
/* harmony import */ var ShopUiProject_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ShopUiProject/components/molecules/product-item/product-item */ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts");


class RatingSelector extends ProductReviewWidget_components_molecules_rating_selector_rating_selector__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.reviewCount = void 0;
  }

  init() {
    this.reviewCount = this.getElementsByClassName(this.jsName + "__review-count")[0];
    super.init();
  }

  mapUpdateRatingEvents() {
    super.mapUpdateRatingEvents();
    this.mapProductItemUpdateReviewCountCustomEvent();
  }

  mapProductItemUpdateReviewCountCustomEvent() {
    if (!this.productItem) {
      return;
    }

    this.productItem.addEventListener(ShopUiProject_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_1__["EVENT_UPDATE_REVIEW_COUNT"], event => {
      this.updateReviewCount(event.detail.reviewCount);
    });
  }

  updateReviewCount(value) {
    if (!this.reviewCount) {
      return;
    }

    this.reviewCount.innerText = "" + value;
  }

}

/***/ }),

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

/***/ "./vendor/spryker-shop/product-review-widget/src/SprykerShop/Yves/ProductReviewWidget/Theme/default/components/molecules/rating-selector/rating-selector.ts":
/*!******************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/product-review-widget/src/SprykerShop/Yves/ProductReviewWidget/Theme/default/components/molecules/rating-selector/rating-selector.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RatingSelector; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
/* harmony import */ var ShopUi_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ShopUi/components/molecules/product-item/product-item */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts");


class RatingSelector extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.input = void 0;
    this.steps = void 0;
    this.productItem = void 0;
  }

  readyCallback() {
    this.input = this.getElementsByClassName(this.jsName + "__input")[0];
    this.steps = Array.from(this.getElementsByClassName(this.jsName + "__step"));

    if (this.productItemClassName) {
      this.productItem = this.closest("." + this.productItemClassName);
    }

    if (!this.readOnly) {
      this.checkInput(this.value);
      this.mapEvents();
    }

    this.mapUpdateRatingEvents();
  }

  mapEvents() {
    this.mapStepClickEvent();
  }

  mapStepClickEvent() {
    this.steps.forEach(step => {
      step.addEventListener('click', event => this.onStepClick(event));
    });
  }

  mapUpdateRatingEvents() {
    if (!this.productItem) {
      return;
    }

    this.mapProductItemUpdateRatingCustomEvent();
  }

  mapProductItemUpdateRatingCustomEvent() {
    this.productItem.addEventListener(ShopUi_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_1__["EVENT_UPDATE_RATING"], event => {
      this.updateRating(event.detail.rating);
    });
  }

  onStepClick(event) {
    var step = event.currentTarget;
    var newValue = parseFloat(step.getAttribute('data-step-value'));
    this.checkInput(newValue);
    this.updateRating(newValue);
  }
  /**
   * Toggles the disabled attribute of the input element.
   * @param value A number for checking if the attribute is to be set or removed from the input element.
   */


  checkInput(value) {
    if (!this.disableIfEmptyValue) {
      return;
    }

    if (!value) {
      this.input.setAttribute('disabled', 'disabled');
      return;
    }

    this.input.removeAttribute('disabled');
  }
  /**
   * Sets the value attribute and toggles the special class name.
   * @param value A number for setting the attribute.
   */


  updateRating(value) {
    this.input.setAttribute('value', "" + value);
    this.steps.forEach(step => {
      var stepValue = parseFloat(step.getAttribute('data-step-value'));

      if (value >= stepValue) {
        step.classList.add(this.name + "__step--active");
        return;
      }

      step.classList.remove(this.name + "__step--active");
    });
  }
  /**
   * Gets an input value.
   */


  get value() {
    return parseFloat(this.input.value);
  }
  /**
   * Gets if the element is read-only.
   */


  get readOnly() {
    return this.hasAttribute('readonly');
  }
  /**
   * Gets if the element has an empty value.
   */


  get disableIfEmptyValue() {
    return this.hasAttribute('disable-if-empty-value');
  }

  get productItemClassName() {
    return this.getAttribute('product-item-class-name');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHl6L1l2ZXMvUHJvZHVjdFJldmlld1dpZGdldC9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3JhdGluZy1zZWxlY3Rvci9yYXRpbmctc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1B5ei9ZdmVzL1Nob3BVaS9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9wcm9kdWN0LXJldmlldy13aWRnZXQvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvUHJvZHVjdFJldmlld1dpZGdldC9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3JhdGluZy1zZWxlY3Rvci9yYXRpbmctc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9zaG9wLXVpL3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Nob3BVaS9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0udHMiXSwibmFtZXMiOlsiUmF0aW5nU2VsZWN0b3IiLCJSYXRpbmdTZWxlY3RvckNvcmUiLCJyZXZpZXdDb3VudCIsImluaXQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwianNOYW1lIiwibWFwVXBkYXRlUmF0aW5nRXZlbnRzIiwibWFwUHJvZHVjdEl0ZW1VcGRhdGVSZXZpZXdDb3VudEN1c3RvbUV2ZW50IiwicHJvZHVjdEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiRVZFTlRfVVBEQVRFX1JFVklFV19DT1VOVCIsImV2ZW50IiwidXBkYXRlUmV2aWV3Q291bnQiLCJkZXRhaWwiLCJ2YWx1ZSIsImlubmVyVGV4dCIsIlByb2R1Y3RJdGVtIiwiUHJvZHVjdEl0ZW1Db3JlIiwicHJvZHVjdFJldmlld0NvdW50IiwidXBkYXRlUHJvZHVjdEl0ZW1EYXRhIiwiZGF0YSIsImRpc3BhdGNoQ3VzdG9tRXZlbnQiLCJDb21wb25lbnQiLCJpbnB1dCIsInN0ZXBzIiwicmVhZHlDYWxsYmFjayIsIkFycmF5IiwiZnJvbSIsInByb2R1Y3RJdGVtQ2xhc3NOYW1lIiwiY2xvc2VzdCIsInJlYWRPbmx5IiwiY2hlY2tJbnB1dCIsIm1hcEV2ZW50cyIsIm1hcFN0ZXBDbGlja0V2ZW50IiwiZm9yRWFjaCIsInN0ZXAiLCJvblN0ZXBDbGljayIsIm1hcFByb2R1Y3RJdGVtVXBkYXRlUmF0aW5nQ3VzdG9tRXZlbnQiLCJFVkVOVF9VUERBVEVfUkFUSU5HIiwidXBkYXRlUmF0aW5nIiwicmF0aW5nIiwiY3VycmVudFRhcmdldCIsIm5ld1ZhbHVlIiwicGFyc2VGbG9hdCIsImdldEF0dHJpYnV0ZSIsImRpc2FibGVJZkVtcHR5VmFsdWUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzdGVwVmFsdWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJuYW1lIiwicmVtb3ZlIiwiaGFzQXR0cmlidXRlIiwiRVZFTlRfVVBEQVRFX0xBQkVMUyIsIkVWRU5UX1VQREFURV9BRERfVE9fQ0FSVF9VUkwiLCJFVkVOVF9VUERBVEVfQUpBWF9BRERfVE9fQ0FSVF9VUkwiLCJFVkVOVF9VUERBVEVfQUREX1RPX0NBUlRfRk9STV9BQ1RJT04iLCJwcm9kdWN0SW1hZ2UiLCJwcm9kdWN0TmFtZSIsInByb2R1Y3RSYXRpbmciLCJwcm9kdWN0RGVmYXVsdFByaWNlIiwicHJvZHVjdFNrdSIsInByb2R1Y3RPcmlnaW5hbFByaWNlIiwicHJvZHVjdExpbmtEZXRhaWxQYWdlIiwicHJvZHVjdExpbmtBZGRUb0NhcnQiLCJwcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydCIsInByb2R1Y3RGb3JtQWRkVG9DYXJ0IiwicHJvZHVjdEJ1dHRvbkFkZFRvQ2FydCIsImltYWdlVXJsIiwiaW1hZ2VBbHQiLCJsYWJlbHMiLCJwcm9kdWN0SXRlbU5hbWUiLCJyYXRpbmdWYWx1ZSIsImRlZmF1bHRQcmljZSIsInNrdSIsIm9yaWdpbmFsUHJpY2UiLCJkZXRhaWxQYWdlVXJsIiwiYWRkVG9DYXJ0VXJsIiwiYWpheEFkZFRvQ2FydFVybCIsImFkZFRvQ2FydEZvcm1BY3Rpb24iLCJnZXRTa3VGcm9tVXJsIiwidXJsIiwibGFzdFBhcnRPZlVybCIsIlJlZ0V4cCIsIm1hdGNoIiwic3JjIiwiYWx0IiwiY29udGVudCIsImVsZW1lbnQiLCJocmVmIiwiZGlzYWJsZWQiLCJkYXRhc2V0IiwiYWN0aW9uIiwiZm9ybUFjdGlvbiIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLE1BQU1BLGNBQU4sU0FBNkJDLGdIQUE3QixDQUFnRDtBQUFBO0FBQUE7QUFBQSxTQUNqREMsV0FEaUQ7QUFBQTs7QUFHakRDLE1BQUksR0FBUztBQUNuQixTQUFLRCxXQUFMLEdBQWdDLEtBQUtFLHNCQUFMLENBQStCLEtBQUtDLE1BQXBDLHFCQUE0RCxDQUE1RCxDQUFoQztBQUVBLFVBQU1GLElBQU47QUFDSDs7QUFFU0csdUJBQXFCLEdBQVM7QUFDcEMsVUFBTUEscUJBQU47QUFDQSxTQUFLQywwQ0FBTDtBQUNIOztBQUVTQSw0Q0FBMEMsR0FBRztBQUNuRCxRQUFJLENBQUMsS0FBS0MsV0FBVixFQUF1QjtBQUNuQjtBQUNIOztBQUVELFNBQUtBLFdBQUwsQ0FBaUJDLGdCQUFqQixDQUFrQ0Msc0hBQWxDLEVBQThEQyxLQUFELElBQWtCO0FBQzNFLFdBQUtDLGlCQUFMLENBQXFDRCxLQUFkLENBQXFCRSxNQUFyQixDQUE0QlgsV0FBbkQ7QUFDSCxLQUZEO0FBR0g7O0FBRVNVLG1CQUFpQixDQUFDRSxLQUFELEVBQXNCO0FBQzdDLFFBQUksQ0FBQyxLQUFLWixXQUFWLEVBQXVCO0FBQ25CO0FBQ0g7O0FBRUQsU0FBS0EsV0FBTCxDQUFpQmEsU0FBakIsUUFBZ0NELEtBQWhDO0FBQ0g7O0FBOUIwRCxDOzs7Ozs7Ozs7Ozs7QUNIL0Q7QUFBQTtBQUFBO0FB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LENBQTBCMEIsTUFBakM7QUFDSDs7QUFFRCxRQUFJLEtBQUt6QixzQkFBVCxFQUFpQztBQUM3QixhQUFPLEtBQUtBLHNCQUFMLENBQTRCd0IsT0FBNUIsQ0FBb0NFLFVBQTNDO0FBQ0g7QUFDSjs7QUFoUzhDLEMiLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQucmF0aW5nLXNlbGVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJhdGluZ1NlbGVjdG9yQ29yZSBmcm9tICdQcm9kdWN0UmV2aWV3V2lkZ2V0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3JhdGluZy1zZWxlY3Rvci9yYXRpbmctc2VsZWN0b3InO1xuaW1wb3J0IHsgRVZFTlRfVVBEQVRFX1JFVklFV19DT1VOVCB9IGZyb20gJ1Nob3BVaVByb2plY3QvY29tcG9uZW50cy9tb2xlY3VsZXMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhdGluZ1NlbGVjdG9yIGV4dGVuZHMgUmF0aW5nU2VsZWN0b3JDb3JlIHtcbiAgICBwcm90ZWN0ZWQgcmV2aWV3Q291bnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmV2aWV3Q291bnQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fcmV2aWV3LWNvdW50YClbMF07XG5cbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBVcGRhdGVSYXRpbmdFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm1hcFVwZGF0ZVJhdGluZ0V2ZW50cygpO1xuICAgICAgICB0aGlzLm1hcFByb2R1Y3RJdGVtVXBkYXRlUmV2aWV3Q291bnRDdXN0b21FdmVudCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBQcm9kdWN0SXRlbVVwZGF0ZVJldmlld0NvdW50Q3VzdG9tRXZlbnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9kdWN0SXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKEVWRU5UX1VQREFURV9SRVZJRVdfQ09VTlQsIChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmV2aWV3Q291bnQoKDxDdXN0b21FdmVudD5ldmVudCkuZGV0YWlsLnJldmlld0NvdW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVJldmlld0NvdW50KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnJldmlld0NvdW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJldmlld0NvdW50LmlubmVyVGV4dCA9IGAke3ZhbHVlfWA7XG4gICAgfVxufVxuIiwiaW1wb3J0IFByb2R1Y3RJdGVtQ29yZSwge1xuICAgIFByb2R1Y3RJdGVtRGF0YSBhcyBQcm9kdWN0SXRlbURhdGFDb3JlLFxufSBmcm9tICdTaG9wVWkvY29tcG9uZW50cy9tb2xlY3VsZXMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbSc7XG5cbmV4cG9ydCBjb25zdCBFVkVOVF9VUERBVEVfUkVWSUVXX0NPVU5UID0gJ3VwZGF0ZVJldmlld0NvdW50JztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0SXRlbURhdGEgZXh0ZW5kcyBQcm9kdWN0SXRlbURhdGFDb3JlIHtcbiAgICByZXZpZXdDb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0SXRlbSBleHRlbmRzIFByb2R1Y3RJdGVtQ29yZSB7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RSZXZpZXdDb3VudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0UmV2aWV3Q291bnQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fcmV2aWV3LWNvdW50YClbMF07XG5cbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByb2R1Y3RJdGVtRGF0YShkYXRhOiBQcm9kdWN0SXRlbURhdGEpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIudXBkYXRlUHJvZHVjdEl0ZW1EYXRhKGRhdGEpO1xuICAgICAgICB0aGlzLnJldmlld0NvdW50ID0gZGF0YS5yZXZpZXdDb3VudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0IHJldmlld0NvdW50KHJldmlld0NvdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEVWRU5UX1VQREFURV9SRVZJRVdfQ09VTlQsIHsgcmV2aWV3Q291bnQgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICdTaG9wVWkvbW9kZWxzL2NvbXBvbmVudCc7XG5pbXBvcnQgUHJvZHVjdEl0ZW0sIHsgRVZFTlRfVVBEQVRFX1JBVElORyB9IGZyb20gJ1Nob3BVaS9jb21wb25lbnRzL21vbGVjdWxlcy9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmF0aW5nU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiB0aGUgZWxlbWVudHMgd2hpY2ggdG9nZ2xlIHRoZSBzdGVwcyBvZiB0aGUgcHJvZHVjdCByZXZpZXcuXG4gICAgICovXG4gICAgc3RlcHM6IEhUTUxFbGVtZW50W107XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RJdGVtOiBQcm9kdWN0SXRlbTtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9faW5wdXRgKVswXTtcbiAgICAgICAgdGhpcy5zdGVwcyA9IDxIVE1MRWxlbWVudFtdPkFycmF5LmZyb20odGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fc3RlcGApKTtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEl0ZW1DbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEl0ZW0gPSA8UHJvZHVjdEl0ZW0+dGhpcy5jbG9zZXN0KGAuJHt0aGlzLnByb2R1Y3RJdGVtQ2xhc3NOYW1lfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrSW5wdXQodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXBVcGRhdGVSYXRpbmdFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1hcFN0ZXBDbGlja0V2ZW50KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcFN0ZXBDbGlja0V2ZW50KCkge1xuICAgICAgICB0aGlzLnN0ZXBzLmZvckVhY2goKHN0ZXA6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBzdGVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vblN0ZXBDbGljayhldmVudCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwVXBkYXRlUmF0aW5nRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMucHJvZHVjdEl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFwUHJvZHVjdEl0ZW1VcGRhdGVSYXRpbmdDdXN0b21FdmVudCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBQcm9kdWN0SXRlbVVwZGF0ZVJhdGluZ0N1c3RvbUV2ZW50KCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRfVVBEQVRFX1JBVElORywgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSYXRpbmcoKDxDdXN0b21FdmVudD5ldmVudCkuZGV0YWlsLnJhdGluZyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblN0ZXBDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc3RlcCA9IDxIVE1MRWxlbWVudD5ldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHBhcnNlRmxvYXQoc3RlcC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RlcC12YWx1ZScpKTtcblxuICAgICAgICB0aGlzLmNoZWNrSW5wdXQobmV3VmFsdWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhdGluZyhuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIG9mIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIG51bWJlciBmb3IgY2hlY2tpbmcgaWYgdGhlIGF0dHJpYnV0ZSBpcyB0byBiZSBzZXQgb3IgcmVtb3ZlZCBmcm9tIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGNoZWNrSW5wdXQodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZUlmRW1wdHlWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIGF0dHJpYnV0ZSBhbmQgdG9nZ2xlcyB0aGUgc3BlY2lhbCBjbGFzcyBuYW1lLlxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIG51bWJlciBmb3Igc2V0dGluZyB0aGUgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHVwZGF0ZVJhdGluZyh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3ZhbHVlfWApO1xuXG4gICAgICAgIHRoaXMuc3RlcHMuZm9yRWFjaCgoc3RlcDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IHBhcnNlRmxvYXQoc3RlcC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RlcC12YWx1ZScpKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID49IHN0ZXBWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHN0ZXAuY2xhc3NMaXN0LmFkZChgJHt0aGlzLm5hbWV9X19zdGVwLS1hY3RpdmVgKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RlcC5jbGFzc0xpc3QucmVtb3ZlKGAke3RoaXMubmFtZX1fX3N0ZXAtLWFjdGl2ZWApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGFuIGlucHV0IHZhbHVlLlxuICAgICAqL1xuICAgIGdldCB2YWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmlucHV0LnZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGlmIHRoZSBlbGVtZW50IGlzIHJlYWQtb25seS5cbiAgICAgKi9cbiAgICBnZXQgcmVhZE9ubHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgncmVhZG9ubHknKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGlmIHRoZSBlbGVtZW50IGhhcyBhbiBlbXB0eSB2YWx1ZS5cbiAgICAgKi9cbiAgICBnZXQgZGlzYWJsZUlmRW1wdHlWYWx1ZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdkaXNhYmxlLWlmLWVtcHR5LXZhbHVlJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBwcm9kdWN0SXRlbUNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3Byb2R1Y3QtaXRlbS1jbGFzcy1uYW1lJyk7XG4gICAgfVxufVxuIiwiLyogdHNsaW50OmRpc2FibGU6IG1heC1maWxlLWxpbmUtY291bnQgKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NvbXBvbmVudCc7XG5cbi8qKlxuICogQGV2ZW50IHVwZGF0ZVJhdGluZyBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHByb2R1Y3QgcmF0aW5nIGhhcyBiZWVuIHVwZGF0ZWQuXG4gKiBAZXZlbnQgdXBkYXRlTGFiZWxzIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcHJvZHVjdCBsYWJlbHMgaGFzIGJlZW4gdXBkYXRlZC5cbiAqIEBldmVudCB1cGRhdGVBZGRUb0NhcnRVcmwgQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwcm9kdWN0ICdhZGQgdG8gY2FydCcgVVJMIGhhcyBiZWVuIHVwZGF0ZWQuXG4gKiBAZXZlbnQgdXBkYXRlQWpheEFkZFRvQ2FydFVybCBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHByb2R1Y3QgQUpBWCAnYWRkIHRvIGNhcnQnIFVSTCBoYXMgYmVlbiB1cGRhdGVkLlxuICogQGV2ZW50IHVwZGF0ZUFkZFRvQ2FydEZvcm1BY3Rpb24gQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwcm9kdWN0ICdhZGQgdG8gY2FydCcgZm9ybSBhY3Rpb24gaGFzIGJlZW4gdXBkYXRlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IEVWRU5UX1VQREFURV9SQVRJTkcgPSAndXBkYXRlUmF0aW5nJztcbmV4cG9ydCBjb25zdCBFVkVOVF9VUERBVEVfTEFCRUxTID0gJ3VwZGF0ZUxhYmVscyc7XG5leHBvcnQgY29uc3QgRVZFTlRfVVBEQVRFX0FERF9UT19DQVJUX1VSTCA9ICd1cGRhdGVBZGRUb0NhcnRVcmwnO1xuZXhwb3J0IGNvbnN0IEVWRU5UX1VQREFURV9BSkFYX0FERF9UT19DQVJUX1VSTCA9ICd1cGRhdGVBamF4QWRkVG9DYXJ0VXJsJztcbmV4cG9ydCBjb25zdCBFVkVOVF9VUERBVEVfQUREX1RPX0NBUlRfRk9STV9BQ1RJT04gPSAndXBkYXRlQWRkVG9DYXJ0Rm9ybUFjdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEl0ZW1EYXRhIHtcbiAgICBpbWFnZVVybDogc3RyaW5nO1xuICAgIGltYWdlQWx0OiBzdHJpbmc7XG4gICAgbGFiZWxzOiBQcm9kdWN0SXRlbUxhYmVsc0RhdGFbXTtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgcmF0aW5nVmFsdWU6IG51bWJlcjtcbiAgICBkZWZhdWx0UHJpY2U6IHN0cmluZztcbiAgICBza3U/OiBzdHJpbmc7XG4gICAgb3JpZ2luYWxQcmljZTogc3RyaW5nO1xuICAgIGRldGFpbFBhZ2VVcmw6IHN0cmluZztcbiAgICBhZGRUb0NhcnRVcmw6IHN0cmluZztcbiAgICBhamF4QWRkVG9DYXJ0VXJsPzogc3RyaW5nO1xuICAgIGFkZFRvQ2FydEZvcm1BY3Rpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEl0ZW1MYWJlbHNEYXRhIHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0TmFtZTogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RSYXRpbmc6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3REZWZhdWx0UHJpY2U6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0U2t1OiBIVE1MTWV0YUVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RPcmlnaW5hbFByaWNlOiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdExpbmtEZXRhaWxQYWdlOiBIVE1MQW5jaG9yRWxlbWVudFtdO1xuICAgIHByb3RlY3RlZCBwcm9kdWN0TGlua0FkZFRvQ2FydDogSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RBamF4QnV0dG9uQWRkVG9DYXJ0OiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdEZvcm1BZGRUb0NhcnQ6IEhUTUxGb3JtRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdEJ1dHRvbkFkZFRvQ2FydDogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0SW1hZ2UgPSA8SFRNTEltYWdlRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19pbWFnZWApWzBdO1xuICAgICAgICB0aGlzLnByb2R1Y3ROYW1lID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX25hbWVgKVswXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0UmF0aW5nID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fcmF0aW5nYClbMF07XG4gICAgICAgIHRoaXMucHJvZHVjdERlZmF1bHRQcmljZSA9IDxIVE1MRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19kZWZhdWx0LXByaWNlYClbMF07XG4gICAgICAgIHRoaXMucHJvZHVjdFNrdSA9IDxIVE1MTWV0YUVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fc2t1YClbMF07XG4gICAgICAgIHRoaXMucHJvZHVjdE9yaWdpbmFsUHJpY2UgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fb3JpZ2luYWwtcHJpY2VgKVswXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlua0RldGFpbFBhZ2UgPSA8SFRNTEFuY2hvckVsZW1lbnRbXT4oXG4gICAgICAgICAgICBBcnJheS5mcm9tKHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2xpbmstZGV0YWlsLXBhZ2VgKSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0TGlua0FkZFRvQ2FydCA9IDxIVE1MQW5jaG9yRWxlbWVudD4oXG4gICAgICAgICAgICB0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19saW5rLWFkZC10by1jYXJ0YClbMF1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydCA9IDxIVE1MQnV0dG9uRWxlbWVudD4oXG4gICAgICAgICAgICB0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19hamF4LWJ1dHRvbi1hZGQtdG8tY2FydGApWzBdXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucHJvZHVjdEZvcm1BZGRUb0NhcnQgPSA8SFRNTEZvcm1FbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2Zvcm0tYWRkLXRvLWNhcnRgKVswXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0QnV0dG9uQWRkVG9DYXJ0ID0gPEhUTUxCdXR0b25FbGVtZW50PihcbiAgICAgICAgICAgIHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2J1dHRvbi1hZGQtdG8tY2FydGApWzBdXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIGluZm9ybWF0aW9uLlxuICAgICAqIEBwYXJhbSBkYXRhIEEgZGF0YSBvYmplY3QgZm9yIHNldHRpbmcgdGhlIHByb2R1Y3QgY2FyZCBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0SXRlbURhdGEoZGF0YTogUHJvZHVjdEl0ZW1EYXRhKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW1hZ2VVcmwgPSBkYXRhLmltYWdlVXJsO1xuICAgICAgICB0aGlzLmltYWdlQWx0ID0gZGF0YS5uYW1lO1xuICAgICAgICB0aGlzLmxhYmVscyA9IGRhdGEubGFiZWxzO1xuICAgICAgICB0aGlzLnByb2R1Y3RJdGVtTmFtZSA9IGRhdGEubmFtZTtcbiAgICAgICAgdGhpcy5yYXRpbmdWYWx1ZSA9IGRhdGEucmF0aW5nVmFsdWU7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByaWNlID0gZGF0YS5kZWZhdWx0UHJpY2U7XG4gICAgICAgIHRoaXMuc2t1ID0gZGF0YS5za3UgPz8gbnVsbDtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFByaWNlID0gZGF0YS5vcmlnaW5hbFByaWNlO1xuICAgICAgICB0aGlzLmRldGFpbFBhZ2VVcmwgPSBkYXRhLmRldGFpbFBhZ2VVcmw7XG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0VXJsID0gZGF0YS5hZGRUb0NhcnRVcmw7XG4gICAgICAgIHRoaXMuYWpheEFkZFRvQ2FydFVybCA9IGRhdGEuYWpheEFkZFRvQ2FydFVybCA/PyBudWxsO1xuICAgICAgICB0aGlzLmFkZFRvQ2FydEZvcm1BY3Rpb24gPSBkYXRhLmFkZFRvQ2FydEZvcm1BY3Rpb24gPz8gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0U2t1RnJvbVVybCh1cmw6IFVybCk6IFVybCB7XG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxhc3RQYXJ0T2ZVcmwgPSBuZXcgUmVnRXhwKGAoW15cXFxcL10pKyRgLCAnZycpO1xuICAgICAgICBjb25zdCBza3UgPSB1cmwubWF0Y2gobGFzdFBhcnRPZlVybCk7XG5cbiAgICAgICAgcmV0dXJuIHNrdVswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgaW1hZ2UgVVJMLlxuICAgICAqIEBwYXJhbSBpbWFnZVVybCBBIHByb2R1Y3QgY2FyZCBpbWFnZSBVUkwuXG4gICAgICovXG4gICAgc2V0IGltYWdlVXJsKGltYWdlVXJsOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RJbWFnZS5zcmMgPSBpbWFnZVVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBpbWFnZSBhbHQuXG4gICAgICogQHBhcmFtIGltYWdlQWx0IEEgcHJvZHVjdCBjYXJkIGltYWdlIGFsdC5cbiAgICAgKi9cbiAgICBzZXQgaW1hZ2VBbHQoaW1hZ2VBbHQ6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0SW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEltYWdlLmFsdCA9IGltYWdlQWx0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIGxhYmVscy5cbiAgICAgKiBAcGFyYW0gbGFiZWxzIEFuIGFycmF5IG9mIHByb2R1Y3QgY2FyZCBsYWJlbHMuXG4gICAgICovXG4gICAgc2V0IGxhYmVscyhsYWJlbHM6IFByb2R1Y3RJdGVtTGFiZWxzRGF0YVtdKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFVkVOVF9VUERBVEVfTEFCRUxTLCB7IGxhYmVscyB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgbmFtZS5cbiAgICAgKiBAcGFyYW0gbmFtZSBBIHByb2R1Y3QgY2FyZCBuYW1lLlxuICAgICAqL1xuICAgIHNldCBwcm9kdWN0SXRlbU5hbWUobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3ROYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3ROYW1lLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgcmF0aW5nLlxuICAgICAqIEBwYXJhbSByYXRpbmcgQSBwcm9kdWN0IGNhcmQgcmF0aW5nLlxuICAgICAqL1xuICAgIHNldCByYXRpbmdWYWx1ZShyYXRpbmc6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRVZFTlRfVVBEQVRFX1JBVElORywgeyByYXRpbmcgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIGRlZmF1bHQgcHJpY2UuXG4gICAgICogQHBhcmFtIGRlZmF1bHRQcmljZSBBIHByb2R1Y3QgY2FyZCBkZWZhdWx0IHByaWNlLlxuICAgICAqL1xuICAgIHNldCBkZWZhdWx0UHJpY2UoZGVmYXVsdFByaWNlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdERlZmF1bHRQcmljZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0RGVmYXVsdFByaWNlLmlubmVyVGV4dCA9IGRlZmF1bHRQcmljZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBza3UuXG4gICAgICogQHBhcmFtIHByb2R1Y3RTa3UgQSBwcm9kdWN0IGNhcmQgc2t1LlxuICAgICAqL1xuICAgIHNldCBza3UocHJvZHVjdFNrdTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RTa3UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdFNrdS5jb250ZW50ID0gcHJvZHVjdFNrdTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBvcmlnaW5hbCBwcmljZS5cbiAgICAgKiBAcGFyYW0gb3JpZ2luYWxQcmljZSBBIHByb2R1Y3QgY2FyZCBvcmlnaW5hbCBwcmljZS5cbiAgICAgKi9cbiAgICBzZXQgb3JpZ2luYWxQcmljZShvcmlnaW5hbFByaWNlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdE9yaWdpbmFsUHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdE9yaWdpbmFsUHJpY2UuaW5uZXJUZXh0ID0gb3JpZ2luYWxQcmljZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBkZXRhaWwgcGFnZSBVUkwuXG4gICAgICogQHBhcmFtIGRldGFpbFBhZ2VVcmwgQSBwcm9kdWN0IGNhcmQgZGV0YWlsIHBhZ2UgVVJMLlxuICAgICAqL1xuICAgIHNldCBkZXRhaWxQYWdlVXJsKGRldGFpbFBhZ2VVcmw6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0TGlua0RldGFpbFBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdExpbmtEZXRhaWxQYWdlLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50KSA9PiAoZWxlbWVudC5ocmVmID0gZGV0YWlsUGFnZVVybCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkICdhZGQgdG8gY2FydCcgVVJMLlxuICAgICAqIEBwYXJhbSBhZGRUb0NhcnRVcmwgQSBwcm9kdWN0IGNhcmQgJ2FkZCB0byBjYXJ0JyBVUkwuXG4gICAgICovXG4gICAgc2V0IGFkZFRvQ2FydFVybChhZGRUb0NhcnRVcmw6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0TGlua0FkZFRvQ2FydCkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TGlua0FkZFRvQ2FydC5ocmVmID0gYWRkVG9DYXJ0VXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEVWRU5UX1VQREFURV9BRERfVE9fQ0FSVF9VUkwsIHsgc2t1OiB0aGlzLmdldFNrdUZyb21VcmwoYWRkVG9DYXJ0VXJsKSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgQUpBWCAnYWRkIHRvIGNhcnQnIFVSTC5cbiAgICAgKiBAcGFyYW0gYWpheEFkZFRvQ2FydFVybCBBIHByb2R1Y3QgY2FyZCBBSkFYICdhZGQgdG8gY2FydCcgVVJMLlxuICAgICAqL1xuICAgIHNldCBhamF4QWRkVG9DYXJ0VXJsKGFqYXhBZGRUb0NhcnRVcmw6IFVybCkge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydCkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydC5kaXNhYmxlZCA9ICFhamF4QWRkVG9DYXJ0VXJsO1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydC5kYXRhc2V0LnVybCA9IGFqYXhBZGRUb0NhcnRVcmw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRVZFTlRfVVBEQVRFX0FKQVhfQUREX1RPX0NBUlRfVVJMLCB7IHNrdTogdGhpcy5nZXRTa3VGcm9tVXJsKGFqYXhBZGRUb0NhcnRVcmwpIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCAnYWRkIHRvIGNhcnQnIGZvcm0gYWN0aW9uLlxuICAgICAqIEBwYXJhbSBhZGRUb0NhcnRGb3JtQWN0aW9uIEEgcHJvZHVjdCBjYXJkICdhZGQgdG8gY2FydCcgZm9ybSBhY3Rpb24uXG4gICAgICovXG4gICAgc2V0IGFkZFRvQ2FydEZvcm1BY3Rpb24oYWRkVG9DYXJ0Rm9ybUFjdGlvbjogVXJsKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RGb3JtQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RGb3JtQWRkVG9DYXJ0LmFjdGlvbiA9IGFkZFRvQ2FydEZvcm1BY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9kdWN0QnV0dG9uQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RCdXR0b25BZGRUb0NhcnQuZGF0YXNldC5mb3JtQWN0aW9uID0gYWRkVG9DYXJ0Rm9ybUFjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFVkVOVF9VUERBVEVfQUREX1RPX0NBUlRfRk9STV9BQ1RJT04sIHtcbiAgICAgICAgICAgIHNrdTogdGhpcy5nZXRTa3VGcm9tVXJsKGFkZFRvQ2FydEZvcm1BY3Rpb24pLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgaW1hZ2UgVVJMLlxuICAgICAqL1xuICAgIGdldCBpbWFnZVVybCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0SW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RJbWFnZS5zcmM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgbmFtZS5cbiAgICAgKi9cbiAgICBnZXQgcHJvZHVjdEl0ZW1OYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3ROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0TmFtZS5pbm5lclRleHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgcmF0aW5nLlxuICAgICAqL1xuICAgIGdldCByYXRpbmdWYWx1ZSgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0UmF0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMucHJvZHVjdFJhdGluZy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgZGVmYXVsdCBwcmljZS5cbiAgICAgKi9cbiAgICBnZXQgZGVmYXVsdFByaWNlKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3REZWZhdWx0UHJpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3REZWZhdWx0UHJpY2UuaW5uZXJUZXh0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIHNrdS5cbiAgICAgKi9cbiAgICBnZXQgc2t1KCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RTa3UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RTa3UuY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCBvcmlnaW5hbCBwcmljZS5cbiAgICAgKi9cbiAgICBnZXQgb3JpZ2luYWxQcmljZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0T3JpZ2luYWxQcmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdE9yaWdpbmFsUHJpY2UuaW5uZXJUZXh0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIGRldGFpbCBwYWdlIFVSTC5cbiAgICAgKi9cbiAgICBnZXQgZGV0YWlsUGFnZVVybCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0TGlua0RldGFpbFBhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RMaW5rRGV0YWlsUGFnZVswXS5ocmVmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkICdhZGQgdG8gY2FydCcgVVJMLlxuICAgICAqL1xuICAgIGdldCBhZGRUb0NhcnRVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdExpbmtBZGRUb0NhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RMaW5rQWRkVG9DYXJ0LmhyZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgQUpBWCAnYWRkIHRvIGNhcnQnIFVSTC5cbiAgICAgKi9cbiAgICBnZXQgYWpheEFkZFRvQ2FydFVybCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQuZGF0YXNldC51cmw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgJ2FkZCB0byBjYXJ0JyBmb3JtIGFjdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgYWRkVG9DYXJ0Rm9ybUFjdGlvbigpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0Rm9ybUFkZFRvQ2FydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdEZvcm1BZGRUb0NhcnQuYWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEJ1dHRvbkFkZFRvQ2FydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdEJ1dHRvbkFkZFRvQ2FydC5kYXRhc2V0LmZvcm1BY3Rpb247XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9