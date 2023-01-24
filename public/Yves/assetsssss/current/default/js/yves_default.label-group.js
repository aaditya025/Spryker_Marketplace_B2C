(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["label-group"],{

/***/ "./vendor/spryker-shop/product-label-widget/src/SprykerShop/Yves/ProductLabelWidget/Theme/default/components/molecules/label-group/label-group.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/product-label-widget/src/SprykerShop/Yves/ProductLabelWidget/Theme/default/components/molecules/label-group/label-group.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LabelGroup; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
/* harmony import */ var ShopUi_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ShopUi/components/molecules/product-item/product-item */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/product-item/product-item.ts");


class LabelGroup extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.productLabelFlags = void 0;
    this.productLabelTag = void 0;
    this.productItem = void 0;
  }

  readyCallback() {}

  init() {
    this.productLabelFlags = Array.from(this.getElementsByClassName(this.jsName + "__label-flag"));
    this.productLabelTag = this.getElementsByClassName(this.jsName + "__label-tag")[0];

    if (this.productItemClassName) {
      this.productItem = this.closest("." + this.productItemClassName);
    }

    this.mapEvents();
  }

  mapEvents() {
    if (!this.productItem) {
      return;
    }

    this.mapProductItemUpdateLabelsCustomEvent();
  }

  mapProductItemUpdateLabelsCustomEvent() {
    this.productItem.addEventListener(ShopUi_components_molecules_product_item_product_item__WEBPACK_IMPORTED_MODULE_1__["EVENT_UPDATE_LABELS"], event => {
      this.setProductLabels(event.detail.labels);
    });
  }
  /**
   * Hides the product labels if data is empty.
   * Splits the labels object to labelFlags and labelTag accordingly.
   * Calls the method for updating product labels.
   * @param labels An array of product labels.
   */


  setProductLabels(labels) {
    if (!labels.length) {
      this.productLabelFlags.forEach(element => element.classList.add(this.classToToggle));
      this.productLabelTag.classList.add(this.classToToggle);
      return;
    }

    var labelTagType = this.productLabelTag.getAttribute('data-label-tag-type');
    var labelFlags = labels.filter(element => element.type !== labelTagType);
    var labelTag = labels.filter(element => element.type === labelTagType);

    if (!labelTag.length) {
      this.productLabelTag.classList.add(this.classToToggle);
    }

    if (!labelFlags.length) {
      this.productLabelFlags.forEach(element => element.classList.add(this.classToToggle));
    }

    this.updateProductLabels(labelFlags, labelTag[0]);
  }

  updateProductLabelTag(element) {
    var labelTagTextContent = this.productLabelTag.getElementsByClassName(this.jsName + "__label-tag-text")[0];
    this.productLabelTag.classList.remove(this.classToToggle);
    labelTagTextContent.innerText = element.text;
  }

  createProductLabelFlagClones() {
    var cloneLabelFlag = this.productLabelFlags[0].cloneNode(true);
    this.productLabelFlags[0].parentNode.insertBefore(cloneLabelFlag, this.productLabelFlags[0].nextSibling);
    this.productLabelFlags = Array.from(this.getElementsByClassName(this.jsName + "__label-flag"));
  }

  deleteProductLabelFlagClones(labelFlags) {
    while (this.productLabelFlags.length > labelFlags.length) {
      this.productLabelFlags[this.productLabelFlags.length - 1].remove();
      this.productLabelFlags = Array.from(this.getElementsByClassName(this.jsName + "__label-flag"));
    }
  }

  deleteProductLabelFlagModifiers(index) {
    this.productLabelFlags[index].classList.forEach(element => {
      if (element.includes('--')) {
        this.productLabelFlags[index].classList.remove(element);
      }
    });
  }

  updateProductLabelFlags(element, index) {
    var labelFlagClassName = this.productLabelFlags[index].getAttribute('data-config-name');
    var labelFlagTextContent = this.productLabelFlags[index].getElementsByClassName(this.jsName + "__label-flag-text")[0];

    if (element.type) {
      this.productLabelFlags[index].classList.add(labelFlagClassName + "--" + element.type);
    }

    this.productLabelFlags[index].classList.remove(this.classToToggle);
    labelFlagTextContent.innerText = element.text;
  }

  updateProductLabels(labelFlags, labelTag) {
    if (labelTag) {
      this.updateProductLabelTag(labelTag);
    }

    if (labelFlags.length) {
      labelFlags.forEach((element, index) => {
        if (index >= 1) {
          this.createProductLabelFlagClones();
        }

        this.deleteProductLabelFlagClones(labelFlags);
        this.deleteProductLabelFlagModifiers(index);
        this.updateProductLabelFlags(element, index);
      });
    }
  }

  get classToToggle() {
    return this.getAttribute('class-to-toggle');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Byb2R1Y3QtbGFiZWwtd2lkZ2V0L3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Byb2R1Y3RMYWJlbFdpZGdldC9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL2xhYmVsLWdyb3VwL2xhYmVsLWdyb3VwLnRzIiwid2VicGFjazovLy8uL3ZlbmRvci9zcHJ5a2VyLXNob3Avc2hvcC11aS9zcmMvU3ByeWtlclNob3AvWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLnRzIl0sIm5hbWVzIjpbIkxhYmVsR3JvdXAiLCJDb21wb25lbnQiLCJwcm9kdWN0TGFiZWxGbGFncyIsInByb2R1Y3RMYWJlbFRhZyIsInByb2R1Y3RJdGVtIiwicmVhZHlDYWxsYmFjayIsImluaXQiLCJBcnJheSIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwianNOYW1lIiwicHJvZHVjdEl0ZW1DbGFzc05hbWUiLCJjbG9zZXN0IiwibWFwRXZlbnRzIiwibWFwUHJvZHVjdEl0ZW1VcGRhdGVMYWJlbHNDdXN0b21FdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJFVkVOVF9VUERBVEVfTEFCRUxTIiwiZXZlbnQiLCJzZXRQcm9kdWN0TGFiZWxzIiwiZGV0YWlsIiwibGFiZWxzIiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjbGFzc1RvVG9nZ2xlIiwibGFiZWxUYWdUeXBlIiwiZ2V0QXR0cmlidXRlIiwibGFiZWxGbGFncyIsImZpbHRlciIsInR5cGUiLCJsYWJlbFRhZyIsInVwZGF0ZVByb2R1Y3RMYWJlbHMiLCJ1cGRhdGVQcm9kdWN0TGFiZWxUYWciLCJsYWJlbFRhZ1RleHRDb250ZW50IiwicmVtb3ZlIiwiaW5uZXJUZXh0IiwidGV4dCIsImNyZWF0ZVByb2R1Y3RMYWJlbEZsYWdDbG9uZXMiLCJjbG9uZUxhYmVsRmxhZyIsImNsb25lTm9kZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImRlbGV0ZVByb2R1Y3RMYWJlbEZsYWdDbG9uZXMiLCJkZWxldGVQcm9kdWN0TGFiZWxGbGFnTW9kaWZpZXJzIiwiaW5kZXgiLCJpbmNsdWRlcyIsInVwZGF0ZVByb2R1Y3RMYWJlbEZsYWdzIiwibGFiZWxGbGFnQ2xhc3NOYW1lIiwibGFiZWxGbGFnVGV4dENvbnRlbnQiLCJFVkVOVF9VUERBVEVfUkFUSU5HIiwiRVZFTlRfVVBEQVRFX0FERF9UT19DQVJUX1VSTCIsIkVWRU5UX1VQREFURV9BSkFYX0FERF9UT19DQVJUX1VSTCIsIkVWRU5UX1VQREFURV9BRERfVE9fQ0FSVF9GT1JNX0FDVElPTiIsIlByb2R1Y3RJdGVtIiwicHJvZHVjdEltYWdlIiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0UmF0aW5nIiwicHJvZHVjdERlZmF1bHRQcmljZSIsInByb2R1Y3RTa3UiLCJwcm9kdWN0T3JpZ2luYWxQcmljZSIsInByb2R1Y3RMaW5rRGV0YWlsUGFnZSIsInByb2R1Y3RMaW5rQWRkVG9DYXJ0IiwicHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQiLCJwcm9kdWN0Rm9ybUFkZFRvQ2FydCIsInByb2R1Y3RCdXR0b25BZGRUb0NhcnQiLCJ1cGRhdGVQcm9kdWN0SXRlbURhdGEiLCJkYXRhIiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsIm5hbWUiLCJwcm9kdWN0SXRlbU5hbWUiLCJyYXRpbmdWYWx1ZSIsImRlZmF1bHRQcmljZSIsInNrdSIsIm9yaWdpbmFsUHJpY2UiLCJkZXRhaWxQYWdlVXJsIiwiYWRkVG9DYXJ0VXJsIiwiYWpheEFkZFRvQ2FydFVybCIsImFkZFRvQ2FydEZvcm1BY3Rpb24iLCJnZXRTa3VGcm9tVXJsIiwidXJsIiwibGFzdFBhcnRPZlVybCIsIlJlZ0V4cCIsIm1hdGNoIiwic3JjIiwiYWx0IiwiZGlzcGF0Y2hDdXN0b21FdmVudCIsInJhdGluZyIsImNvbnRlbnQiLCJocmVmIiwiZGlzYWJsZWQiLCJkYXRhc2V0IiwiYWN0aW9uIiwiZm9ybUFjdGlvbiIsIk51bWJlciIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS2UsTUFBTUEsVUFBTixTQUF5QkMsK0RBQXpCLENBQW1DO0FBQUE7QUFBQTtBQUFBLFNBQ3BDQyxpQkFEb0M7QUFBQSxTQUVwQ0MsZUFGb0M7QUFBQSxTQUdwQ0MsV0FIb0M7QUFBQTs7QUFLcENDLGVBQWEsR0FBUyxDQUFFOztBQUV4QkMsTUFBSSxHQUFTO0FBQ25CLFNBQUtKLGlCQUFMLEdBQXdDSyxLQUFLLENBQUNDLElBQU4sQ0FBVyxLQUFLQyxzQkFBTCxDQUErQixLQUFLQyxNQUFwQyxrQkFBWCxDQUF4QztBQUNBLFNBQUtQLGVBQUwsR0FBb0MsS0FBS00sc0JBQUwsQ0FBK0IsS0FBS0MsTUFBcEMsa0JBQXlELENBQXpELENBQXBDOztBQUNBLFFBQUksS0FBS0Msb0JBQVQsRUFBK0I7QUFDM0IsV0FBS1AsV0FBTCxHQUFnQyxLQUFLUSxPQUFMLE9BQWlCLEtBQUtELG9CQUF0QixDQUFoQztBQUNIOztBQUVELFNBQUtFLFNBQUw7QUFDSDs7QUFFU0EsV0FBUyxHQUFTO0FBQ3hCLFFBQUksQ0FBQyxLQUFLVCxXQUFWLEVBQXVCO0FBQ25CO0FBQ0g7O0FBRUQsU0FBS1UscUNBQUw7QUFDSDs7QUFFU0EsdUNBQXFDLEdBQUc7QUFDOUMsU0FBS1YsV0FBTCxDQUFpQlcsZ0JBQWpCLENBQWtDQyx5R0FBbEMsRUFBd0RDLEtBQUQsSUFBa0I7QUFDckUsV0FBS0MsZ0JBQUwsQ0FBb0NELEtBQWQsQ0FBcUJFLE1BQXJCLENBQTRCQyxNQUFsRDtBQUNILEtBRkQ7QUFHSDtBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0lGLGtCQUFnQixDQUFDRSxNQUFELEVBQWtDO0FBQzlDLFFBQUksQ0FBQ0EsTUFBTSxDQUFDQyxNQUFaLEVBQW9CO0FBQ2hCLFdBQUtu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QWhCWixnQkFBZ0IsR0FBVztBQUMzQixRQUFJLEtBQUtmLDBCQUFULEVBQXFDO0FBQ2pDLGFBQU8sS0FBS0EsMEJBQUwsQ0FBZ0M2QixPQUFoQyxDQUF3Q1gsR0FBL0M7QUFDSDtBQUNKO0FBRUQ7QUFDSjtBQUNBOzs7QUFDMkIsTUFBbkJGLG1CQUFtQixHQUFXO0FBQzlCLFFBQUksS0FBS2Ysb0JBQVQsRUFBK0I7QUFDM0IsYUFBTyxLQUFLQSxvQkFBTCxDQUEwQjZCLE1BQWpDO0FBQ0g7O0FBRUQsUUFBSSxLQUFLNUIsc0JBQVQsRUFBaUM7QUFDN0IsYUFBTyxLQUFLQSxzQkFBTCxDQUE0QjJCLE9BQTVCLENBQW9DRSxVQUEzQztBQUNIO0FBQ0o7O0FBaFM4QyxDIiwiZmlsZSI6Ii4vanMveXZlc19kZWZhdWx0LmxhYmVsLWdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdTaG9wVWkvbW9kZWxzL2NvbXBvbmVudCc7XG5pbXBvcnQgUHJvZHVjdEl0ZW0sIHtcbiAgICBFVkVOVF9VUERBVEVfTEFCRUxTLFxuICAgIFByb2R1Y3RJdGVtTGFiZWxzRGF0YSxcbn0gZnJvbSAnU2hvcFVpL2NvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbEdyb3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdExhYmVsRmxhZ3M6IEhUTUxFbGVtZW50W107XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RMYWJlbFRhZzogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RJdGVtOiBQcm9kdWN0SXRlbTtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge31cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByb2R1Y3RMYWJlbEZsYWdzID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbSh0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19sYWJlbC1mbGFnYCkpO1xuICAgICAgICB0aGlzLnByb2R1Y3RMYWJlbFRhZyA9IDxIVE1MRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19sYWJlbC10YWdgKVswXTtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEl0ZW1DbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEl0ZW0gPSA8UHJvZHVjdEl0ZW0+dGhpcy5jbG9zZXN0KGAuJHt0aGlzLnByb2R1Y3RJdGVtQ2xhc3NOYW1lfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMucHJvZHVjdEl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFwUHJvZHVjdEl0ZW1VcGRhdGVMYWJlbHNDdXN0b21FdmVudCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBQcm9kdWN0SXRlbVVwZGF0ZUxhYmVsc0N1c3RvbUV2ZW50KCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRfVVBEQVRFX0xBQkVMUywgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9kdWN0TGFiZWxzKCg8Q3VzdG9tRXZlbnQ+ZXZlbnQpLmRldGFpbC5sYWJlbHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyB0aGUgcHJvZHVjdCBsYWJlbHMgaWYgZGF0YSBpcyBlbXB0eS5cbiAgICAgKiBTcGxpdHMgdGhlIGxhYmVscyBvYmplY3QgdG8gbGFiZWxGbGFncyBhbmQgbGFiZWxUYWcgYWNjb3JkaW5nbHkuXG4gICAgICogQ2FsbHMgdGhlIG1ldGhvZCBmb3IgdXBkYXRpbmcgcHJvZHVjdCBsYWJlbHMuXG4gICAgICogQHBhcmFtIGxhYmVscyBBbiBhcnJheSBvZiBwcm9kdWN0IGxhYmVscy5cbiAgICAgKi9cbiAgICBzZXRQcm9kdWN0TGFiZWxzKGxhYmVsczogUHJvZHVjdEl0ZW1MYWJlbHNEYXRhW10pIHtcbiAgICAgICAgaWYgKCFsYWJlbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMYWJlbEZsYWdzLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc1RvVG9nZ2xlKSk7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMYWJlbFRhZy5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NUb1RvZ2dsZSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxhYmVsVGFnVHlwZSA9IHRoaXMucHJvZHVjdExhYmVsVGFnLmdldEF0dHJpYnV0ZSgnZGF0YS1sYWJlbC10YWctdHlwZScpO1xuICAgICAgICBjb25zdCBsYWJlbEZsYWdzID0gbGFiZWxzLmZpbHRlcigoZWxlbWVudDogUHJvZHVjdEl0ZW1MYWJlbHNEYXRhKSA9PiBlbGVtZW50LnR5cGUgIT09IGxhYmVsVGFnVHlwZSk7XG4gICAgICAgIGNvbnN0IGxhYmVsVGFnID0gbGFiZWxzLmZpbHRlcigoZWxlbWVudDogUHJvZHVjdEl0ZW1MYWJlbHNEYXRhKSA9PiBlbGVtZW50LnR5cGUgPT09IGxhYmVsVGFnVHlwZSk7XG5cbiAgICAgICAgaWYgKCFsYWJlbFRhZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdExhYmVsVGFnLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc1RvVG9nZ2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbGFiZWxGbGFncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdExhYmVsRmxhZ3MuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzVG9Ub2dnbGUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdExhYmVscyhsYWJlbEZsYWdzLCBsYWJlbFRhZ1swXSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVByb2R1Y3RMYWJlbFRhZyhlbGVtZW50OiBQcm9kdWN0SXRlbUxhYmVsc0RhdGEpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGFiZWxUYWdUZXh0Q29udGVudCA9IDxIVE1MRWxlbWVudD4oXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMYWJlbFRhZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fbGFiZWwtdGFnLXRleHRgKVswXVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdExhYmVsVGFnLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc1RvVG9nZ2xlKTtcbiAgICAgICAgbGFiZWxUYWdUZXh0Q29udGVudC5pbm5lclRleHQgPSBlbGVtZW50LnRleHQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVByb2R1Y3RMYWJlbEZsYWdDbG9uZXMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNsb25lTGFiZWxGbGFnID0gdGhpcy5wcm9kdWN0TGFiZWxGbGFnc1swXS5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0TGFiZWxGbGFnc1swXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZUxhYmVsRmxhZywgdGhpcy5wcm9kdWN0TGFiZWxGbGFnc1swXS5uZXh0U2libGluZyk7XG4gICAgICAgIHRoaXMucHJvZHVjdExhYmVsRmxhZ3MgPSA8SFRNTEVsZW1lbnRbXT5BcnJheS5mcm9tKHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2xhYmVsLWZsYWdgKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGRlbGV0ZVByb2R1Y3RMYWJlbEZsYWdDbG9uZXMobGFiZWxGbGFnczogUHJvZHVjdEl0ZW1MYWJlbHNEYXRhW10pOiB2b2lkIHtcbiAgICAgICAgd2hpbGUgKHRoaXMucHJvZHVjdExhYmVsRmxhZ3MubGVuZ3RoID4gbGFiZWxGbGFncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdExhYmVsRmxhZ3NbdGhpcy5wcm9kdWN0TGFiZWxGbGFncy5sZW5ndGggLSAxXS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdExhYmVsRmxhZ3MgPSA8SFRNTEVsZW1lbnRbXT4oXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19sYWJlbC1mbGFnYCkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGRlbGV0ZVByb2R1Y3RMYWJlbEZsYWdNb2RpZmllcnMoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnByb2R1Y3RMYWJlbEZsYWdzW2luZGV4XS5jbGFzc0xpc3QuZm9yRWFjaCgoZWxlbWVudDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pbmNsdWRlcygnLS0nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdExhYmVsRmxhZ3NbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVQcm9kdWN0TGFiZWxGbGFncyhlbGVtZW50OiBQcm9kdWN0SXRlbUxhYmVsc0RhdGEsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGFiZWxGbGFnQ2xhc3NOYW1lOiBzdHJpbmcgPSB0aGlzLnByb2R1Y3RMYWJlbEZsYWdzW2luZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29uZmlnLW5hbWUnKTtcbiAgICAgICAgY29uc3QgbGFiZWxGbGFnVGV4dENvbnRlbnQgPSA8SFRNTEVsZW1lbnQ+KFxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TGFiZWxGbGFnc1tpbmRleF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2xhYmVsLWZsYWctdGV4dGApWzBdXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TGFiZWxGbGFnc1tpbmRleF0uY2xhc3NMaXN0LmFkZChgJHtsYWJlbEZsYWdDbGFzc05hbWV9LS0ke2VsZW1lbnQudHlwZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvZHVjdExhYmVsRmxhZ3NbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc1RvVG9nZ2xlKTtcbiAgICAgICAgbGFiZWxGbGFnVGV4dENvbnRlbnQuaW5uZXJUZXh0ID0gZWxlbWVudC50ZXh0O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVQcm9kdWN0TGFiZWxzKGxhYmVsRmxhZ3M6IFByb2R1Y3RJdGVtTGFiZWxzRGF0YVtdLCBsYWJlbFRhZzogUHJvZHVjdEl0ZW1MYWJlbHNEYXRhKTogdm9pZCB7XG4gICAgICAgIGlmIChsYWJlbFRhZykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0TGFiZWxUYWcobGFiZWxUYWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxhYmVsRmxhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICBsYWJlbEZsYWdzLmZvckVhY2goKGVsZW1lbnQ6IFByb2R1Y3RJdGVtTGFiZWxzRGF0YSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvZHVjdExhYmVsRmxhZ0Nsb25lcygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlUHJvZHVjdExhYmVsRmxhZ0Nsb25lcyhsYWJlbEZsYWdzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVByb2R1Y3RMYWJlbEZsYWdNb2RpZmllcnMoaW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdExhYmVsRmxhZ3MoZWxlbWVudCwgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGNsYXNzVG9Ub2dnbGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjbGFzcy10by10b2dnbGUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHByb2R1Y3RJdGVtQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgncHJvZHVjdC1pdGVtLWNsYXNzLW5hbWUnKTtcbiAgICB9XG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTogbWF4LWZpbGUtbGluZS1jb3VudCAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY29tcG9uZW50JztcblxuLyoqXG4gKiBAZXZlbnQgdXBkYXRlUmF0aW5nIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcHJvZHVjdCByYXRpbmcgaGFzIGJlZW4gdXBkYXRlZC5cbiAqIEBldmVudCB1cGRhdGVMYWJlbHMgQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBwcm9kdWN0IGxhYmVscyBoYXMgYmVlbiB1cGRhdGVkLlxuICogQGV2ZW50IHVwZGF0ZUFkZFRvQ2FydFVybCBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHByb2R1Y3QgJ2FkZCB0byBjYXJ0JyBVUkwgaGFzIGJlZW4gdXBkYXRlZC5cbiAqIEBldmVudCB1cGRhdGVBamF4QWRkVG9DYXJ0VXJsIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcHJvZHVjdCBBSkFYICdhZGQgdG8gY2FydCcgVVJMIGhhcyBiZWVuIHVwZGF0ZWQuXG4gKiBAZXZlbnQgdXBkYXRlQWRkVG9DYXJ0Rm9ybUFjdGlvbiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHByb2R1Y3QgJ2FkZCB0byBjYXJ0JyBmb3JtIGFjdGlvbiBoYXMgYmVlbiB1cGRhdGVkLlxuICovXG5leHBvcnQgY29uc3QgRVZFTlRfVVBEQVRFX1JBVElORyA9ICd1cGRhdGVSYXRpbmcnO1xuZXhwb3J0IGNvbnN0IEVWRU5UX1VQREFURV9MQUJFTFMgPSAndXBkYXRlTGFiZWxzJztcbmV4cG9ydCBjb25zdCBFVkVOVF9VUERBVEVfQUREX1RPX0NBUlRfVVJMID0gJ3VwZGF0ZUFkZFRvQ2FydFVybCc7XG5leHBvcnQgY29uc3QgRVZFTlRfVVBEQVRFX0FKQVhfQUREX1RPX0NBUlRfVVJMID0gJ3VwZGF0ZUFqYXhBZGRUb0NhcnRVcmwnO1xuZXhwb3J0IGNvbnN0IEVWRU5UX1VQREFURV9BRERfVE9fQ0FSVF9GT1JNX0FDVElPTiA9ICd1cGRhdGVBZGRUb0NhcnRGb3JtQWN0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0SXRlbURhdGEge1xuICAgIGltYWdlVXJsOiBzdHJpbmc7XG4gICAgaW1hZ2VBbHQ6IHN0cmluZztcbiAgICBsYWJlbHM6IFByb2R1Y3RJdGVtTGFiZWxzRGF0YVtdO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICByYXRpbmdWYWx1ZTogbnVtYmVyO1xuICAgIGRlZmF1bHRQcmljZTogc3RyaW5nO1xuICAgIHNrdT86IHN0cmluZztcbiAgICBvcmlnaW5hbFByaWNlOiBzdHJpbmc7XG4gICAgZGV0YWlsUGFnZVVybDogc3RyaW5nO1xuICAgIGFkZFRvQ2FydFVybDogc3RyaW5nO1xuICAgIGFqYXhBZGRUb0NhcnRVcmw/OiBzdHJpbmc7XG4gICAgYWRkVG9DYXJ0Rm9ybUFjdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0SXRlbUxhYmVsc0RhdGEge1xuICAgIHRleHQ6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBwcm9kdWN0SW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3ROYW1lOiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFJhdGluZzogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdERlZmF1bHRQcmljZTogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTa3U6IEhUTUxNZXRhRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdE9yaWdpbmFsUHJpY2U6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0TGlua0RldGFpbFBhZ2U6IEhUTUxBbmNob3JFbGVtZW50W107XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RMaW5rQWRkVG9DYXJ0OiBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdEFqYXhCdXR0b25BZGRUb0NhcnQ6IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0Rm9ybUFkZFRvQ2FydDogSFRNTEZvcm1FbGVtZW50O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0QnV0dG9uQWRkVG9DYXJ0OiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge31cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByb2R1Y3RJbWFnZSA9IDxIVE1MSW1hZ2VFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2ltYWdlYClbMF07XG4gICAgICAgIHRoaXMucHJvZHVjdE5hbWUgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fbmFtZWApWzBdO1xuICAgICAgICB0aGlzLnByb2R1Y3RSYXRpbmcgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19yYXRpbmdgKVswXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RGVmYXVsdFByaWNlID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2RlZmF1bHQtcHJpY2VgKVswXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0U2t1ID0gPEhUTUxNZXRhRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19za3VgKVswXTtcbiAgICAgICAgdGhpcy5wcm9kdWN0T3JpZ2luYWxQcmljZSA9IDxIVE1MRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19vcmlnaW5hbC1wcmljZWApWzBdO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaW5rRGV0YWlsUGFnZSA9IDxIVE1MQW5jaG9yRWxlbWVudFtdPihcbiAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fbGluay1kZXRhaWwtcGFnZWApKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnByb2R1Y3RMaW5rQWRkVG9DYXJ0ID0gPEhUTUxBbmNob3JFbGVtZW50PihcbiAgICAgICAgICAgIHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2xpbmstYWRkLXRvLWNhcnRgKVswXVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnByb2R1Y3RBamF4QnV0dG9uQWRkVG9DYXJ0ID0gPEhUTUxCdXR0b25FbGVtZW50PihcbiAgICAgICAgICAgIHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2FqYXgtYnV0dG9uLWFkZC10by1jYXJ0YClbMF1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0Rm9ybUFkZFRvQ2FydCA9IDxIVE1MRm9ybUVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fZm9ybS1hZGQtdG8tY2FydGApWzBdO1xuICAgICAgICB0aGlzLnByb2R1Y3RCdXR0b25BZGRUb0NhcnQgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+KFxuICAgICAgICAgICAgdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fYnV0dG9uLWFkZC10by1jYXJ0YClbMF1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgaW5mb3JtYXRpb24uXG4gICAgICogQHBhcmFtIGRhdGEgQSBkYXRhIG9iamVjdCBmb3Igc2V0dGluZyB0aGUgcHJvZHVjdCBjYXJkIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIHVwZGF0ZVByb2R1Y3RJdGVtRGF0YShkYXRhOiBQcm9kdWN0SXRlbURhdGEpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbWFnZVVybCA9IGRhdGEuaW1hZ2VVcmw7XG4gICAgICAgIHRoaXMuaW1hZ2VBbHQgPSBkYXRhLm5hbWU7XG4gICAgICAgIHRoaXMubGFiZWxzID0gZGF0YS5sYWJlbHM7XG4gICAgICAgIHRoaXMucHJvZHVjdEl0ZW1OYW1lID0gZGF0YS5uYW1lO1xuICAgICAgICB0aGlzLnJhdGluZ1ZhbHVlID0gZGF0YS5yYXRpbmdWYWx1ZTtcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJpY2UgPSBkYXRhLmRlZmF1bHRQcmljZTtcbiAgICAgICAgdGhpcy5za3UgPSBkYXRhLnNrdSA/PyBudWxsO1xuICAgICAgICB0aGlzLm9yaWdpbmFsUHJpY2UgPSBkYXRhLm9yaWdpbmFsUHJpY2U7XG4gICAgICAgIHRoaXMuZGV0YWlsUGFnZVVybCA9IGRhdGEuZGV0YWlsUGFnZVVybDtcbiAgICAgICAgdGhpcy5hZGRUb0NhcnRVcmwgPSBkYXRhLmFkZFRvQ2FydFVybDtcbiAgICAgICAgdGhpcy5hamF4QWRkVG9DYXJ0VXJsID0gZGF0YS5hamF4QWRkVG9DYXJ0VXJsID8/IG51bGw7XG4gICAgICAgIHRoaXMuYWRkVG9DYXJ0Rm9ybUFjdGlvbiA9IGRhdGEuYWRkVG9DYXJ0Rm9ybUFjdGlvbiA/PyBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRTa3VGcm9tVXJsKHVybDogVXJsKTogVXJsIHtcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGFzdFBhcnRPZlVybCA9IG5ldyBSZWdFeHAoYChbXlxcXFwvXSkrJGAsICdnJyk7XG4gICAgICAgIGNvbnN0IHNrdSA9IHVybC5tYXRjaChsYXN0UGFydE9mVXJsKTtcblxuICAgICAgICByZXR1cm4gc2t1WzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBpbWFnZSBVUkwuXG4gICAgICogQHBhcmFtIGltYWdlVXJsIEEgcHJvZHVjdCBjYXJkIGltYWdlIFVSTC5cbiAgICAgKi9cbiAgICBzZXQgaW1hZ2VVcmwoaW1hZ2VVcmw6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0SW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEltYWdlLnNyYyA9IGltYWdlVXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIGltYWdlIGFsdC5cbiAgICAgKiBAcGFyYW0gaW1hZ2VBbHQgQSBwcm9kdWN0IGNhcmQgaW1hZ2UgYWx0LlxuICAgICAqL1xuICAgIHNldCBpbWFnZUFsdChpbWFnZUFsdDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0SW1hZ2UuYWx0ID0gaW1hZ2VBbHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgbGFiZWxzLlxuICAgICAqIEBwYXJhbSBsYWJlbHMgQW4gYXJyYXkgb2YgcHJvZHVjdCBjYXJkIGxhYmVscy5cbiAgICAgKi9cbiAgICBzZXQgbGFiZWxzKGxhYmVsczogUHJvZHVjdEl0ZW1MYWJlbHNEYXRhW10pIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEVWRU5UX1VQREFURV9MQUJFTFMsIHsgbGFiZWxzIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBuYW1lLlxuICAgICAqIEBwYXJhbSBuYW1lIEEgcHJvZHVjdCBjYXJkIG5hbWUuXG4gICAgICovXG4gICAgc2V0IHByb2R1Y3RJdGVtTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdE5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdE5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCByYXRpbmcuXG4gICAgICogQHBhcmFtIHJhdGluZyBBIHByb2R1Y3QgY2FyZCByYXRpbmcuXG4gICAgICovXG4gICAgc2V0IHJhdGluZ1ZhbHVlKHJhdGluZzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFVkVOVF9VUERBVEVfUkFUSU5HLCB7IHJhdGluZyB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgZGVmYXVsdCBwcmljZS5cbiAgICAgKiBAcGFyYW0gZGVmYXVsdFByaWNlIEEgcHJvZHVjdCBjYXJkIGRlZmF1bHQgcHJpY2UuXG4gICAgICovXG4gICAgc2V0IGRlZmF1bHRQcmljZShkZWZhdWx0UHJpY2U6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0RGVmYXVsdFByaWNlKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3REZWZhdWx0UHJpY2UuaW5uZXJUZXh0ID0gZGVmYXVsdFByaWNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIHNrdS5cbiAgICAgKiBAcGFyYW0gcHJvZHVjdFNrdSBBIHByb2R1Y3QgY2FyZCBza3UuXG4gICAgICovXG4gICAgc2V0IHNrdShwcm9kdWN0U2t1OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdFNrdSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0U2t1LmNvbnRlbnQgPSBwcm9kdWN0U2t1O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIG9yaWdpbmFsIHByaWNlLlxuICAgICAqIEBwYXJhbSBvcmlnaW5hbFByaWNlIEEgcHJvZHVjdCBjYXJkIG9yaWdpbmFsIHByaWNlLlxuICAgICAqL1xuICAgIHNldCBvcmlnaW5hbFByaWNlKG9yaWdpbmFsUHJpY2U6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0T3JpZ2luYWxQcmljZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0T3JpZ2luYWxQcmljZS5pbm5lclRleHQgPSBvcmlnaW5hbFByaWNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkIGRldGFpbCBwYWdlIFVSTC5cbiAgICAgKiBAcGFyYW0gZGV0YWlsUGFnZVVybCBBIHByb2R1Y3QgY2FyZCBkZXRhaWwgcGFnZSBVUkwuXG4gICAgICovXG4gICAgc2V0IGRldGFpbFBhZ2VVcmwoZGV0YWlsUGFnZVVybDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RMaW5rRGV0YWlsUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0TGlua0RldGFpbFBhZ2UuZm9yRWFjaCgoZWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpID0+IChlbGVtZW50LmhyZWYgPSBkZXRhaWxQYWdlVXJsKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwcm9kdWN0IGNhcmQgJ2FkZCB0byBjYXJ0JyBVUkwuXG4gICAgICogQHBhcmFtIGFkZFRvQ2FydFVybCBBIHByb2R1Y3QgY2FyZCAnYWRkIHRvIGNhcnQnIFVSTC5cbiAgICAgKi9cbiAgICBzZXQgYWRkVG9DYXJ0VXJsKGFkZFRvQ2FydFVybDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RMaW5rQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RMaW5rQWRkVG9DYXJ0LmhyZWYgPSBhZGRUb0NhcnRVcmw7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRVZFTlRfVVBEQVRFX0FERF9UT19DQVJUX1VSTCwgeyBza3U6IHRoaXMuZ2V0U2t1RnJvbVVybChhZGRUb0NhcnRVcmwpIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHByb2R1Y3QgY2FyZCBBSkFYICdhZGQgdG8gY2FydCcgVVJMLlxuICAgICAqIEBwYXJhbSBhamF4QWRkVG9DYXJ0VXJsIEEgcHJvZHVjdCBjYXJkIEFKQVggJ2FkZCB0byBjYXJ0JyBVUkwuXG4gICAgICovXG4gICAgc2V0IGFqYXhBZGRUb0NhcnRVcmwoYWpheEFkZFRvQ2FydFVybDogVXJsKSB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RBamF4QnV0dG9uQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RBamF4QnV0dG9uQWRkVG9DYXJ0LmRpc2FibGVkID0gIWFqYXhBZGRUb0NhcnRVcmw7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RBamF4QnV0dG9uQWRkVG9DYXJ0LmRhdGFzZXQudXJsID0gYWpheEFkZFRvQ2FydFVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFVkVOVF9VUERBVEVfQUpBWF9BRERfVE9fQ0FSVF9VUkwsIHsgc2t1OiB0aGlzLmdldFNrdUZyb21VcmwoYWpheEFkZFRvQ2FydFVybCkgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZHVjdCBjYXJkICdhZGQgdG8gY2FydCcgZm9ybSBhY3Rpb24uXG4gICAgICogQHBhcmFtIGFkZFRvQ2FydEZvcm1BY3Rpb24gQSBwcm9kdWN0IGNhcmQgJ2FkZCB0byBjYXJ0JyBmb3JtIGFjdGlvbi5cbiAgICAgKi9cbiAgICBzZXQgYWRkVG9DYXJ0Rm9ybUFjdGlvbihhZGRUb0NhcnRGb3JtQWN0aW9uOiBVcmwpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEZvcm1BZGRUb0NhcnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEZvcm1BZGRUb0NhcnQuYWN0aW9uID0gYWRkVG9DYXJ0Rm9ybUFjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RCdXR0b25BZGRUb0NhcnQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEJ1dHRvbkFkZFRvQ2FydC5kYXRhc2V0LmZvcm1BY3Rpb24gPSBhZGRUb0NhcnRGb3JtQWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEVWRU5UX1VQREFURV9BRERfVE9fQ0FSVF9GT1JNX0FDVElPTiwge1xuICAgICAgICAgICAgc2t1OiB0aGlzLmdldFNrdUZyb21VcmwoYWRkVG9DYXJ0Rm9ybUFjdGlvbiksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCBpbWFnZSBVUkwuXG4gICAgICovXG4gICAgZ2V0IGltYWdlVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RJbWFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdEltYWdlLnNyYztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCBuYW1lLlxuICAgICAqL1xuICAgIGdldCBwcm9kdWN0SXRlbU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3ROYW1lLmlubmVyVGV4dDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCByYXRpbmcuXG4gICAgICovXG4gICAgZ2V0IHJhdGluZ1ZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RSYXRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIodGhpcy5wcm9kdWN0UmF0aW5nLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCBkZWZhdWx0IHByaWNlLlxuICAgICAqL1xuICAgIGdldCBkZWZhdWx0UHJpY2UoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdERlZmF1bHRQcmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdERlZmF1bHRQcmljZS5pbm5lclRleHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgc2t1LlxuICAgICAqL1xuICAgIGdldCBza3UoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdFNrdSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdFNrdS5jb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcHJvZHVjdCBjYXJkIG9yaWdpbmFsIHByaWNlLlxuICAgICAqL1xuICAgIGdldCBvcmlnaW5hbFByaWNlKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RPcmlnaW5hbFByaWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0T3JpZ2luYWxQcmljZS5pbm5lclRleHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgZGV0YWlsIHBhZ2UgVVJMLlxuICAgICAqL1xuICAgIGdldCBkZXRhaWxQYWdlVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RMaW5rRGV0YWlsUGFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdExpbmtEZXRhaWxQYWdlWzBdLmhyZWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm9kdWN0IGNhcmQgJ2FkZCB0byBjYXJ0JyBVUkwuXG4gICAgICovXG4gICAgZ2V0IGFkZFRvQ2FydFVybCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5wcm9kdWN0TGlua0FkZFRvQ2FydCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdExpbmtBZGRUb0NhcnQuaHJlZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCBBSkFYICdhZGQgdG8gY2FydCcgVVJMLlxuICAgICAqL1xuICAgIGdldCBhamF4QWRkVG9DYXJ0VXJsKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RBamF4QnV0dG9uQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0QWpheEJ1dHRvbkFkZFRvQ2FydC5kYXRhc2V0LnVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHByb2R1Y3QgY2FyZCAnYWRkIHRvIGNhcnQnIGZvcm0gYWN0aW9uLlxuICAgICAqL1xuICAgIGdldCBhZGRUb0NhcnRGb3JtQWN0aW9uKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3RGb3JtQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0Rm9ybUFkZFRvQ2FydC5hY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9kdWN0QnV0dG9uQWRkVG9DYXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0QnV0dG9uQWRkVG9DYXJ0LmRhdGFzZXQuZm9ybUFjdGlvbjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=