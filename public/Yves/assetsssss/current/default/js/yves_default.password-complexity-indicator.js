(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["password-complexity-indicator"],{

/***/ "./node_modules/password-validator/src/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/password-validator/src/constants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  error: {
    length: 'Length should be a valid positive number',
    password: 'Password should be a valid string'
  },
  regex: {
    digits: '(\\d.*)',
    letters: '([a-zA-Z].*)',
    symbols: '([`~\\!@#\\$%\\^\\&\\*\\(\\)\\-_\\=\\+\\[\\\{\\}\\]\\\\\|;:\\\'",<.>\\/\\?€£¥₹§±].*)',
    spaces: '([\\s].*)'
  }
};


/***/ }),

/***/ "./node_modules/password-validator/src/index.js":
/*!******************************************************!*\
  !*** ./node_modules/password-validator/src/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var lib = __webpack_require__(/*! ./lib */ "./node_modules/password-validator/src/lib.js");
var error = __webpack_require__(/*! ./constants */ "./node_modules/password-validator/src/constants.js").error;

/**
 * Validates that a number is a valid length (positive number)
 *
 * @private
 * @param {number} num - Number to validate
 */
function _validateLength(num) {
  const len = Number(num);
  if (isNaN(len) || !Number.isInteger(len) || len < 1) {
    throw new Error(error.length);
  }
}

/**
 * Tests a validation and return the result
 *
 * @private
 * @param {string} property - Property to validate
 * @return {boolean} Boolean value indicting the validity
 *           of the password against the property
 */
function _isPasswordValidFor(property) {
  return lib[property.method].apply(this, property.arguments);
}

/**
 * Registers the properties of a password-validation schema object
 *
 * @private
 * @param {string} func - Property name
 * @param {array} args - arguments for the func property
 */
function _register(func, args) {
  // Add property to the schema
  this.properties.push({ method: func, arguments: args });
  return this;
}

class PasswordValidator {
  /**
   * Creates a password-validator schema
   *
   * @constructor
   */
  constructor() {
    this.properties = [];
  }

  /**
   * Method to validate the password against schema
   *
   * @param {string} pwd - password to validate
   * @param {object} [options] - optional options to configure validation
   * @param {boolean} [options.list] - asks for a list of validation
   *           failures instead of just true/false
   * @return {boolean|array} Boolean value indicting the validity
   *           of the password as per schema, if 'options.list'
   *           is not set. Otherwise, it returns an array of
   *           property names which failed validations
   */
  validate(pwd, options) {
    this.list = Boolean(options && options.list);
    this.password = String(pwd);

    this.positive = true;

    if (this.list) {
      return this.properties.reduce((errorList, property) => {
        // Applies all validations defined in lib one by one
        if (!_isPasswordValidFor.call(this, property)) {
          // If the validation for a property fails,
          // add it to the error list
          return errorList.concat(property.method);
        }
        return errorList;
      }, []);
    }
    return this.properties.every(_isPasswordValidFor.bind(this));
  }

  /**
   * Rule to mandate the presence of letters in the password
   *
   * @param {number} [count] - minimum number of letters required
   */
  letters(count) {
    count && _validateLength(count);
    return _register.call(this, 'letters', arguments);
  }

  /**
   * Rule to mandate the presence of digits in the password
   *
   * @param {number} [count] - minimum number of digits required
   */
  digits(count) {
    count && _validateLength(count);
    return _register.call(this, 'digits', arguments);
  }

  /**
   * Rule to mandate the presence of symbols in the password
   *
   * @param {number} [count] - minimum number of symbols required
   */
  symbols(count) {
    count && _validateLength(count);
    return _register.call(this, 'symbols', arguments);
  }

  /**
   * Rule to specify a minimum length of the password
   *
   * @param {number} num - minimum length
   */
  min(num) {
    _validateLength(num);
    return _register.call(this, 'min', arguments);
  }

  /**
   * Rule to specify a maximum length of the password
   *
   * @param {number} num - maximum length
   */
  max(num) {
    _validateLength(num);
    return _register.call(this, 'max', arguments);
  }

  /**
   * Rule to mandate the presence of lowercase letters in the password
   *
   * @param {number} [count] - minimum number of lowercase letters required
   */
  lowercase(count) {
    count && _validateLength(count);
    return _register.call(this, 'lowercase', arguments);
  }

  /**
   * Rule to mandate the presence of uppercase letters in the password
   *
   * @param {number} [count] - minimum number of uppercase letters required
   */
  uppercase(count) {
    count && _validateLength(count);
    return _register.call(this, 'uppercase', arguments);
  }

  /**
   * Rule to mandate the presence of space in the password
   * It can be used along with 'not' to not allow spaces
   * in the password
   *
   * @param {number} [count] - minimum number of spaces required
   */
  spaces(count) {
    count && _validateLength(count);
    return _register.call(this, 'spaces', arguments);
  }

  /**
   * Rule to invert the effects of 'not'
   * Apart from that, 'has' is also used
   * to make the api readable and chainable
   */
  has() {
    return _register.call(this, 'has', arguments);
  }

  /**
   * Rule to invert the next applied rules.
   * All the rules applied after 'not' will have opposite effect,
   * until 'has' rule is applied
   */
  not() {
    return _register.call(this, 'not', arguments);
  }

  /**
   * Rule to invert the effects of 'not'
   * Apart from that, 'is' is also used
   * to make the api readable and chainable
   */
  is() {
    return _register.call(this, 'is', arguments);
  }

  /**
   * Rule to whitelist words to be used as password
   *
   * @param {array} list - list of values allowed
   */
  oneOf() {
    return _register.call(this, 'oneOf', arguments);
  }
}

module.exports = PasswordValidator;


/***/ }),

/***/ "./node_modules/password-validator/src/lib.js":
/*!****************************************************!*\
  !*** ./node_modules/password-validator/src/lib.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Generic method to test regex
 *
 * @private
 * @param {string} regex - regex to test
 *                           with password
 */
var regex = __webpack_require__(/*! ./constants */ "./node_modules/password-validator/src/constants.js").regex;

function _process(regexp, repeat) {
  if (repeat && repeat > 1) {
    const parsedRepeat = parseInt(repeat, 10);
    return new RegExp(regexp + '{' + parsedRepeat + ',}').test(this.password) === this.positive;
  }
  return new RegExp(regexp).test(this.password) === this.positive;
}

