(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["quantity-counter"],{

/***/ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/quantity-counter/quantity-counter.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/quantity-counter/quantity-counter.ts ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuantityCounter; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class QuantityCounter extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.quantityInput = void 0;
    this.decrButton = void 0;
    this.incrButton = void 0;
    this.value = void 0;
    this.duration = 1000;
    this.timeout = 0;
    this.inputEvent = new Event('input');
    this.formattedNumberInput = void 0;
  }

  readyCallback() {}

  init() {
    this.quantityInput = this.getElementsByClassName(this.jsName + "__input")[0];
    this.decrButton = this.getElementsByClassName(this.jsName + "__decr")[0];
    this.incrButton = this.getElementsByClassName(this.jsName + "__incr")[0];
    this.formattedNumberInput = this.getElementsByClassName(this.jsName + "__formatted-input")[0];
    this.value = this.getValue;
    this.mapEvents();
    this.setMaxQuantityToInfinity();
  }

  mapEvents() {
    this.quantityInput.addEventListener('change', () => this.autoUpdateOnChange());
    this.decrButton.addEventListener('click', () => this.onDecrementButtonClick());
    this.incrButton.addEventListener('click', () => this.onIncrementButtonClick());
  }

  onDecrementButtonClick() {
    if (this.isDisabled) {
      return;
    }

    var value = this.formattedNumberInput.unformattedValue;

    if (value > this.minQuantity) {
      this.quantityInput.value = (value - 1).toString();
      this.autoUpdateOnChange();
      this.triggerInputEvent();
    }
  }

  onIncrementButtonClick() {
    if (this.isDisabled) {
      return;
    }

    var value = this.formattedNumberInput.unformattedValue;

    if (value < this.maxQuantity) {
      this.quantityInput.value = (value + 1).toString();
      this.autoUpdateOnChange();
      this.triggerInputEvent();
    }
  }

  autoUpdateOnChange() {
    if (this.autoUpdate) {
      this.timer();
    }
  }

  triggerInputEvent() {
    this.quantityInput.dispatchEvent(this.inputEvent);
  }

  timer() {
    clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => {
      if (this.value !== this.getValue) {
        this.quantityInput.form.submit();
      }
    }, this.duration);
  }

  setMaxQuantityToInfinity() {
    if (!this.maxQuantity) {
      this.quantityInput.setAttribute('data-max-quantity', 'Infinity');
    }
  }

  get maxQuantity() {
    return +this.quantityInput.getAttribute('data-max-quantity');
  }

  get minQuantity() {
    return +this.quantityInput.getAttribute('data-min-quantity');
  }

  get autoUpdate() {
    return this.quantityInput.hasAttribute('data-auto-update');
  }

  get isDisabled() {
    return this.quantityInput.hasAttribute('disabled');
  }

  get getValue() {
    return this.formattedNumberInput.unformattedValue;
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHl6L1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvcXVhbnRpdHktY291bnRlci9xdWFudGl0eS1jb3VudGVyLnRzIl0sIm5hbWVzIjpbIlF1YW50aXR5Q291bnRlciIsIkNvbXBvbmVudCIsInF1YW50aXR5SW5wdXQiLCJkZWNyQnV0dG9uIiwiaW5jckJ1dHRvbiIsInZhbHVlIiwiZHVyYXRpb24iLCJ0aW1lb3V0IiwiaW5wdXRFdmVudCIsIkV2ZW50IiwiZm9ybWF0dGVkTnVtYmVySW5wdXQiLCJyZWFkeUNhbGxiYWNrIiwiaW5pdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJqc05hbWUiLCJnZXRWYWx1ZSIsIm1hcEV2ZW50cyIsInNldE1heFF1YW50aXR5VG9JbmZpbml0eSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdXRvVXBkYXRlT25DaGFuZ2UiLCJvbkRlY3JlbWVudEJ1dHRvbkNsaWNrIiwib25JbmNyZW1lbnRCdXR0b25DbGljayIsImlzRGlzYWJsZWQiLCJ1bmZvcm1hdHRlZFZhbHVlIiwibWluUXVhbnRpdHkiLCJ0b1N0cmluZyIsInRyaWdnZXJJbnB1dEV2ZW50IiwibWF4UXVhbnRpdHkiLCJhdXRvVXBkYXRlIiwidGltZXIiLCJkaXNwYXRjaEV2ZW50IiwiY2xlYXJUaW1lb3V0Iiwid2luZG93Iiwic2V0VGltZW91dCIsImZvcm0iLCJzdWJtaXQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdlLE1BQU1BLGVBQU4sU0FBOEJDLCtEQUE5QixDQUF3QztBQUFBO0FBQUE7QUFBQSxTQUN6Q0MsYUFEeUM7QUFBQSxTQUV6Q0MsVUFGeUM7QUFBQSxTQUd6Q0MsVUFIeUM7QUFBQSxTQUl6Q0MsS0FKeUM7QUFBQSxTQUt6Q0MsUUFMeUMsR0FLdEIsSUFMc0I7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O0FBQ2hDLFdBQU8sQ0FBQyxLQUFLekIsYUFBTCxDQUFtQm1DLFlBQW5CLENBQWdDLG1CQUFoQyxDQUFSO0FBQ0g7O0FBRXdCLE1BQVhiLFdBQVcsR0FBVztBQUNoQyxXQUFPLENBQUMsS0FBS3RCLGFBQUwsQ0FBbUJtQyxZQUFuQixDQUFnQyxtQkFBaEMsQ0FBUjtBQUNIOztBQUV1QixNQUFWVCxVQUFVLEdBQVk7QUFDaEMsV0FBTyxLQUFLMUIsYUFBTCxDQUFtQm9DLFlBQW5CLENBQWdDLGtCQUFoQyxDQUFQO0FBQ0g7O0FBRXVCLE1BQVZoQixVQUFVLEdBQVk7QUFDaEMsV0FBTyxLQUFLcEIsYUFBTCxDQUFtQm9DLFlBQW5CLENBQWdDLFVBQWhDLENBQVA7QUFDSDs7QUFFcUIsTUFBUnZCLFFBQVEsR0FBVztBQUM3QixXQUFPLEtBQUtMLG9CQUFMLENBQTBCYSxnQkFBakM7QUFDSDs7QUF4R2tELEMiLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQucXVhbnRpdHktY291bnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuaW1wb3J0IEZvcm1hdHRlZE51bWJlcklucHV0IGZyb20gJ1Nob3BVaS9jb21wb25lbnRzL21vbGVjdWxlcy9mb3JtYXR0ZWQtbnVtYmVyLWlucHV0L2Zvcm1hdHRlZC1udW1iZXItaW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWFudGl0eUNvdW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBxdWFudGl0eUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHByb3RlY3RlZCBkZWNyQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgaW5jckJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHZhbHVlOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIGR1cmF0aW9uOiBudW1iZXIgPSAxMDAwO1xuICAgIHByb3RlY3RlZCB0aW1lb3V0OiBudW1iZXIgPSAwO1xuICAgIHByb3RlY3RlZCBpbnB1dEV2ZW50OiBFdmVudCA9IG5ldyBFdmVudCgnaW5wdXQnKTtcbiAgICBwcm90ZWN0ZWQgZm9ybWF0dGVkTnVtYmVySW5wdXQ6IEZvcm1hdHRlZE51bWJlcklucHV0O1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucXVhbnRpdHlJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2lucHV0YClbMF07XG4gICAgICAgIHRoaXMuZGVjckJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19kZWNyYClbMF07XG4gICAgICAgIHRoaXMuaW5jckJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19pbmNyYClbMF07XG4gICAgICAgIHRoaXMuZm9ybWF0dGVkTnVtYmVySW5wdXQgPSA8Rm9ybWF0dGVkTnVtYmVySW5wdXQ+KFxuICAgICAgICAgICAgdGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fZm9ybWF0dGVkLWlucHV0YClbMF1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0VmFsdWU7XG5cbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICAgICAgdGhpcy5zZXRNYXhRdWFudGl0eVRvSW5maW5pdHkoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnF1YW50aXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5hdXRvVXBkYXRlT25DaGFuZ2UoKSk7XG4gICAgICAgIHRoaXMuZGVjckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMub25EZWNyZW1lbnRCdXR0b25DbGljaygpKTtcbiAgICAgICAgdGhpcy5pbmNyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5vbkluY3JlbWVudEJ1dHRvbkNsaWNrKCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRlY3JlbWVudEJ1dHRvbkNsaWNrKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZm9ybWF0dGVkTnVtYmVySW5wdXQudW5mb3JtYXR0ZWRWYWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUgPiB0aGlzLm1pblF1YW50aXR5KSB7XG4gICAgICAgICAgICB0aGlzLnF1YW50aXR5SW5wdXQudmFsdWUgPSAodmFsdWUgLSAxKS50b1N0cmluZygpO1xuXG4gICAgICAgICAgICB0aGlzLmF1dG9VcGRhdGVPbkNoYW5nZSgpO1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VySW5wdXRFdmVudCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uSW5jcmVtZW50QnV0dG9uQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5mb3JtYXR0ZWROdW1iZXJJbnB1dC51bmZvcm1hdHRlZFZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSA8IHRoaXMubWF4UXVhbnRpdHkpIHtcbiAgICAgICAgICAgIHRoaXMucXVhbnRpdHlJbnB1dC52YWx1ZSA9ICh2YWx1ZSArIDEpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHRoaXMuYXV0b1VwZGF0ZU9uQ2hhbmdlKCk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJJbnB1dEV2ZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXV0b1VwZGF0ZU9uQ2hhbmdlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hdXRvVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdHJpZ2dlcklucHV0RXZlbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucXVhbnRpdHlJbnB1dC5kaXNwYXRjaEV2ZW50KHRoaXMuaW5wdXRFdmVudCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRpbWVyKCk6IHZvaWQge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMuZ2V0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1YW50aXR5SW5wdXQuZm9ybS5zdWJtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5kdXJhdGlvbik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldE1heFF1YW50aXR5VG9JbmZpbml0eSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLm1heFF1YW50aXR5KSB7XG4gICAgICAgICAgICB0aGlzLnF1YW50aXR5SW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLW1heC1xdWFudGl0eScsICdJbmZpbml0eScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBtYXhRdWFudGl0eSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gK3RoaXMucXVhbnRpdHlJbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWF4LXF1YW50aXR5Jyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBtaW5RdWFudGl0eSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gK3RoaXMucXVhbnRpdHlJbnB1dC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWluLXF1YW50aXR5Jyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBhdXRvVXBkYXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWFudGl0eUlucHV0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1hdXRvLXVwZGF0ZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVhbnRpdHlJbnB1dC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBnZXRWYWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0ZWROdW1iZXJJbnB1dC51bmZvcm1hdHRlZFZhbHVlO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=