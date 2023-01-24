(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["remote-form-submit"],{

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/remote-form-submit/remote-form-submit.ts":
/*!*********************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/remote-form-submit/remote-form-submit.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RemoteFormSubmit; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class RemoteFormSubmit extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.formHolder = void 0;
    this.fieldsContainer = void 0;
    this.submitButton = void 0;
  }

  readyCallback() {}

  init() {
    this.fieldsContainer = this.getElementsByClassName(this.jsName + "__container")[0];
    this.submitButton = this.getElementsByClassName(this.jsName + "__submit")[0];
    this.getFormHolder();
    this.createForm();
    this.removeFieldsContainer();
    this.mapEvents();
  }

  mapEvents() {
    this.mapSubmitButtonClickEvent();
  }

  mapSubmitButtonClickEvent() {
    this.submitButton.addEventListener('click', () => this.submitTargetForm());
  }

  submitTargetForm() {
    var form = document.getElementById(this.formName);

    if (this.submitButton.dataset.formAction) {
      form.action = this.submitButton.dataset.formAction;
    }

    form.submit();
  }

  getFormHolder() {
    if (this.formHolderClassName) {
      this.formHolder = document.getElementsByClassName(this.formHolderClassName)[0];
      return;
    }

    this.formHolder = document.body;
  }

  createForm() {
    var _document$getElementB;

    if (((_document$getElementB = document.getElementById(this.formName)) == null ? void 0 : _document$getElementB.tagName) === 'form') {
      return;
    }

    var formTemplate = "\n            <form id=\"" + this.formName + "\" class=\"is-hidden\" name=\"" + this.formName + "\" method=\"post\" action=\"" + this.formAction + "\">\n                " + this.fieldsContainer.innerHTML + "\n            </form>\n        ";
    this.formHolder.insertAdjacentHTML('beforeend', formTemplate);
  }

  removeFieldsContainer() {
    this.fieldsContainer.remove();
  }

  get formHolderClassName() {
    return this.getAttribute('form-holder-class-name');
  }

  get formName() {
    return this.getAttribute('form-name');
  }

  get formAction() {
    return this.getAttribute('form-action');
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvcmVtb3RlLWZvcm0tc3VibWl0L3JlbW90ZS1mb3JtLXN1Ym1pdC50cyJdLCJuYW1lcyI6WyJSZW1vdGVGb3JtU3VibWl0IiwiQ29tcG9uZW50IiwiZm9ybUhvbGRlciIsImZpZWxkc0NvbnRhaW5lciIsInN1Ym1pdEJ1dHRvbiIsInJlYWR5Q2FsbGJhY2siLCJpbml0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImpzTmFtZSIsImdldEZvcm1Ib2xkZXIiLCJjcmVhdGVGb3JtIiwicmVtb3ZlRmllbGRzQ29udGFpbmVyIiwibWFwRXZlbnRzIiwibWFwU3VibWl0QnV0dG9uQ2xpY2tFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJtaXRUYXJnZXRGb3JtIiwiZm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3JtTmFtZSIsImRhdGFzZXQiLCJmb3JtQWN0aW9uIiwiYWN0aW9uIiwic3VibWl0IiwiZm9ybUhvbGRlckNsYXNzTmFtZSIsImJvZHkiLCJ0YWdOYW1lIiwiZm9ybVRlbXBsYXRlIiwiaW5uZXJIVE1MIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicmVtb3ZlIiwiZ2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxNQUFNQSxnQkFBTixTQUErQkMsK0RBQS9CLENBQXlDO0FBQUE7QUFBQTtBQUFBLFNBQzFDQyxVQUQwQztBQUFBLFNBRTFDQyxlQUYwQztBQUFBLFNBRzFDQyxZQUgwQztBQUFBOztBQUsxQ0MsZUFBYSxHQUFTLENBQUU7O0FBRXhCQyxNQUFJLEdBQVM7QUFDbkIsU0FBS0gsZUFBTCxHQUFvQyxLQUFLSSxzQkFBTCxDQUErQixLQUFLQyxNQUFwQyxrQkFBeUQsQ0FBekQsQ0FBcEM7QUFDQSxTQUFLSixZQUFMLEdBQXVDLEtBQUtHLHNCQUFMLENBQStCLEtBQUtDLE1BQXBDLGVBQXNELENBQXRELENBQXZDO0FBRUEsU0FBS0MsYUFBTDtBQUNBLFNBQUtDLFVBQUw7QUFDQSxTQUFLQyxxQkFBTDtBQUNBLFNBQUtDLFNBQUw7QUFDSDs7QUFFU0EsV0FBUyxHQUFTO0FBQ3hCLFNBQUtDLHlCQUFMO0FBQ0g7O0FBRVNBLDJCQUF5QixHQUFTO0FBQ3hDLFNBQUtULFlBQUwsQ0FBa0JVLGdCQUFsQixDQUFtQyxPQUFuQyxFQUE0QyxNQUFNLEtBQUtDLGdCQUFMLEVBQWxEO0FBQ0g7O0FBRVNBLGtCQUFnQixHQUFTO0FBQy9CLFFBQU1DLElBQUksR0FBb0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUFLQyxRQUE3QixDQUE5Qjs7QUFFQSxRQUFJLEtBQUtmLFlBQUwsQ0FBa0JnQixPQUFsQixDQUEwQkMsVUFBOUIsRUFBMEM7QUFDdENMLFVBQUksQ0FBQ00sTUFBTCxHQUFjLEtBQUtsQixZQUFMLENBQWtCZ0IsT0FBbEIsQ0FBMEJDLFVBQXhDO0FBQ0g7O0FBRURMLFFBQUksQ0FBQ08sTUFBTDtBQUNIOztBQUVTZCxlQUFhLEdBQVM7QUFDNUIsUUFBSSxLQUFLZSxtQkFBVCxFQUE4QjtBQUMxQixXQUFLdEIsVUFBTCxHQUErQmUsUUFBUSxDQUFDVixzQkFBVCxDQUFnQyxLQUFLaUIsbUJBQXJDLEVBQTBELENBQTFELENBQS9CO0FBRUE7QUFDSDs7QUFFRCxTQUFLdEIsVUFBTCxHQUFrQmUsUUFBUSxDQUFDUSxJQUEzQjtBQUNIOztBQUVTZixZQUFVLEdBQVM7QUFBQTs7QUFDekIsUUFBSSwwQkFBQU8sUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQUtDLFFBQTdCLDRDQUF3Q08sT0FBeEMsTUFBb0QsTUFBeEQsRUFBZ0U7QUFDNUQ7QUFDSDs7QUFFRCxRQUFNQyxZQUFZLGlDQUNGLEtBQUtSLFFBREgsc0NBQ3dDLEtBQUtBLFFBRDdDLG9DQUNnRixLQUFLRSxVQURyRiw2QkFFUixLQUFLbEIsZUFBTCxDQUFxQnlCLFNBRmIsb0NBQWxCO0FBS0EsU0FBSzFCLFVBQUwsQ0FBZ0IyQixrQkFBaEIsQ0FBbUMsV0FBbkMsRUFBZ0RGLFlBQWhEO0FBQ0g7O0FBRVNoQix1QkFBcUIsR0FBUztBQUNwQyxTQUFLUixlQUFMLENBQXFCMkIsTUFBckI7QUFDSDs7QUFFZ0MsTUFBbkJOLG1CQUFtQixHQUFXO0FBQ3hDLFdBQU8sS0FBS08sWUFBTCxDQUFrQix3QkFBbEIsQ0FBUDtBQUNIOztBQUVxQixNQUFSWixRQUFRLEdBQVc7QUFDN0IsV0FBTyxLQUFLWSxZQUFMLENBQWtCLFdBQWxCLENBQVA7QUFDSDs7QUFFdUIsTUFBVlYsVUFBVSxHQUFXO0FBQy9CLFdBQU8sS0FBS1UsWUFBTCxDQUFrQixhQUFsQixDQUFQO0FBQ0g7O0FBeEVtRCxDIiwiZmlsZSI6Ii4vanMveXZlc19kZWZhdWx0LnJlbW90ZS1mb3JtLXN1Ym1pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW1vdGVGb3JtU3VibWl0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgZm9ybUhvbGRlcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIGZpZWxkc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHN1Ym1pdEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5maWVsZHNDb250YWluZXIgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fY29udGFpbmVyYClbMF07XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3N1Ym1pdGApWzBdO1xuXG4gICAgICAgIHRoaXMuZ2V0Rm9ybUhvbGRlcigpO1xuICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcbiAgICAgICAgdGhpcy5yZW1vdmVGaWVsZHNDb250YWluZXIoKTtcbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1hcFN1Ym1pdEJ1dHRvbkNsaWNrRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwU3VibWl0QnV0dG9uQ2xpY2tFdmVudCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnN1Ym1pdFRhcmdldEZvcm0oKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN1Ym1pdFRhcmdldEZvcm0oKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSA8SFRNTEZvcm1FbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZm9ybU5hbWUpO1xuXG4gICAgICAgIGlmICh0aGlzLnN1Ym1pdEJ1dHRvbi5kYXRhc2V0LmZvcm1BY3Rpb24pIHtcbiAgICAgICAgICAgIGZvcm0uYWN0aW9uID0gdGhpcy5zdWJtaXRCdXR0b24uZGF0YXNldC5mb3JtQWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybS5zdWJtaXQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUhvbGRlcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybUhvbGRlckNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtSG9sZGVyID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5mb3JtSG9sZGVyQ2xhc3NOYW1lKVswXTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mb3JtSG9sZGVyID0gZG9jdW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRm9ybSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZm9ybU5hbWUpPy50YWdOYW1lID09PSAnZm9ybScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvcm1UZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxmb3JtIGlkPVwiJHt0aGlzLmZvcm1OYW1lfVwiIGNsYXNzPVwiaXMtaGlkZGVuXCIgbmFtZT1cIiR7dGhpcy5mb3JtTmFtZX1cIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiJHt0aGlzLmZvcm1BY3Rpb259XCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmZpZWxkc0NvbnRhaW5lci5pbm5lckhUTUx9XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIGA7XG4gICAgICAgIHRoaXMuZm9ybUhvbGRlci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGZvcm1UZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlbW92ZUZpZWxkc0NvbnRhaW5lcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5maWVsZHNDb250YWluZXIucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBmb3JtSG9sZGVyQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnZm9ybS1ob2xkZXItY2xhc3MtbmFtZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgZm9ybU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdmb3JtLW5hbWUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGZvcm1BY3Rpb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdmb3JtLWFjdGlvbicpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=