module.exports = {

  /**
   * Method to invert the next validations
   *
   * @param {RegExp} [symbol] - custom Regex which should not be present
   */
  not: function not(symbol) {
    this.positive = false;
    if (symbol) {
      return _process.call(this, symbol);
    }
    return true;
  },

  /**
   * Method to invert the effects of not()
   *
   * @param {RegExp} [symbol] - custom Regex which should be present
   */
  has: function has(symbol) {
    this.positive = true;
    if (symbol) {
      return _process.call(this, symbol);
    }
    return true;
  },

  /**
   * Method to invert the effects of not() and
   * to make the api readable and chainable
   *
   */
  is: function is() {
    this.positive = true;
    return true;
  },

  /**
   * Method to specify a minimum length
   *
   * @param {number} num - minimum length
   */
  min: function min(num) {
    return this.password.length >= num;
  },

  /**
   * Method to specify a maximum length
   *
   * @param {number} num - maximum length
   */
  max: function max(num) {
    return this.password.length <= num;
  },

  /**
   * Method to validate the presence of digits
   *
   * @param {number} repeat - count of required digits
   */
  digits: function digits(repeat) {
    return _process.call(this, regex.digits, repeat);
  },

  /**
   * Method to validate the presence of letters
   *
   * @param {number} repeat - count of required letters
   */
  letters: function letters(repeat) {
    return _process.call(this, regex.letters, repeat);
  },

  /**
   * Method to validate the presence of uppercase letters
   *
   * @param {number} repeat - count of required uppercase letters
   */
  uppercase: function uppercase(repeat) {
    if (repeat && repeat > 1) {
      let characterIndex = 0;
      let upperCaseLetters = 0;

      while ((upperCaseLetters < repeat) && (characterIndex < this.password.length)) {
        const currentLetter = this.password.charAt(characterIndex);
        if (currentLetter !== currentLetter.toLowerCase()) {
          upperCaseLetters++;
        }
        characterIndex++;
      }

      return (upperCaseLetters === repeat) === this.positive;
    }
    return (this.password !== this.password.toLowerCase()) === this.positive;
  },

  /**
   * Method to validate the presence of lowercase letters
   *
   * @param {number} repeat - count of required lowercase letters
   */
  lowercase: function lowercase(repeat) {
    if (repeat && repeat > 1) {
      let characterIndex = 0;
      let lowerCaseLetters = 0;

      while ((lowerCaseLetters < repeat) && (characterIndex < this.password.length)) {
        const currentLetter = this.password.charAt(characterIndex);
        if (currentLetter !== currentLetter.toUpperCase()) {
          lowerCaseLetters++;
        }
        characterIndex++;
      }

      return (lowerCaseLetters === repeat) === this.positive;
    }
    return (this.password !== this.password.toUpperCase()) === this.positive;
  },

  /**
   * Method to validate the presence of symbols
   *
   * @param {number} repeat - count of required symbols
   */
  symbols: function symbols(repeat) {
    return _process.call(this, regex.symbols, repeat);
  },

  /**
   * Method to validate the presence of space
   *
   * @param {number} repeat - count of required spaces
   */
  spaces: function spaces(repeat) {
    return _process.call(this, regex.spaces, repeat);
  },

  /**
   * Method to provide pre-defined values for password
   *
   * @param {array} list - list of values allowed
   */
  oneOf: function oneOf(list) {
    return list.indexOf(this.password) >= 0 === this.positive;
  }
};


/***/ }),

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/password-complexity-indicator/password-complexity-indicator.ts":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/password-complexity-indicator/password-complexity-indicator.ts ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PasswordComplexityIndicator; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
/* harmony import */ var lodash_es_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash-es/debounce */ "./node_modules/lodash-es/debounce.js");
/* harmony import */ var password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! password-validator */ "./node_modules/password-validator/src/index.js");
/* harmony import */ var password_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(password_validator__WEBPACK_IMPORTED_MODULE_2__);



var ComplexityWeight;

(function (ComplexityWeight) {
  ComplexityWeight[ComplexityWeight["lowercase"] = 10] = "lowercase";
  ComplexityWeight[ComplexityWeight["digits"] = 15] = "digits";
  ComplexityWeight[ComplexityWeight["uppercase"] = 20] = "uppercase";
  ComplexityWeight[ComplexityWeight["symbols"] = 30] = "symbols";
  ComplexityWeight[ComplexityWeight["min"] = 25] = "min";
})(ComplexityWeight || (ComplexityWeight = {}));

