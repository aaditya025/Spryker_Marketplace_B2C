(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["toggler-checkbox"],{

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-checkbox/toggler-checkbox.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-checkbox/toggler-checkbox.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TogglerCheckbox; });
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

/**
 * @event toggle An event which is triggered when the trigger element is changed.
 */

class TogglerCheckbox extends _models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Element triggering the toggle action.
   */

  /**
   * Elements targeted by the toggle action.
   */
  constructor() {
    super();
    this.trigger = void 0;
    this.targets = void 0;
    this.event = void 0;
    this.trigger = this.getElementsByClassName(this.jsName + "__trigger")[0];
    /* tslint:disable: deprecation */

    this.targets = Array.from(this.targetClassName ? document.getElementsByClassName(this.targetClassName) : document.querySelectorAll(this.targetSelector));
    /* tslint:enable: deprecation */
  }

  readyCallback() {}

  init() {
    this.toggle();
    this.fireToggleEvent();
    this.mapEvents();
  }

  mapEvents() {
    this.trigger.addEventListener('change', event => this.onTriggerClick(event));
  }

  onTriggerClick(event) {
    event.preventDefault();
    this.toggle();
    this.fireToggleEvent();
  }
  /**
   * Toggles the class names in the target elements.
   * @param addClass A boolean value which checks if the trigger is checked.
   */


  toggle(addClass) {
    if (addClass === void 0) {
      addClass = this.addClass;
    }

    this.targets.forEach(element => element.classList.toggle(this.classToToggle, addClass));
  }
  /**
   *  Creates an instance of the custom toggle event and triggers it.
   */


  fireToggleEvent() {
    this.event = new CustomEvent('toggle');
    this.dispatchEvent(this.event);
  }
  /**
   * Gets if the trigger element is checked.
   */


  get addClass() {
    return this.addClassWhenChecked ? this.trigger.checked : !this.trigger.checked;
  }
  /**
   * Gets a querySelector of the target element.
   *
   * @deprecated Use targetClassName() instead.
   */


  get targetSelector() {
    return this.trigger.getAttribute('target-selector');
  }

  get targetClassName() {
    return this.trigger.getAttribute('target-class-name');
  }
  /**
   * Gets a class name for the toggle action.
   */


  get classToToggle() {
    return this.trigger.getAttribute('class-to-toggle');
  }
  /**
   * Gets if the element should add the class when checked.
   */


  get addClassWhenChecked() {
    return this.trigger.hasAttribute('add-class-when-checked');
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvdG9nZ2xlci1jaGVja2JveC90b2dnbGVyLWNoZWNrYm94LnRzIl0sIm5hbWVzIjpbIlRvZ2dsZXJDaGVja2JveCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwidHJpZ2dlciIsInRhcmdldHMiLCJldmVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJqc05hbWUiLCJBcnJheSIsImZyb20iLCJ0YXJnZXRDbGFzc05hbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0YXJnZXRTZWxlY3RvciIsInJlYWR5Q2FsbGJhY2siLCJpbml0IiwidG9nZ2xlIiwiZmlyZVRvZ2dsZUV2ZW50IiwibWFwRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uVHJpZ2dlckNsaWNrIiwicHJldmVudERlZmF1bHQiLCJhZGRDbGFzcyIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwiY2xhc3NUb1RvZ2dsZSIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImFkZENsYXNzV2hlbkNoZWNrZWQiLCJjaGVja2VkIiwiZ2V0QXR0cmlidXRlIiwiaGFzQXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBQ2UsTUFBTUEsZUFBTixTQUE4QkMseURBQTlCLENBQXdDO0FBQ25EO0FBQ0o7QUFDQTs7QUFHSTtBQUNKO0FBQ0E7QUFJSUMsYUFBVyxHQUFHO0FBQ1Y7QUFEVSxTQVJMQyxPQVFLO0FBQUEsU0FITEMsT0FHSztBQUFBLFNBRkpDLEtBRUk7QUFFVixTQUFLRixPQUFMLEdBQWlDLEtBQUtHLHNCQUFMLENBQStCLEtBQUtDLE1BQXBDLGdCQUF1RCxDQUF2RCxDQUFqQztBQUNBOztBQUNBLFNBQUtILE9BQUwsR0FDSUksS0FBSyxDQUFDQyxJQUFOLENBQ0ksS0FBS0MsZUFBTCxHQUNNQyxRQUFRLENBQUNMLHNCQUFULENBQWdDLEtBQUtJLGVBQXJDLENBRE4sR0FFTUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixLQUFLQyxjQUEvQixDQUhWLENBREo7QUFPQTtBQUNIOztBQUVTQyxlQUFhLEdBQVMsQ0FBRTs7QUFFeEJDLE1BQUksR0FBUztBQUNuQixTQUFLQyxNQUFMO0FBQ0EsU0FBS0MsZUFBTDtBQUNBLFNBQUtDLFNBQUw7QUFDSDs7QUFFU0EsV0FBUyxHQUFTO0FBQ3hCLFNBQUtmLE9BQUwsQ0FBYWdCLGdCQUFiLENBQThCLFFBQTlCLEVBQXlDZCxLQUFELElBQWtCLEtBQUtlLGNBQUwsQ0FBb0JmLEtBQXBCLENBQTFEO0FBQ0g7O0FBRVNlLGdCQUFjLENBQUNmLEtBQUQsRUFBcUI7QUFDekNBLFNBQUssQ0FBQ2dCLGNBQU47QUFDQSxTQUFLTCxNQUFMO0FBQ0EsU0FBS0MsZUFBTDtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7OztBQUNJRCxRQUFNLENBQUNNLFFBQUQsRUFBMEM7QUFBQSxRQUF6Q0EsUUFBeUM7QUFBekNBLGNBQXlDLEdBQXJCLEtBQUtBLFFBQWdCO0FBQUE7O0FBQzVDLFNBQUtsQixPQUFMLENBQWFtQixPQUFiLENBQXNCQyxPQUFELElBQTBCQSxPQUFPLENBQUNDLFNBQVIsQ0FBa0JULE1BQWxCLENBQXlCLEtBQUtVLGFBQTlCLEVBQTZDSixRQUE3QyxDQUEvQztBQUNIO0FBRUQ7QUFDSjtBQUNBOzs7QUFDSUwsaUJBQWUsR0FBUztBQUNwQixTQUFLWixLQUFMLEdBQWEsSUFBSXNCLFdBQUosQ0FBZ0IsUUFBaEIsQ0FBYjtBQUNBLFNBQUtDLGFBQUwsQ0FBbUIsS0FBS3ZCLEtBQXhCO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7OztBQUNnQixNQUFSaUIsUUFBUSxHQUFZO0FBQ3BCLFdBQU8sS0FBS08sbUJBQUwsR0FBMkIsS0FBSzFCLE9BQUwsQ0FBYTJCLE9BQXhDLEdBQWtELENBQUMsS0FBSzNCLE9BQUwsQ0FBYTJCLE9BQXZFO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7QUFDc0IsTUFBZGpCLGNBQWMsR0FBVztBQUN6QixXQUFPLEtBQUtWLE9BQUwsQ0FBYTRCLFlBQWIsQ0FBMEIsaUJBQTFCLENBQVA7QUFDSDs7QUFDNEIsTUFBZnJCLGVBQWUsR0FBVztBQUNwQyxXQUFPLEtBQUtQLE9BQUwsQ0FBYTRCLFlBQWIsQ0FBMEIsbUJBQTFCLENBQVA7QUFDSDtBQUVEO0FBQ0o7QUFDQTs7O0FBQ3FCLE1BQWJMLGFBQWEsR0FBVztBQUN4QixXQUFPLEtBQUt2QixPQUFMLENBQWE0QixZQUFiLENBQTBCLGlCQUExQixDQUFQO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7OztBQUMyQixNQUFuQkYsbUJBQW1CLEdBQVk7QUFDL0IsV0FBTyxLQUFLMUIsT0FBTCxDQUFhNkIsWUFBYixDQUEwQix3QkFBMUIsQ0FBUDtBQUNIOztBQTNGa0QsQyIsImZpbGUiOiIuL2pzL3l2ZXNfZGVmYXVsdC50b2dnbGVyLWNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY29tcG9uZW50JztcblxuLyoqXG4gKiBAZXZlbnQgdG9nZ2xlIEFuIGV2ZW50IHdoaWNoIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSB0cmlnZ2VyIGVsZW1lbnQgaXMgY2hhbmdlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlckNoZWNrYm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBFbGVtZW50IHRyaWdnZXJpbmcgdGhlIHRvZ2dsZSBhY3Rpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJpZ2dlcjogSFRNTElucHV0RWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIEVsZW1lbnRzIHRhcmdldGVkIGJ5IHRoZSB0b2dnbGUgYWN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhcmdldHM6IEhUTUxFbGVtZW50W107XG4gICAgcHJvdGVjdGVkIGV2ZW50OiBDdXN0b21FdmVudDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRyaWdnZXIgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X190cmlnZ2VyYClbMF07XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlOiBkZXByZWNhdGlvbiAqL1xuICAgICAgICB0aGlzLnRhcmdldHMgPSA8SFRNTEVsZW1lbnRbXT4oXG4gICAgICAgICAgICBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0Q2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgICAgID8gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLnRhcmdldENsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMudGFyZ2V0U2VsZWN0b3IpLFxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlOiBkZXByZWNhdGlvbiAqL1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge31cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB0aGlzLmZpcmVUb2dnbGVFdmVudCgpO1xuICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uVHJpZ2dlckNsaWNrKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uVHJpZ2dlckNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB0aGlzLmZpcmVUb2dnbGVFdmVudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGNsYXNzIG5hbWVzIGluIHRoZSB0YXJnZXQgZWxlbWVudHMuXG4gICAgICogQHBhcmFtIGFkZENsYXNzIEEgYm9vbGVhbiB2YWx1ZSB3aGljaCBjaGVja3MgaWYgdGhlIHRyaWdnZXIgaXMgY2hlY2tlZC5cbiAgICAgKi9cbiAgICB0b2dnbGUoYWRkQ2xhc3M6IGJvb2xlYW4gPSB0aGlzLmFkZENsYXNzKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3NUb1RvZ2dsZSwgYWRkQ2xhc3MpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgY3VzdG9tIHRvZ2dsZSBldmVudCBhbmQgdHJpZ2dlcnMgaXQuXG4gICAgICovXG4gICAgZmlyZVRvZ2dsZUV2ZW50KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd0b2dnbGUnKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KHRoaXMuZXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgaWYgdGhlIHRyaWdnZXIgZWxlbWVudCBpcyBjaGVja2VkLlxuICAgICAqL1xuICAgIGdldCBhZGRDbGFzcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkQ2xhc3NXaGVuQ2hlY2tlZCA/IHRoaXMudHJpZ2dlci5jaGVja2VkIDogIXRoaXMudHJpZ2dlci5jaGVja2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBxdWVyeVNlbGVjdG9yIG9mIHRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIFVzZSB0YXJnZXRDbGFzc05hbWUoKSBpbnN0ZWFkLlxuICAgICAqL1xuICAgIGdldCB0YXJnZXRTZWxlY3RvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyLmdldEF0dHJpYnV0ZSgndGFyZ2V0LXNlbGVjdG9yJyk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgdGFyZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIuZ2V0QXR0cmlidXRlKCd0YXJnZXQtY2xhc3MtbmFtZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBjbGFzcyBuYW1lIGZvciB0aGUgdG9nZ2xlIGFjdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgY2xhc3NUb1RvZ2dsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyLmdldEF0dHJpYnV0ZSgnY2xhc3MtdG8tdG9nZ2xlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBpZiB0aGUgZWxlbWVudCBzaG91bGQgYWRkIHRoZSBjbGFzcyB3aGVuIGNoZWNrZWQuXG4gICAgICovXG4gICAgZ2V0IGFkZENsYXNzV2hlbkNoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIuaGFzQXR0cmlidXRlKCdhZGQtY2xhc3Mtd2hlbi1jaGVja2VkJyk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==