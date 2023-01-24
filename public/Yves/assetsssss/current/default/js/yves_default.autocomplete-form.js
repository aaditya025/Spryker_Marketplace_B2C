(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["autocomplete-form"],{

/***/ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/autocomplete-form/autocomplete-form.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/autocomplete-form/autocomplete-form.ts ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutocompleteForm; });
/* harmony import */ var ShopUi_components_molecules_autocomplete_form_autocomplete_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/components/molecules/autocomplete-form/autocomplete-form */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/autocomplete-form/autocomplete-form.ts");

class AutocompleteForm extends ShopUi_components_molecules_autocomplete_form_autocomplete_form__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.parentWrap = void 0;
  }

  readyCallback() {}

  init() {
    if (this.parentWrapClassName) {
      this.parentWrap = document.getElementsByClassName("" + this.parentWrapClassName)[0];
    }

    this.textInput = this.getElementsByClassName(this.jsName + "__input")[0];

    if (this.textInput) {
      this.ajaxProvider = this.getElementsByClassName(this.jsName + "__provider")[0];
      this.valueInput = this.getElementsByClassName(this.jsName + "__input-hidden")[0];
      this.suggestionsContainer = this.getElementsByClassName(this.jsName + "__suggestions")[0];
      this.cleanButton = this.getElementsByClassName(this.jsName + "__clean-button")[0];
      this.mapEvents();
    }

    if (!this.textInput) {
      /* tslint:disable: deprecation */
      super.readyCallback();
      /* tslint:enable: deprecation */
    }
  }

  onBlur() {
    super.onBlur();

    if (this.parentWrapClassName) {
      this.hideOverlay();
    }
  }

  onFocus() {
    if (this.parentWrapClassName) {
      this.showOverlay();
    }

    super.onFocus();
  }

  showOverlay() {
    this.parentWrap.classList.add('active');
  }

  hideOverlay() {
    this.parentWrap.classList.remove('active');
  }

  get parentWrapClassName() {
    return this.getAttribute('parent-wrap-class-name');
  }

}

/***/ }),

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/autocomplete-form/autocomplete-form.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/autocomplete-form/autocomplete-form.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: Events, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutocompleteForm; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/debounce */ "./node_modules/lodash-es/debounce.js");


/* tslint:disable: max-file-line-count */


var Events;
/**
 * @event fetching An event which is triggered when an ajax request is sent to the server.
 * @event fetched An event which is triggered when an ajax request is closed.
 * @event change An event which is triggered when the search field is changed.
 * @event set An event which is triggered when the element of an autocomplete suggestion is selected.
 * @event unset An event which is triggered when the element of an autocomplete suggestion is removed.
 */

(function (Events) {
  Events["FETCHING"] = "fetching";
  Events["FETCHED"] = "fetched";
  Events["CHANGE"] = "change";
  Events["SET"] = "set";
  Events["UNSET"] = "unset";
})(Events || (Events = {}));

