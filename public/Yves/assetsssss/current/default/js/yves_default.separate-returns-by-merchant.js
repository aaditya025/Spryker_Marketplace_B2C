(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["separate-returns-by-merchant"],{

/***/ "./src/Pyz/Yves/MerchantSalesReturnWidget/Theme/default/components/molecules/separate-returns-by-merchant/separate-returns-by-merchant.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/Pyz/Yves/MerchantSalesReturnWidget/Theme/default/components/molecules/separate-returns-by-merchant/separate-returns-by-merchant.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SeparateReturnsByMerchant; });
/* harmony import */ var MerchantSalesReturnWidget_components_molecules_separate_returns_by_merchant_separate_returns_by_merchant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! MerchantSalesReturnWidget/components/molecules/separate-returns-by-merchant/separate-returns-by-merchant */ "./vendor/spryker-shop/merchant-sales-return-widget/src/SprykerShop/Yves/MerchantSalesReturnWidget/Theme/default/components/molecules/separate-returns-by-merchant/separate-returns-by-merchant.ts");

class SeparateReturnsByMerchant extends MerchantSalesReturnWidget_components_molecules_separate_returns_by_merchant_separate_returns_by_merchant__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.selectAllCheckboxes = void 0;
    this.checkedSelectAllItems = [];
    this.returnReasonDropdowns = void 0;
  }

  init() {
    this.selectAllCheckboxes = Array.from(document.getElementsByClassName(this.selectAllCheckboxesClassName));

    if (this.returnReasonDropdownClassName) {
      this.returnReasonDropdowns = Array.from(document.getElementsByClassName(this.returnReasonDropdownClassName));
    }

    super.init();
  }

  mapEvents() {
    this.mapSelectAllCheckboxesChangeEvent();
    super.mapEvents();
  }

  mapSelectAllCheckboxesChangeEvent() {
    this.selectAllCheckboxes.map(checkbox => {
      checkbox.addEventListener('change', event => {
        var target = event.target;
        target.checked ? this.onAddSelectAllCheckedItems(target) : this.onRemoveSelectAllCheckedItems();
      });
    });
  }

  onAddSelectAllCheckedItems(item) {
    this.checkedSelectAllItems.push(item);
    this.disableSelectAllItem(item);
  }

  onRemoveSelectAllCheckedItems() {
    this.checkedSelectAllItems = this.checkedSelectAllItems.filter(item => item.checked);

    if (this.checkedSelectAllItems.length) {
      return;
    }

    this.enableSelectAllItems();
  }

  disableItem(target) {
    this.disableItems(target, this.checkboxes, this.checkboxComponentClassname, this.checkboxDisabledComponentClassname);
    this.disableSelectAllItem(target);
  }

  disableSelectAllItem(target) {
    this.disableItems(target, this.selectAllCheckboxes, this.selectAllCheckboxesComponentClassName, this.selectAllCheckboxesComponentDisabledClassName);
  }

  enableAllItems() {
    this.enableItems(this.checkboxes, this.checkboxComponentClassname, this.checkboxDisabledComponentClassname);
    this.enableSelectAllItems();
  }

  enableSelectAllItems() {
    this.enableItems(this.selectAllCheckboxes, this.selectAllCheckboxesComponentClassName, this.selectAllCheckboxesComponentDisabledClassName);
  }

  disableItems(target, checkboxes, parentClassName, className) {
    var currentMerchantReference = target.getAttribute(this.merchantReference);
    checkboxes.forEach(checkbox => {
      if (checkbox.getAttribute(this.merchantReference) === currentMerchantReference) {
        return;
      }

      checkbox.disabled = true;
      checkbox.closest("." + parentClassName).classList.add(className);
    });
    this.returnReasonDropdowns.forEach(dropdown => {
      if (dropdown.getAttribute(this.merchantReference) === currentMerchantReference) {
        return;
      }

      dropdown.disabled = true;
    });
  }

  enableItems(checkboxes, parentClassName, className) {
    checkboxes.forEach(checkbox => {
      if (!checkbox.hasAttribute(this.isReturnable)) {
        return;
      }

      checkbox.disabled = false;
      checkbox.closest("." + parentClassName).classList.remove(className);
    });
    this.returnReasonDropdowns.forEach(dropdown => {
      if (!dropdown.hasAttribute(this.isReturnable)) {
        return;
      }

      dropdown.disabled = false;
    });
  }

  get checkboxDisabledComponentClass() {
    return this.getAttribute('checkbox-component-disabled-classname');
  }

  get selectAllCheckboxesClassName() {
    return this.getAttribute('select-all-checkboxes-classname');
  }

  get selectAllCheckboxesComponentClassName() {
    return this.getAttribute('select-all-checkboxes-component-classname');
  }

  get selectAllCheckboxesComponentDisabledClassName() {
    return this.getAttribute('select-all-checkboxes-component-disabled-classname');
  }

  get returnReasonDropdownClassName() {
    return this.getAttribute('return-reason-dropdown-classname');
  }

}

