(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["product-item-color-selector"],{

/***/ "./src/Pyz/Yves/ProductGroupWidget/Theme/default/components/molecules/product-item-color-selector/product-item-color-selector.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ProductGroupWidget/Theme/default/components/molecules/product-item-color-selector/product-item-color-selector.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductItemColorSelector; });
/* harmony import */ var ProductGroupWidget_components_molecules_product_item_color_selector_product_item_color_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ProductGroupWidget/components/molecules/product-item-color-selector/product-item-color-selector */ "./vendor/spryker-shop/product-group-widget/src/SprykerShop/Yves/ProductGroupWidget/Theme/default/components/molecules/product-item-color-selector/product-item-color-selector.ts");

class ProductItemColorSelector extends ProductGroupWidget_components_molecules_product_item_color_selector_product_item_color_selector__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.productItemData = void 0;
    this.productItem = void 0;
  }

  getProductItemData() {
    super.getProductItemData();
    this.productItemData.reviewCount = this.reviewCount;
    this.productItemData.formAddToCartAction = this.formAddToCartAction;
  }

  get reviewCount() {
    return Number(this.currentSelection.getAttribute('data-product-review-count'));
  }

  get formAddToCartAction() {
    return this.currentSelection.getAttribute('data-product-add-to-cart-url');
  }

}

/***/ }),

/***/ "./vendor/spryker-shop/product-group-widget/src/SprykerShop/Yves/ProductGroupWidget/Theme/default/components/molecules/color-selector/color-selector.ts":
/*!**************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/product-group-widget/src/SprykerShop/Yves/ProductGroupWidget/Theme/default/components/molecules/color-selector/color-selector.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorSelector; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class ColorSelector extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.triggers = void 0;
    this.currentSelection = void 0;
  }

  readyCallback() {}

  init() {
    this.triggers = Array.from(this.getElementsByClassName(this.jsName + "__item"));
    this.mapEvents();
  }

  mapEvents() {
    this.mapTriggerMouseenterEvent();
  }

  mapTriggerMouseenterEvent() {
    this.triggers.forEach(element => {
      element.addEventListener('mouseenter', event => this.onTriggerSelection(event));
    });
  }

  onTriggerSelection(event) {
    event.preventDefault();
    this.currentSelection = event.currentTarget;
    this.resetActiveItemSelections();
    this.setActiveItemSelection();
  }

  resetActiveItemSelections() {
    this.triggers.forEach(element => {
      element.classList.remove(this.activeItemClassName);
    });
  }

  setActiveItemSelection(selection) {
    (selection || this.currentSelection).classList.add(this.activeItemClassName);
  }

  get activeItemClassName() {
    return this.getAttribute('active-item-class-name');
  }

}

/***/ }),

/***/ "./vendor/spryker-shop/product-group-widget/src/SprykerShop/Yves/ProductGroupWidget/Theme/default/components/molecules/product-item-color-selector/product-item-color-selector.ts":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/product-group-widget/src/SprykerShop/Yves/ProductGroupWidget/Theme/default/components/molecules/product-item-color-selector/product-item-color-selector.ts ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductItemColorSelector; });
/* harmony import */ var _color_selector_color_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color-selector/color-selector */ "./vendor/spryker-shop/product-group-widget/src/SprykerShop/Yves/ProductGroupWidget/Theme/default/components/molecules/color-selector/color-selector.ts");

