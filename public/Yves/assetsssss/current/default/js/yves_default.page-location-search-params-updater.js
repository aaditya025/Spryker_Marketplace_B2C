(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["page-location-search-params-updater"],{

/***/ "./vendor/spryker-shop/merchant-product-widget/src/SprykerShop/Yves/MerchantProductWidget/Theme/default/components/molecules/page-location-search-params-updater/page-location-search-params-updater.ts":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/merchant-product-widget/src/SprykerShop/Yves/MerchantProductWidget/Theme/default/components/molecules/page-location-search-params-updater/page-location-search-params-updater.ts ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageLocationSearchParamsUpdater; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class PageLocationSearchParamsUpdater extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.triggers = void 0;
  }

  readyCallback() {}

  init() {
    this.triggers = Array.from(document.getElementsByClassName(this.triggerClass));
    this.mapEvents();
  }

  mapEvents() {
    this.triggers.forEach(trigger => trigger.addEventListener(this.eventName, () => this.onEvent()));
  }

  onEvent() {
    window.location.search = this.searchParams;
  }

  get searchParams() {
    return this.getAttribute('search-params');
  }

  get triggerClass() {
    return this.getAttribute('trigger-class');
  }

  get eventName() {
    return this.getAttribute('event');
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL21lcmNoYW50LXByb2R1Y3Qtd2lkZ2V0L3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL01lcmNoYW50UHJvZHVjdFdpZGdldC9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3BhZ2UtbG9jYXRpb24tc2VhcmNoLXBhcmFtcy11cGRhdGVyL3BhZ2UtbG9jYXRpb24tc2VhcmNoLXBhcmFtcy11cGRhdGVyLnRzIl0sIm5hbWVzIjpbIlBhZ2VMb2NhdGlvblNlYXJjaFBhcmFtc1VwZGF0ZXIiLCJDb21wb25lbnQiLCJ0cmlnZ2VycyIsInJlYWR5Q2FsbGJhY2siLCJpbml0IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidHJpZ2dlckNsYXNzIiwibWFwRXZlbnRzIiwiZm9yRWFjaCIsInRyaWdnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnROYW1lIiwib25FdmVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2VhcmNoUGFyYW1zIiwiZ2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxNQUFNQSwrQkFBTixTQUE4Q0MsK0RBQTlDLENBQXdEO0FBQUE7QUFBQTtBQUFBLFNBQ3pEQyxRQUR5RDtBQUFBOztBQUd6REMsZUFBYSxHQUFTLENBQUU7O0FBRXhCQyxNQUFJLEdBQVM7QUFDbkIsU0FBS0YsUUFBTCxHQUErQkcsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsS0FBS0MsWUFBckMsQ0FBWCxDQUEvQjtBQUNBLFNBQUtDLFNBQUw7QUFDSDs7QUFFU0EsV0FBUyxHQUFTO0FBQ3hCLFNBQUtSLFFBQUwsQ0FBY1MsT0FBZCxDQUF1QkMsT0FBRCxJQUFhQSxPQUFPLENBQUNDLGdCQUFSLENBQXlCLEtBQUtDLFNBQTlCLEVBQXlDLE1BQU0sS0FBS0MsT0FBTCxFQUEvQyxDQUFuQztBQUNIOztBQUVTQSxTQUFPLEdBQVM7QUFDdEJDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsR0FBeUIsS0FBS0MsWUFBOUI7QUFDSDs7QUFFeUIsTUFBWkEsWUFBWSxHQUFXO0FBQ2pDLFdBQU8sS0FBS0MsWUFBTCxDQUFrQixlQUFsQixDQUFQO0FBQ0g7O0FBRXlCLE1BQVpYLFlBQVksR0FBVztBQUNqQyxXQUFPLEtBQUtXLFlBQUwsQ0FBa0IsZUFBbEIsQ0FBUDtBQUNIOztBQUVzQixNQUFUTixTQUFTLEdBQVc7QUFDOUIsV0FBTyxLQUFLTSxZQUFMLENBQWtCLE9BQWxCLENBQVA7QUFDSDs7QUE1QmtFLEMiLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQucGFnZS1sb2NhdGlvbi1zZWFyY2gtcGFyYW1zLXVwZGF0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ1Nob3BVaS9tb2RlbHMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZUxvY2F0aW9uU2VhcmNoUGFyYW1zVXBkYXRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHRyaWdnZXJzOiBIVE1MRWxlbWVudFtdO1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJpZ2dlcnMgPSA8SFRNTEVsZW1lbnRbXT5BcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy50cmlnZ2VyQ2xhc3MpKTtcbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50TmFtZSwgKCkgPT4gdGhpcy5vbkV2ZW50KCkpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FdmVudCgpOiB2b2lkIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnNlYXJjaCA9IHRoaXMuc2VhcmNoUGFyYW1zO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgc2VhcmNoUGFyYW1zKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc2VhcmNoLXBhcmFtcycpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgdHJpZ2dlckNsYXNzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndHJpZ2dlci1jbGFzcycpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgZXZlbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZXZlbnQnKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9