(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["cart-configured-bundle-item-note"],{

/***/ "./src/Pyz/Yves/ConfigurableBundleNoteWidget/Theme/default/components/molecules/cart-configured-bundle-item-note/cart-configured-bundle-item-note.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ConfigurableBundleNoteWidget/Theme/default/components/molecules/cart-configured-bundle-item-note/cart-configured-bundle-item-note.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartConfiguredBundleItemNote; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class CartConfiguredBundleItemNote extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.editButton = void 0;
    this.removeButton = void 0;
    this.formTarget = void 0;
    this.textTarget = void 0;
  }

  readyCallback() {}

  init() {
    this.editButton = this.getElementsByClassName(this.jsName + "__edit")[0];
    this.removeButton = this.getElementsByClassName(this.jsName + "__remove")[0];
    this.formTarget = this.getElementsByClassName(this.jsName + "__form")[0];
    this.textTarget = this.getElementsByClassName(this.jsName + "__text-wrap")[0];
    this.mapEvents();
  }

  mapEvents() {
    if (this.editButton) {
      this.editButton.addEventListener('click', () => this.onEditButtonClick());
    }

    if (this.removeButton) {
      this.removeButton.addEventListener('click', () => this.onRemoveButtonClick());
    }
  }

  onEditButtonClick() {
    this.classToggle(this.formTarget);
    this.classToggle(this.textTarget);
  }

  onRemoveButtonClick() {
    var form = this.formTarget.getElementsByTagName('form')[0];
    var textarea = form.getElementsByTagName('textarea')[0];
    textarea.value = '';
    form.submit();
  }

  classToggle(activeTrigger) {
    var isTriggerActive = activeTrigger.classList.contains(this.classToToggle);
    activeTrigger.classList.toggle(this.classToToggle, !isTriggerActive);
  }

  get classToToggle() {
    return this.getAttribute('class-to-toggle');
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHl6L1l2ZXMvQ29uZmlndXJhYmxlQnVuZGxlTm90ZVdpZGdldC9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL2NhcnQtY29uZmlndXJlZC1idW5kbGUtaXRlbS1ub3RlL2NhcnQtY29uZmlndXJlZC1idW5kbGUtaXRlbS1ub3RlLnRzIl0sIm5hbWVzIjpbIkNhcnRDb25maWd1cmVkQnVuZGxlSXRlbU5vdGUiLCJDb21wb25lbnQiLCJlZGl0QnV0dG9uIiwicmVtb3ZlQnV0dG9uIiwiZm9ybVRhcmdldCIsInRleHRUYXJnZXQiLCJyZWFkeUNhbGxiYWNrIiwiaW5pdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJqc05hbWUiLCJtYXBFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwib25FZGl0QnV0dG9uQ2xpY2siLCJvblJlbW92ZUJ1dHRvbkNsaWNrIiwiY2xhc3NUb2dnbGUiLCJmb3JtIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ0ZXh0YXJlYSIsInZhbHVlIiwic3VibWl0IiwiYWN0aXZlVHJpZ2dlciIsImlzVHJpZ2dlckFjdGl2ZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY2xhc3NUb1RvZ2dsZSIsInRvZ2dsZSIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWUsTUFBTUEsNEJBQU4sU0FBMkNDLCtEQUEzQyxDQUFxRDtBQUFBO0FBQUE7QUFBQSxTQUN0REMsVUFEc0Q7QUFBQSxTQUV0REMsWUFGc0Q7QUFBQSxTQUd0REMsVUFIc0Q7QUFBQSxTQUl0REMsVUFKc0Q7QUFBQTs7QUFNdERDLGVBQWEsR0FBUyxDQUFFOztBQUV4QkMsTUFBSSxHQUFTO0FBQ25CLFNBQUtMLFVBQUwsR0FBcUMsS0FBS00sc0JBQUwsQ0FBK0IsS0FBS0MsTUFBcEMsYUFBb0QsQ0FBcEQsQ0FBckM7QUFDQSxTQUFLTixZQUFMLEdBQXVDLEtBQUtLLHNCQUFMLENBQStCLEtBQUtDLE1BQXBDLGVBQXNELENBQXRELENBQXZDO0FBQ0EsU0FBS0wsVUFBTCxHQUErQixLQUFLSSxzQkFBTCxDQUErQixLQUFLQyxNQUFwQyxhQUFvRCxDQUFwRCxDQUEvQjtBQUNBLFNBQUtKLFVBQUwsR0FBK0IsS0FBS0csc0JBQUwsQ0FBK0IsS0FBS0MsTUFBcEMsa0JBQXlELENBQXpELENBQS9CO0FBRUEsU0FBS0MsU0FBTDtBQUNIOztBQUVTQSxXQUFTLEdBQVM7QUFDeEIsUUFBSSxLQUFLUixVQUFULEVBQXFCO0FBQ2pCLFdBQUtBLFVBQUwsQ0FBZ0JTLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxNQUFNLEtBQUtDLGlCQUFMLEVBQWhEO0FBQ0g7O0FBRUQsUUFBSSxLQUFLVCxZQUFULEVBQXVCO0FBQ25CLFdBQUtBLFlBQUwsQ0FBa0JRLGdCQUFsQixDQUFtQyxPQUFuQyxFQUE0QyxNQUFNLEtBQUtFLG1CQUFMLEVBQWxEO0FBQ0g7QUFDSjs7QUFFU0QsbUJBQWlCLEdBQVM7QUFDaEMsU0FBS0UsV0FBTCxDQUFpQixLQUFLVixVQUF0QjtBQUNBLFNBQUtVLFdBQUwsQ0FBaUIsS0FBS1QsVUFBdEI7QUFDSDs7QUFFU1EscUJBQW1CLEdBQVM7QUFDbEMsUUFBTUUsSUFBSSxHQUFvQixLQUFLWCxVQUFMLENBQWdCWSxvQkFBaEIsQ0FBcUMsTUFBckMsRUFBNkMsQ0FBN0MsQ0FBOUI7QUFDQSxRQUFNQyxRQUFRLEdBQXdCRixJQUFJLENBQUNDLG9CQUFMLENBQTBCLFVBQTFCLEVBQXNDLENBQXRDLENBQXRDO0FBQ0FDLFlBQVEsQ0FBQ0MsS0FBVCxHQUFpQixFQUFqQjtBQUNBSCxRQUFJLENBQUNJLE1BQUw7QUFDSDs7QUFFU0wsYUFBVyxDQUFDTSxhQUFELEVBQW1DO0FBQ3BELFFBQU1DLGVBQWUsR0FBR0QsYUFBYSxDQUFDRSxTQUFkLENBQXdCQyxRQUF4QixDQUFpQyxLQUFLQyxhQUF0QyxDQUF4QjtBQUNBSixpQkFBYSxDQUFDRSxTQUFkLENBQXdCRyxNQUF4QixDQUErQixLQUFLRCxhQUFwQyxFQUFtRCxDQUFDSCxlQUFwRDtBQUNIOztBQUUwQixNQUFiRyxhQUFhLEdBQVc7QUFDbEMsV0FBTyxLQUFLRSxZQUFMLENBQWtCLGlCQUFsQixDQUFQO0FBQ0g7O0FBOUMrRCxDIiwiZmlsZSI6Ii4vanMveXZlc19kZWZhdWx0LmNhcnQtY29uZmlndXJlZC1idW5kbGUtaXRlbS1ub3RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdTaG9wVWkvbW9kZWxzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRDb25maWd1cmVkQnVuZGxlSXRlbU5vdGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBlZGl0QnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcmVtb3ZlQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgZm9ybVRhcmdldDogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHRleHRUYXJnZXQ6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWRpdEJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19lZGl0YClbMF07XG4gICAgICAgIHRoaXMucmVtb3ZlQnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3JlbW92ZWApWzBdO1xuICAgICAgICB0aGlzLmZvcm1UYXJnZXQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fZm9ybWApWzBdO1xuICAgICAgICB0aGlzLnRleHRUYXJnZXQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fdGV4dC13cmFwYClbMF07XG5cbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5lZGl0QnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm9uRWRpdEJ1dHRvbkNsaWNrKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucmVtb3ZlQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMub25SZW1vdmVCdXR0b25DbGljaygpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkVkaXRCdXR0b25DbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGFzc1RvZ2dsZSh0aGlzLmZvcm1UYXJnZXQpO1xuICAgICAgICB0aGlzLmNsYXNzVG9nZ2xlKHRoaXMudGV4dFRhcmdldCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uUmVtb3ZlQnV0dG9uQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSA8SFRNTEZvcm1FbGVtZW50PnRoaXMuZm9ybVRhcmdldC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpWzBdO1xuICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IDxIVE1MVGV4dEFyZWFFbGVtZW50PmZvcm0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJylbMF07XG4gICAgICAgIHRleHRhcmVhLnZhbHVlID0gJyc7XG4gICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNsYXNzVG9nZ2xlKGFjdGl2ZVRyaWdnZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGlzVHJpZ2dlckFjdGl2ZSA9IGFjdGl2ZVRyaWdnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3NUb1RvZ2dsZSk7XG4gICAgICAgIGFjdGl2ZVRyaWdnZXIuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNsYXNzVG9Ub2dnbGUsICFpc1RyaWdnZXJBY3RpdmUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgY2xhc3NUb1RvZ2dsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2NsYXNzLXRvLXRvZ2dsZScpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=