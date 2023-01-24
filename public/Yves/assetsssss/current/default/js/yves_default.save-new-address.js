(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["save-new-address"],{

/***/ "./vendor/spryker-shop/customer-page/src/SprykerShop/Yves/CustomerPage/Theme/default/components/molecules/save-new-address/save-new-address.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/customer-page/src/SprykerShop/Yves/CustomerPage/Theme/default/components/molecules/save-new-address/save-new-address.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SaveNewAddress; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
/* tslint:disable */

var EVENT_ADD_NEW_ADDRESS = 'add-new-address';
class SaveNewAddress extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.customerShippingAddresses = void 0;
    this.customerBillingAddresses = void 0;
    this.saveNewAddressToggler = void 0;
    this.sameAsShippingToggler = void 0;
    this.addNewShippingAddress = void 0;
    this.addNewBillingAddress = void 0;
    this.newShippingAddressChecked = false;
    this.newBillingAddressChecked = false;
    this.hideClass = 'is-hidden';
  }

  readyCallback() {
    if (this.shippingAddressTogglerSelector && this.billingAddressTogglerSelector) {
      this.customerShippingAddresses = document.querySelector(this.shippingAddressTogglerSelector);
      this.customerBillingAddresses = document.querySelector(this.billingAddressTogglerSelector);
    }

    if (this.addNewShippingAddressSelector && this.addNewBillingAddressSelector) {
      this.addNewShippingAddress = document.querySelector(this.addNewShippingAddressSelector);
      this.addNewBillingAddress = document.querySelector(this.addNewBillingAddressSelector);
    }

    this.saveNewAddressToggler = document.querySelector(this.saveAddressTogglerSelector);
    this.sameAsShippingToggler = document.querySelector(this.billingSameAsShippingAddressTogglerSelector);
    this.customerAddressesExists();
  }

  customerAddressesExists() {
    if (!this.customerShippingAddresses) {
      this.showSaveNewAddress();
      return;
    }

    this.mapEvents();
    this.initSaveNewAddressState();
  }

  mapEvents() {
    if (this.addNewShippingAddress && this.addNewBillingAddress) {
      this.addNewShippingAddress.addEventListener(EVENT_ADD_NEW_ADDRESS, () => this.shippingTogglerOnChange());
      this.addNewBillingAddress.addEventListener(EVENT_ADD_NEW_ADDRESS, () => this.billingTogglerOnChange());
    }

    this.customerShippingAddresses.addEventListener('change', () => this.shippingTogglerOnChange());
    this.customerBillingAddresses.addEventListener('change', () => this.billingTogglerOnChange());
    this.sameAsShippingToggler.addEventListener('change', () => this.toggleSaveNewAddress());
  }

  shippingTogglerOnChange() {
    this.newShippingAddressChecked = this.addressTogglerChange(this.customerShippingAddresses);
    this.toggleSaveNewAddress();
  }

  billingTogglerOnChange() {
    this.newBillingAddressChecked = this.addressTogglerChange(this.customerBillingAddresses);
    this.toggleSaveNewAddress();
  }

  initSaveNewAddressState() {
    this.newShippingAddressChecked = this.isSaveNewAddressOptionSelected(this.customerShippingAddresses);
    this.newBillingAddressChecked = this.isSaveNewAddressOptionSelected(this.customerBillingAddresses);
    this.toggleSaveNewAddress();
  }

  addressTogglerChange(toggler) {
    return this.isSaveNewAddressOptionSelected(toggler);
  }

  isSaveNewAddressOptionSelected(toggler) {
    return !toggler.value;
  }

  toggleSaveNewAddress() {
    if (this.newShippingAddressChecked || this.newBillingAddressChecked && !this.sameAsShippingChecked) {
      this.showSaveNewAddress();
      return;
    }

    this.hideSaveNewAddress();
  }

  hideSaveNewAddress() {
    this.classList.add(this.hideClass);
    this.saveNewAddressToggler.disabled = true;
  }

  showSaveNewAddress() {
    this.classList.remove(this.hideClass);
    this.saveNewAddressToggler.disabled = false;
  }

  get sameAsShippingChecked() {
    return this.sameAsShippingToggler.checked;
  }

  get shippingAddressTogglerSelector() {
    return this.getAttribute('shipping-address-toggler-selector');
  }

  get billingAddressTogglerSelector() {
    return this.getAttribute('billing-address-toggler-selector');
  }

  get addNewShippingAddressSelector() {
    return this.getAttribute('add-new-shipping-address-selector');
  }

  get addNewBillingAddressSelector() {
    return this.getAttribute('add-new-billing-address-selector');
  }

  get billingSameAsShippingAddressTogglerSelector() {
    return this.getAttribute('billing-same-as-shipping-toggler-selector');
  }

  get saveAddressTogglerSelector() {
    return this.getAttribute('save-address-toggler-selector');
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL2N1c3RvbWVyLXBhZ2Uvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvQ3VzdG9tZXJQYWdlL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvc2F2ZS1uZXctYWRkcmVzcy9zYXZlLW5ldy1hZGRyZXNzLnRzIl0sIm5hbWVzIjpbIkVWRU5UX0FERF9ORVdfQUREUkVTUyIsIlNhdmVOZXdBZGRyZXNzIiwiQ29tcG9uZW50IiwiY3VzdG9tZXJTaGlwcGluZ0FkZHJlc3NlcyIsImN1c3RvbWVyQmlsbGluZ0FkZHJlc3NlcyIsInNhdmVOZXdBZGRyZXNzVG9nZ2xlciIsInNhbWVBc1NoaXBwaW5nVG9nZ2xlciIsImFkZE5ld1NoaXBwaW5nQWRkcmVzcyIsImFkZE5ld0JpbGxpbmdBZGRyZXNzIiwibmV3U2hpcHBpbmdBZGRyZXNzQ2hlY2tlZCIsIm5ld0JpbGxpbmdBZGRyZXNzQ2hlY2tlZCIsImhpZGVDbGFzcyIsInJlYWR5Q2FsbGJhY2siLCJzaGlwcGluZ0FkZHJlc3NUb2dnbGVyU2VsZWN0b3IiLCJiaWxsaW5nQWRkcmVzc1RvZ2dsZXJTZWxlY3RvciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZE5ld1NoaXBwaW5nQWRkcmVzc1NlbGVjdG9yIiwiYWRkTmV3QmlsbGluZ0FkZHJlc3NTZWxlY3RvciIsInNhdmVBZGRyZXNzVG9nZ2xlclNlbGVjdG9yIiwiYmlsbGluZ1NhbWVBc1NoaXBwaW5nQWRkcmVzc1RvZ2dsZXJTZWxlY3RvciIsImN1c3RvbWVyQWRkcmVzc2VzRXhpc3RzIiwic2hvd1NhdmVOZXdBZGRyZXNzIiwibWFwRXZlbnRzIiwiaW5pdFNhdmVOZXdBZGRyZXNzU3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwic2hpcHBpbmdUb2dnbGVyT25DaGFuZ2UiLCJiaWxsaW5nVG9nZ2xlck9uQ2hhbmdlIiwidG9nZ2xlU2F2ZU5ld0FkZHJlc3MiLCJhZGRyZXNzVG9nZ2xlckNoYW5nZSIsImlzU2F2ZU5ld0FkZHJlc3NPcHRpb25TZWxlY3RlZCIsInRvZ2dsZXIiLCJ2YWx1ZSIsInNhbWVBc1NoaXBwaW5nQ2hlY2tlZCIsImhpZGVTYXZlTmV3QWRkcmVzcyIsImNsYXNzTGlzdCIsImFkZCIsImRpc2FibGVkIiwicmVtb3ZlIiwiY2hlY2tlZCIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRyxpQkFBOUI7QUFFZSxNQUFNQyxjQUFOLFNBQTZCQywrREFBN0IsQ0FBdUM7QUFBQTtBQUFBO0FBQUEsU0FDbERDLHlCQURrRDtBQUFBLFNBRWxEQyx3QkFGa0Q7QUFBQSxTQUdsREMscUJBSGtEO0FBQUEsU0FJbERDLHFCQUprRDtBQUFBLFNBS2xEQyxxQkFMa0Q7QUFBQSxTQU1sREMsb0JBTmtEO0FBQUEsU0FRbERDLHlCQVJrRCxHQVFiLEtBUmE7QUFBQSxTQVNsREMsd0JBVGtELEdBU2QsS0FUYztBQUFBLFNBVXpDQyxTQVZ5QyxHQVVyQixXQVZxQjtBQUFBOztBQVl4Q0MsZUFBYSxHQUFTO0FBQzVCLFFBQUksS0FBS0MsOEJBQUwsSUFBdUMsS0FBS0MsNkJBQWhELEVBQStFO0FBQzNFLFdBQUtYLHlCQUFMLEdBQ0lZLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUFLSCw4QkFBNUIsQ0FESjtBQUdBLFdBQUtULHdCQUFMLEdBQWlEVyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBS0YsNkJBQTVCLENBQWpEO0FBQ0g7O0FBRUQsUUFBSSxLQUFLRyw2QkFBTCxJQUFzQyxLQUFLQyw0QkFBL0MsRUFBNkU7QUFDekUsV0FBS1gscUJBQUwsR0FBZ0RRLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUFLQyw2QkFBNUIsQ0FBaEQ7QUFDQSxXQUFLVCxvQkFBTCxHQUErQ08sUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQUtFLDRCQUE1QixDQUEvQztBQUNIOztBQUVELFNBQUtiLHFCQUFMLEdB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a0Isa0NBQWxCLENBQVA7QUFDSDs7QUFFZ0MsTUFBN0J2Qiw2QkFBNkIsR0FBVztBQUN4QyxXQUFPLEtBQUt1QixZQUFMLENBQWtCLG1DQUFsQixDQUFQO0FBQ0g7O0FBRStCLE1BQTVCdEIsNEJBQTRCLEdBQVc7QUFDdkMsV0FBTyxLQUFLc0IsWUFBTCxDQUFrQixrQ0FBbEIsQ0FBUDtBQUNIOztBQUU4QyxNQUEzQ3BCLDJDQUEyQyxHQUFXO0FBQ3RELFdBQU8sS0FBS29CLFlBQUwsQ0FBa0IsMkNBQWxCLENBQVA7QUFDSDs7QUFFNkIsTUFBMUJyQiwwQkFBMEIsR0FBVztBQUNyQyxXQUFPLEtBQUtxQixZQUFMLENBQWtCLCtCQUFsQixDQUFQO0FBQ0g7O0FBM0hpRCxDIiwiZmlsZSI6Ii4vanMveXZlc19kZWZhdWx0LnNhdmUtbmV3LWFkZHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdTaG9wVWkvbW9kZWxzL2NvbXBvbmVudCc7XG5cbmNvbnN0IEVWRU5UX0FERF9ORVdfQUREUkVTUyA9ICdhZGQtbmV3LWFkZHJlc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTYXZlTmV3QWRkcmVzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY3VzdG9tZXJTaGlwcGluZ0FkZHJlc3NlczogSFRNTEZvcm1FbGVtZW50O1xuICAgIGN1c3RvbWVyQmlsbGluZ0FkZHJlc3NlczogSFRNTEZvcm1FbGVtZW50O1xuICAgIHNhdmVOZXdBZGRyZXNzVG9nZ2xlcjogSFRNTElucHV0RWxlbWVudDtcbiAgICBzYW1lQXNTaGlwcGluZ1RvZ2dsZXI6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgYWRkTmV3U2hpcHBpbmdBZGRyZXNzOiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBhZGROZXdCaWxsaW5nQWRkcmVzczogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgICBuZXdTaGlwcGluZ0FkZHJlc3NDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gICAgbmV3QmlsbGluZ0FkZHJlc3NDaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcmVhZG9ubHkgaGlkZUNsYXNzOiBzdHJpbmcgPSAnaXMtaGlkZGVuJztcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zaGlwcGluZ0FkZHJlc3NUb2dnbGVyU2VsZWN0b3IgJiYgdGhpcy5iaWxsaW5nQWRkcmVzc1RvZ2dsZXJTZWxlY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5jdXN0b21lclNoaXBwaW5nQWRkcmVzc2VzID0gPEhUTUxGb3JtRWxlbWVudD4oXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNoaXBwaW5nQWRkcmVzc1RvZ2dsZXJTZWxlY3RvcilcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmN1c3RvbWVyQmlsbGluZ0FkZHJlc3NlcyA9IDxIVE1MRm9ybUVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmJpbGxpbmdBZGRyZXNzVG9nZ2xlclNlbGVjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFkZE5ld1NoaXBwaW5nQWRkcmVzc1NlbGVjdG9yICYmIHRoaXMuYWRkTmV3QmlsbGluZ0FkZHJlc3NTZWxlY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5hZGROZXdTaGlwcGluZ0FkZHJlc3MgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmFkZE5ld1NoaXBwaW5nQWRkcmVzc1NlbGVjdG9yKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTmV3QmlsbGluZ0FkZHJlc3MgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmFkZE5ld0JpbGxpbmdBZGRyZXNzU2VsZWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zYXZlTmV3QWRkcmVzc1RvZ2dsZXIgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2F2ZUFkZHJlc3NUb2dnbGVyU2VsZWN0b3IpO1xuICAgICAgICB0aGlzLnNhbWVBc1NoaXBwaW5nVG9nZ2xlciA9IDxIVE1MSW5wdXRFbGVtZW50PihcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5iaWxsaW5nU2FtZUFzU2hpcHBpbmdBZGRyZXNzVG9nZ2xlclNlbGVjdG9yKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuY3VzdG9tZXJBZGRyZXNzZXNFeGlzdHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3VzdG9tZXJBZGRyZXNzZXNFeGlzdHMoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5jdXN0b21lclNoaXBwaW5nQWRkcmVzc2VzKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTYXZlTmV3QWRkcmVzcygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICAgICAgdGhpcy5pbml0U2F2ZU5ld0FkZHJlc3NTdGF0ZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmFkZE5ld1NoaXBwaW5nQWRkcmVzcyAmJiB0aGlzLmFkZE5ld0JpbGxpbmdBZGRyZXNzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZE5ld1NoaXBwaW5nQWRkcmVzcy5hZGRFdmVudExpc3RlbmVyKEVWRU5UX0FERF9ORVdfQUREUkVTUywgKCkgPT4gdGhpcy5zaGlwcGluZ1RvZ2dsZXJPbkNoYW5nZSgpKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTmV3QmlsbGluZ0FkZHJlc3MuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVF9BRERfTkVXX0FERFJFU1MsICgpID0+IHRoaXMuYmlsbGluZ1RvZ2dsZXJPbkNoYW5nZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VzdG9tZXJTaGlwcGluZ0FkZHJlc3Nlcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnNoaXBwaW5nVG9nZ2xlck9uQ2hhbmdlKCkpO1xuICAgICAgICB0aGlzLmN1c3RvbWVyQmlsbGluZ0FkZHJlc3Nlcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLmJpbGxpbmdUb2dnbGVyT25DaGFuZ2UoKSk7XG4gICAgICAgIHRoaXMuc2FtZUFzU2hpcHBpbmdUb2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMudG9nZ2xlU2F2ZU5ld0FkZHJlc3MoKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNoaXBwaW5nVG9nZ2xlck9uQ2hhbmdlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5ld1NoaXBwaW5nQWRkcmVzc0NoZWNrZWQgPSB0aGlzLmFkZHJlc3NUb2dnbGVyQ2hhbmdlKHRoaXMuY3VzdG9tZXJTaGlwcGluZ0FkZHJlc3Nlcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlU2F2ZU5ld0FkZHJlc3MoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYmlsbGluZ1RvZ2dsZXJPbkNoYW5nZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5uZXdCaWxsaW5nQWRkcmVzc0NoZWNrZWQgPSB0aGlzLmFkZHJlc3NUb2dnbGVyQ2hhbmdlKHRoaXMuY3VzdG9tZXJCaWxsaW5nQWRkcmVzc2VzKTtcbiAgICAgICAgdGhpcy50b2dnbGVTYXZlTmV3QWRkcmVzcygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0U2F2ZU5ld0FkZHJlc3NTdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5uZXdTaGlwcGluZ0FkZHJlc3NDaGVja2VkID0gdGhpcy5pc1NhdmVOZXdBZGRyZXNzT3B0aW9uU2VsZWN0ZWQodGhpcy5jdXN0b21lclNoaXBwaW5nQWRkcmVzc2VzKTtcbiAgICAgICAgdGhpcy5uZXdCaWxsaW5nQWRkcmVzc0NoZWNrZWQgPSB0aGlzLmlzU2F2ZU5ld0FkZHJlc3NPcHRpb25TZWxlY3RlZCh0aGlzLmN1c3RvbWVyQmlsbGluZ0FkZHJlc3Nlcyk7XG4gICAgICAgIHRoaXMudG9nZ2xlU2F2ZU5ld0FkZHJlc3MoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkcmVzc1RvZ2dsZXJDaGFuZ2UodG9nZ2xlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NhdmVOZXdBZGRyZXNzT3B0aW9uU2VsZWN0ZWQodG9nZ2xlcik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGlzU2F2ZU5ld0FkZHJlc3NPcHRpb25TZWxlY3RlZCh0b2dnbGVyOiBIVE1MRm9ybUVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICF0b2dnbGVyLnZhbHVlO1xuICAgIH1cblxuICAgIHRvZ2dsZVNhdmVOZXdBZGRyZXNzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uZXdTaGlwcGluZ0FkZHJlc3NDaGVja2VkIHx8ICh0aGlzLm5ld0JpbGxpbmdBZGRyZXNzQ2hlY2tlZCAmJiAhdGhpcy5zYW1lQXNTaGlwcGluZ0NoZWNrZWQpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dTYXZlTmV3QWRkcmVzcygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oaWRlU2F2ZU5ld0FkZHJlc3MoKTtcbiAgICB9XG5cbiAgICBoaWRlU2F2ZU5ld0FkZHJlc3MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCh0aGlzLmhpZGVDbGFzcyk7XG4gICAgICAgIHRoaXMuc2F2ZU5ld0FkZHJlc3NUb2dnbGVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzaG93U2F2ZU5ld0FkZHJlc3MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmhpZGVDbGFzcyk7XG4gICAgICAgIHRoaXMuc2F2ZU5ld0FkZHJlc3NUb2dnbGVyLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHNhbWVBc1NoaXBwaW5nQ2hlY2tlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FtZUFzU2hpcHBpbmdUb2dnbGVyLmNoZWNrZWQ7XG4gICAgfVxuXG4gICAgZ2V0IHNoaXBwaW5nQWRkcmVzc1RvZ2dsZXJTZWxlY3RvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NoaXBwaW5nLWFkZHJlc3MtdG9nZ2xlci1zZWxlY3RvcicpO1xuICAgIH1cblxuICAgIGdldCBiaWxsaW5nQWRkcmVzc1RvZ2dsZXJTZWxlY3RvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2JpbGxpbmctYWRkcmVzcy10b2dnbGVyLXNlbGVjdG9yJyk7XG4gICAgfVxuXG4gICAgZ2V0IGFkZE5ld1NoaXBwaW5nQWRkcmVzc1NlbGVjdG9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnYWRkLW5ldy1zaGlwcGluZy1hZGRyZXNzLXNlbGVjdG9yJyk7XG4gICAgfVxuXG4gICAgZ2V0IGFkZE5ld0JpbGxpbmdBZGRyZXNzU2VsZWN0b3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdhZGQtbmV3LWJpbGxpbmctYWRkcmVzcy1zZWxlY3RvcicpO1xuICAgIH1cblxuICAgIGdldCBiaWxsaW5nU2FtZUFzU2hpcHBpbmdBZGRyZXNzVG9nZ2xlclNlbGVjdG9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnYmlsbGluZy1zYW1lLWFzLXNoaXBwaW5nLXRvZ2dsZXItc2VsZWN0b3InKTtcbiAgICB9XG5cbiAgICBnZXQgc2F2ZUFkZHJlc3NUb2dnbGVyU2VsZWN0b3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdzYXZlLWFkZHJlc3MtdG9nZ2xlci1zZWxlY3RvcicpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=