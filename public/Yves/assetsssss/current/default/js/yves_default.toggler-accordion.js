(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["toggler-accordion"],{

/***/ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/toggler-accordion/toggler-accordion.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/toggler-accordion/toggler-accordion.ts ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TogglerAccordion; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class TogglerAccordion extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.triggers = void 0;
  }

  readyCallback() {}

  init() {
    this.triggers = Array.from(document.getElementsByClassName(this.triggerClassName));
    this.mapEvents();
  }

  mapEvents() {
    this.triggers.forEach(trigger => trigger.addEventListener('click', this.triggerHandler.bind(this, trigger)));
  }

  triggerHandler(trigger) {
    var togglerContent = document.getElementsByClassName(trigger.getAttribute('data-toggle-target-class-name'))[0];
    trigger.classList.toggle(this.activeClass);
    togglerContent.classList.toggle(this.toggleClass);
  }

  get triggerClassName() {
    return this.getAttribute('trigger-class-name');
  }

  get toggleClass() {
    return this.getAttribute('class-to-toggle');
  }

  get activeClass() {
    return this.getAttribute('active-class');
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHl6L1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvdG9nZ2xlci1hY2NvcmRpb24vdG9nZ2xlci1hY2NvcmRpb24udHMiXSwibmFtZXMiOlsiVG9nZ2xlckFjY29yZGlvbiIsIkNvbXBvbmVudCIsInRyaWdnZXJzIiwicmVhZHlDYWxsYmFjayIsImluaXQiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0cmlnZ2VyQ2xhc3NOYW1lIiwibWFwRXZlbnRzIiwiZm9yRWFjaCIsInRyaWdnZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidHJpZ2dlckhhbmRsZXIiLCJiaW5kIiwidG9nZ2xlckNvbnRlbnQiLCJnZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhY3RpdmVDbGFzcyIsInRvZ2dsZUNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxNQUFNQSxnQkFBTixTQUErQkMsK0RBQS9CLENBQXlDO0FBQUE7QUFBQTtBQUFBLFNBQzFDQyxRQUQwQztBQUFBOztBQUcxQ0MsZUFBYSxHQUFTLENBQUU7O0FBRXhCQyxNQUFJLEdBQVM7QUFDbkIsU0FBS0YsUUFBTCxHQUErQkcsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsS0FBS0MsZ0JBQXJDLENBQVgsQ0FBL0I7QUFDQSxTQUFLQyxTQUFMO0FBQ0g7O0FBRVNBLFdBQVMsR0FBUztBQUN4QixTQUFLUixRQUFMLENBQWNTLE9BQWQsQ0FBdUJDLE9BQUQsSUFBYUEsT0FBTyxDQUFDQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxLQUFLQyxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixFQUErQkgsT0FBL0IsQ0FBbEMsQ0FBbkM7QUFDSDs7QUFFU0UsZ0JBQWMsQ0FBQ0YsT0FBRCxFQUE2QjtBQUNqRCxRQUFNSSxjQUFjLEdBQUdULFFBQVEsQ0FBQ0Msc0JBQVQsQ0FDbkJJLE9BQU8sQ0FBQ0ssWUFBUixDQUFxQiwrQkFBckIsQ0FEbUIsRUFFckIsQ0FGcUIsQ0FBdkI7QUFHQUwsV0FBTyxDQUFDTSxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixLQUFLQyxXQUE5QjtBQUNBSixrQkFBYyxDQUFDRSxTQUFmLENBQXlCQyxNQUF6QixDQUFnQyxLQUFLRSxXQUFyQztBQUNIOztBQUU2QixNQUFoQlosZ0JBQWdCLEdBQVc7QUFDckMsV0FBTyxLQUFLUSxZQUFMLENBQWtCLG9CQUFsQixDQUFQO0FBQ0g7O0FBRXdCLE1BQVhJLFdBQVcsR0FBVztBQUNoQyxXQUFPLEtBQUtKLFlBQUwsQ0FBa0IsaUJBQWxCLENBQVA7QUFDSDs7QUFFd0IsTUFBWEcsV0FBVyxHQUFXO0FBQ2hDLFdBQU8sS0FBS0gsWUFBTCxDQUFrQixjQUFsQixDQUFQO0FBQ0g7O0FBaENtRCxDIiwiZmlsZSI6Ii4vanMveXZlc19kZWZhdWx0LnRvZ2dsZXItYWNjb3JkaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdTaG9wVWkvbW9kZWxzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZXJBY2NvcmRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCB0cmlnZ2VyczogSFRNTEVsZW1lbnRbXTtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge31cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyaWdnZXJzID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMudHJpZ2dlckNsYXNzTmFtZSkpO1xuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4gdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudHJpZ2dlckhhbmRsZXIuYmluZCh0aGlzLCB0cmlnZ2VyKSkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0cmlnZ2VySGFuZGxlcih0cmlnZ2VyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0b2dnbGVyQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgICB0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUtdGFyZ2V0LWNsYXNzLW5hbWUnKSxcbiAgICAgICAgKVswXTtcbiAgICAgICAgdHJpZ2dlci5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgICAgICB0b2dnbGVyQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMudG9nZ2xlQ2xhc3MpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgdHJpZ2dlckNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3RyaWdnZXItY2xhc3MtbmFtZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgdG9nZ2xlQ2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjbGFzcy10by10b2dnbGUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGFjdGl2ZUNsYXNzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnYWN0aXZlLWNsYXNzJyk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==