class PasswordComplexityIndicator extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.availableProperties = ['min', 'lowercase', 'uppercase', 'digits', 'symbols'];
    this.complexityGradation = new Map([['weak', 0], ['medium', 25], ['strong', 50], ['very-strong', 75]]);
    this.currentComplexity = '';
    this.maxPasswordComplexity = 0;
    this.factor = 100;
    this.inputElement = void 0;
    this.notificationElement = void 0;
    this.indicatorListElement = void 0;
    this.schema = void 0;
  }

  readyCallback() {}

  init() {
    this.inputElement = document.getElementsByClassName(this.inputClassName)[0];
    this.indicatorListElement = this.getElementsByClassName(this.indicatorListClassName)[0];
    this.notificationElement = this.getElementsByClassName(this.additionalMessageClassName)[0];
    this.schema = new password_validator__WEBPACK_IMPORTED_MODULE_2___default.a();
    this.initValidator();
    this.mapEvents();
  }

  mapEvents() {
    this.mapInputElementKeyUpEvent();
  }

  mapInputElementKeyUpEvent() {
    this.inputElement.addEventListener('keyup', Object(lodash_es_debounce__WEBPACK_IMPORTED_MODULE_1__["default"])(() => this.onInputKeyUp(), this.debounceDelay));
  }

  initValidator() {
    this.availableProperties.forEach(property => {
      this.setValidation(property);
      this.increaseMaxPasswordComplexity(property);
    });
  }

  increaseMaxPasswordComplexity(property) {
    this.maxPasswordComplexity += ComplexityWeight[property];
  }

  setValidation(property) {
    var propertyValue = this[property];

    if (property === 'min') {
      this.setIsValidationType(property, propertyValue);
      return;
    }

    this.setHasValidationType(property, propertyValue);
  }

  setHasValidationType(property, value) {
    this.schema.has()[property](value);
  }

  setIsValidationType(property, value) {
    this.schema.is()[property](value);
  }

  onInputKeyUp() {
    var inputValue = this.inputElement.value;
    var failsList = this.schema.validate(inputValue, {
      list: true
    });
    var passwordValidatorMark = this.maxPasswordComplexity;
    failsList.forEach(property => {
      passwordValidatorMark -= ComplexityWeight[property];
    });
    this.validatePassword(passwordValidatorMark);
  }

  validatePassword(passwordValidatorMark) {
    var passwordComplexity = passwordValidatorMark / this.maxPasswordComplexity * this.factor;
    this.complexityGradation.forEach((value, key) => {
      if (passwordComplexity >= value) {
        this.updateValidation(key);
      }
    });
  }

  updateValidation(complexityModifier) {
    this.updateModifier(this.indicatorListElement, this.indicatorListClassName, complexityModifier);
    this.updateModifier(this.notificationElement, this.additionalMessageClassName, complexityModifier);
    this.currentComplexity = complexityModifier;
  }

  updateModifier(element, className, complexityModifier) {
    var classList = element.classList;
    classList.remove(className + "--" + this.currentComplexity);
    classList.add(className + "--" + complexityModifier);
  }

  get inputClassName() {
    return this.getAttribute('input-class-name');
  }

  get indicatorListClassName() {
    return this.name + "__indicator-list";
  }

  get additionalMessageClassName() {
    return this.name + "__additional-message";
  }

  get debounceDelay() {
    return Number(this.getAttribute('debounce-delay'));
  }

  get min() {
    return Number(this.getAttribute('min'));
  }

  get lowercase() {
    return Number(this.getAttribute('lowercase'));
  }

  get uppercase() {
    return Number(this.getAttribute('uppercase'));
  }

  get digits() {
    return Number(this.getAttribute('digits'));
  }

  get symbols() {
    return Number(this.getAttribute('symbols'));
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFzc3dvcmQtdmFsaWRhdG9yL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Bhc3N3b3JkLXZhbGlkYXRvci9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Bhc3N3b3JkLXZhbGlkYXRvci9zcmMvbGliLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9zcHJ5a2VyLXNob3Avc2hvcC11aS9zcmMvU3ByeWtlclNob3AvWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9wYXNzd29yZC1jb21wbGV4aXR5LWluZGljYXRvci9wYXNzd29yZC1jb21wbGV4aXR5LWluZGljYXRvci50cyJdLCJuYW1lcyI6WyJDb21wbGV4aXR5V2VpZ2h0IiwiUGFzc3dvcmRDb21wbGV4aXR5SW5kaWNhdG9yIiwiQ29tcG9uZW50IiwiYXZhaWxhYmxlUHJvcGVydGllcyIsImNvbXBsZXhpdHlHcmFkYXRpb24iLCJNYXAiLCJjdXJyZW50Q29tcGxleGl0eSIsIm1heFBhc3N3b3JkQ29tcGxleGl0eSIsImZhY3RvciIsImlucHV0RWxlbWVudCIsIm5vdGlmaWNhdGlvbkVsZW1lbnQiLCJpbmRpY2F0b3JMaXN0RWxlbWVudCIsInNjaGVtYSIsInJlYWR5Q2FsbGJhY2siLCJpbml0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5wdXRDbGFzc05hbWUiLCJpbmRpY2F0b3JMaXN0Q2xhc3NOYW1lIiwiYWRkaXRpb25hbE1lc3NhZ2VDbGFzc05hbWUiLCJQYXNzd29yZFZhbGlkYXRvciIsImluaXRWYWxpZGF0b3IiLCJtYXBFdmVudHMiLCJtYXBJbnB1dEVsZW1lbnRLZXlVcEV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlYm91bmNlIiwib25JbnB1dEtleVVwIiwiZGVib3VuY2VEZWxheSIsImZvckVhY2giLCJwcm9wZXJ0eSIsInNldFZhbGlkYXRpb24iLCJpbmNyZWFzZU1heFBhc3N3b3JkQ29tcGxleGl0eSIsInByb3BlcnR5VmFsdWUiLCJzZXRJc1ZhbGlkYXRpb25UeXBlIiwic2V0SGFzVmFsaWRhdGlvblR5cGUiLCJ2YWx1ZSIsImhhcyIsImlzIiwiaW5wdXRWYWx1ZSIsImZhaWxzTGlzdCIsInZhbGlkYXRlIiwibGlzdCIsInBhc3N3b3JkVmFsaWRhdG9yTWFyayIsInZhbGlkYXRlUGFzc3dvcmQiLCJwYXNzd29yZENvbXBsZXhpdHkiLCJrZXkiLCJ1cGRhdGVWYWxpZGF0aW9uIiwiY29tcGxleGl0eU1vZGlmaWVyIiwidXBkYXRlTW9kaWZpZXIiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiZ2V0QXR0cmlidXRlIiwibmFtZSIsIk51bWJlciIsIm1pbiIsImxvd2VyY2FzZSIsInVwcGVyY2FzZSIsImRpZ2l0cyIsInN5bWJvbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxHQUFHLFVBQVU7QUFDeEU7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQSxVQUFVLG1CQUFPLENBQUMsMkRBQU87QUFDekIsWUFBWSxtQkFBTyxDQUFDLHVFQUFhOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdDQUFnQztBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGNBQWMsY0FBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDMU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQSxZQUFZLG1CQUFPLENBQUMsdUVBQWE7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxzQkFBc0I7QUFDdkQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0lBRUtBLGdCOztXQUFBQSxnQjtBQUFBQSxrQixDQUFBQSxnQjtBQUFBQSxrQixDQUFBQSxnQjtBQUFBQSxrQixDQUFBQSxnQjtBQUFBQSxrQixDQUFBQSxnQjtBQUFBQSxrQixDQUFBQSxnQjtHQUFBQSxnQixLQUFBQSxnQjs7QUFRVSxNQUFNQywyQkFBTixTQUEwQ0MsK0RBQTFDLENBQW9EO0FBQUE7QUFBQTtBQUFBLFNBQ3JEQyxtQkFEcUQsR0FDL0IsQ0FBQyxLQUFELEVBQVEsV0FBUixFQUFxQixXQUFyQixFQUFrQyxRQUFsQyxFQUE0QyxTQUE1QyxDQUQrQjtBQUFBLFNBR3JEQyxtQkFIcUQsR0FHL0IsSUFBSUMsR0FBSixDQUFRLENBQ3BDLENBQUMsTUFBRCxFQUFTLENBQVQsQ0FEb0MsRUFFcEMsQ0FBQyxRQUFELEVBQVcsRUFBWCxDQUZvQyxFQUdwQyxDQUFDLFFBQUQsRUFBVyxFQUFYLENBSG9DLEVBSXBDLENBQUMsYUFBRCxFQUFnQixFQUFoQixDQUpvQyxDQUFSLENBSCtCO0FBQUEsU0FVckRDLGlCQVZxRCxHQVVqQyxFQVZpQztBQUFBLFNBV3JEQyxxQkFYcUQsR0FXN0IsQ0FYNkI7QUFBQSxTQVlyREMsTUFacUQsR0FZNUMsR0FaNEM7QUFBQSxTQWFyREMsWUFicUQ7QUFBQSxTQWNyREMsbUJBZHFEO0FBQUEsU0FlckRDLG9CQWZxRDtBQUFBLFNBZ0JyREMsTUFoQnFEO0FBQUE7O0FBa0JyREMsZUFBYSxHQUFTLENBQUU7O0FBRXhCQyxNQUFJLEdBQVM7QUFDbkIsU0FBS0wsWUFBTCxHQUFzQ00sUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxLQUFLQyxjQUFyQyxFQUFxRCxDQUFyRCxDQUF0QztBQUNBLFNBQUtOLG9CQUFMLEdBQXlDLEtBQUtLLHNCQUFMLENBQTRCLEtBQUtFLHNCQUFqQyxFQUF5RCxDQUF6RCxDQUF6QztBQUNBLFNBQUtSLG1CQUFMLEdBQXdDLEtBQUtNLHNCQUFMLENBQTRCLEtBQUtHLDBCQUFqQyxFQUE2RCxDQUE3RCxDQUF4QztBQUNBLFNBQUtQLE1BQUwsR0FBYyxJQUFJUSx5REFBSixFQUFkO0FBRUEsU0FBS0MsYUFBTDtBQUNBLFNBQUtDLFNBQUw7QUFDSDs7QUFFU0EsV0FBUyxHQUFTO0FBQ3hCLFNBQUtDLHlCQUFMO0FBQ0g7O0FBRVNBLDJCQUF5QixHQUFTO0FBQ3hDLFNBQUtkLFlBQUwsQ0FBa0JlLGdCQUFsQixDQUNJLE9BREosRUFFSUMsa0VBQVEsQ0FBQyxNQUFNLEtBQUtDLFlBQUwsRUFBUCxFQUE0QixLQUFLQyxhQUFqQyxDQUZaO0FBSUg7O0FBRVNOLGVBQWEsR0FBUztBQUM1QixTQUFLbEIsbUJBQUwsQ0FBeUJ5QixPQUF6QixDQUFrQ0MsUUFBRCxJQUFzQjtBQUNuRCxXQUFLQyxhQUFMLENBQW1CRCxRQUFuQjtBQUNBLFdBQUtFLDZCQUFMLENBQW1DRixRQUFuQztBQUNILEtBSEQ7QUFJSDs7QUFFU0UsK0JBQTZCLENBQUNGLFFBQUQsRUFBeUI7QUFDNUQsU0FBS3RCLHFCQUFMLElBQThCUCxnQkFBZ0IsQ0FBQzZCLFFBQUQsQ0FBOUM7QUFDSDs7QUFFU0MsZUFBYSxDQUFDRCxRQUFELEVBQXlCO0FBQzVDLFFBQU1HLGFBQWEsR0FBRyxLQUFLSCxRQUFMLENBQXRCOztBQUVBLFFBQUlBLFFBQVEsS0FBSyxLQUFqQixFQUF3QjtBQUNwQixXQUFLSSxtQkFBTCxDQUF5QkosUUFBekIsRUFBbUNHLGFBQW5DO0FBRUE7QUFDSDs7QUFFRCxTQUFLRSxvQkFBTCxDQUEwQkwsUUFBMUIsRUFBb0NHLGFBQXBDO0FBQ0g7O0FBRVNFLHNCQUFvQixDQUFDTCxRQUFELEVBQW1CTSxLQUFuQixFQUF3QztBQUNsRSxTQUFLdkIsTUFBTCxDQUFZd0IsR0FBWixHQUFrQlAsUUFBbEIsRUFBNEJNLEtBQTVCO0FBQ0g7O0FBRVNGLHFCQUFtQixDQUFDSixRQUFELEVBQW1CTSxLQUFuQixFQUF3QztBQUNqRSxTQUFLdkIsTUFBTCxDQUFZeUIsRUFBWixHQUFpQlIsUUFBakIsRUFBMkJNLEtBQTNCO0FBQ0g7O0FBRVNULGNBQVksR0FBUztBQUMzQixRQUFNWSxVQUFVLEdBQUcsS0FBSzdCLFlBQUwsQ0FBa0IwQixLQUFyQztBQUNBLFFBQU1JLFNBQVMsR0FBRyxLQUFLM0IsTUFBTCxDQUFZNEIsUUFBWixDQUFxQkYsVUFBckIsRUFBaUM7QUFBRUcsVUFBSSxFQUFFO0FBQVIsS0FBakMsQ0FBbEI7QUFDQSxRQUFJQyxxQkFBcUIsR0FBRyxLQUFLbkMscUJBQWpDO0FBRUFnQyxhQUFTLENBQUNYLE9BQVYsQ0FBbUJDLFFBQUQsSUFBc0I7QUFDcENhLDJCQUFxQixJQUFJMUMsZ0JBQWdCLENBQUM2QixRQUFELENBQXpDO0FBQ0gsS0FGRDtBQUlBLFNBQUtjLGdCQUFMLENBQXNCRCxxQkFBdEI7QUFDSDs7QUFFU0Msa0JBQWdCLENBQUNELHFCQUFELEVBQXNDO0FBQzVELFFBQU1FLGtCQUFrQixHQUFJRixxQkFBcUIsR0FBRyxLQUFLbkMscUJBQTlCLEdBQXVELEtBQUtDLE1BQXZGO0FBRUEsU0FBS0osbUJBQUwsQ0FBeUJ3QixPQUF6QixDQUFpQyxDQUFDTyxLQUFELEVBQWdCVSxHQUFoQixLQUFnQztBQUM3RCxVQUFJRCxrQkFBa0IsSUFBSVQsS0FBMUIsRUFBaUM7QUFDN0IsYUFBS1csZ0JBQUwsQ0FBc0JELEdBQXRCO0FBQ0g7QUFDSixLQUpEO0FBS0g7O0FBRVNDLGtCQUFnQixDQUFDQyxrQkFBRCxFQUFtQztBQUN6RCxTQUFLQyxjQUFMLENBQW9CLEtBQUtyQyxvQkFBekIsRUFBK0MsS0FBS08sc0JBQXBELEVBQTRFNkIsa0JBQTVFO0FBQ0EsU0FBS0MsY0FBTCxDQUFvQixLQUFLdEMsbUJBQXpCLEVBQThDLEtBQUtTLDBCQUFuRCxFQUErRTRCLGtCQUEvRTtBQUVBLFNBQUt6QyxpQkFBTCxHQUF5QnlDLGtCQUF6QjtBQUNIOztBQUVTQyxnQkFBYyxDQUFDQyxPQUFELEVBQW1CQyxTQUFuQixFQUFzQ0gsa0JBQXRDLEVBQXdFO0FBQzVGLFFBQU1JLFNBQVMsR0FBR0YsT0FBTyxDQUFDRSxTQUExQjtBQUVBQSxhQUFTLENBQUNDLE1BQVYsQ0FBb0JGLFNBQXBCLFVBQWtDLEtBQUs1QyxpQkFBdkM7QUFDQTZDLGFBQVMsQ0FBQ0UsR0FBVixDQUFpQkgsU0FBakIsVUFBK0JILGtCQUEvQjtBQUNIOztBQUUyQixNQUFkOUIsY0FBYyxHQUFXO0FBQ25DLFdBQU8sS0FBS3FDLFlBQUwsQ0FBa0Isa0JBQWxCLENBQVA7QUFDSDs7QUFFbUMsTUFBdEJwQyxzQkFBc0IsR0FBVztBQUMzQyxXQUFVLEtBQUtxQyxJQUFmO0FBQ0g7O0FBRXVDLE1BQTFCcEMsMEJBQTBCLEdBQVc7QUFDL0MsV0FBVSxLQUFLb0MsSUFBZjtBQUNIOztBQUUwQixNQUFiNUIsYUFBYSxHQUFXO0FBQ2xDLFdBQU82QixNQUFNLENBQUMsS0FBS0YsWUFBTCxDQUFrQixnQkFBbEIsQ0FBRCxDQUFiO0FBQ0g7O0FBRWdCLE1BQUhHLEdBQUcsR0FBVztBQUN4QixXQUFPRCxNQUFNLENBQUMsS0FBS0YsWUFBTCxDQUFrQixLQUFsQixDQUFELENBQWI7QUFDSDs7QUFFc0IsTUFBVEksU0FBUyxHQUFXO0FBQzlCLFdBQU9GLE1BQU0sQ0FBQyxLQUFLRixZQUFMLENBQWtCLFdBQWxCLENBQUQsQ0FBYjtBQUNIOztBQUVzQixNQUFUSyxTQUFTLEdBQVc7QUFDOUIsV0FBT0gsTUFBTSxDQUFDLEtBQUtGLFlBQUwsQ0FBa0IsV0FBbEIsQ0FBRCxDQUFiO0FBQ0g7O0FBRW1CLE1BQU5NLE1BQU0sR0FBVztBQUMzQixXQUFPSixNQUFNLENBQUMsS0FBS0YsWUFBTCxDQUFrQixRQUFsQixDQUFELENBQWI7QUFDSDs7QUFFb0IsTUFBUE8sT0FBTyxHQUFXO0FBQzVCLFdBQU9MLE1BQU0sQ0FBQyxLQUFLRixZQUFMLENBQWtCLFNBQWxCLENBQUQsQ0FBYjtBQUNIOztBQTlJOEQsQyIsImZpbGUiOiIuL2pzL3l2ZXNfZGVmYXVsdC5wYXNzd29yZC1jb21wbGV4aXR5LWluZGljYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICBlcnJvcjoge1xuICAgIGxlbmd0aDogJ0xlbmd0aCBzaG91bGQgYmUgYSB2YWxpZCBwb3NpdGl2ZSBudW1iZXInLFxuICAgIHBhc3N3b3JkOiAnUGFzc3dvcmQgc2hvdWxkIGJlIGEgdmFsaWQgc3RyaW5nJ1xuICB9LFxuICByZWdleDoge1xuICAgIGRpZ2l0czogJyhcXFxcZC4qKScsXG4gICAgbGV0dGVyczogJyhbYS16QS1aXS4qKScsXG4gICAgc3ltYm9sczogJyhbYH5cXFxcIUAjXFxcXCQlXFxcXF5cXFxcJlxcXFwqXFxcXChcXFxcKVxcXFwtX1xcXFw9XFxcXCtcXFxcW1xcXFxcXHtcXFxcfVxcXFxdXFxcXFxcXFxcXHw7OlxcXFxcXCdcIiw8Lj5cXFxcL1xcXFw/4oKswqPCpeKCucKnwrFdLiopJyxcbiAgICBzcGFjZXM6ICcoW1xcXFxzXS4qKSdcbiAgfVxufTtcbiIsInZhciBsaWIgPSByZXF1aXJlKCcuL2xpYicpO1xudmFyIGVycm9yID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKS5lcnJvcjtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgdGhhdCBhIG51bWJlciBpcyBhIHZhbGlkIGxlbmd0aCAocG9zaXRpdmUgbnVtYmVyKVxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtIC0gTnVtYmVyIHRvIHZhbGlkYXRlXG4gKi9cbmZ1bmN0aW9uIF92YWxpZGF0ZUxlbmd0aChudW0pIHtcbiAgY29uc3QgbGVuID0gTnVtYmVyKG51bSk7XG4gIGlmIChpc05hTihsZW4pIHx8ICFOdW1iZXIuaXNJbnRlZ2VyKGxlbikgfHwgbGVuIDwgMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5sZW5ndGgpO1xuICB9XG59XG5cbi8qKlxuICogVGVzdHMgYSB2YWxpZGF0aW9uIGFuZCByZXR1cm4gdGhlIHJlc3VsdFxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgLSBQcm9wZXJ0eSB0byB2YWxpZGF0ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gQm9vbGVhbiB2YWx1ZSBpbmRpY3RpbmcgdGhlIHZhbGlkaXR5XG4gKiAgICAgICAgICAgb2YgdGhlIHBhc3N3b3JkIGFnYWluc3QgdGhlIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIF9pc1Bhc3N3b3JkVmFsaWRGb3IocHJvcGVydHkpIHtcbiAgcmV0dXJuIGxpYltwcm9wZXJ0eS5tZXRob2RdLmFwcGx5KHRoaXMsIHByb3BlcnR5LmFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogUmVnaXN0ZXJzIHRoZSBwcm9wZXJ0aWVzIG9mIGEgcGFzc3dvcmQtdmFsaWRhdGlvbiBzY2hlbWEgb2JqZWN0XG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jIC0gUHJvcGVydHkgbmFtZVxuICogQHBhcmFtIHthcnJheX0gYXJncyAtIGFyZ3VtZW50cyBmb3IgdGhlIGZ1bmMgcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gX3JlZ2lzdGVyKGZ1bmMsIGFyZ3MpIHtcbiAgLy8gQWRkIHByb3BlcnR5IHRvIHRoZSBzY2hlbWFcbiAgdGhpcy5wcm9wZXJ0aWVzLnB1c2goeyBtZXRob2Q6IGZ1bmMsIGFyZ3VtZW50czogYXJncyB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmNsYXNzIFBhc3N3b3JkVmFsaWRhdG9yIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBwYXNzd29yZC12YWxpZGF0b3Igc2NoZW1hXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gW107XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIHRvIHZhbGlkYXRlIHRoZSBwYXNzd29yZCBhZ2FpbnN0IHNjaGVtYVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHdkIC0gcGFzc3dvcmQgdG8gdmFsaWRhdGVcbiAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIG9wdGlvbmFsIG9wdGlvbnMgdG8gY29uZmlndXJlIHZhbGlkYXRpb25cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5saXN0XSAtIGFza3MgZm9yIGEgbGlzdCBvZiB2YWxpZGF0aW9uXG4gICAqICAgICAgICAgICBmYWlsdXJlcyBpbnN0ZWFkIG9mIGp1c3QgdHJ1ZS9mYWxzZVxuICAgKiBAcmV0dXJuIHtib29sZWFufGFycmF5fSBCb29sZWFuIHZhbHVlIGluZGljdGluZyB0aGUgdmFsaWRpdHlcbiAgICogICAgICAgICAgIG9mIHRoZSBwYXNzd29yZCBhcyBwZXIgc2NoZW1hLCBpZiAnb3B0aW9ucy5saXN0J1xuICAgKiAgICAgICAgICAgaXMgbm90IHNldC4gT3RoZXJ3aXNlLCBpdCByZXR1cm5zIGFuIGFycmF5IG9mXG4gICAqICAgICAgICAgICBwcm9wZXJ0eSBuYW1lcyB3aGljaCBmYWlsZWQgdmFsaWRhdGlvbnNcbiAgICovXG4gIHZhbGlkYXRlKHB3ZCwgb3B0aW9ucykge1xuICAgIHRoaXMubGlzdCA9IEJvb2xlYW4ob3B0aW9ucyAmJiBvcHRpb25zLmxpc3QpO1xuICAgIHRoaXMucGFzc3dvcmQgPSBTdHJpbmcocHdkKTtcblxuICAgIHRoaXMucG9zaXRpdmUgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMubGlzdCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcGVydGllcy5yZWR1Y2UoKGVycm9yTGlzdCwgcHJvcGVydHkpID0+IHtcbiAgICAgICAgLy8gQXBwbGllcyBhbGwgdmFsaWRhdGlvbnMgZGVmaW5lZCBpbiBsaWIgb25lIGJ5IG9uZVxuICAgICAgICBpZiAoIV9pc1Bhc3N3b3JkVmFsaWRGb3IuY2FsbCh0aGlzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgdmFsaWRhdGlvbiBmb3IgYSBwcm9wZXJ0eSBmYWlscyxcbiAgICAgICAgICAvLyBhZGQgaXQgdG8gdGhlIGVycm9yIGxpc3RcbiAgICAgICAgICByZXR1cm4gZXJyb3JMaXN0LmNvbmNhdChwcm9wZXJ0eS5tZXRob2QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvckxpc3Q7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXMuZXZlcnkoX2lzUGFzc3dvcmRWYWxpZEZvci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdWxlIHRvIG1hbmRhdGUgdGhlIHByZXNlbmNlIG9mIGxldHRlcnMgaW4gdGhlIHBhc3N3b3JkXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbY291bnRdIC0gbWluaW11bSBudW1iZXIgb2YgbGV0dGVycyByZXF1aXJlZFxuICAgKi9cbiAgbGV0dGVycyhjb3VudCkge1xuICAgIGNvdW50ICYmIF92YWxpZGF0ZUxlbmd0aChjb3VudCk7XG4gICAgcmV0dXJuIF9yZWdpc3Rlci5jYWxsKHRoaXMsICdsZXR0ZXJzJywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdWxlIHRvIG1hbmRhdGUgdGhlIHByZXNlbmNlIG9mIGRpZ2l0cyBpbiB0aGUgcGFzc3dvcmRcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtjb3VudF0gLSBtaW5pbXVtIG51bWJlciBvZiBkaWdpdHMgcmVxdWlyZWRcbiAgICovXG4gIGRpZ2l0cyhjb3VudCkge1xuICAgIGNvdW50ICYmIF92YWxpZGF0ZUxlbmd0aChjb3VudCk7XG4gICAgcmV0dXJuIF9yZWdpc3Rlci5jYWxsKHRoaXMsICdkaWdpdHMnLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bGUgdG8gbWFuZGF0ZSB0aGUgcHJlc2VuY2Ugb2Ygc3ltYm9scyBpbiB0aGUgcGFzc3dvcmRcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtjb3VudF0gLSBtaW5pbXVtIG51bWJlciBvZiBzeW1ib2xzIHJlcXVpcmVkXG4gICAqL1xuICBzeW1ib2xzKGNvdW50KSB7XG4gICAgY291bnQgJiYgX3ZhbGlkYXRlTGVuZ3RoKGNvdW50KTtcbiAgICByZXR1cm4gX3JlZ2lzdGVyLmNhbGwodGhpcywgJ3N5bWJvbHMnLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bGUgdG8gc3BlY2lmeSBhIG1pbmltdW0gbGVuZ3RoIG9mIHRoZSBwYXNzd29yZFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtIC0gbWluaW11bSBsZW5ndGhcbiAgICovXG4gIG1pbihudW0pIHtcbiAgICBfdmFsaWRhdGVMZW5ndGgobnVtKTtcbiAgICByZXR1cm4gX3JlZ2lzdGVyLmNhbGwodGhpcywgJ21pbicsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAvKipcbiAgICogUnVsZSB0byBzcGVjaWZ5IGEgbWF4aW11bSBsZW5ndGggb2YgdGhlIHBhc3N3b3JkXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW0gLSBtYXhpbXVtIGxlbmd0aFxuICAgKi9cbiAgbWF4KG51bSkge1xuICAgIF92YWxpZGF0ZUxlbmd0aChudW0pO1xuICAgIHJldHVybiBfcmVnaXN0ZXIuY2FsbCh0aGlzLCAnbWF4JywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdWxlIHRvIG1hbmRhdGUgdGhlIHByZXNlbmNlIG9mIGxvd2VyY2FzZSBsZXR0ZXJzIGluIHRoZSBwYXNzd29yZFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvdW50XSAtIG1pbmltdW0gbnVtYmVyIG9mIGxvd2VyY2FzZSBsZXR0ZXJzIHJlcXVpcmVkXG4gICAqL1xuICBsb3dlcmNhc2UoY291bnQpIHtcbiAgICBjb3VudCAmJiBfdmFsaWRhdGVMZW5ndGgoY291bnQpO1xuICAgIHJldHVybiBfcmVnaXN0ZXIuY2FsbCh0aGlzLCAnbG93ZXJjYXNlJywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdWxlIHRvIG1hbmRhdGUgdGhlIHByZXNlbmNlIG9mIHVwcGVyY2FzZSBsZXR0ZXJzIGluIHRoZSBwYXNzd29yZFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvdW50XSAtIG1pbmltdW0gbnVtYmVyIG9mIHVwcGVyY2FzZSBsZXR0ZXJzIHJlcXVpcmVkXG4gICAqL1xuICB1cHBlcmNhc2UoY291bnQpIHtcbiAgICBjb3VudCAmJiBfdmFsaWRhdGVMZW5ndGgoY291bnQpO1xuICAgIHJldHVybiBfcmVnaXN0ZXIuY2FsbCh0aGlzLCAndXBwZXJjYXNlJywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdWxlIHRvIG1hbmRhdGUgdGhlIHByZXNlbmNlIG9mIHNwYWNlIGluIHRoZSBwYXNzd29yZFxuICAgKiBJdCBjYW4gYmUgdXNlZCBhbG9uZyB3aXRoICdub3QnIHRvIG5vdCBhbGxvdyBzcGFjZXNcbiAgICogaW4gdGhlIHBhc3N3b3JkXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbY291bnRdIC0gbWluaW11bSBudW1iZXIgb2Ygc3BhY2VzIHJlcXVpcmVkXG4gICAqL1xuICBzcGFjZXMoY291bnQpIHtcbiAgICBjb3VudCAmJiBfdmFsaWRhdGVMZW5ndGgoY291bnQpO1xuICAgIHJldHVybiBfcmVnaXN0ZXIuY2FsbCh0aGlzLCAnc3BhY2VzJywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdWxlIHRvIGludmVydCB0aGUgZWZmZWN0cyBvZiAnbm90J1xuICAgKiBBcGFydCBmcm9tIHRoYXQsICdoYXMnIGlzIGFsc28gdXNlZFxuICAgKiB0byBtYWtlIHRoZSBhcGkgcmVhZGFibGUgYW5kIGNoYWluYWJsZVxuICAgKi9cbiAgaGFzKCkge1xuICAgIHJldHVybiBfcmVnaXN0ZXIuY2FsbCh0aGlzLCAnaGFzJywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdWxlIHRvIGludmVydCB0aGUgbmV4dCBhcHBsaWVkIHJ1bGVzLlxuICAgKiBBbGwgdGhlIHJ1bGVzIGFwcGxpZWQgYWZ0ZXIgJ25vdCcgd2lsbCBoYXZlIG9wcG9zaXRlIGVmZmVjdCxcbiAgICogdW50aWwgJ2hhcycgcnVsZSBpcyBhcHBsaWVkXG4gICAqL1xuICBub3QoKSB7XG4gICAgcmV0dXJuIF9yZWdpc3Rlci5jYWxsKHRoaXMsICdub3QnLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bGUgdG8gaW52ZXJ0IHRoZSBlZmZlY3RzIG9mICdub3QnXG4gICAqIEFwYXJ0IGZyb20gdGhhdCwgJ2lzJyBpcyBhbHNvIHVzZWRcbiAgICogdG8gbWFrZSB0aGUgYXBpIHJlYWRhYmxlIGFuZCBjaGFpbmFibGVcbiAgICovXG4gIGlzKCkge1xuICAgIHJldHVybiBfcmVnaXN0ZXIuY2FsbCh0aGlzLCAnaXMnLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bGUgdG8gd2hpdGVsaXN0IHdvcmRzIHRvIGJlIHVzZWQgYXMgcGFzc3dvcmRcbiAgICpcbiAgICogQHBhcmFtIHthcnJheX0gbGlzdCAtIGxpc3Qgb2YgdmFsdWVzIGFsbG93ZWRcbiAgICovXG4gIG9uZU9mKCkge1xuICAgIHJldHVybiBfcmVnaXN0ZXIuY2FsbCh0aGlzLCAnb25lT2YnLCBhcmd1bWVudHMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFzc3dvcmRWYWxpZGF0b3I7XG4iLCIvKipcbiAqIEdlbmVyaWMgbWV0aG9kIHRvIHRlc3QgcmVnZXhcbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHJlZ2V4IC0gcmVnZXggdG8gdGVzdFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIHBhc3N3b3JkXG4gKi9cbnZhciByZWdleCA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJykucmVnZXg7XG5cbmZ1bmN0aW9uIF9wcm9jZXNzKHJlZ2V4cCwgcmVwZWF0KSB7XG4gIGlmIChyZXBlYXQgJiYgcmVwZWF0ID4gMSkge1xuICAgIGNvbnN0IHBhcnNlZFJlcGVhdCA9IHBhcnNlSW50KHJlcGVhdCwgMTApO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKHJlZ2V4cCArICd7JyArIHBhcnNlZFJlcGVhdCArICcsfScpLnRlc3QodGhpcy5wYXNzd29yZCkgPT09IHRoaXMucG9zaXRpdmU7XG4gIH1cbiAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXhwKS50ZXN0KHRoaXMucGFzc3dvcmQpID09PSB0aGlzLnBvc2l0aXZlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAvKipcbiAgICogTWV0aG9kIHRvIGludmVydCB0aGUgbmV4dCB2YWxpZGF0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0ge1JlZ0V4cH0gW3N5bWJvbF0gLSBjdXN0b20gUmVnZXggd2hpY2ggc2hvdWxkIG5vdCBiZSBwcmVzZW50XG4gICAqL1xuICBub3Q6IGZ1bmN0aW9uIG5vdChzeW1ib2wpIHtcbiAgICB0aGlzLnBvc2l0aXZlID0gZmFsc2U7XG4gICAgaWYgKHN5bWJvbCkge1xuICAgICAgcmV0dXJuIF9wcm9jZXNzLmNhbGwodGhpcywgc3ltYm9sKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBpbnZlcnQgdGhlIGVmZmVjdHMgb2Ygbm90KClcbiAgICpcbiAgICogQHBhcmFtIHtSZWdFeHB9IFtzeW1ib2xdIC0gY3VzdG9tIFJlZ2V4IHdoaWNoIHNob3VsZCBiZSBwcmVzZW50XG4gICAqL1xuICBoYXM6IGZ1bmN0aW9uIGhhcyhzeW1ib2wpIHtcbiAgICB0aGlzLnBvc2l0aXZlID0gdHJ1ZTtcbiAgICBpZiAoc3ltYm9sKSB7XG4gICAgICByZXR1cm4gX3Byb2Nlc3MuY2FsbCh0aGlzLCBzeW1ib2wpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogTWV0aG9kIHRvIGludmVydCB0aGUgZWZmZWN0cyBvZiBub3QoKSBhbmRcbiAgICogdG8gbWFrZSB0aGUgYXBpIHJlYWRhYmxlIGFuZCBjaGFpbmFibGVcbiAgICpcbiAgICovXG4gIGlzOiBmdW5jdGlvbiBpcygpIHtcbiAgICB0aGlzLnBvc2l0aXZlID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogTWV0aG9kIHRvIHNwZWNpZnkgYSBtaW5pbXVtIGxlbmd0aFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtIC0gbWluaW11bSBsZW5ndGhcbiAgICovXG4gIG1pbjogZnVuY3Rpb24gbWluKG51bSkge1xuICAgIHJldHVybiB0aGlzLnBhc3N3b3JkLmxlbmd0aCA+PSBudW07XG4gIH0sXG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBzcGVjaWZ5IGEgbWF4aW11bSBsZW5ndGhcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IG51bSAtIG1heGltdW0gbGVuZ3RoXG4gICAqL1xuICBtYXg6IGZ1bmN0aW9uIG1heChudW0pIHtcbiAgICByZXR1cm4gdGhpcy5wYXNzd29yZC5sZW5ndGggPD0gbnVtO1xuICB9LFxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdmFsaWRhdGUgdGhlIHByZXNlbmNlIG9mIGRpZ2l0c1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcmVwZWF0IC0gY291bnQgb2YgcmVxdWlyZWQgZGlnaXRzXG4gICAqL1xuICBkaWdpdHM6IGZ1bmN0aW9uIGRpZ2l0cyhyZXBlYXQpIHtcbiAgICByZXR1cm4gX3Byb2Nlc3MuY2FsbCh0aGlzLCByZWdleC5kaWdpdHMsIHJlcGVhdCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byB2YWxpZGF0ZSB0aGUgcHJlc2VuY2Ugb2YgbGV0dGVyc1xuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcmVwZWF0IC0gY291bnQgb2YgcmVxdWlyZWQgbGV0dGVyc1xuICAgKi9cbiAgbGV0dGVyczogZnVuY3Rpb24gbGV0dGVycyhyZXBlYXQpIHtcbiAgICByZXR1cm4gX3Byb2Nlc3MuY2FsbCh0aGlzLCByZWdleC5sZXR0ZXJzLCByZXBlYXQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdmFsaWRhdGUgdGhlIHByZXNlbmNlIG9mIHVwcGVyY2FzZSBsZXR0ZXJzXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByZXBlYXQgLSBjb3VudCBvZiByZXF1aXJlZCB1cHBlcmNhc2UgbGV0dGVyc1xuICAgKi9cbiAgdXBwZXJjYXNlOiBmdW5jdGlvbiB1cHBlcmNhc2UocmVwZWF0KSB7XG4gICAgaWYgKHJlcGVhdCAmJiByZXBlYXQgPiAxKSB7XG4gICAgICBsZXQgY2hhcmFjdGVySW5kZXggPSAwO1xuICAgICAgbGV0IHVwcGVyQ2FzZUxldHRlcnMgPSAwO1xuXG4gICAgICB3aGlsZSAoKHVwcGVyQ2FzZUxldHRlcnMgPCByZXBlYXQpICYmIChjaGFyYWN0ZXJJbmRleCA8IHRoaXMucGFzc3dvcmQubGVuZ3RoKSkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGV0dGVyID0gdGhpcy5wYXNzd29yZC5jaGFyQXQoY2hhcmFjdGVySW5kZXgpO1xuICAgICAgICBpZiAoY3VycmVudExldHRlciAhPT0gY3VycmVudExldHRlci50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgdXBwZXJDYXNlTGV0dGVycysrO1xuICAgICAgICB9XG4gICAgICAgIGNoYXJhY3RlckluZGV4Kys7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAodXBwZXJDYXNlTGV0dGVycyA9PT0gcmVwZWF0KSA9PT0gdGhpcy5wb3NpdGl2ZTtcbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnBhc3N3b3JkICE9PSB0aGlzLnBhc3N3b3JkLnRvTG93ZXJDYXNlKCkpID09PSB0aGlzLnBvc2l0aXZlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdmFsaWRhdGUgdGhlIHByZXNlbmNlIG9mIGxvd2VyY2FzZSBsZXR0ZXJzXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByZXBlYXQgLSBjb3VudCBvZiByZXF1aXJlZCBsb3dlcmNhc2UgbGV0dGVyc1xuICAgKi9cbiAgbG93ZXJjYXNlOiBmdW5jdGlvbiBsb3dlcmNhc2UocmVwZWF0KSB7XG4gICAgaWYgKHJlcGVhdCAmJiByZXBlYXQgPiAxKSB7XG4gICAgICBsZXQgY2hhcmFjdGVySW5kZXggPSAwO1xuICAgICAgbGV0IGxvd2VyQ2FzZUxldHRlcnMgPSAwO1xuXG4gICAgICB3aGlsZSAoKGxvd2VyQ2FzZUxldHRlcnMgPCByZXBlYXQpICYmIChjaGFyYWN0ZXJJbmRleCA8IHRoaXMucGFzc3dvcmQubGVuZ3RoKSkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGV0dGVyID0gdGhpcy5wYXNzd29yZC5jaGFyQXQoY2hhcmFjdGVySW5kZXgpO1xuICAgICAgICBpZiAoY3VycmVudExldHRlciAhPT0gY3VycmVudExldHRlci50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgbG93ZXJDYXNlTGV0dGVycysrO1xuICAgICAgICB9XG4gICAgICAgIGNoYXJhY3RlckluZGV4Kys7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAobG93ZXJDYXNlTGV0dGVycyA9PT0gcmVwZWF0KSA9PT0gdGhpcy5wb3NpdGl2ZTtcbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnBhc3N3b3JkICE9PSB0aGlzLnBhc3N3b3JkLnRvVXBwZXJDYXNlKCkpID09PSB0aGlzLnBvc2l0aXZlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBNZXRob2QgdG8gdmFsaWRhdGUgdGhlIHByZXNlbmNlIG9mIHN5bWJvbHNcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJlcGVhdCAtIGNvdW50IG9mIHJlcXVpcmVkIHN5bWJvbHNcbiAgICovXG4gIHN5bWJvbHM6IGZ1bmN0aW9uIHN5bWJvbHMocmVwZWF0KSB7XG4gICAgcmV0dXJuIF9wcm9jZXNzLmNhbGwodGhpcywgcmVnZXguc3ltYm9scywgcmVwZWF0KTtcbiAgfSxcblxuICAvKipcbiAgICogTWV0aG9kIHRvIHZhbGlkYXRlIHRoZSBwcmVzZW5jZSBvZiBzcGFjZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcmVwZWF0IC0gY291bnQgb2YgcmVxdWlyZWQgc3BhY2VzXG4gICAqL1xuICBzcGFjZXM6IGZ1bmN0aW9uIHNwYWNlcyhyZXBlYXQpIHtcbiAgICByZXR1cm4gX3Byb2Nlc3MuY2FsbCh0aGlzLCByZWdleC5zcGFjZXMsIHJlcGVhdCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBwcm92aWRlIHByZS1kZWZpbmVkIHZhbHVlcyBmb3IgcGFzc3dvcmRcbiAgICpcbiAgICogQHBhcmFtIHthcnJheX0gbGlzdCAtIGxpc3Qgb2YgdmFsdWVzIGFsbG93ZWRcbiAgICovXG4gIG9uZU9mOiBmdW5jdGlvbiBvbmVPZihsaXN0KSB7XG4gICAgcmV0dXJuIGxpc3QuaW5kZXhPZih0aGlzLnBhc3N3b3JkKSA+PSAwID09PSB0aGlzLnBvc2l0aXZlO1xuICB9XG59O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICdTaG9wVWkvbW9kZWxzL2NvbXBvbmVudCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLWVzL2RlYm91bmNlJztcbmltcG9ydCBQYXNzd29yZFZhbGlkYXRvciBmcm9tICdwYXNzd29yZC12YWxpZGF0b3InO1xuXG5lbnVtIENvbXBsZXhpdHlXZWlnaHQge1xuICAgIGxvd2VyY2FzZSA9IDEwLFxuICAgIGRpZ2l0cyA9IDE1LFxuICAgIHVwcGVyY2FzZSA9IDIwLFxuICAgIHN5bWJvbHMgPSAzMCxcbiAgICBtaW4gPSAyNSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRDb21wbGV4aXR5SW5kaWNhdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgYXZhaWxhYmxlUHJvcGVydGllcyA9IFsnbWluJywgJ2xvd2VyY2FzZScsICd1cHBlcmNhc2UnLCAnZGlnaXRzJywgJ3N5bWJvbHMnXTtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZTogbm8tbWFnaWMtbnVtYmVycyAqL1xuICAgIHByb3RlY3RlZCBjb21wbGV4aXR5R3JhZGF0aW9uID0gbmV3IE1hcChbXG4gICAgICAgIFsnd2VhaycsIDBdLFxuICAgICAgICBbJ21lZGl1bScsIDI1XSxcbiAgICAgICAgWydzdHJvbmcnLCA1MF0sXG4gICAgICAgIFsndmVyeS1zdHJvbmcnLCA3NV0sXG4gICAgXSk7XG4gICAgLyogdHNsaW50OmVuYWJsZSAqL1xuICAgIHByb3RlY3RlZCBjdXJyZW50Q29tcGxleGl0eSA9ICcnO1xuICAgIHByb3RlY3RlZCBtYXhQYXNzd29yZENvbXBsZXhpdHkgPSAwO1xuICAgIHByb3RlY3RlZCBmYWN0b3IgPSAxMDA7XG4gICAgcHJvdGVjdGVkIGlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgbm90aWZpY2F0aW9uRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIGluZGljYXRvckxpc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgc2NoZW1hOiBQYXNzd29yZFZhbGlkYXRvcjtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge31cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5pbnB1dENsYXNzTmFtZSlbMF07XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yTGlzdEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuaW5kaWNhdG9yTGlzdENsYXNzTmFtZSlbMF07XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uRWxlbWVudCA9IDxIVE1MRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5hZGRpdGlvbmFsTWVzc2FnZUNsYXNzTmFtZSlbMF07XG4gICAgICAgIHRoaXMuc2NoZW1hID0gbmV3IFBhc3N3b3JkVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgdGhpcy5pbml0VmFsaWRhdG9yKCk7XG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tYXBJbnB1dEVsZW1lbnRLZXlVcEV2ZW50KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcElucHV0RWxlbWVudEtleVVwRXZlbnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAna2V5dXAnLFxuICAgICAgICAgICAgZGVib3VuY2UoKCkgPT4gdGhpcy5vbklucHV0S2V5VXAoKSwgdGhpcy5kZWJvdW5jZURlbGF5KSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdFZhbGlkYXRvcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hdmFpbGFibGVQcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsaWRhdGlvbihwcm9wZXJ0eSk7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlTWF4UGFzc3dvcmRDb21wbGV4aXR5KHByb3BlcnR5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluY3JlYXNlTWF4UGFzc3dvcmRDb21wbGV4aXR5KHByb3BlcnR5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tYXhQYXNzd29yZENvbXBsZXhpdHkgKz0gQ29tcGxleGl0eVdlaWdodFtwcm9wZXJ0eV07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldFZhbGlkYXRpb24ocHJvcGVydHk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVZhbHVlID0gdGhpc1twcm9wZXJ0eV07XG5cbiAgICAgICAgaWYgKHByb3BlcnR5ID09PSAnbWluJykge1xuICAgICAgICAgICAgdGhpcy5zZXRJc1ZhbGlkYXRpb25UeXBlKHByb3BlcnR5LCBwcm9wZXJ0eVZhbHVlKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRIYXNWYWxpZGF0aW9uVHlwZShwcm9wZXJ0eSwgcHJvcGVydHlWYWx1ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldEhhc1ZhbGlkYXRpb25UeXBlKHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zY2hlbWEuaGFzKClbcHJvcGVydHldKHZhbHVlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2V0SXNWYWxpZGF0aW9uVHlwZShwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2NoZW1hLmlzKClbcHJvcGVydHldKHZhbHVlKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25JbnB1dEtleVVwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgICAgIGNvbnN0IGZhaWxzTGlzdCA9IHRoaXMuc2NoZW1hLnZhbGlkYXRlKGlucHV0VmFsdWUsIHsgbGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgbGV0IHBhc3N3b3JkVmFsaWRhdG9yTWFyayA9IHRoaXMubWF4UGFzc3dvcmRDb21wbGV4aXR5O1xuXG4gICAgICAgIGZhaWxzTGlzdC5mb3JFYWNoKChwcm9wZXJ0eTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBwYXNzd29yZFZhbGlkYXRvck1hcmsgLT0gQ29tcGxleGl0eVdlaWdodFtwcm9wZXJ0eV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmFsaWRhdGVQYXNzd29yZChwYXNzd29yZFZhbGlkYXRvck1hcmspO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkVmFsaWRhdG9yTWFyazogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkQ29tcGxleGl0eSA9IChwYXNzd29yZFZhbGlkYXRvck1hcmsgLyB0aGlzLm1heFBhc3N3b3JkQ29tcGxleGl0eSkgKiB0aGlzLmZhY3RvcjtcblxuICAgICAgICB0aGlzLmNvbXBsZXhpdHlHcmFkYXRpb24uZm9yRWFjaCgodmFsdWU6IG51bWJlciwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXNzd29yZENvbXBsZXhpdHkgPj0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbGlkYXRpb24oa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVZhbGlkYXRpb24oY29tcGxleGl0eU1vZGlmaWVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVNb2RpZmllcih0aGlzLmluZGljYXRvckxpc3RFbGVtZW50LCB0aGlzLmluZGljYXRvckxpc3RDbGFzc05hbWUsIGNvbXBsZXhpdHlNb2RpZmllcik7XG4gICAgICAgIHRoaXMudXBkYXRlTW9kaWZpZXIodGhpcy5ub3RpZmljYXRpb25FbGVtZW50LCB0aGlzLmFkZGl0aW9uYWxNZXNzYWdlQ2xhc3NOYW1lLCBjb21wbGV4aXR5TW9kaWZpZXIpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudENvbXBsZXhpdHkgPSBjb21wbGV4aXR5TW9kaWZpZXI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZU1vZGlmaWVyKGVsZW1lbnQ6IEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nLCBjb21wbGV4aXR5TW9kaWZpZXI6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcblxuICAgICAgICBjbGFzc0xpc3QucmVtb3ZlKGAke2NsYXNzTmFtZX0tLSR7dGhpcy5jdXJyZW50Q29tcGxleGl0eX1gKTtcbiAgICAgICAgY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9LS0ke2NvbXBsZXhpdHlNb2RpZmllcn1gKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGlucHV0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnaW5wdXQtY2xhc3MtbmFtZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgaW5kaWNhdG9yTGlzdENsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5uYW1lfV9faW5kaWNhdG9yLWxpc3RgO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgYWRkaXRpb25hbE1lc3NhZ2VDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX1fX2FkZGl0aW9uYWwtbWVzc2FnZWA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBkZWJvdW5jZURlbGF5KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoJ2RlYm91bmNlLWRlbGF5JykpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgbWluKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoJ21pbicpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGxvd2VyY2FzZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuZ2V0QXR0cmlidXRlKCdsb3dlcmNhc2UnKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCB1cHBlcmNhc2UoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZSgndXBwZXJjYXNlJykpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgZGlnaXRzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoJ2RpZ2l0cycpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHN5bWJvbHMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZSgnc3ltYm9scycpKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9