/***/ }),

/***/ "./vendor/spryker-shop/merchant-sales-return-widget/src/SprykerShop/Yves/MerchantSalesReturnWidget/Theme/default/components/molecules/separate-returns-by-merchant/separate-returns-by-merchant.ts":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/merchant-sales-return-widget/src/SprykerShop/Yves/MerchantSalesReturnWidget/Theme/default/components/molecules/separate-returns-by-merchant/separate-returns-by-merchant.ts ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SeparateReturnsByMerchant; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class SeparateReturnsByMerchant extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.checkboxes = void 0;
    this.merchantReferenceName = void 0;
    this.checkedItems = void 0;
    this.checkboxComponentClassname = void 0;
    this.checkboxDisabledComponentClassname = void 0;
  }

  readyCallback() {}

  init() {
    this.checkedItems = [];
    this.merchantReferenceName = this.merchantReference;
    this.checkboxes = Array.from(document.getElementsByClassName(this.checkboxClassname));
    this.checkboxComponentClassname = this.checkboxComponentClass;
    this.checkboxDisabledComponentClassname = this.checkboxDisabledComponentClass;
    this.mapEvents();
  }

  mapEvents() {
    this.checkboxToggleAction();
  }

  checkboxToggleAction() {
    this.checkboxes.map(checkbox => {
      checkbox.addEventListener('change', event => {
        var target = event.target;
        target.checked ? this.onAddCheckedItem(target) : this.onRemoveCheckedItems();
      });
    });
  }

  onAddCheckedItem(item) {
    this.checkedItems.push(item);
    this.disableItem(item);
  }

  onRemoveCheckedItems() {
    this.checkedItems = this.checkedItems.filter(item => {
      return item.checked;
    });

    if (this.checkedItems.length) {
      return;
    }

    this.enableAllItems();
  }

  getCheckedItems(target) {
    this.checkedItems = this.checkboxes.filter(checkbox => {
      return checkbox.checked;
    });
  }

  disableItem(target) {
    var currentMerchantReference = target.getAttribute(this.merchantReference);
    var checkboxesToDisable = this.checkboxes.filter(checkbox => {
      return checkbox.getAttribute(this.merchantReference) !== currentMerchantReference;
    });
    checkboxesToDisable.map(checkbox => {
      checkbox.disabled = true;
      checkbox.closest("." + this.checkboxComponentClassname).classList.add("." + this.checkboxDisabledComponentClassname);
    });
  }

  enableAllItems() {
    this.checkboxes.map(checkbox => {
      if (!checkbox.hasAttribute(this.isReturnable)) {
        return;
      }

      checkbox.disabled = false;
      checkbox.closest("." + this.checkboxComponentClassname).classList.remove("." + this.checkboxDisabledComponentClassname);
    });
  }

  get merchantReference() {
    return this.getAttribute('merchant-reference-attribute-name');
  }

  get checkboxClassname() {
    return this.getAttribute('checkbox-classname');
  }

  get productItemClassname() {
    return this.getAttribute('product-item-classname');
  }

  get checkboxComponentClass() {
    return this.getAttribute('checkbox-component-classname');
  }

  get checkboxDisabledComponentClass() {
    return this.getAttribute('checkbox-disabled-component-classname');
  }

  get isReturnable() {
    return this.getAttribute('is-returnable-attribute-name');
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHl6L1l2ZXMvTWVyY2hhbnRTYWxlc1JldHVybldpZGdldC9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3NlcGFyYXRlLXJldHVybnMtYnktbWVyY2hhbnQvc2VwYXJhdGUtcmV0dXJucy1ieS1tZXJjaGFudC50cyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL21lcmNoYW50LXNhbGVzLXJldHVybi13aWRnZXQvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvTWVyY2hhbnRTYWxlc1JldHVybldpZGdldC9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3NlcGFyYXRlLXJldHVybnMtYnktbWVyY2hhbnQvc2VwYXJhdGUtcmV0dXJucy1ieS1tZXJjaGFudC50cyJdLCJuYW1lcyI6WyJTZXBhcmF0ZVJldHVybnNCeU1lcmNoYW50IiwiU2VwYXJhdGVSZXR1cm5zQnlNZXJjaGFudENvcmUiLCJzZWxlY3RBbGxDaGVja2JveGVzIiwiY2hlY2tlZFNlbGVjdEFsbEl0ZW1zIiwicmV0dXJuUmVhc29uRHJvcGRvd25zIiwiaW5pdCIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNlbGVjdEFsbENoZWNrYm94ZXNDbGFzc05hbWUiLCJyZXR1cm5SZWFzb25Ecm9wZG93bkNsYXNzTmFtZSIsIm1hcEV2ZW50cyIsIm1hcFNlbGVjdEFsbENoZWNrYm94ZXNDaGFuZ2VFdmVudCIsIm1hcCIsImNoZWNrYm94IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsIm9uQWRkU2VsZWN0QWxsQ2hlY2tlZEl0ZW1zIiwib25SZW1vdmVTZWxlY3RBbGxDaGVja2VkSXRlbXMiLCJpdGVtIiwicHVzaCIsImRpc2FibGVTZWxlY3RBbGxJdGVtIiwiZmlsdGVyIiwibGVuZ3RoIiwiZW5hYmxlU2VsZWN0QWxsSXRlbXMiLCJkaXNhYmxlSXRlbSIsImRpc2FibGVJdGVtcyIsImNoZWNrYm94ZXMiLCJjaGVja2JveENvbXBvbmVudENsYXNzbmFtZSIsImNoZWNrYm94RGlzYWJsZWRDb21wb25lbnRDbGFzc25hbWUiLCJzZWxlY3RBbGxDaGVja2JveGVzQ29tcG9uZW50Q2xhc3NOYW1lIiwic2VsZWN0QWxsQ2hlY2tib3hlc0NvbXBvbmVudERpc2FibGVkQ2xhc3NOYW1lIiwiZW5hYmxlQWxsSXRlbXMiLCJlbmFibGVJdGVtcyIsInBhcmVudENsYXNzTmFtZSIsImNsYXNzTmFtZSIsImN1cnJlbnRNZXJjaGFudFJlZmVyZW5jZSIsImdldEF0dHJpYnV0ZSIsIm1lcmNoYW50UmVmZXJlbmNlIiwiZm9yRWFjaCIsImRpc2FibGVkIiwiY2xvc2VzdCIsImNsYXNzTGlzdCIsImFkZCIsImRyb3Bkb3duIiwiaGFzQXR0cmlidXRlIiwiaXNSZXR1cm5hYmxlIiwicmVtb3ZlIiwiY2hlY2tib3hEaXNhYmxlZENvbXBvbmVudENsYXNzIiwiQ29tcG9uZW50IiwibWVyY2hhbnRSZWZlcmVuY2VOYW1lIiwiY2hlY2tlZEl0ZW1zIiwicmVhZHlDYWxsYmFjayIsImNoZWNrYm94Q2xhc3NuYW1lIiwiY2hlY2tib3hDb21wb25lbnRDbGFzcyIsImNoZWNrYm94VG9nZ2xlQWN0aW9uIiwib25BZGRDaGVja2VkSXRlbSIsIm9uUmVtb3ZlQ2hlY2tlZEl0ZW1zIiwiZ2V0Q2hlY2tlZEl0ZW1zIiwiY2hlY2tib3hlc1RvRGlzYWJsZSIsInByb2R1Y3RJdGVtQ2xhc3NuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxNQUFNQSx5QkFBTixTQUF3Q0MsZ0pBQXhDLENBQXNFO0FBQUE7QUFBQTtBQUFBLFNBQ3ZFQyxtQkFEdUU7QUFBQSxTQUV2RUMscUJBRnVFLEdBRTNCLEVBRjJCO0FBQUEsU0FHdkVDLHFCQUh1RTtBQUFBOztBQUt2RUMsTUFBSSxHQUFTO0FBQ25CLFNBQUtILG1CQUFMLEdBQ0lJLEtBQUssQ0FBQ0Ms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QUMzQztBQUNIOztBQUVEbEMsY0FBUSxDQUFDNEIsUUFBVCxHQUFvQixLQUFwQjtBQUNBNUIsY0FBUSxDQUNINkIsT0FETCxPQUNpQixLQUFLYiwwQkFEdEIsRUFFS2MsU0FGTCxDQUVlSyxNQUZmLE9BRTBCLEtBQUtsQixrQ0FGL0I7QUFHSCxLQVREO0FBVUg7O0FBRThCLE1BQWpCUyxpQkFBaUIsR0FBVztBQUN0QyxXQUFPLEtBQUtELFlBQUwsQ0FBa0IsbUNBQWxCLENBQVA7QUFDSDs7QUFFOEIsTUFBakJnQixpQkFBaUIsR0FBVztBQUN0QyxXQUFPLEtBQUtoQixZQUFMLENBQWtCLG9CQUFsQixDQUFQO0FBQ0g7O0FBRWlDLE1BQXBCdUIsb0JBQW9CLEdBQVc7QUFDekMsV0FBTyxLQUFLdkIsWUFBTCxDQUFrQix3QkFBbEIsQ0FBUDtBQUNIOztBQUVtQyxNQUF0QmlCLHNCQUFzQixHQUFXO0FBQzNDLFdBQU8sS0FBS2pCLFlBQUwsQ0FBa0IsOEJBQWxCLENBQVA7QUFDSDs7QUFFMkMsTUFBOUJXLDhCQUE4QixHQUFXO0FBQ25ELFdBQU8sS0FBS1gsWUFBTCxDQUFrQix1Q0FBbEIsQ0FBUDtBQUNIOztBQUV5QixNQUFaUyxZQUFZLEdBQVc7QUFDakMsV0FBTyxLQUFLVCxZQUFMLENBQWtCLDhCQUFsQixDQUFQO0FBQ0g7O0FBekc0RCxDIiwiZmlsZSI6Ii4vanMveXZlc19kZWZhdWx0LnNlcGFyYXRlLXJldHVybnMtYnktbWVyY2hhbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VwYXJhdGVSZXR1cm5zQnlNZXJjaGFudENvcmUgZnJvbSAnTWVyY2hhbnRTYWxlc1JldHVybldpZGdldC9jb21wb25lbnRzL21vbGVjdWxlcy9zZXBhcmF0ZS1yZXR1cm5zLWJ5LW1lcmNoYW50L3NlcGFyYXRlLXJldHVybnMtYnktbWVyY2hhbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXBhcmF0ZVJldHVybnNCeU1lcmNoYW50IGV4dGVuZHMgU2VwYXJhdGVSZXR1cm5zQnlNZXJjaGFudENvcmUge1xuICAgIHByb3RlY3RlZCBzZWxlY3RBbGxDaGVja2JveGVzOiBIVE1MSW5wdXRFbGVtZW50W107XG4gICAgcHJvdGVjdGVkIGNoZWNrZWRTZWxlY3RBbGxJdGVtczogSFRNTElucHV0RWxlbWVudFtdID0gW107XG4gICAgcHJvdGVjdGVkIHJldHVyblJlYXNvbkRyb3Bkb3duczogSFRNTFNlbGVjdEVsZW1lbnRbXTtcblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrYm94ZXMgPSA8SFRNTElucHV0RWxlbWVudFtdPihcbiAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLnNlbGVjdEFsbENoZWNrYm94ZXNDbGFzc05hbWUpKVxuICAgICAgICApO1xuICAgICAgICBpZiAodGhpcy5yZXR1cm5SZWFzb25Ecm9wZG93bkNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5yZXR1cm5SZWFzb25Ecm9wZG93bnMgPSA8SFRNTFNlbGVjdEVsZW1lbnRbXT4oXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMucmV0dXJuUmVhc29uRHJvcGRvd25DbGFzc05hbWUpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmluaXQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1hcFNlbGVjdEFsbENoZWNrYm94ZXNDaGFuZ2VFdmVudCgpO1xuXG4gICAgICAgIHN1cGVyLm1hcEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBTZWxlY3RBbGxDaGVja2JveGVzQ2hhbmdlRXZlbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0QWxsQ2hlY2tib3hlcy5tYXAoKGNoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSA8SFRNTElucHV0RWxlbWVudD5ldmVudC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmNoZWNrZWQgPyB0aGlzLm9uQWRkU2VsZWN0QWxsQ2hlY2tlZEl0ZW1zKHRhcmdldCkgOiB0aGlzLm9uUmVtb3ZlU2VsZWN0QWxsQ2hlY2tlZEl0ZW1zKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQWRkU2VsZWN0QWxsQ2hlY2tlZEl0ZW1zKGl0ZW06IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja2VkU2VsZWN0QWxsSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlU2VsZWN0QWxsSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25SZW1vdmVTZWxlY3RBbGxDaGVja2VkSXRlbXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hlY2tlZFNlbGVjdEFsbEl0ZW1zID0gdGhpcy5jaGVja2VkU2VsZWN0QWxsSXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNoZWNrZWQpO1xuXG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWRTZWxlY3RBbGxJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW5hYmxlU2VsZWN0QWxsSXRlbXMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZGlzYWJsZUl0ZW0odGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZUl0ZW1zKFxuICAgICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgICAgdGhpcy5jaGVja2JveGVzLFxuICAgICAgICAgICAgdGhpcy5jaGVja2JveENvbXBvbmVudENsYXNzbmFtZSxcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3hEaXNhYmxlZENvbXBvbmVudENsYXNzbmFtZSxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlU2VsZWN0QWxsSXRlbSh0YXJnZXQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBkaXNhYmxlU2VsZWN0QWxsSXRlbSh0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlSXRlbXMoXG4gICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrYm94ZXMsXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrYm94ZXNDb21wb25lbnRDbGFzc05hbWUsXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFsbENoZWNrYm94ZXNDb21wb25lbnREaXNhYmxlZENsYXNzTmFtZSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZW5hYmxlQWxsSXRlbXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZW5hYmxlSXRlbXModGhpcy5jaGVja2JveGVzLCB0aGlzLmNoZWNrYm94Q29tcG9uZW50Q2xhc3NuYW1lLCB0aGlzLmNoZWNrYm94RGlzYWJsZWRDb21wb25lbnRDbGFzc25hbWUpO1xuICAgICAgICB0aGlzLmVuYWJsZVNlbGVjdEFsbEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGVuYWJsZVNlbGVjdEFsbEl0ZW1zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVuYWJsZUl0ZW1zKFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxDaGVja2JveGVzLFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxDaGVja2JveGVzQ29tcG9uZW50Q2xhc3NOYW1lLFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGxDaGVja2JveGVzQ29tcG9uZW50RGlzYWJsZWRDbGFzc05hbWUsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGRpc2FibGVJdGVtcyhcbiAgICAgICAgdGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50LFxuICAgICAgICBjaGVja2JveGVzOiBIVE1MSW5wdXRFbGVtZW50W10sXG4gICAgICAgIHBhcmVudENsYXNzTmFtZTogc3RyaW5nLFxuICAgICAgICBjbGFzc05hbWU6IHN0cmluZyxcbiAgICApOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY3VycmVudE1lcmNoYW50UmVmZXJlbmNlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSh0aGlzLm1lcmNoYW50UmVmZXJlbmNlKTtcblxuICAgICAgICBjaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3guZ2V0QXR0cmlidXRlKHRoaXMubWVyY2hhbnRSZWZlcmVuY2UpID09PSBjdXJyZW50TWVyY2hhbnRSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsb3Nlc3QoYC4ke3BhcmVudENsYXNzTmFtZX1gKS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmV0dXJuUmVhc29uRHJvcGRvd25zLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgICAgICBpZiAoZHJvcGRvd24uZ2V0QXR0cmlidXRlKHRoaXMubWVyY2hhbnRSZWZlcmVuY2UpID09PSBjdXJyZW50TWVyY2hhbnRSZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRyb3Bkb3duLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGVuYWJsZUl0ZW1zKGNoZWNrYm94ZXM6IEhUTUxJbnB1dEVsZW1lbnRbXSwgcGFyZW50Q2xhc3NOYW1lOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICAgICAgICAgIGlmICghY2hlY2tib3guaGFzQXR0cmlidXRlKHRoaXMuaXNSZXR1cm5hYmxlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsb3Nlc3QoYC4ke3BhcmVudENsYXNzTmFtZX1gKS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmV0dXJuUmVhc29uRHJvcGRvd25zLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRyb3Bkb3duLmhhc0F0dHJpYnV0ZSh0aGlzLmlzUmV0dXJuYWJsZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRyb3Bkb3duLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgY2hlY2tib3hEaXNhYmxlZENvbXBvbmVudENsYXNzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnY2hlY2tib3gtY29tcG9uZW50LWRpc2FibGVkLWNsYXNzbmFtZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgc2VsZWN0QWxsQ2hlY2tib3hlc0NsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NlbGVjdC1hbGwtY2hlY2tib3hlcy1jbGFzc25hbWUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHNlbGVjdEFsbENoZWNrYm94ZXNDb21wb25lbnRDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdzZWxlY3QtYWxsLWNoZWNrYm94ZXMtY29tcG9uZW50LWNsYXNzbmFtZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgc2VsZWN0QWxsQ2hlY2tib3hlc0NvbXBvbmVudERpc2FibGVkQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc2VsZWN0LWFsbC1jaGVja2JveGVzLWNvbXBvbmVudC1kaXNhYmxlZC1jbGFzc25hbWUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJldHVyblJlYXNvbkRyb3Bkb3duQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgncmV0dXJuLXJlYXNvbi1kcm9wZG93bi1jbGFzc25hbWUnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ1Nob3BVaS9tb2RlbHMvY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VwYXJhdGVSZXR1cm5zQnlNZXJjaGFudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIGNoZWNrYm94ZXM6IEhUTUxJbnB1dEVsZW1lbnRbXTtcbiAgICBwcm90ZWN0ZWQgbWVyY2hhbnRSZWZlcmVuY2VOYW1lOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGNoZWNrZWRJdGVtczogSFRNTElucHV0RWxlbWVudFtdO1xuICAgIHByb3RlY3RlZCBjaGVja2JveENvbXBvbmVudENsYXNzbmFtZTogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBjaGVja2JveERpc2FibGVkQ29tcG9uZW50Q2xhc3NuYW1lOiBzdHJpbmc7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5tZXJjaGFudFJlZmVyZW5jZU5hbWUgPSB0aGlzLm1lcmNoYW50UmVmZXJlbmNlO1xuICAgICAgICB0aGlzLmNoZWNrYm94ZXMgPSA8SFRNTElucHV0RWxlbWVudFtdPkFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmNoZWNrYm94Q2xhc3NuYW1lKSk7XG4gICAgICAgIHRoaXMuY2hlY2tib3hDb21wb25lbnRDbGFzc25hbWUgPSB0aGlzLmNoZWNrYm94Q29tcG9uZW50Q2xhc3M7XG4gICAgICAgIHRoaXMuY2hlY2tib3hEaXNhYmxlZENvbXBvbmVudENsYXNzbmFtZSA9IHRoaXMuY2hlY2tib3hEaXNhYmxlZENvbXBvbmVudENsYXNzO1xuXG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja2JveFRvZ2dsZUFjdGlvbigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjaGVja2JveFRvZ2dsZUFjdGlvbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja2JveGVzLm1hcCgoY2hlY2tib3gpID0+IHtcbiAgICAgICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IDxIVE1MSW5wdXRFbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2hlY2tlZCA/IHRoaXMub25BZGRDaGVja2VkSXRlbSh0YXJnZXQpIDogdGhpcy5vblJlbW92ZUNoZWNrZWRJdGVtcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkFkZENoZWNrZWRJdGVtKGl0ZW06IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja2VkSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25SZW1vdmVDaGVja2VkSXRlbXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hlY2tlZEl0ZW1zID0gdGhpcy5jaGVja2VkSXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5jaGVja2VkO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5jaGVja2VkSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVuYWJsZUFsbEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldENoZWNrZWRJdGVtcyh0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja2VkSXRlbXMgPSB0aGlzLmNoZWNrYm94ZXMuZmlsdGVyKChjaGVja2JveCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBkaXNhYmxlSXRlbSh0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY3VycmVudE1lcmNoYW50UmVmZXJlbmNlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSh0aGlzLm1lcmNoYW50UmVmZXJlbmNlKTtcblxuICAgICAgICBjb25zdCBjaGVja2JveGVzVG9EaXNhYmxlID0gdGhpcy5jaGVja2JveGVzLmZpbHRlcigoY2hlY2tib3gpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjaGVja2JveC5nZXRBdHRyaWJ1dGUodGhpcy5tZXJjaGFudFJlZmVyZW5jZSkgIT09IGN1cnJlbnRNZXJjaGFudFJlZmVyZW5jZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2hlY2tib3hlc1RvRGlzYWJsZS5tYXAoKGNoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBjaGVja2JveFxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KGAuJHt0aGlzLmNoZWNrYm94Q29tcG9uZW50Q2xhc3NuYW1lfWApXG4gICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5hZGQoYC4ke3RoaXMuY2hlY2tib3hEaXNhYmxlZENvbXBvbmVudENsYXNzbmFtZX1gKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGVuYWJsZUFsbEl0ZW1zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoZWNrYm94ZXMubWFwKChjaGVja2JveCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGVja2JveC5oYXNBdHRyaWJ1dGUodGhpcy5pc1JldHVybmFibGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY2hlY2tib3hcbiAgICAgICAgICAgICAgICAuY2xvc2VzdChgLiR7dGhpcy5jaGVja2JveENvbXBvbmVudENsYXNzbmFtZX1gKVxuICAgICAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKGAuJHt0aGlzLmNoZWNrYm94RGlzYWJsZWRDb21wb25lbnRDbGFzc25hbWV9YCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgbWVyY2hhbnRSZWZlcmVuY2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdtZXJjaGFudC1yZWZlcmVuY2UtYXR0cmlidXRlLW5hbWUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGNoZWNrYm94Q2xhc3NuYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnY2hlY2tib3gtY2xhc3NuYW1lJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBwcm9kdWN0SXRlbUNsYXNzbmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3Byb2R1Y3QtaXRlbS1jbGFzc25hbWUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGNoZWNrYm94Q29tcG9uZW50Q2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjaGVja2JveC1jb21wb25lbnQtY2xhc3NuYW1lJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBjaGVja2JveERpc2FibGVkQ29tcG9uZW50Q2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdjaGVja2JveC1kaXNhYmxlZC1jb21wb25lbnQtY2xhc3NuYW1lJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBpc1JldHVybmFibGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdpcy1yZXR1cm5hYmxlLWF0dHJpYnV0ZS1uYW1lJyk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==