class AutocompleteForm extends _models_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super(...arguments);
    this.ajaxProvider = void 0;
    this.textInput = void 0;
    this.valueInput = void 0;
    this.suggestionsContainer = void 0;
    this.suggestionItems = void 0;
    this.cleanButton = void 0;
    this.lastSelectedItem = void 0;
    this.injectorsExtraQueryValueList = void 0;
    this.extraQueryValues = new Map();
  }

  readyCallback() {
    this.ajaxProvider = this.getElementsByClassName(this.jsName + "__provider")[0];
    this.textInput = this.getElementsByClassName(this.jsName + "__text-input")[0];
    this.valueInput = this.getElementsByClassName(this.jsName + "__value-input")[0];
    this.suggestionsContainer = this.getElementsByClassName(this.jsName + "__suggestions")[0];
    this.cleanButton = this.getElementsByClassName(this.jsName + "__clean-button")[0];

    if (this.injectorsExtraQueryValueClassName) {
      this.injectorsExtraQueryValueList = Array.from(document.getElementsByClassName(this.injectorsExtraQueryValueClassName));
    }

    if (this.autoInitEnabled) {
      this.autoLoadInit();
    }

    this.mapEvents();
  }

  mapEvents() {
    this.textInput.addEventListener('input', Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_2__["default"])(() => this.onInput(), this.debounceDelay));
    this.textInput.addEventListener('blur', Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_2__["default"])(() => this.onBlur(), this.debounceDelay));
    this.textInput.addEventListener('focus', () => this.onFocus());
    this.textInput.addEventListener('keydown', event => this.onKeyDown(event));

    if (this.cleanButton) {
      this.cleanButton.addEventListener('click', () => this.onCleanButtonClick());
    }
  }

  autoLoadInit() {
    this.textInput.focus();
    this.loadSuggestions();
  }

  onCleanButtonClick() {
    this.clean();
    this.dispatchCustomEvent(Events.UNSET);
  }

  onBlur() {
    this.hideSuggestions();
  }

  onFocus() {
    if (this.inputText.length < this.minLetters) {
      return;
    }

    this.showSuggestions();
  }

  onInput() {
    this.dispatchCustomEvent(Events.CHANGE);

    if (this.inputText.length >= this.minLetters) {
      this.loadSuggestions();
      return;
    }

    this.hideSuggestions();

    if (!!this.inputValue) {
      this.inputValue = '';
      this.dispatchCustomEvent(Events.UNSET);
    }
  }

  showSuggestions() {
    this.suggestionsContainer.classList.remove('is-hidden');
  }

  hideSuggestions() {
    this.suggestionsContainer.classList.add('is-hidden');
  }

  setQueryParams() {
    this.extraQueryValues.clear();
    this.ajaxProvider.queryParams.clear();
    this.ajaxProvider.queryParams.set(this.queryString, this.inputText);

    if (!this.injectorsExtraQueryValueList || !this.injectorsExtraQueryValueList.length) {
      return;
    }

    this.injectorsExtraQueryValueList.forEach(item => {
      if (!item.name || !item.value) {
        return;
      }

      this.ajaxProvider.queryParams.set(item.name, item.value);
      this.extraQueryValues.set(item.name, item.value);
    });
  }
  /**
   * Sends a request to the server and triggers the custom fetching and fetched events.
   */


  loadSuggestions() {
    var _this = this;

    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(function* () {
      _this.dispatchCustomEvent(Events.FETCHING);

      _this.showSuggestions();

      _this.setQueryParams();

      yield _this.ajaxProvider.fetch();
      /* tslint:disable: deprecation */

      _this.suggestionItems = Array.from(_this.suggestionsContainer.getElementsByClassName(_this.suggestedItemClassName) || _this.suggestionsContainer.querySelectorAll(_this.suggestedItemSelector));
      /* tslint:enable: deprecation */

      _this.lastSelectedItem = _this.suggestionItems[0];

      _this.mapSuggestionItemsEvents();

      _this.dispatchCustomEvent(Events.FETCHED);
    })();
  }

  mapSuggestionItemsEvents() {
    this.suggestionItems.forEach(item => {
      item.addEventListener('click', () => this.onItemClick(item));
      item.addEventListener('mouseover', () => this.onItemSelected(item));
    });
  }

  onItemClick(item) {
    this.inputText = item.textContent.trim();
    this.inputValue = item.getAttribute(this.valueAttributeName);
    this.dispatchCustomEvent(Events.SET, {
      text: this.inputText,
      value: this.inputValue,
      extraValues: this.extraQueryValues
    });
  }

  onItemSelected(item) {
    this.changeSelectedItem(item);
  }

  changeSelectedItem(item) {
    this.lastSelectedItem.classList.remove(this.selectedInputClass);
    item.classList.add(this.selectedInputClass);
    this.lastSelectedItem = item;
  }

  onKeyDown(event) {
    if (!this.suggestionItems && this.inputText.length < this.minLetters) {
      return;
    }

    switch (event.key) {
      case 'ArrowUp':
        this.onKeyDownArrowUp();
        break;

      case 'ArrowDown':
        this.onKeyDownArrowDown();
        break;

      case 'Enter':
        this.onKeyDownEnter(event);
        break;
    }
  }

  onKeyDownArrowUp() {
    var lastSelectedItemIndex = this.suggestionItems.indexOf(this.lastSelectedItem);
    var elementIndex = lastSelectedItemIndex - 1;
    var lastSuggestionItemIndex = this.suggestionItems.length - 1;
    var item = this.suggestionItems[elementIndex < 0 ? lastSuggestionItemIndex : elementIndex];
    this.changeSelectedItem(item);
  }

  onKeyDownArrowDown() {
    var lastSelectedItemIndex = this.suggestionItems.indexOf(this.lastSelectedItem);
    var elementIndex = lastSelectedItemIndex + 1;
    var lastSuggestionItemIndex = this.suggestionItems.length - 1;
    var item = this.suggestionItems[elementIndex > lastSuggestionItemIndex ? 0 : elementIndex];
    this.changeSelectedItem(item);
  }

  onKeyDownEnter(event) {
    event.preventDefault();
    this.lastSelectedItem.click();
  }
  /**
   * Clears the input value and the typed text.
   */


  clean() {
    this.inputText = '';
    this.inputValue = '';
  }
  /**
   * Gets the css query selector of the selected suggestion items.
   */


  get selectedInputClass() {
    /* tslint:disable: deprecation */
    return this.suggestedItemClassName + "--selected" || false;
    /* tslint:enable: deprecation */
  }
  /**
   * Gets the typed text from the form field.
   */


  get inputText() {
    return this.textInput.value.trim();
  }
  /**
   * Sets an input text.
   * @param value A typed text in the input field.
   */


  set inputText(value) {
    this.textInput.value = value;
  }
  /**
   * Gets the value attribute from the input form field.
   */


  get inputValue() {
    return this.valueInput.value;
  }
  /**
   * Sets the input value.
   */


  set inputValue(value) {
    this.valueInput.value = value;
  }
  /**
   * Gets the css query selector for the ajaxProvider configuration.
   */


  get queryString() {
    return this.getAttribute('query-string');
  }
  /**
   * Gets the value attribute name for the input element configuration.
   */


  get valueAttributeName() {
    return this.getAttribute('value-attribute-name');
  }
  /**
   * Gets the css query selector of the suggestion items.
   *
   * @deprecated Use suggestedItemClassName() instead.
   */


  get suggestedItemSelector() {
    return this.getAttribute('suggested-item-selector');
  }

  get suggestedItemClassName() {
    return this.getAttribute('suggested-item-class-name');
  }

  get injectorsExtraQueryValueClassName() {
    return this.getAttribute('injectors-extra-query-value-class-name');
  }
  /**
   * Gets a time delay for the blur and input events.
   */


  get debounceDelay() {
    return Number(this.getAttribute('debounce-delay'));
  }
  /**
   * Gets the number of letters which, upon entering in form field, is sufficient to show, hide or load the
   * suggestions.
   */


  get minLetters() {
    return Number(this.getAttribute('min-letters'));
  }
  /**
   * Gets if the auto load of suggestions is enabled.
   */


  get autoInitEnabled() {
    return this.hasAttribute('auto-init');
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHl6L1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvYXV0b2NvbXBsZXRlLWZvcm0vYXV0b2NvbXBsZXRlLWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9zaG9wLXVpL3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Nob3BVaS9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL2F1dG9jb21wbGV0ZS1mb3JtL2F1dG9jb21wbGV0ZS1mb3JtLnRzIl0sIm5hbWVzIjpbIkF1dG9jb21wbGV0ZUZvcm0iLCJBdXRvY29tcGxldGVGb3JtQ29yZSIsInBhcmVudFdyYXAiLCJyZWFkeUNhbGxiYWNrIiwiaW5pdCIsInBhcmVudFdyYXBDbGFzc05hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0ZXh0SW5wdXQiLCJqc05hbWUiLCJhamF4UHJvdmlkZXIiLCJ2YWx1ZUlucHV0Iiwic3VnZ2VzdGlvbnNDb250YWluZXIiLCJjbGVhbkJ1dHRvbiIsIm1hcEV2ZW50cyIsIm9uQmx1ciIsImhpZGVPdmVybGF5Iiwib25Gb2N1cyIsInNob3dPdmVybGF5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZ2V0QXR0cmlidXRlIiwiRXZlbnRzIiwiQ29tcG9uZW50Iiwic3VnZ2VzdGlvbkl0ZW1zIiwibGFzdFNlbGVjdGVkSXRlbSIsImluamVjdG9yc0V4dHJhUXVlcnlWYWx1ZUxpc3QiLCJleHRyYVF1ZXJ5VmFsdWVzIiwiTWFwIiwiaW5qZWN0b3JzRXh0cmFRdWVyeVZhbHVlQ2xhc3NOYW1lIiwiQXJyYXkiLCJmcm9tIiwiYXV0b0luaXRFbmFibGVkIiwiYXV0b0xvYWRJbml0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlYm91bmNlIiwib25JbnB1dCIsImRlYm91bmNlRGVsYXkiLCJldmVudCIsIm9uS2V5RG93biIsIm9uQ2xlYW5CdXR0b25DbGljayIsImZvY3VzIiwibG9hZFN1Z2dlc3Rpb25zIiwiY2xlYW4iLCJkaXNwYXRjaEN1c3RvbUV2ZW50IiwiVU5TRVQiLCJoaWRlU3VnZ2VzdGlvbnMiLCJpbnB1dFRleHQiLCJsZW5ndGgiLCJtaW5MZXR0ZXJzIiwic2hvd1N1Z2dlc3Rpb25zIiwiQ0hBTkdFIiwiaW5wdXRWYWx1ZSIsInNldFF1ZXJ5UGFyYW1zIiwiY2xlYXIiLCJxdWVyeVBhcmFtcyIsInNldCIsInF1ZXJ5U3RyaW5nIiwiZm9yRWFjaCIsIml0ZW0iLCJuYW1lIiwidmFsdWUiLCJGRVRDSElORyIsImZldGNoIiwic3VnZ2VzdGVkSXRlbUNsYXNzTmFtZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdWdnZXN0ZWRJdGVtU2VsZWN0b3IiLCJtYXBTdWdnZXN0aW9uSXRlbXNFdmVudHMiLCJGRVRDSEVEIiwib25JdGVtQ2xpY2siLCJvbkl0ZW1TZWxlY3RlZCIsInRleHRDb250ZW50IiwidHJpbSIsInZhbHVlQXR0cmlidXRlTmFtZSIsIlNFVCIsInRleHQiLCJleHRyYVZhbHVlcyIsImNoYW5nZVNlbGVjdGVkSXRlbSIsInNlbGVjdGVkSW5wdXRDbGFzcyIsImtleSIsIm9uS2V5RG93bkFycm93VXAiLCJvbktleURvd25BcnJvd0Rvd24iLCJvbktleURvd25FbnRlciIsImxhc3RTZWxlY3RlZEl0ZW1JbmRleCIsImluZGV4T2YiLCJlbGVtZW50SW5kZXgiLCJsYXN0U3VnZ2VzdGlvbkl0ZW1JbmRleCIsInByZXZlbnREZWZhdWx0IiwiY2xpY2siLCJOdW1iZXIiLCJoYXNBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdlLE1BQU1BLGdCQUFOLFNBQStCQyx1R0FBL0IsQ0FBb0Q7QUFBQTtBQUFBO0FBQUEsU0FDckRDLFVBRHFEO0FBQUE7O0FBR3JEQyxlQUFhLEdBQVMsQ0FBRTs7QUFFeEJDLE1BQUksR0FBUztBQUNuQixRQUFJLEtBQUtDLG1CQUFULEVBQThCO0FBQzFCLFdBQUtI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QixDQUFELENBQWI7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7QUFDa0IsTUFBVjRCLFVBQVUsR0FBVztBQUNyQixXQUFPd0MsTUFBTSxDQUFDLEtBQUtwRSxZQUFMLENBQWtCLGFBQWxCLENBQUQsQ0FBYjtBQUNIO0FBRUQ7QUFDSjtBQUNBOzs7QUFDdUIsTUFBZlcsZUFBZSxHQUFZO0FBQzNCLFdBQU8sS0FBSzBELFlBQUwsQ0FBa0IsV0FBbEIsQ0FBUDtBQUNIOztBQWhVbUQsQyIsImZpbGUiOiIuL2pzL3l2ZXNfZGVmYXVsdC5hdXRvY29tcGxldGUtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdXRvY29tcGxldGVGb3JtQ29yZSBmcm9tICdTaG9wVWkvY29tcG9uZW50cy9tb2xlY3VsZXMvYXV0b2NvbXBsZXRlLWZvcm0vYXV0b2NvbXBsZXRlLWZvcm0nO1xuaW1wb3J0IEFqYXhQcm92aWRlciBmcm9tICdTaG9wVWkvY29tcG9uZW50cy9tb2xlY3VsZXMvYWpheC1wcm92aWRlci9hamF4LXByb3ZpZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b2NvbXBsZXRlRm9ybSBleHRlbmRzIEF1dG9jb21wbGV0ZUZvcm1Db3JlIHtcbiAgICBwcm90ZWN0ZWQgcGFyZW50V3JhcDogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50V3JhcENsYXNzTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRXcmFwID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5wYXJlbnRXcmFwQ2xhc3NOYW1lfWApWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50ZXh0SW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19pbnB1dGApWzBdO1xuXG4gICAgICAgIGlmICh0aGlzLnRleHRJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5hamF4UHJvdmlkZXIgPSA8QWpheFByb3ZpZGVyPnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3Byb3ZpZGVyYClbMF07XG4gICAgICAgICAgICB0aGlzLnZhbHVlSW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19pbnB1dC1oaWRkZW5gKVswXTtcbiAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnNDb250YWluZXIgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fc3VnZ2VzdGlvbnNgKVswXTtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5CdXR0b24gPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fY2xlYW4tYnV0dG9uYClbMF07XG4gICAgICAgICAgICB0aGlzLm1hcEV2ZW50cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnRleHRJbnB1dCkge1xuICAgICAgICAgICAgLyogdHNsaW50OmRpc2FibGU6IGRlcHJlY2F0aW9uICovXG4gICAgICAgICAgICBzdXBlci5yZWFkeUNhbGxiYWNrKCk7XG4gICAgICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlOiBkZXByZWNhdGlvbiAqL1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQmx1cigpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIub25CbHVyKCk7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudFdyYXBDbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkZvY3VzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnRXcmFwQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dPdmVybGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIub25Gb2N1cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzaG93T3ZlcmxheSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYXJlbnRXcmFwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBoaWRlT3ZlcmxheSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wYXJlbnRXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgcGFyZW50V3JhcENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3BhcmVudC13cmFwLWNsYXNzLW5hbWUnKTtcbiAgICB9XG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTogbWF4LWZpbGUtbGluZS1jb3VudCAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY29tcG9uZW50JztcbmltcG9ydCBBamF4UHJvdmlkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tb2xlY3VsZXMvYWpheC1wcm92aWRlci9hamF4LXByb3ZpZGVyJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gtZXMvZGVib3VuY2UnO1xuXG5leHBvcnQgZW51bSBFdmVudHMge1xuICAgIEZFVENISU5HID0gJ2ZldGNoaW5nJyxcbiAgICBGRVRDSEVEID0gJ2ZldGNoZWQnLFxuICAgIENIQU5HRSA9ICdjaGFuZ2UnLFxuICAgIFNFVCA9ICdzZXQnLFxuICAgIFVOU0VUID0gJ3Vuc2V0Jyxcbn1cblxuLyoqXG4gKiBAZXZlbnQgZmV0Y2hpbmcgQW4gZXZlbnQgd2hpY2ggaXMgdHJpZ2dlcmVkIHdoZW4gYW4gYWpheCByZXF1ZXN0IGlzIHNlbnQgdG8gdGhlIHNlcnZlci5cbiAqIEBldmVudCBmZXRjaGVkIEFuIGV2ZW50IHdoaWNoIGlzIHRyaWdnZXJlZCB3aGVuIGFuIGFqYXggcmVxdWVzdCBpcyBjbG9zZWQuXG4gKiBAZXZlbnQgY2hhbmdlIEFuIGV2ZW50IHdoaWNoIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzZWFyY2ggZmllbGQgaXMgY2hhbmdlZC5cbiAqIEBldmVudCBzZXQgQW4gZXZlbnQgd2hpY2ggaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGVsZW1lbnQgb2YgYW4gYXV0b2NvbXBsZXRlIHN1Z2dlc3Rpb24gaXMgc2VsZWN0ZWQuXG4gKiBAZXZlbnQgdW5zZXQgQW4gZXZlbnQgd2hpY2ggaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGVsZW1lbnQgb2YgYW4gYXV0b2NvbXBsZXRlIHN1Z2dlc3Rpb24gaXMgcmVtb3ZlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b2NvbXBsZXRlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgdGhlIEFqYXggb3BlcmF0aW9ucy5cbiAgICAgKi9cbiAgICBhamF4UHJvdmlkZXI6IEFqYXhQcm92aWRlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZXh0IGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgdGV4dElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgdmFsdWVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250YWlucyBvZiB0aGUgc3VnZ2VzdGlvbnMuXG4gICAgICovXG4gICAgc3VnZ2VzdGlvbnNDb250YWluZXI6IEhUTUxFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiB0aGUgc3VnZ2VzdGlvbnMgaXRlbXMuXG4gICAgICovXG4gICAgc3VnZ2VzdGlvbkl0ZW1zOiBIVE1MRWxlbWVudFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRyaWdnZXIgb2YgdGhlIGZvcm0gY2xlYXJpbmcuXG4gICAgICovXG4gICAgY2xlYW5CdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhc3Qgc2VsZWN0ZWQgc2FnZ2VzdGlvbiBpdGVtLlxuICAgICAqL1xuICAgIGxhc3RTZWxlY3RlZEl0ZW06IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBpbmplY3RvcnNFeHRyYVF1ZXJ5VmFsdWVMaXN0OiBIVE1MU2VsZWN0RWxlbWVudFtdIHwgSFRNTElucHV0RWxlbWVudFtdO1xuICAgIHByb3RlY3RlZCBleHRyYVF1ZXJ5VmFsdWVzID0gbmV3IE1hcCgpO1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWpheFByb3ZpZGVyID0gPEFqYXhQcm92aWRlcj50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19wcm92aWRlcmApWzBdO1xuICAgICAgICB0aGlzLnRleHRJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3RleHQtaW5wdXRgKVswXTtcbiAgICAgICAgdGhpcy52YWx1ZUlucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fdmFsdWUtaW5wdXRgKVswXTtcbiAgICAgICAgdGhpcy5zdWdnZXN0aW9uc0NvbnRhaW5lciA9IDxIVE1MRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19zdWdnZXN0aW9uc2ApWzBdO1xuICAgICAgICB0aGlzLmNsZWFuQnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2NsZWFuLWJ1dHRvbmApWzBdO1xuXG4gICAgICAgIGlmICh0aGlzLmluamVjdG9yc0V4dHJhUXVlcnlWYWx1ZUNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5pbmplY3RvcnNFeHRyYVF1ZXJ5VmFsdWVMaXN0ID0gPEhUTUxTZWxlY3RFbGVtZW50W10gfCBIVE1MSW5wdXRFbGVtZW50W10+KFxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmluamVjdG9yc0V4dHJhUXVlcnlWYWx1ZUNsYXNzTmFtZSkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b0luaXRFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9Mb2FkSW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRleHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgICAgIGRlYm91bmNlKCgpID0+IHRoaXMub25JbnB1dCgpLCB0aGlzLmRlYm91bmNlRGVsYXkpLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnRleHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2JsdXInLFxuICAgICAgICAgICAgZGVib3VuY2UoKCkgPT4gdGhpcy5vbkJsdXIoKSwgdGhpcy5kZWJvdW5jZURlbGF5KSxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy50ZXh0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB0aGlzLm9uRm9jdXMoKSk7XG4gICAgICAgIHRoaXMudGV4dElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHRoaXMub25LZXlEb3duKGV2ZW50KSk7XG4gICAgICAgIGlmICh0aGlzLmNsZWFuQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5vbkNsZWFuQnV0dG9uQ2xpY2soKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXV0b0xvYWRJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRleHRJbnB1dC5mb2N1cygpO1xuICAgICAgICB0aGlzLmxvYWRTdWdnZXN0aW9ucygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkNsZWFuQnV0dG9uQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYW4oKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEV2ZW50cy5VTlNFVCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQmx1cigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oaWRlU3VnZ2VzdGlvbnMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Gb2N1cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRUZXh0Lmxlbmd0aCA8IHRoaXMubWluTGV0dGVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd1N1Z2dlc3Rpb25zKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uSW5wdXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFdmVudHMuQ0hBTkdFKTtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRUZXh0Lmxlbmd0aCA+PSB0aGlzLm1pbkxldHRlcnMpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFN1Z2dlc3Rpb25zKCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhpZGVTdWdnZXN0aW9ucygpO1xuICAgICAgICBpZiAoISF0aGlzLmlucHV0VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEV2ZW50cy5VTlNFVCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2hvd1N1Z2dlc3Rpb25zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBoaWRlU3VnZ2VzdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldFF1ZXJ5UGFyYW1zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmV4dHJhUXVlcnlWYWx1ZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5hamF4UHJvdmlkZXIucXVlcnlQYXJhbXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5hamF4UHJvdmlkZXIucXVlcnlQYXJhbXMuc2V0KHRoaXMucXVlcnlTdHJpbmcsIHRoaXMuaW5wdXRUZXh0KTtcblxuICAgICAgICBpZiAoIXRoaXMuaW5qZWN0b3JzRXh0cmFRdWVyeVZhbHVlTGlzdCB8fCAhdGhpcy5pbmplY3RvcnNFeHRyYVF1ZXJ5VmFsdWVMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbmplY3RvcnNFeHRyYVF1ZXJ5VmFsdWVMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmICghaXRlbS5uYW1lIHx8ICFpdGVtLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFqYXhQcm92aWRlci5xdWVyeVBhcmFtcy5zZXQoaXRlbS5uYW1lLCBpdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFRdWVyeVZhbHVlcy5zZXQoaXRlbS5uYW1lLCBpdGVtLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgYW5kIHRyaWdnZXJzIHRoZSBjdXN0b20gZmV0Y2hpbmcgYW5kIGZldGNoZWQgZXZlbnRzLlxuICAgICAqL1xuICAgIGFzeW5jIGxvYWRTdWdnZXN0aW9ucygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEV2ZW50cy5GRVRDSElORyk7XG4gICAgICAgIHRoaXMuc2hvd1N1Z2dlc3Rpb25zKCk7XG4gICAgICAgIHRoaXMuc2V0UXVlcnlQYXJhbXMoKTtcblxuICAgICAgICBhd2FpdCB0aGlzLmFqYXhQcm92aWRlci5mZXRjaCgpO1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTogZGVwcmVjYXRpb24gKi9cbiAgICAgICAgdGhpcy5zdWdnZXN0aW9uSXRlbXMgPSA8SFRNTEVsZW1lbnRbXT4oXG4gICAgICAgICAgICBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnNDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLnN1Z2dlc3RlZEl0ZW1DbGFzc05hbWUpIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCh0aGlzLnN1Z2dlc3RlZEl0ZW1TZWxlY3RvciksXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIC8qIHRzbGludDplbmFibGU6IGRlcHJlY2F0aW9uICovXG4gICAgICAgIHRoaXMubGFzdFNlbGVjdGVkSXRlbSA9IHRoaXMuc3VnZ2VzdGlvbkl0ZW1zWzBdO1xuICAgICAgICB0aGlzLm1hcFN1Z2dlc3Rpb25JdGVtc0V2ZW50cygpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRXZlbnRzLkZFVENIRUQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBTdWdnZXN0aW9uSXRlbXNFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbkl0ZW1zLmZvckVhY2goKGl0ZW06IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5vbkl0ZW1DbGljayhpdGVtKSk7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHRoaXMub25JdGVtU2VsZWN0ZWQoaXRlbSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25JdGVtQ2xpY2soaXRlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dFRleHQgPSBpdGVtLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUodGhpcy52YWx1ZUF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRXZlbnRzLlNFVCwge1xuICAgICAgICAgICAgdGV4dDogdGhpcy5pbnB1dFRleHQsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5pbnB1dFZhbHVlLFxuICAgICAgICAgICAgZXh0cmFWYWx1ZXM6IHRoaXMuZXh0cmFRdWVyeVZhbHVlcyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uSXRlbVNlbGVjdGVkKGl0ZW06IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hhbmdlU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjaGFuZ2VTZWxlY3RlZEl0ZW0oaXRlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRJdGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZWxlY3RlZElucHV0Q2xhc3MpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQodGhpcy5zZWxlY3RlZElucHV0Q2xhc3MpO1xuICAgICAgICB0aGlzLmxhc3RTZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1Z2dlc3Rpb25JdGVtcyAmJiB0aGlzLmlucHV0VGV4dC5sZW5ndGggPCB0aGlzLm1pbkxldHRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleURvd25BcnJvd1VwKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgICAgIHRoaXMub25LZXlEb3duQXJyb3dEb3duKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleURvd25FbnRlcihldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25LZXlEb3duQXJyb3dVcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGFzdFNlbGVjdGVkSXRlbUluZGV4ID0gdGhpcy5zdWdnZXN0aW9uSXRlbXMuaW5kZXhPZih0aGlzLmxhc3RTZWxlY3RlZEl0ZW0pO1xuICAgICAgICBjb25zdCBlbGVtZW50SW5kZXggPSBsYXN0U2VsZWN0ZWRJdGVtSW5kZXggLSAxO1xuICAgICAgICBjb25zdCBsYXN0U3VnZ2VzdGlvbkl0ZW1JbmRleCA9IHRoaXMuc3VnZ2VzdGlvbkl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnN1Z2dlc3Rpb25JdGVtc1tlbGVtZW50SW5kZXggPCAwID8gbGFzdFN1Z2dlc3Rpb25JdGVtSW5kZXggOiBlbGVtZW50SW5kZXhdO1xuICAgICAgICB0aGlzLmNoYW5nZVNlbGVjdGVkSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25LZXlEb3duQXJyb3dEb3duKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBsYXN0U2VsZWN0ZWRJdGVtSW5kZXggPSB0aGlzLnN1Z2dlc3Rpb25JdGVtcy5pbmRleE9mKHRoaXMubGFzdFNlbGVjdGVkSXRlbSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRJbmRleCA9IGxhc3RTZWxlY3RlZEl0ZW1JbmRleCArIDE7XG4gICAgICAgIGNvbnN0IGxhc3RTdWdnZXN0aW9uSXRlbUluZGV4ID0gdGhpcy5zdWdnZXN0aW9uSXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuc3VnZ2VzdGlvbkl0ZW1zW2VsZW1lbnRJbmRleCA+IGxhc3RTdWdnZXN0aW9uSXRlbUluZGV4ID8gMCA6IGVsZW1lbnRJbmRleF07XG4gICAgICAgIHRoaXMuY2hhbmdlU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbktleURvd25FbnRlcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmxhc3RTZWxlY3RlZEl0ZW0uY2xpY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGlucHV0IHZhbHVlIGFuZCB0aGUgdHlwZWQgdGV4dC5cbiAgICAgKi9cbiAgICBjbGVhbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dFRleHQgPSAnJztcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3NzIHF1ZXJ5IHNlbGVjdG9yIG9mIHRoZSBzZWxlY3RlZCBzdWdnZXN0aW9uIGl0ZW1zLlxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZElucHV0Q2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGU6IGRlcHJlY2F0aW9uICovXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnN1Z2dlc3RlZEl0ZW1DbGFzc05hbWV9LS1zZWxlY3RlZGAgfHwgYCR7dGhpcy5zdWdnZXN0ZWRJdGVtU2VsZWN0b3J9LS1zZWxlY3RlZGAuc3Vic3RyKDEpO1xuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlOiBkZXByZWNhdGlvbiAqL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHR5cGVkIHRleHQgZnJvbSB0aGUgZm9ybSBmaWVsZC5cbiAgICAgKi9cbiAgICBnZXQgaW5wdXRUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHRJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhbiBpbnB1dCB0ZXh0LlxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIHR5cGVkIHRleHQgaW4gdGhlIGlucHV0IGZpZWxkLlxuICAgICAqL1xuICAgIHNldCBpbnB1dFRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRleHRJbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHZhbHVlIGF0dHJpYnV0ZSBmcm9tIHRoZSBpbnB1dCBmb3JtIGZpZWxkLlxuICAgICAqL1xuICAgIGdldCBpbnB1dFZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlSW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICovXG4gICAgc2V0IGlucHV0VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZhbHVlSW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjc3MgcXVlcnkgc2VsZWN0b3IgZm9yIHRoZSBhamF4UHJvdmlkZXIgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgcXVlcnlTdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdxdWVyeS1zdHJpbmcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB2YWx1ZSBhdHRyaWJ1dGUgbmFtZSBmb3IgdGhlIGlucHV0IGVsZW1lbnQgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgdmFsdWVBdHRyaWJ1dGVOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUtYXR0cmlidXRlLW5hbWUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjc3MgcXVlcnkgc2VsZWN0b3Igb2YgdGhlIHN1Z2dlc3Rpb24gaXRlbXMuXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCBVc2Ugc3VnZ2VzdGVkSXRlbUNsYXNzTmFtZSgpIGluc3RlYWQuXG4gICAgICovXG4gICAgZ2V0IHN1Z2dlc3RlZEl0ZW1TZWxlY3RvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3N1Z2dlc3RlZC1pdGVtLXNlbGVjdG9yJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBzdWdnZXN0ZWRJdGVtQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc3VnZ2VzdGVkLWl0ZW0tY2xhc3MtbmFtZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgaW5qZWN0b3JzRXh0cmFRdWVyeVZhbHVlQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnaW5qZWN0b3JzLWV4dHJhLXF1ZXJ5LXZhbHVlLWNsYXNzLW5hbWUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgdGltZSBkZWxheSBmb3IgdGhlIGJsdXIgYW5kIGlucHV0IGV2ZW50cy5cbiAgICAgKi9cbiAgICBnZXQgZGVib3VuY2VEZWxheSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuZ2V0QXR0cmlidXRlKCdkZWJvdW5jZS1kZWxheScpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgbGV0dGVycyB3aGljaCwgdXBvbiBlbnRlcmluZyBpbiBmb3JtIGZpZWxkLCBpcyBzdWZmaWNpZW50IHRvIHNob3csIGhpZGUgb3IgbG9hZCB0aGVcbiAgICAgKiBzdWdnZXN0aW9ucy5cbiAgICAgKi9cbiAgICBnZXQgbWluTGV0dGVycygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuZ2V0QXR0cmlidXRlKCdtaW4tbGV0dGVycycpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGlmIHRoZSBhdXRvIGxvYWQgb2Ygc3VnZ2VzdGlvbnMgaXMgZW5hYmxlZC5cbiAgICAgKi9cbiAgICBnZXQgYXV0b0luaXRFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2F1dG8taW5pdCcpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=