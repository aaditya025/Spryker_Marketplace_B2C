(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["form-submitter"],{

/***/ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/form-submitter/form-submitter.ts":
/*!*************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/form-submitter/form-submitter.ts ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormSubmitter; });
/* harmony import */ var ShopUi_components_molecules_form_submitter_form_submitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/components/molecules/form-submitter/form-submitter */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/form-submitter/form-submitter.ts");

var TAG_NAME = 'form';
class FormSubmitter extends ShopUi_components_molecules_form_submitter_form_submitter__WEBPACK_IMPORTED_MODULE_0__["default"] {
  onEvent(event) {
    var trigger = event.currentTarget;
    var form = trigger.closest(TAG_NAME);

    if (!form) {
      return;
    }

    var submit = form.querySelector('[type="submit"]') || form.querySelector('button:not([type="button"])');

    if (submit) {
      submit.click();
    }

    form.submit();
  }

}

/***/ }),

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/form-submitter/form-submitter.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/form-submitter/form-submitter.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormSubmitter; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

var TAG_NAME = 'form';
class FormSubmitter extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.triggers = void 0;
  }

  readyCallback() {}

  init() {
    this.triggers = Array.from(document.querySelectorAll(this.triggerSelector));
    this.mapEvents();
  }

  mapEvents() {
    this.triggers.forEach(trigger => trigger.addEventListener(this.eventName, event => this.onEvent(event)));
  }

  onEvent(event) {
    var trigger = event.currentTarget;
    var form = trigger.closest(TAG_NAME);

    if (!form) {
      return;
    }

    var submit = form.querySelector('[type="submit"]') || form.querySelector('button');

    if (submit) {
      submit.click();
    }

    form.submit();
  }

  get triggerSelector() {
    return this.getAttribute('trigger-selector');
  }

  get eventName() {
    return this.getAttribute('event');
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHl6L1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvZm9ybS1zdWJtaXR0ZXIvZm9ybS1zdWJtaXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9zaG9wLXVpL3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Nob3BVaS9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL2Zvcm0tc3VibWl0dGVyL2Zvcm0tc3VibWl0dGVyLnRzIl0sIm5hbWVzIjpbIlRBR19OQU1FIiwiRm9ybVN1Ym1pdHRlciIsIkZvcm1TdWJtaXR0ZXJDb3JlIiwib25FdmVudCIsImV2ZW50IiwidHJpZ2dlciIsImN1cnJlbnRUYXJnZXQiLCJmb3JtIiwiY2xvc2VzdCIsInN1Ym1pdCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGljayIsIkNvbXBvbmVudCIsInRyaWdnZXJzIiwicmVhZHlDYWxsYmFjayIsImluaXQiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0cmlnZ2VyU2VsZWN0b3IiLCJtYXBFdmVudHMiLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50TmFtZSIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLE1BQWpCO0FBRWUsTUFBTUMsYUFBTixTQUE0QkMsaUdBQTVCLENBQThDO0FBQy9DQyxTQUFPLENBQUNDLEtBQUQsRUFBcUI7QUFDbEMsUUFBTUMsT0FBTyxHQUFvQkQsS0FBSyxDQUFDRSxhQUF2QztBQUNBLFFBQU1DLElBQUksR0FBb0JGLE9BQU8sQ0FBQ0csT0FBUixDQUFnQlIsUUFBaEIsQ0FBOUI7O0FBRUEsUUFBSSxDQUFDTyxJQUFMLEVBQVc7QUFDUDtBQUNIOztBQUVELFFBQU1FLE1BQU0sR0FDOEJGLElBQUksQ0FBQ0csYUFBTCxDQUFtQixpQkFBbkIsQ0FBdEMsSUFDbUJILElBQUksQ0FBQ0csYUFBTCxDQUFtQiw2QkFBbkIsQ0FGdkI7O0FBSUEsUUFBSUQsTUFBSixFQUFZO0FBQ1JBLFlBQU0sQ0FBQ0UsS0FBUDtBQUNIOztBQUVESixRQUFJLENBQUNFLE1BQUw7QUFDSDs7QUFsQndELEM7Ozs7Ozs7Ozs7OztBQ0o3RDtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1ULFFBQVEsR0FBRyxNQUFqQjtBQUVlLE1BQU1DLGFBQU4sU0FBNEJXLCtEQUE1QixDQUFzQztBQUFBO0FBQUE7QUFBQSxTQUN2Q0MsUUFEdUM7QUFBQTs7QUFHdkNDLGVBQWEsR0FBUyxDQUFFOztBQUV4QkMsTUFBSSxHQUFTO0FBQ25CLFNBQUtGLFFBQUwsR0FBK0JHLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLEtBQUtDLGVBQS9CLENBQVgsQ0FBL0I7QUFDQSxTQUFLQyxTQUFMO0FBQ0g7O0FBRVNBLFdBQVMsR0FBUztBQUN4QixTQUFLUixRQUFMLENBQWNTLE9BQWQsQ0FBdUJqQixPQUFELElBQ2xCQSxPQUFPLENBQUNrQixnQkFBUixDQUF5QixLQUFLQyxTQUE5QixFQUEwQ3BCLEtBQUQsSUFBa0IsS0FBS0QsT0FBTCxDQUFhQyxLQUFiLENBQTNELENBREo7QUFHSDs7QUFFU0QsU0FBTyxDQUFDQyxLQUFELEVBQXFCO0FBQ2xDLFFBQU1DLE9BQU8sR0FBb0JELEtBQUssQ0FBQ0UsYUFBdkM7QUFDQSxRQUFNQyxJQUFJLEdBQW9CRixPQUFPLENBQUNHLE9BQVIsQ0FBZ0JSLFFBQWhCLENBQTlCOztBQUVBLFFBQUksQ0FBQ08sSUFBTCxFQUFXO0FBQ1A7QUFDSDs7QUFFRCxRQUFNRSxNQUFNLEdBQzhCRixJQUFJLENBQUNHLGFBQUwsQ0FBbUIsaUJBQW5CLENBQXRDLElBQ21CSCxJQUFJLENBQUNHLGFBQUwsQ0FBbUIsUUFBbkIsQ0FGdkI7O0FBSUEsUUFBSUQsTUFBSixFQUFZO0FBQ1JBLFlBQU0sQ0FBQ0UsS0FBUDtBQUNIOztBQUVESixRQUFJLENBQUNFLE1BQUw7QUFDSDs7QUFFNEIsTUFBZlcsZUFBZSxHQUFXO0FBQ3BDLFdBQU8sS0FBS0ssWUFBTCxDQUFrQixrQkFBbEIsQ0FBUDtBQUNIOztBQUVzQixNQUFURCxTQUFTLEdBQVc7QUFDOUIsV0FBTyxLQUFLQyxZQUFMLENBQWtCLE9BQWxCLENBQVA7QUFDSDs7QUF6Q2dELEMiLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQuZm9ybS1zdWJtaXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybVN1Ym1pdHRlckNvcmUgZnJvbSAnU2hvcFVpL2NvbXBvbmVudHMvbW9sZWN1bGVzL2Zvcm0tc3VibWl0dGVyL2Zvcm0tc3VibWl0dGVyJztcblxuY29uc3QgVEFHX05BTUUgPSAnZm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1TdWJtaXR0ZXIgZXh0ZW5kcyBGb3JtU3VibWl0dGVyQ29yZSB7XG4gICAgcHJvdGVjdGVkIG9uRXZlbnQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXIgPSA8SFRNTEZvcm1FbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGNvbnN0IGZvcm0gPSA8SFRNTEZvcm1FbGVtZW50PnRyaWdnZXIuY2xvc2VzdChUQUdfTkFNRSk7XG5cbiAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdWJtaXQgPVxuICAgICAgICAgICAgPEhUTUxCdXR0b25FbGVtZW50IHwgSFRNTElucHV0RWxlbWVudD5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic3VibWl0XCJdJykgfHxcbiAgICAgICAgICAgIDxIVE1MQnV0dG9uRWxlbWVudD5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbjpub3QoW3R5cGU9XCJidXR0b25cIl0pJyk7XG5cbiAgICAgICAgaWYgKHN1Ym1pdCkge1xuICAgICAgICAgICAgc3VibWl0LmNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtLnN1Ym1pdCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuXG5jb25zdCBUQUdfTkFNRSA9ICdmb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVN1Ym1pdHRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHRyaWdnZXJzOiBIVE1MRWxlbWVudFtdO1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJpZ2dlcnMgPSA8SFRNTEVsZW1lbnRbXT5BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy50cmlnZ2VyU2VsZWN0b3IpKTtcbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+XG4gICAgICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudE5hbWUsIChldmVudDogRXZlbnQpID0+IHRoaXMub25FdmVudChldmVudCkpLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkV2ZW50KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0cmlnZ2VyID0gPEhUTUxGb3JtRWxlbWVudD5ldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjb25zdCBmb3JtID0gPEhUTUxGb3JtRWxlbWVudD50cmlnZ2VyLmNsb3Nlc3QoVEFHX05BTUUpO1xuXG4gICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3VibWl0ID1cbiAgICAgICAgICAgIDxIVE1MQnV0dG9uRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQ+Zm9ybS5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInN1Ym1pdFwiXScpIHx8XG4gICAgICAgICAgICA8SFRNTEJ1dHRvbkVsZW1lbnQ+Zm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcblxuICAgICAgICBpZiAoc3VibWl0KSB7XG4gICAgICAgICAgICBzdWJtaXQuY2xpY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCB0cmlnZ2VyU2VsZWN0b3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0cmlnZ2VyLXNlbGVjdG9yJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBldmVudE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdldmVudCcpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=