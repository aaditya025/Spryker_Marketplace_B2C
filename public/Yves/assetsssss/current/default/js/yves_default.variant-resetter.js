(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["variant-resetter"],{

/***/ "./src/Pyz/Yves/ProductDetailPage/Theme/default/components/molecules/variant-resetter/variant-resetter.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ProductDetailPage/Theme/default/components/molecules/variant-resetter/variant-resetter.ts ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VariantResetter; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class VariantResetter extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.trigger = void 0;
    this.target = void 0;
  }

  readyCallback() {}

  init() {
    this.trigger = this.getElementsByClassName(this.jsName + "__trigger")[0];
    this.target = this.getElementsByClassName(this.jsName + "__target")[0];
    this.mapEvents();
  }

  mapEvents() {
    this.trigger.addEventListener('click', event => this.onClick(event));
  }

  onClick(event) {
    event.preventDefault();
    this.target.value = '';
    this.target.closest('form').submit();
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHl6L1l2ZXMvUHJvZHVjdERldGFpbFBhZ2UvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy92YXJpYW50LXJlc2V0dGVyL3ZhcmlhbnQtcmVzZXR0ZXIudHMiXSwibmFtZXMiOlsiVmFyaWFudFJlc2V0dGVyIiwiQ29tcG9uZW50IiwidHJpZ2dlciIsInRhcmdldCIsInJlYWR5Q2FsbGJhY2siLCJpbml0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImpzTmFtZSIsIm1hcEV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIm9uQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiY2xvc2VzdCIsInN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsTUFBTUEsZUFBTixTQUE4QkMsK0RBQTlCLENBQXdDO0FBQUE7QUFBQTtBQUFBLFNBQ3pDQyxPQUR5QztBQUFBLFNBRXpDQyxNQUZ5QztBQUFBOztBQUl6Q0MsZUFBYSxHQUFTLENBQUU7O0FBRXhCQyxNQUFJLEdBQVM7QUFDbkIsU0FBS0gsT0FBTCxHQUE0QixLQUFLSSxzQkFBTCxDQUErQixLQUFLQyxNQUFwQyxnQkFBdUQsQ0FBdkQsQ0FBNUI7QUFDQSxTQUFLSixNQUFMLEdBQWdDLEtBQUtHLHNCQUFMLENBQStCLEtBQUtDLE1BQXBDLGVBQXNELENBQXRELENBQWhDO0FBRUEsU0FBS0MsU0FBTDtBQUNIOztBQUVTQSxXQUFTLEdBQVM7QUFDeEIsU0FBS04sT0FBTCxDQUFhTyxnQkFBYixDQUE4QixPQUE5QixFQUF3Q0MsS0FBRCxJQUFrQixLQUFLQyxPQUFMLENBQWFELEtBQWIsQ0FBekQ7QUFDSDs7QUFFU0MsU0FBTyxDQUFDRCxLQUFELEVBQXFCO0FBQ2xDQSxTQUFLLENBQUNFLGNBQU47QUFDQSxTQUFLVCxNQUFMLENBQVlVLEtBQVosR0FBb0IsRUFBcEI7QUFDQSxTQUFLVixNQUFMLENBQVlXLE9BQVosQ0FBb0IsTUFBcEIsRUFBNEJDLE1BQTVCO0FBQ0g7O0FBckJrRCxDIiwiZmlsZSI6Ii4vanMveXZlc19kZWZhdWx0LnZhcmlhbnQtcmVzZXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ1Nob3BVaS9tb2RlbHMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFyaWFudFJlc2V0dGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgdHJpZ2dlcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHRhcmdldDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge31cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyaWdnZXIgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fdHJpZ2dlcmApWzBdO1xuICAgICAgICB0aGlzLnRhcmdldCA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3RhcmdldGApWzBdO1xuXG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbkNsaWNrKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMudGFyZ2V0LmNsb3Nlc3QoJ2Zvcm0nKS5zdWJtaXQoKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9