class ProductItemColorSelector extends _color_selector_color_selector__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.productItemData = void 0;
    this.productItem = void 0;
  }

  init() {
    if (this.productItemClassName) {
      this.productItem = this.closest("." + this.productItemClassName);
    }

    super.init();
  }

  onTriggerSelection(event) {
    super.onTriggerSelection(event);
    this.getProductItemData();
    this.productItem.updateProductItemData(this.productItemData);
  }

  getProductItemData() {
    this.productItemData = {
      imageUrl: this.imageUrl,
      imageAlt: this.productItemName,
      labels: this.labels ? JSON.parse(this.labels) : [],
      name: this.productItemName,
      ratingValue: this.ratingValue,
      defaultPrice: this.defaultPrice,
      originalPrice: this.originalPrice,
      detailPageUrl: this.detailPageUrl,
      addToCartUrl: this.addToCartUrl,
      ajaxAddToCartUrl: this.ajaxAddToCartUrl,
      addToCartFormAction: this.addToCartFormAction,
      sku: this.sku
    };
  }

  get imageUrl() {
    return this.currentSelection.getAttribute('data-product-image-src');
  }

  get labels() {
    return this.currentSelection.getAttribute('data-product-labels');
  }

  get productItemName() {
    return this.currentSelection.getAttribute('data-product-name');
  }

  get ratingValue() {
    return Number(this.currentSelection.getAttribute('data-product-rating'));
  }

  get defaultPrice() {
    return this.currentSelection.getAttribute('data-product-default-price');
  }

  get originalPrice() {
    return this.currentSelection.getAttribute('data-product-original-price');
  }

  get detailPageUrl() {
    return this.currentSelection.getAttribute('data-product-detail-page-url');
  }

  get addToCartUrl() {
    return this.currentSelection.getAttribute('data-product-add-to-cart-url');
  }

  get ajaxAddToCartUrl() {
    return this.currentSelection.getAttribute('data-product-ajax-add-to-cart-url');
  }

  get addToCartFormAction() {
    return this.currentSelection.getAttribute('data-product-add-to-cart-form-action');
  }

  get productItemClassName() {
    return this.getAttribute('product-item-class-name');
  }

  get sku() {
    return this.currentSelection.getAttribute('data-product-sku');
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHl6L1l2ZXMvUHJvZHVjdEdyb3VwV2lkZ2V0L1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvcHJvZHVjdC1pdGVtLWNvbG9yLXNlbGVjdG9yL3Byb2R1Y3QtaXRlbS1jb2xvci1zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Byb2R1Y3QtZ3JvdXAtd2lkZ2V0L3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Byb2R1Y3RHcm91cFdpZGdldC9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL2NvbG9yLXNlbGVjdG9yL2NvbG9yLXNlbGVjdG9yLnRzIiwid2VicGFjazovLy8uL3ZlbmRvci9zcHJ5a2VyLXNob3AvcHJvZHVjdC1ncm91cC13aWRnZXQvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvUHJvZHVjdEdyb3VwV2lkZ2V0L1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvcHJvZHVjdC1pdGVtLWNvbG9yLXNlbGVjdG9yL3Byb2R1Y3QtaXRlbS1jb2xvci1zZWxlY3Rvci50cyJdLCJuYW1lcyI6WyJQcm9kdWN0SXRlbUNvbG9yU2VsZWN0b3IiLCJQcm9kdWN0SXRlbUNvbG9yU2VsZWN0b3JDb3JlIiwicHJvZHVjdEl0ZW1EYXRhIiwicHJvZHVjdEl0ZW0iLCJnZXRQcm9kdWN0SXRlbURhdGEiLCJyZXZpZXdDb3VudCIsImZvcm1BZGRUb0NhcnRBY3Rpb24iLCJOdW1iZXIiLCJjdXJyZW50U2VsZWN0aW9uIiwiZ2V0QXR0cmlidXRlIiwiQ29sb3JTZWxlY3RvciIsIkNvbXBvbmVudCIsInRyaWdnZXJzIiwicmVhZHlDYWxsYmFjayIsImluaXQiLCJBcnJheSIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwianNOYW1lIiwibWFwRXZlbnRzIiwibWFwVHJpZ2dlck1vdXNlZW50ZXJFdmVudCIsImZvckVhY2giLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwib25UcmlnZ2VyU2VsZWN0aW9uIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwicmVzZXRBY3RpdmVJdGVtU2VsZWN0aW9ucyIsInNldEFjdGl2ZUl0ZW1TZWxlY3Rpb24iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhY3RpdmVJdGVtQ2xhc3NOYW1lIiwic2VsZWN0aW9uIiwiYWRkIiwicHJvZHVjdEl0ZW1DbGFzc05hbWUiLCJjbG9zZXN0IiwidXBkYXRlUHJvZHVjdEl0ZW1EYXRhIiwiaW1hZ2VVcmwiLCJpbWFnZUFsdCIsInByb2R1Y3RJdGVtTmFtZSIsImxhYmVscyIsIkpTT04iLCJwYXJzZSIsIm5hbWUiLCJyYXRpbmdWYWx1ZSIsImRlZmF1bHRQcmljZSIsIm9yaWdpbmFsUHJpY2UiLCJkZXRhaWxQYWdlVXJsIiwiYWRkVG9DYXJ0VXJsIiwiYWpheEFkZFRvQ2FydFVybCIsImFkZFRvQ2FydEZvcm1BY3Rpb24iLCJza3UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdlLE1BQU1BLHdCQUFOLFNBQXVDQyx1SUFBdkMsQ0FBb0U7QUFBQTtBQUFBO0FBQUEsU0FDckVDLGVBRHFFO0FBQUEsU0FFckVDLFdBRnFFO0FBQUE7O0FBSXJFQyxvQkFBa0IsR0FBUztBQUNqQyxVQUFNQSxrQkFBTjtBQUNBLFNBQUtGLGVBQUwsQ0FBcUJHLFdBQXJCLEdBQW1DLEtBQUtBLFdBQXhDO0FBQ0EsU0FBS0gsZUFBTCxDQUFxQkksbUJBQXJCLEdBQTJDLEtBQUtBLG1CQUFoRDtBQUNIOztBQUV3QixNQUFYRCxXQUFXLEdBQVc7QUFDaEMsV0FBT0UsTUFBTSxDQUFDLEtBQUtDLGdCQUFMLENBQXNCQyxZQUF0QixDQUFtQywyQkFBbkMsQ0FBRCxDQUFiO0FBQ0g7O0FBRWdDLE1BQW5CSCxtQkFBbUIsR0FBVztBQUN4QyxXQUFPLEtBQUtFLGdCQUFMLENBQXNCQyxZQUF0QixDQUFtQyw4QkFBbkMsQ0FBUDtBQUNIOztBQWhCOEUsQzs7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QUFMLENBQWtCLHlCQUFsQixDQUFQO0FBQ0g7O0FBRWdCLE1BQUgyQyxHQUFHLEdBQVc7QUFDeEIsV0FBTyxLQUFLNUMsZ0JBQUwsQ0FBc0JDLFlBQXRCLENBQW1DLGtCQUFuQyxDQUFQO0FBQ0g7O0FBakYrRCxDIiwiZmlsZSI6Ii4vanMveXZlc19kZWZhdWx0LnByb2R1Y3QtaXRlbS1jb2xvci1zZWxlY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0SXRlbUNvbG9yU2VsZWN0b3JDb3JlIGZyb20gJ1Byb2R1Y3RHcm91cFdpZGdldC9jb21wb25lbnRzL21vbGVjdWxlcy9wcm9kdWN0LWl0ZW0tY29sb3Itc2VsZWN0b3IvcHJvZHVjdC1pdGVtLWNvbG9yLXNlbGVjdG9yJztcbmltcG9ydCBQcm9kdWN0SXRlbSwgeyBQcm9kdWN0SXRlbURhdGEgfSBmcm9tICdTaG9wVWlQcm9qZWN0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0SXRlbUNvbG9yU2VsZWN0b3IgZXh0ZW5kcyBQcm9kdWN0SXRlbUNvbG9yU2VsZWN0b3JDb3JlIHtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdEl0ZW1EYXRhOiBQcm9kdWN0SXRlbURhdGE7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RJdGVtOiBQcm9kdWN0SXRlbTtcblxuICAgIHByb3RlY3RlZCBnZXRQcm9kdWN0SXRlbURhdGEoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmdldFByb2R1Y3RJdGVtRGF0YSgpO1xuICAgICAgICB0aGlzLnByb2R1Y3RJdGVtRGF0YS5yZXZpZXdDb3VudCA9IHRoaXMucmV2aWV3Q291bnQ7XG4gICAgICAgIHRoaXMucHJvZHVjdEl0ZW1EYXRhLmZvcm1BZGRUb0NhcnRBY3Rpb24gPSB0aGlzLmZvcm1BZGRUb0NhcnRBY3Rpb247XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCByZXZpZXdDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuY3VycmVudFNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1yZXZpZXctY291bnQnKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBmb3JtQWRkVG9DYXJ0QWN0aW9uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYWRkLXRvLWNhcnQtdXJsJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICdTaG9wVWkvbW9kZWxzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG9yU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCB0cmlnZ2VyczogSFRNTEVsZW1lbnRbXTtcbiAgICBwcm90ZWN0ZWQgY3VycmVudFNlbGVjdGlvbjogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmlnZ2VycyA9IDxIVE1MRWxlbWVudFtdPkFycmF5LmZyb20odGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9faXRlbWApKTtcblxuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWFwVHJpZ2dlck1vdXNlZW50ZXJFdmVudCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBUcmlnZ2VyTW91c2VlbnRlckV2ZW50KCkge1xuICAgICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uVHJpZ2dlclNlbGVjdGlvbihldmVudCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25UcmlnZ2VyU2VsZWN0aW9uKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3Rpb24gPSA8SFRNTEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgdGhpcy5yZXNldEFjdGl2ZUl0ZW1TZWxlY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlSXRlbVNlbGVjdGlvbigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZXNldEFjdGl2ZUl0ZW1TZWxlY3Rpb25zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5hY3RpdmVJdGVtQ2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEFjdGl2ZUl0ZW1TZWxlY3Rpb24oc2VsZWN0aW9uPzogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgKHNlbGVjdGlvbiB8fCB0aGlzLmN1cnJlbnRTZWxlY3Rpb24pLmNsYXNzTGlzdC5hZGQodGhpcy5hY3RpdmVJdGVtQ2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGFjdGl2ZUl0ZW1DbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdhY3RpdmUtaXRlbS1jbGFzcy1uYW1lJyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbG9yU2VsZWN0b3IgZnJvbSAnLi4vY29sb3Itc2VsZWN0b3IvY29sb3Itc2VsZWN0b3InO1xuaW1wb3J0IFByb2R1Y3RJdGVtLCB7IFByb2R1Y3RJdGVtRGF0YSB9IGZyb20gJ1Nob3BVaS9jb21wb25lbnRzL21vbGVjdWxlcy9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdEl0ZW1Db2xvclNlbGVjdG9yIGV4dGVuZHMgQ29sb3JTZWxlY3RvciB7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RJdGVtRGF0YTogUHJvZHVjdEl0ZW1EYXRhO1xuICAgIHByb3RlY3RlZCBwcm9kdWN0SXRlbTogUHJvZHVjdEl0ZW07XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZHVjdEl0ZW1DbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdEl0ZW0gPSA8UHJvZHVjdEl0ZW0+dGhpcy5jbG9zZXN0KGAuJHt0aGlzLnByb2R1Y3RJdGVtQ2xhc3NOYW1lfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblRyaWdnZXJTZWxlY3Rpb24oZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uVHJpZ2dlclNlbGVjdGlvbihldmVudCk7XG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdEl0ZW1EYXRhKCk7XG4gICAgICAgIHRoaXMucHJvZHVjdEl0ZW0udXBkYXRlUHJvZHVjdEl0ZW1EYXRhKHRoaXMucHJvZHVjdEl0ZW1EYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0UHJvZHVjdEl0ZW1EYXRhKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByb2R1Y3RJdGVtRGF0YSA9IHtcbiAgICAgICAgICAgIGltYWdlVXJsOiB0aGlzLmltYWdlVXJsLFxuICAgICAgICAgICAgaW1hZ2VBbHQ6IHRoaXMucHJvZHVjdEl0ZW1OYW1lLFxuICAgICAgICAgICAgbGFiZWxzOiB0aGlzLmxhYmVscyA/IEpTT04ucGFyc2UodGhpcy5sYWJlbHMpIDogW10sXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnByb2R1Y3RJdGVtTmFtZSxcbiAgICAgICAgICAgIHJhdGluZ1ZhbHVlOiB0aGlzLnJhdGluZ1ZhbHVlLFxuICAgICAgICAgICAgZGVmYXVsdFByaWNlOiB0aGlzLmRlZmF1bHRQcmljZSxcbiAgICAgICAgICAgIG9yaWdpbmFsUHJpY2U6IHRoaXMub3JpZ2luYWxQcmljZSxcbiAgICAgICAgICAgIGRldGFpbFBhZ2VVcmw6IHRoaXMuZGV0YWlsUGFnZVVybCxcbiAgICAgICAgICAgIGFkZFRvQ2FydFVybDogdGhpcy5hZGRUb0NhcnRVcmwsXG4gICAgICAgICAgICBhamF4QWRkVG9DYXJ0VXJsOiB0aGlzLmFqYXhBZGRUb0NhcnRVcmwsXG4gICAgICAgICAgICBhZGRUb0NhcnRGb3JtQWN0aW9uOiB0aGlzLmFkZFRvQ2FydEZvcm1BY3Rpb24sXG4gICAgICAgICAgICBza3U6IHRoaXMuc2t1LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgaW1hZ2VVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1pbWFnZS1zcmMnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGxhYmVscygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2VsZWN0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWxhYmVscycpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgcHJvZHVjdEl0ZW1OYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtbmFtZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgcmF0aW5nVmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcih0aGlzLmN1cnJlbnRTZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtcmF0aW5nJykpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgZGVmYXVsdFByaWNlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtZGVmYXVsdC1wcmljZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgb3JpZ2luYWxQcmljZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2VsZWN0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LW9yaWdpbmFsLXByaWNlJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBkZXRhaWxQYWdlVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTZWxlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtZGV0YWlsLXBhZ2UtdXJsJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBhZGRUb0NhcnRVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hZGQtdG8tY2FydC11cmwnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGFqYXhBZGRUb0NhcnRVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hamF4LWFkZC10by1jYXJ0LXVybCcpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgYWRkVG9DYXJ0Rm9ybUFjdGlvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2VsZWN0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWFkZC10by1jYXJ0LWZvcm0tYWN0aW9uJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBwcm9kdWN0SXRlbUNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3Byb2R1Y3QtaXRlbS1jbGFzcy1uYW1lJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBza3UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNlbGVjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1za3UnKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9