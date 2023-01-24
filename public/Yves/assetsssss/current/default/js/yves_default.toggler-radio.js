(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["toggler-radio"],{

/***/ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/toggler-radio/toggler-radio-extended.ts":
/*!********************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/toggler-radio/toggler-radio-extended.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TogglerRadioExtended; });
/* harmony import */ var ShopUi_components_molecules_toggler_radio_toggler_radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/components/molecules/toggler-radio/toggler-radio */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-radio/toggler-radio.ts");

class TogglerRadioExtended extends ShopUi_components_molecules_toggler_radio_toggler_radio__WEBPACK_IMPORTED_MODULE_0__["default"] {
  toggle(addClass) {
    if (addClass === void 0) {
      addClass = this.addClass;
    }

    this.targets.forEach(element => {
      if (!addClass) {
        element.classList.remove(this.classToToggle);
        return;
      }

      element.classList.add(this.classToToggle);
    });
  }

}

/***/ }),

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

/***/ }),

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-radio/toggler-radio.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-radio/toggler-radio.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TogglerRadio; });
/* harmony import */ var _toggler_checkbox_toggler_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toggler-checkbox/toggler-checkbox */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/toggler-checkbox/toggler-checkbox.ts");

class TogglerRadio extends _toggler_checkbox_toggler_checkbox__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.togglers = void 0;
  }

  readyCallback() {}

  init() {
    this.togglers = Array.from(document.querySelectorAll(this.name + "[group-name=\"" + this.groupName + "\"]"));
    super.init();
  }

  onTriggerClick(event) {
    event.preventDefault();
    this.toggleAll();
  }
  /**
   * Toggles all the toggler elements.
   */


  toggleAll() {
    this.togglers.forEach(toggler => {
      toggler.toggle(toggler.addClass);
    });
  }
  /**
   * Gets a group name.
   */


  get groupName() {
    return this.getAttribute('group-name');
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHl6L1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvdG9nZ2xlci1yYWRpby90b2dnbGVyLXJhZGlvLWV4dGVuZGVkLnRzIiwid2VicGFjazovLy8uL3ZlbmRvci9zcHJ5a2VyLXNob3Avc2hvcC11aS9zcmMvU3ByeWtlclNob3AvWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy90b2dnbGVyLWNoZWNrYm94L3RvZ2dsZXItY2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9zaG9wLXVpL3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Nob3BVaS9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3RvZ2dsZXItcmFkaW8vdG9nZ2xlci1yYWRpby50cyJdLCJuYW1lcyI6WyJUb2dnbGVyUmFkaW9FeHRlbmRlZCIsIlRvZ2dsZXJSYWRpbyIsInRvZ2dsZSIsImFkZENsYXNzIiwidGFyZ2V0cyIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY2xhc3NUb1RvZ2dsZSIsImFkZCIsIlRvZ2dsZXJDaGVja2JveCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwidHJpZ2dlciIsImV2ZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImpzTmFtZSIsIkFycmF5IiwiZnJvbSIsInRhcmdldENsYXNzTmFtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRhcmdldFNlbGVjdG9yIiwicmVhZHlDYWxsYmFjayIsImluaXQiLCJmaXJlVG9nZ2xlRXZlbnQiLCJtYXBFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwib25UcmlnZ2VyQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImFkZENsYXNzV2hlbkNoZWNrZWQiLCJjaGVja2VkIiwiZ2V0QXR0cmlidXRlIiwiaGFzQXR0cmlidXRlIiwidG9nZ2xlcnMiLCJuYW1lIiwiZ3JvdXBOYW1lIiwidG9nZ2xlQWxsIiwidG9nZ2xlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsTUFBTUEsb0JBQU4sU0FBbUNDLCtGQUFuQyxDQUFnRDtBQUMzREMsUUFBTSxDQUFDQyxRQUFELEVBQTBDO0FBQUEsUUFBekNBLFFBQXlDO0FBQXpDQSxjQUF5QyxHQUFyQixLQUFLQSxRQUFnQjtBQUFBOztBQUM1QyxTQUFLQyxPQUFMLENBQWFDLE9BQWIsQ0FBc0JDLE9BQUQsSUFBMEI7QUFDM0MsVUFBSSxDQUFDSCxRQUFMLEVBQWU7QUFDWEcsZUFBTyxDQUFDQyxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixLQUFLQyxhQUE5QjtBQUVBO0FBQ0g7O0FBRURILGFBQU8sQ0FBQ0MsU0FBUixDQUFrQkcsR0FBbEIsQ0FBc0IsS0FBS0QsYUFBM0I7QUFDSCxLQVJEO0FBU0g7O0FBWDBELEM7Ozs7Ozs7Ozs7OztBQ0YvRDtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFDZSxNQUFNRSxlQUFOLFNBQThCQyx5REFBOUIsQ0FBd0M7QUFDbkQ7QUFDSjtBQUNBOztBQUdJO0FBQ0o7QUFDQTtBQUlJQyxhQUFXLEdBQUc7QUFDVjtBQURVLFNBUkxDLE9BUUs7QUFBQSxTQUhMVixPQUdLO0FBQUEsU0FGSlcsS0FFSTtBQUVWLFNBQUtELE9BQUwsR0FBaUMsS0FBS0Usc0JBQUwsQ0FBK0IsS0FBS0MsTUFBcEMsZ0JBQXVELENBQXZELENBQWpDO0FBQ0E7O0FBQ0EsU0FBS2IsT0FBTCxHQUNJYyxLQUFLLENBQUNDLElBQU4sQ0FDSSxLQUFLQyxlQUFMLEdBQ01DLFFBQVEsQ0FBQ0wsc0JBQVQsQ0FBZ0MsS0FBS0ksZUFBckMsQ0FETixHQUVNQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLEtBQUtDLGNBQS9CLENBSFYsQ0FESjtBQU9BO0FBQ0g7O0FBRVNDLGVBQWEsR0FBUyxD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Q29udGVudCI6WyJpbXBvcnQgVG9nZ2xlclJhZGlvIGZyb20gJ1Nob3BVaS9jb21wb25lbnRzL21vbGVjdWxlcy90b2dnbGVyLXJhZGlvL3RvZ2dsZXItcmFkaW8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2dnbGVyUmFkaW9FeHRlbmRlZCBleHRlbmRzIFRvZ2dsZXJSYWRpbyB7XG4gICAgdG9nZ2xlKGFkZENsYXNzOiBib29sZWFuID0gdGhpcy5hZGRDbGFzcyk6IHZvaWQge1xuICAgICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghYWRkQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc1RvVG9nZ2xlKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NUb1RvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2NvbXBvbmVudCc7XG5cbi8qKlxuICogQGV2ZW50IHRvZ2dsZSBBbiBldmVudCB3aGljaCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgdHJpZ2dlciBlbGVtZW50IGlzIGNoYW5nZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZXJDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogRWxlbWVudCB0cmlnZ2VyaW5nIHRoZSB0b2dnbGUgYWN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyaWdnZXI6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBFbGVtZW50cyB0YXJnZXRlZCBieSB0aGUgdG9nZ2xlIGFjdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YXJnZXRzOiBIVE1MRWxlbWVudFtdO1xuICAgIHByb3RlY3RlZCBldmVudDogQ3VzdG9tRXZlbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fdHJpZ2dlcmApWzBdO1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTogZGVwcmVjYXRpb24gKi9cbiAgICAgICAgdGhpcy50YXJnZXRzID0gPEhUTUxFbGVtZW50W10+KFxuICAgICAgICAgICAgQXJyYXkuZnJvbShcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldENsYXNzTmFtZVxuICAgICAgICAgICAgICAgICAgICA/IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy50YXJnZXRDbGFzc05hbWUpXG4gICAgICAgICAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnRhcmdldFNlbGVjdG9yKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgLyogdHNsaW50OmVuYWJsZTogZGVwcmVjYXRpb24gKi9cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgdGhpcy5maXJlVG9nZ2xlRXZlbnQoKTtcbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vblRyaWdnZXJDbGljayhldmVudCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblRyaWdnZXJDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgdGhpcy5maXJlVG9nZ2xlRXZlbnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSBjbGFzcyBuYW1lcyBpbiB0aGUgdGFyZ2V0IGVsZW1lbnRzLlxuICAgICAqIEBwYXJhbSBhZGRDbGFzcyBBIGJvb2xlYW4gdmFsdWUgd2hpY2ggY2hlY2tzIGlmIHRoZSB0cmlnZ2VyIGlzIGNoZWNrZWQuXG4gICAgICovXG4gICAgdG9nZ2xlKGFkZENsYXNzOiBib29sZWFuID0gdGhpcy5hZGRDbGFzcyk6IHZvaWQge1xuICAgICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNsYXNzVG9Ub2dnbGUsIGFkZENsYXNzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGN1c3RvbSB0b2dnbGUgZXZlbnQgYW5kIHRyaWdnZXJzIGl0LlxuICAgICAqL1xuICAgIGZpcmVUb2dnbGVFdmVudCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ldmVudCA9IG5ldyBDdXN0b21FdmVudCgndG9nZ2xlJyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0aGlzLmV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGlmIHRoZSB0cmlnZ2VyIGVsZW1lbnQgaXMgY2hlY2tlZC5cbiAgICAgKi9cbiAgICBnZXQgYWRkQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZENsYXNzV2hlbkNoZWNrZWQgPyB0aGlzLnRyaWdnZXIuY2hlY2tlZCA6ICF0aGlzLnRyaWdnZXIuY2hlY2tlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgcXVlcnlTZWxlY3RvciBvZiB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCBVc2UgdGFyZ2V0Q2xhc3NOYW1lKCkgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBnZXQgdGFyZ2V0U2VsZWN0b3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ3RhcmdldC1zZWxlY3RvcicpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IHRhcmdldENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyLmdldEF0dHJpYnV0ZSgndGFyZ2V0LWNsYXNzLW5hbWUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgY2xhc3MgbmFtZSBmb3IgdGhlIHRvZ2dsZSBhY3Rpb24uXG4gICAgICovXG4gICAgZ2V0IGNsYXNzVG9Ub2dnbGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2NsYXNzLXRvLXRvZ2dsZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgaWYgdGhlIGVsZW1lbnQgc2hvdWxkIGFkZCB0aGUgY2xhc3Mgd2hlbiBjaGVja2VkLlxuICAgICAqL1xuICAgIGdldCBhZGRDbGFzc1doZW5DaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyLmhhc0F0dHJpYnV0ZSgnYWRkLWNsYXNzLXdoZW4tY2hlY2tlZCcpO1xuICAgIH1cbn1cbiIsImltcG9ydCBUb2dnbGVyQ2hlY2tib3ggZnJvbSAnLi4vdG9nZ2xlci1jaGVja2JveC90b2dnbGVyLWNoZWNrYm94JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlclJhZGlvIGV4dGVuZHMgVG9nZ2xlckNoZWNrYm94IHtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIHRoZSB0b2dnbGUgdHJpZ2dlcnMuXG4gICAgICovXG4gICAgdG9nZ2xlcnM6IFRvZ2dsZXJSYWRpb1tdO1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG9nZ2xlcnMgPSA8VG9nZ2xlclJhZGlvW10+KFxuICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke3RoaXMubmFtZX1bZ3JvdXAtbmFtZT1cIiR7dGhpcy5ncm91cE5hbWV9XCJdYCkpXG4gICAgICAgICk7XG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25UcmlnZ2VyQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlQWxsKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyBhbGwgdGhlIHRvZ2dsZXIgZWxlbWVudHMuXG4gICAgICovXG4gICAgdG9nZ2xlQWxsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRvZ2dsZXJzLmZvckVhY2goKHRvZ2dsZXI6IFRvZ2dsZXJSYWRpbykgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlci50b2dnbGUodG9nZ2xlci5hZGRDbGFzcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgYSBncm91cCBuYW1lLlxuICAgICAqL1xuICAgIGdldCBncm91cE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdncm91cC1uYW1lJyk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==