(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["flash-message"],{

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/flash-message/flash-message.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/flash-message/flash-message.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlashMessage; });
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class FlashMessage extends _models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.defaultDuration = 5000;
    this.durationTimeoutId = void 0;
  }

  readyCallback() {
    this.mapEvents();
    window.setTimeout(() => this.showFor(this.defaultDuration));
  }

  mapEvents() {
    this.addEventListener('click', event => this.onClick(event));
  }

  onClick(event) {
    event.preventDefault();
    this.hide();
  }
  /**
   * Shows the flash message during the time set.
   * @param duration A number value which defines the period of time for which the flash message is shown.
   */


  showFor(duration) {
    this.classList.add(this.name + "--show");
    this.durationTimeoutId = window.setTimeout(() => this.hide(), duration);
  }
  /**
   * Hides the flash message.
   */


  hide() {
    clearTimeout(this.durationTimeoutId);
    this.classList.remove(this.name + "--show");
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvZmxhc2gtbWVzc2FnZS9mbGFzaC1tZXNzYWdlLnRzIl0sIm5hbWVzIjpbIkZsYXNoTWVzc2FnZSIsIkNvbXBvbmVudCIsImRlZmF1bHREdXJhdGlvbiIsImR1cmF0aW9uVGltZW91dElkIiwicmVhZHlDYWxsYmFjayIsIm1hcEV2ZW50cyIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzaG93Rm9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwib25DbGljayIsInByZXZlbnREZWZhdWx0IiwiaGlkZSIsImR1cmF0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwibmFtZSIsImNsZWFyVGltZW91dCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsTUFBTUEsWUFBTixTQUEyQkMseURBQTNCLENBQXFDO0FBQUE7QUFBQTtBQUFBLFNBSXZDQyxlQUp1QyxHQUliLElBSmE7QUFBQSxTQVNoREMsaUJBVGdEO0FBQUE7O0FBV3RDQyxlQUFhLEdBQVM7QUFDNUIsU0FBS0MsU0FBTDtBQUNBQyxVQUFNLENBQUNDLFVBQVAsQ0FBa0IsTUFBTSxLQUFLQyxPQUFMLENBQWEsS0FBS04sZUFBbEIsQ0FBeEI7QUFDSDs7QUFFU0csV0FBUyxHQUFTO0FBQ3hCLFNBQUtJLGdCQUFMLENBQXNCLE9BQXRCLEVBQWdDQyxLQUFELElBQWtCLEtBQUtDLE9BQUwsQ0FBYUQsS0FBYixDQUFqRDtBQUNIOztBQUVTQyxTQUFPLENBQUNELEtBQUQsRUFBcUI7QUFDbENBLFNBQUssQ0FBQ0UsY0FBTjtBQUNBLFNBQUtDLElBQUw7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7QUFDSUwsU0FBTyxDQUFDTSxRQUFELEVBQW1CO0FBQ3RCLFNBQUtDLFNBQUwsQ0FBZUMsR0FBZixDQUFzQixLQUFLQyxJQUEzQjtBQUNBLFNBQUtkLGlCQUFMLEdBQXlCRyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsTUFBTSxLQUFLTSxJQUFMLEVBQXhCLEVBQXFDQyxRQUFyQyxDQUF6QjtBQUNIO0FBRUQ7QUFDSjtBQUNBOzs7QUFDSUQsTUFBSSxHQUFHO0FBQ0hLLGdCQUFZLENBQUMsS0FBS2YsaUJBQU4sQ0FBWjtBQUNBLFNBQUtZLFNBQUwsQ0FBZUksTUFBZixDQUF5QixLQUFLRixJQUE5QjtBQUNIOztBQXhDK0MsQyIsImZpbGUiOiIuL2pzL3l2ZXNfZGVmYXVsdC5mbGFzaC1tZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhc2hNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGZsYXNoIG1lc3NhZ2Ugc2hvdyBkdXJhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWZhdWx0RHVyYXRpb246IG51bWJlciA9IDUwMDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgb2YgZmxhc2ggbWVzc2FnZSB0aW1lb3V0LlxuICAgICAqL1xuICAgIGR1cmF0aW9uVGltZW91dElkOiBudW1iZXI7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5zaG93Rm9yKHRoaXMuZGVmYXVsdER1cmF0aW9uKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogRXZlbnQpID0+IHRoaXMub25DbGljayhldmVudCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyB0aGUgZmxhc2ggbWVzc2FnZSBkdXJpbmcgdGhlIHRpbWUgc2V0LlxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiBBIG51bWJlciB2YWx1ZSB3aGljaCBkZWZpbmVzIHRoZSBwZXJpb2Qgb2YgdGltZSBmb3Igd2hpY2ggdGhlIGZsYXNoIG1lc3NhZ2UgaXMgc2hvd24uXG4gICAgICovXG4gICAgc2hvd0ZvcihkdXJhdGlvbjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChgJHt0aGlzLm5hbWV9LS1zaG93YCk7XG4gICAgICAgIHRoaXMuZHVyYXRpb25UaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLmhpZGUoKSwgZHVyYXRpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGVzIHRoZSBmbGFzaCBtZXNzYWdlLlxuICAgICAqL1xuICAgIGhpZGUoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmR1cmF0aW9uVGltZW91dElkKTtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGAke3RoaXMubmFtZX0tLXNob3dgKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9