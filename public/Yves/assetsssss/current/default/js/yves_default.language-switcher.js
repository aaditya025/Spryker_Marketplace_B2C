(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["language-switcher"],{

/***/ "./src/Pyz/Yves/LanguageSwitcherWidget/Theme/default/components/molecules/language-switcher/language-switcher.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/Pyz/Yves/LanguageSwitcherWidget/Theme/default/components/molecules/language-switcher/language-switcher.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LanguageSwitcher; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class LanguageSwitcher extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.select = void 0;
  }

  readyCallback() {}

  init() {
    this.select = this.getElementsByClassName(this.jsName + "__select")[0];
    this.mapEvents();
  }

  mapEvents() {
    this.select.addEventListener('change', event => this.onTriggerChange(event));
  }

  onTriggerChange(event) {
    var selectTarget = event.currentTarget;

    if (this.hasUrl(selectTarget)) {
      window.location.assign(this.currentSelectValue(selectTarget));
    }
  }

  currentSelectValue(select) {
    return select.options[select.selectedIndex].value;
  }

  hasUrl(select) {
    return !!select.value;
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHl6L1l2ZXMvTGFuZ3VhZ2VTd2l0Y2hlcldpZGdldC9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL2xhbmd1YWdlLXN3aXRjaGVyL2xhbmd1YWdlLXN3aXRjaGVyLnRzIl0sIm5hbWVzIjpbIkxhbmd1YWdlU3dpdGNoZXIiLCJDb21wb25lbnQiLCJzZWxlY3QiLCJyZWFkeUNhbGxiYWNrIiwiaW5pdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJqc05hbWUiLCJtYXBFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJvblRyaWdnZXJDaGFuZ2UiLCJzZWxlY3RUYXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaGFzVXJsIiwid2luZG93IiwibG9jYXRpb24iLCJhc3NpZ24iLCJjdXJyZW50U2VsZWN0VmFsdWUiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxNQUFNQSxnQkFBTixTQUErQkMsK0RBQS9CLENBQXlDO0FBQUE7QUFBQTtBQUFBLFNBQzFDQyxNQUQwQztBQUFBOztBQUcxQ0MsZUFBYSxHQUFTLENBQUU7O0FBRXhCQyxNQUFJLEdBQVM7QUFDbkIsU0FBS0YsTUFBTCxHQUFpQyxLQUFLRyxzQkFBTCxDQUErQixLQUFLQyxNQUFwQyxlQUFzRCxDQUF0RCxDQUFqQztBQUNBLFNBQUtDLFNBQUw7QUFDSDs7QUFFU0EsV0FBUyxHQUFTO0FBQ3hCLFNBQUtMLE1BQUwsQ0FBWU0sZ0JBQVosQ0FBNkIsUUFBN0IsRUFBd0NDLEtBQUQsSUFBa0IsS0FBS0MsZUFBTCxDQUFxQkQsS0FBckIsQ0FBekQ7QUFDSDs7QUFFU0MsaUJBQWUsQ0FBQ0QsS0FBRCxFQUFxQjtBQUMxQyxRQUFNRSxZQUFZLEdBQXNCRixLQUFLLENBQUNHLGFBQTlDOztBQUVBLFFBQUksS0FBS0MsTUFBTCxDQUFZRixZQUFaLENBQUosRUFBK0I7QUFDM0JHLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUIsS0FBS0Msa0JBQUwsQ0FBd0JOLFlBQXhCLENBQXZCO0FBQ0g7QUFDSjs7QUFFU00sb0JBQWtCLENBQUNmLE1BQUQsRUFBb0M7QUFDNUQsV0FBT0EsTUFBTSxDQUFDZ0IsT0FBUCxDQUFlaEIsTUFBTSxDQUFDaUIsYUFBdEIsRUFBcUNDLEtBQTVDO0FBQ0g7O0FBRVNQLFFBQU0sQ0FBQ1gsTUFBRCxFQUFxQztBQUNqRCxXQUFPLENBQUMsQ0FBQ0EsTUFBTSxDQUFDa0IsS0FBaEI7QUFDSDs7QUE1Qm1ELEMiLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQubGFuZ3VhZ2Utc3dpdGNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ1Nob3BVaS9tb2RlbHMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZ3VhZ2VTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHNlbGVjdDogSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fc2VsZWN0YClbMF07XG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vblRyaWdnZXJDaGFuZ2UoZXZlbnQpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25UcmlnZ2VyQ2hhbmdlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzZWxlY3RUYXJnZXQgPSA8SFRNTFNlbGVjdEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgICAgICBpZiAodGhpcy5oYXNVcmwoc2VsZWN0VGFyZ2V0KSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLmN1cnJlbnRTZWxlY3RWYWx1ZShzZWxlY3RUYXJnZXQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjdXJyZW50U2VsZWN0VmFsdWUoc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhhc1VybChzZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAhIXNlbGVjdC52YWx1ZTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9