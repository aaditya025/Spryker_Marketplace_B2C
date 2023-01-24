(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["merchant-product-offer-dynamic-form-elements"],{

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Symbol;

/* harmony default export */ __webpack_exports__["default"] = (Symbol);


/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");
/* harmony import */ var _getRawTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js");
/* harmony import */ var _objectToString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js");




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(_getRawTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    : Object(_objectToString_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
}

/* harmony default export */ __webpack_exports__["default"] = (baseGetTag);


/***/ }),

/***/ "./node_modules/lodash-es/_baseTrim.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseTrim.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_trimmedEndIndex.js */ "./node_modules/lodash-es/_trimmedEndIndex.js");


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, Object(_trimmedEndIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(string) + 1).replace(reTrimStart, '')
    : string;
}

/* harmony default export */ __webpack_exports__["default"] = (baseTrim);


/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["default"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? _Symbol_js__WEBPACK_IMPORTED_MODULE_0__["default"].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (getRawTag);


/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["default"] = (objectToString);


/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__["default"] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["default"] = (root);


/***/ }),

/***/ "./node_modules/lodash-es/_trimmedEndIndex.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_trimmedEndIndex.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/* harmony default export */ __webpack_exports__["default"] = (trimmedEndIndex);


/***/ }),

/***/ "./node_modules/lodash-es/debounce.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/debounce.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./now.js */ "./node_modules/lodash-es/now.js");
/* harmony import */ var _toNumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toNumber.js */ "./node_modules/lodash-es/toNumber.js");




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(wait) || 0;
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(Object(_toNumber_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  }

  function debounced() {
    var time = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ __webpack_exports__["default"] = (debounce);


/***/ }),

/***/ "./node_modules/lodash-es/isObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ __webpack_exports__["default"] = (isObject);


/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["default"] = (isObjectLike);


/***/ }),

/***/ "./node_modules/lodash-es/isSymbol.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (Object(_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) && Object(_baseGetTag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) == symbolTag);
}

/* harmony default export */ __webpack_exports__["default"] = (isSymbol);


/***/ }),

/***/ "./node_modules/lodash-es/now.js":
/*!***************************************!*\
  !*** ./node_modules/lodash-es/now.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Date.now();
};

/* harmony default export */ __webpack_exports__["default"] = (now);


/***/ }),

/***/ "./node_modules/lodash-es/toNumber.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toNumber.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseTrim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseTrim.js */ "./node_modules/lodash-es/_baseTrim.js");
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value)) {
    return NAN;
  }
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = Object(_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = Object(_baseTrim_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ __webpack_exports__["default"] = (toNumber);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./vendor/spryker-shop/merchant-product-offer-widget/src/SprykerShop/Yves/MerchantProductOfferWidget/Theme/default/components/molecules/merchant-product-offer-dynamic-form-elements/merchant-product-offer-dynamic-form-elements.ts":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/merchant-product-offer-widget/src/SprykerShop/Yves/MerchantProductOfferWidget/Theme/default/components/molecules/merchant-product-offer-dynamic-form-elements/merchant-product-offer-dynamic-form-elements.ts ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MerchantProductOfferDynamicFormElements; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");
/* harmony import */ var ShopUi_components_molecules_autocomplete_form_autocomplete_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ShopUi/components/molecules/autocomplete-form/autocomplete-form */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/autocomplete-form/autocomplete-form.ts");



class MerchantProductOfferDynamicFormElements extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super(...arguments);
    this.autocompleteForm = void 0;
    this.ajaxProvider = void 0;
    this.submitButton = void 0;
  }

  readyCallback() {}

  init() {
    this.autocompleteForm = document.getElementsByClassName(this.autocompleteFormClassName)[0];
    this.ajaxProvider = this.getElementsByClassName(this.jsName + "__provider")[0];

    if (this.submitButtonClassName) {
      this.submitButton = document.getElementsByClassName(this.submitButtonClassName)[0];
    }

    this.mapEvents();
  }

  mapEvents() {
    this.mapAutocompleteFormSetEvent();
  }

  mapAutocompleteFormSetEvent() {
    this.autocompleteForm.addEventListener(ShopUi_components_molecules_autocomplete_form_autocomplete_form__WEBPACK_IMPORTED_MODULE_2__["Events"].SET, event => this.onAutocompleteSet(event));
  }

  onAutocompleteSet(event) {
    this.sendRequest(event);
  }

  toggleSubmitButton(isDisabled) {
    if (isDisabled === void 0) {
      isDisabled = true;
    }

    if (this.submitButton) {
      this.submitButton.disabled = isDisabled;
    }
  }

  sendRequest(event) {
    var _this = this;

    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(function* () {
      _this.toggleSubmitButton();

      _this.ajaxProvider.queryParams.set(_this.queryString, event.detail.value);

      yield _this.ajaxProvider.fetch();

      _this.toggleSubmitButton(false);
    })();
  }

  get autocompleteFormClassName() {
    return this.getAttribute('autocomplete-form-class-name');
  }

  get queryString() {
    return this.getAttribute('query-string');
  }

  get submitButtonClassName() {
    return this.getAttribute('submit-button-class-name');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlVHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19yb290LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3RyaW1tZWRFbmRJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL25vdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL3RvTnVtYmVyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9tZXJjaGFudC1wcm9kdWN0LW9mZmVyLXdpZGdldC9zcmMvU3ByeWtlclNob3AvWXZlcy9NZXJjaGFudFByb2R1Y3RPZmZlcldpZGdldC9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL21lcmNoYW50LXByb2R1Y3Qtb2ZmZXItZHluYW1pYy1mb3JtLWVsZW1lbnRzL21lcmNoYW50LXByb2R1Y3Qtb2ZmZXItZHluYW1pYy1mb3JtLWVsZW1lbnRzLnRzIiwid2VicGFjazovLy8uL3ZlbmRvci9zcHJ5a2VyLXNob3Avc2hvcC11aS9zcmMvU3ByeWtlclNob3AvWXZlcy9TaG9wVWkvVGhlbWUvZGVmYXVsdC9jb21wb25lbnRzL21vbGVjdWxlcy9hdXRvY29tcGxldGUtZm9ybS9hdXRvY29tcGxldGUtZm9ybS50cyJdLCJuYW1lcyI6WyJNZXJjaGFudFByb2R1Y3RPZmZlckR5bmFtaWNGb3JtRWxlbWVudHMiLCJDb21wb25lbnQiLCJhdXRvY29tcGxldGVGb3JtIiwiYWpheFByb3ZpZGVyIiwic3VibWl0QnV0dG9uIiwicmVhZHlDYWxsYmFjayIsImluaXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhdXRvY29tcGxldGVGb3JtQ2xhc3NOYW1lIiwianNOYW1lIiwic3VibWl0QnV0dG9uQ2xhc3NOYW1lIiwibWFwRXZlbnRzIiwibWFwQXV0b2NvbXBsZXRlRm9ybVNldEV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkV2ZW50cyIsIlNFVCIsImV2ZW50Iiwib25BdXRvY29tcGxldGVTZXQiLCJzZW5kUmVxdWVzdCIsInRvZ2dsZVN1Ym1pdEJ1dHRvbiIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInF1ZXJ5UGFyYW1zIiwic2V0IiwicXVlcnlTdHJpbmciLCJkZXRhaWwiLCJ2YWx1ZSIsImZldGNoIiwiZ2V0QXR0cmlidXRlIiwiQXV0b2NvbXBsZXRlRm9ybSIsInRleHRJbnB1dCIsInZhbHVlSW5wdXQiLCJzdWdnZXN0aW9uc0NvbnRhaW5lciIsInN1Z2dlc3Rpb25JdGVtcyIsImNsZWFuQnV0dG9uIiwibGFzdFNlbGVjdGVkSXRlbSIsImluamVjdG9yc0V4dHJhUXVlcnlWYWx1ZUxpc3QiLCJleHRyYVF1ZXJ5VmFsdWVzIiwiTWFwIiwiaW5qZWN0b3JzRXh0cmFRdWVyeVZhbHVlQ2xhc3NOYW1lIiwiQXJyYXkiLCJmcm9tIiwiYXV0b0luaXRFbmFibGVkIiwiYXV0b0xvYWRJbml0IiwiZGVib3VuY2UiLCJvbklucHV0IiwiZGVib3VuY2VEZWxheSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJvbktleURvd24iLCJvbkNsZWFuQnV0dG9uQ2xpY2siLCJmb2N1cyIsImxvYWRTdWdnZXN0aW9ucyIsImNsZWFuIiwiZGlzcGF0Y2hDdXN0b21FdmVudCIsIlVOU0VUIiwiaGlkZVN1Z2dlc3Rpb25zIiwiaW5wdXRUZXh0IiwibGVuZ3RoIiwibWluTGV0dGVycyIsInNob3dTdWdnZXN0aW9ucyIsIkNIQU5HRSIsImlucHV0VmFsdWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzZXRRdWVyeVBhcmFtcyIsImNsZWFyIiwiZm9yRWFjaCIsIml0ZW0iLCJuYW1lIiwiRkVUQ0hJTkciLCJzdWdnZXN0ZWRJdGVtQ2xhc3NOYW1lIiwicXVlcnlTZWxlY3RvckFsbCIsInN1Z2dlc3RlZEl0ZW1TZWxlY3RvciIsIm1hcFN1Z2dlc3Rpb25JdGVtc0V2ZW50cyIsIkZFVENIRUQiLCJvbkl0ZW1DbGljayIsIm9uSXRlbVNlbGVjdGVkIiwidGV4dENvbnRlbnQiLCJ0cmltIiwidmFsdWVBdHRyaWJ1dGVOYW1lIiwidGV4dCIsImV4dHJhVmFsdWVzIiwiY2hhbmdlU2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWRJbnB1dENsYXNzIiwia2V5Iiwib25LZXlEb3duQXJyb3dVcCIsIm9uS2V5RG93bkFycm93RG93biIsIm9uS2V5RG93bkVudGVyIiwibGFzdFNlbGVjdGVkSXRlbUluZGV4IiwiaW5kZXhPZiIsImVsZW1lbnRJbmRleCIsImxhc3RTdWdnZXN0aW9uSXRlbUluZGV4IiwicHJldmVudERlZmF1bHQiLCJjbGljayIsIk51bWJlciIsImhhc0F0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBOEI7O0FB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LENBQVA7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7OztBQUM2QixNQUFyQjhDLHFCQUFxQixHQUFXO0FBQ2hDLFdBQU8sS0FBSzlDLFlBQUwsQ0FBa0IseUJBQWxCLENBQVA7QUFDSDs7QUFFbUMsTUFBdEI0QyxzQkFBc0IsR0FBVztBQUMzQyxXQUFPLEtBQUs1QyxZQUFMLENBQWtCLDJCQUFsQixDQUFQO0FBQ0g7O0FBRThDLE1BQWpDVyxpQ0FBaUMsR0FBVztBQUN0RCxXQUFPLEtBQUtYLFlBQUwsQ0FBa0Isd0NBQWxCLENBQVA7QUFDSDtBQUVEO0FBQ0o7QUFDQTs7O0FBQ3FCLE1BQWJrQixhQUFhLEdBQVc7QUFDeEIsV0FBT2tELE1BQU0sQ0FBQyxLQUFLcEUsWUFBTCxDQUFrQixnQkFBbEIsQ0FBRCxDQUFiO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTs7O0FBQ2tCLE1BQVYrQixVQUFVLEdBQVc7QUFDckIsV0FBT3FDLE1BQU0sQ0FBQyxLQUFLcEUsWUFBTCxDQUFrQixhQUFsQixDQUFELENBQWI7QUFDSDtBQUVEO0FBQ0o7QUFDQTs7O0FBQ3VCLE1BQWZjLGVBQWUsR0FBWTtBQUMzQixXQUFPLEtBQUt1RCxZQUFMLENBQWtCLFdBQWxCLENBQVA7QUFDSDs7QUFoVW1ELEMiLCJmaWxlIjoiLi9qcy95dmVzX2RlZmF1bHQubWVyY2hhbnQtcHJvZHVjdC1vZmZlci1keW5hbWljLWZvcm0tZWxlbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbmV4cG9ydCBkZWZhdWx0IFN5bWJvbDtcbiIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcbmltcG9ydCBnZXRSYXdUYWcgZnJvbSAnLi9fZ2V0UmF3VGFnLmpzJztcbmltcG9ydCBvYmplY3RUb1N0cmluZyBmcm9tICcuL19vYmplY3RUb1N0cmluZy5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlR2V0VGFnO1xuIiwiaW1wb3J0IHRyaW1tZWRFbmRJbmRleCBmcm9tICcuL190cmltbWVkRW5kSW5kZXguanMnO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltU3RhcnQgPSAvXlxccysvO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRyaW1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gdHJpbS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHRyaW1tZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVHJpbShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1xuICAgID8gc3RyaW5nLnNsaWNlKDAsIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpICsgMSkucmVwbGFjZShyZVRyaW1TdGFydCwgJycpXG4gICAgOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VUcmltO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuZXhwb3J0IGRlZmF1bHQgZnJlZUdsb2JhbDtcbiIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0VG9TdHJpbmc7XG4iLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5leHBvcnQgZGVmYXVsdCByb290O1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYSBzaW5nbGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG52YXIgcmVXaGl0ZXNwYWNlID0gL1xccy87XG5cbi8qKlxuICogVXNlZCBieSBgXy50cmltYCBhbmQgYF8udHJpbUVuZGAgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZVxuICogY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3Rlci5cbiAqL1xuZnVuY3Rpb24gdHJpbW1lZEVuZEluZGV4KHN0cmluZykge1xuICB2YXIgaW5kZXggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleC0tICYmIHJlV2hpdGVzcGFjZS50ZXN0KHN0cmluZy5jaGFyQXQoaW5kZXgpKSkge31cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0cmltbWVkRW5kSW5kZXg7XG4iLCJpbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgbm93IGZyb20gJy4vbm93LmpzJztcbmltcG9ydCB0b051bWJlciBmcm9tICcuL3RvTnVtYmVyLmpzJztcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZ1xuICAgICAgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKVxuICAgICAgOiB0aW1lV2FpdGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYm91bmNlO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0TGlrZTtcbiIsImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNTeW1ib2w7XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm93O1xuIiwiaW1wb3J0IGJhc2VUcmltIGZyb20gJy4vX2Jhc2VUcmltLmpzJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmltcG9ydCBpc1N5bWJvbCBmcm9tICcuL2lzU3ltYm9sLmpzJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IGJhc2VUcmltKHZhbHVlKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvTnVtYmVyO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICdTaG9wVWkvbW9kZWxzL2NvbXBvbmVudCc7XG5pbXBvcnQgQXV0b2NvbXBsZXRlRm9ybSwgeyBFdmVudHMgfSBmcm9tICdTaG9wVWkvY29tcG9uZW50cy9tb2xlY3VsZXMvYXV0b2NvbXBsZXRlLWZvcm0vYXV0b2NvbXBsZXRlLWZvcm0nO1xuaW1wb3J0IEFqYXhQcm92aWRlciBmcm9tICdTaG9wVWkvY29tcG9uZW50cy9tb2xlY3VsZXMvYWpheC1wcm92aWRlci9hamF4LXByb3ZpZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVyY2hhbnRQcm9kdWN0T2ZmZXJEeW5hbWljRm9ybUVsZW1lbnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgYXV0b2NvbXBsZXRlRm9ybTogQXV0b2NvbXBsZXRlRm9ybTtcbiAgICBwcm90ZWN0ZWQgYWpheFByb3ZpZGVyOiBBamF4UHJvdmlkZXI7XG4gICAgcHJvdGVjdGVkIHN1Ym1pdEJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVGb3JtID0gPEF1dG9jb21wbGV0ZUZvcm0+ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmF1dG9jb21wbGV0ZUZvcm1DbGFzc05hbWUpWzBdO1xuICAgICAgICB0aGlzLmFqYXhQcm92aWRlciA9IDxBamF4UHJvdmlkZXI+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fcHJvdmlkZXJgKVswXTtcbiAgICAgICAgaWYgKHRoaXMuc3VibWl0QnV0dG9uQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbiA9IDxIVE1MQnV0dG9uRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuc3VibWl0QnV0dG9uQ2xhc3NOYW1lKVswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tYXBBdXRvY29tcGxldGVGb3JtU2V0RXZlbnQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwQXV0b2NvbXBsZXRlRm9ybVNldEV2ZW50KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihFdmVudHMuU0VULCAoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB0aGlzLm9uQXV0b2NvbXBsZXRlU2V0KGV2ZW50KSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQXV0b2NvbXBsZXRlU2V0KGV2ZW50OiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbmRSZXF1ZXN0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdG9nZ2xlU3VibWl0QnV0dG9uKGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN1Ym1pdEJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIHNlbmRSZXF1ZXN0KGV2ZW50OiBDdXN0b21FdmVudCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLnRvZ2dsZVN1Ym1pdEJ1dHRvbigpO1xuICAgICAgICB0aGlzLmFqYXhQcm92aWRlci5xdWVyeVBhcmFtcy5zZXQodGhpcy5xdWVyeVN0cmluZywgZXZlbnQuZGV0YWlsLnZhbHVlKTtcbiAgICAgICAgYXdhaXQgdGhpcy5hamF4UHJvdmlkZXIuZmV0Y2goKTtcbiAgICAgICAgdGhpcy50b2dnbGVTdWJtaXRCdXR0b24oZmFsc2UpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgYXV0b2NvbXBsZXRlRm9ybUNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZS1mb3JtLWNsYXNzLW5hbWUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHF1ZXJ5U3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgncXVlcnktc3RyaW5nJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBzdWJtaXRCdXR0b25DbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdzdWJtaXQtYnV0dG9uLWNsYXNzLW5hbWUnKTtcbiAgICB9XG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTogbWF4LWZpbGUtbGluZS1jb3VudCAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvY29tcG9uZW50JztcbmltcG9ydCBBamF4UHJvdmlkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tb2xlY3VsZXMvYWpheC1wcm92aWRlci9hamF4LXByb3ZpZGVyJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gtZXMvZGVib3VuY2UnO1xuXG5leHBvcnQgZW51bSBFdmVudHMge1xuICAgIEZFVENISU5HID0gJ2ZldGNoaW5nJyxcbiAgICBGRVRDSEVEID0gJ2ZldGNoZWQnLFxuICAgIENIQU5HRSA9ICdjaGFuZ2UnLFxuICAgIFNFVCA9ICdzZXQnLFxuICAgIFVOU0VUID0gJ3Vuc2V0Jyxcbn1cblxuLyoqXG4gKiBAZXZlbnQgZmV0Y2hpbmcgQW4gZXZlbnQgd2hpY2ggaXMgdHJpZ2dlcmVkIHdoZW4gYW4gYWpheCByZXF1ZXN0IGlzIHNlbnQgdG8gdGhlIHNlcnZlci5cbiAqIEBldmVudCBmZXRjaGVkIEFuIGV2ZW50IHdoaWNoIGlzIHRyaWdnZXJlZCB3aGVuIGFuIGFqYXggcmVxdWVzdCBpcyBjbG9zZWQuXG4gKiBAZXZlbnQgY2hhbmdlIEFuIGV2ZW50IHdoaWNoIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzZWFyY2ggZmllbGQgaXMgY2hhbmdlZC5cbiAqIEBldmVudCBzZXQgQW4gZXZlbnQgd2hpY2ggaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGVsZW1lbnQgb2YgYW4gYXV0b2NvbXBsZXRlIHN1Z2dlc3Rpb24gaXMgc2VsZWN0ZWQuXG4gKiBAZXZlbnQgdW5zZXQgQW4gZXZlbnQgd2hpY2ggaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGVsZW1lbnQgb2YgYW4gYXV0b2NvbXBsZXRlIHN1Z2dlc3Rpb24gaXMgcmVtb3ZlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b2NvbXBsZXRlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgdGhlIEFqYXggb3BlcmF0aW9ucy5cbiAgICAgKi9cbiAgICBhamF4UHJvdmlkZXI6IEFqYXhQcm92aWRlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZXh0IGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgdGV4dElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgdmFsdWVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250YWlucyBvZiB0aGUgc3VnZ2VzdGlvbnMuXG4gICAgICovXG4gICAgc3VnZ2VzdGlvbnNDb250YWluZXI6IEhUTUxFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiB0aGUgc3VnZ2VzdGlvbnMgaXRlbXMuXG4gICAgICovXG4gICAgc3VnZ2VzdGlvbkl0ZW1zOiBIVE1MRWxlbWVudFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRyaWdnZXIgb2YgdGhlIGZvcm0gY2xlYXJpbmcuXG4gICAgICovXG4gICAgY2xlYW5CdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhc3Qgc2VsZWN0ZWQgc2FnZ2VzdGlvbiBpdGVtLlxuICAgICAqL1xuICAgIGxhc3RTZWxlY3RlZEl0ZW06IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCBpbmplY3RvcnNFeHRyYVF1ZXJ5VmFsdWVMaXN0OiBIVE1MU2VsZWN0RWxlbWVudFtdIHwgSFRNTElucHV0RWxlbWVudFtdO1xuICAgIHByb3RlY3RlZCBleHRyYVF1ZXJ5VmFsdWVzID0gbmV3IE1hcCgpO1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWpheFByb3ZpZGVyID0gPEFqYXhQcm92aWRlcj50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19wcm92aWRlcmApWzBdO1xuICAgICAgICB0aGlzLnRleHRJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3RleHQtaW5wdXRgKVswXTtcbiAgICAgICAgdGhpcy52YWx1ZUlucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fdmFsdWUtaW5wdXRgKVswXTtcbiAgICAgICAgdGhpcy5zdWdnZXN0aW9uc0NvbnRhaW5lciA9IDxIVE1MRWxlbWVudD50aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19zdWdnZXN0aW9uc2ApWzBdO1xuICAgICAgICB0aGlzLmNsZWFuQnV0dG9uID0gPEhUTUxCdXR0b25FbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2NsZWFuLWJ1dHRvbmApWzBdO1xuXG4gICAgICAgIGlmICh0aGlzLmluamVjdG9yc0V4dHJhUXVlcnlWYWx1ZUNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdGhpcy5pbmplY3RvcnNFeHRyYVF1ZXJ5VmFsdWVMaXN0ID0gPEhUTUxTZWxlY3RFbGVtZW50W10gfCBIVE1MSW5wdXRFbGVtZW50W10+KFxuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmluamVjdG9yc0V4dHJhUXVlcnlWYWx1ZUNsYXNzTmFtZSkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b0luaXRFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9Mb2FkSW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRleHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgICAgIGRlYm91bmNlKCgpID0+IHRoaXMub25JbnB1dCgpLCB0aGlzLmRlYm91bmNlRGVsYXkpLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnRleHRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2JsdXInLFxuICAgICAgICAgICAgZGVib3VuY2UoKCkgPT4gdGhpcy5vbkJsdXIoKSwgdGhpcy5kZWJvdW5jZURlbGF5KSxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy50ZXh0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB0aGlzLm9uRm9jdXMoKSk7XG4gICAgICAgIHRoaXMudGV4dElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHRoaXMub25LZXlEb3duKGV2ZW50KSk7XG4gICAgICAgIGlmICh0aGlzLmNsZWFuQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5vbkNsZWFuQnV0dG9uQ2xpY2soKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXV0b0xvYWRJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRleHRJbnB1dC5mb2N1cygpO1xuICAgICAgICB0aGlzLmxvYWRTdWdnZXN0aW9ucygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkNsZWFuQnV0dG9uQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYW4oKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEV2ZW50cy5VTlNFVCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQmx1cigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oaWRlU3VnZ2VzdGlvbnMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Gb2N1cygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRUZXh0Lmxlbmd0aCA8IHRoaXMubWluTGV0dGVycykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd1N1Z2dlc3Rpb25zKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uSW5wdXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hDdXN0b21FdmVudChFdmVudHMuQ0hBTkdFKTtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRUZXh0Lmxlbmd0aCA+PSB0aGlzLm1pbkxldHRlcnMpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFN1Z2dlc3Rpb25zKCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhpZGVTdWdnZXN0aW9ucygpO1xuICAgICAgICBpZiAoISF0aGlzLmlucHV0VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEV2ZW50cy5VTlNFVCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2hvd1N1Z2dlc3Rpb25zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBoaWRlU3VnZ2VzdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldFF1ZXJ5UGFyYW1zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmV4dHJhUXVlcnlWYWx1ZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5hamF4UHJvdmlkZXIucXVlcnlQYXJhbXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5hamF4UHJvdmlkZXIucXVlcnlQYXJhbXMuc2V0KHRoaXMucXVlcnlTdHJpbmcsIHRoaXMuaW5wdXRUZXh0KTtcblxuICAgICAgICBpZiAoIXRoaXMuaW5qZWN0b3JzRXh0cmFRdWVyeVZhbHVlTGlzdCB8fCAhdGhpcy5pbmplY3RvcnNFeHRyYVF1ZXJ5VmFsdWVMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbmplY3RvcnNFeHRyYVF1ZXJ5VmFsdWVMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmICghaXRlbS5uYW1lIHx8ICFpdGVtLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFqYXhQcm92aWRlci5xdWVyeVBhcmFtcy5zZXQoaXRlbS5uYW1lLCBpdGVtLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuZXh0cmFRdWVyeVZhbHVlcy5zZXQoaXRlbS5uYW1lLCBpdGVtLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgYW5kIHRyaWdnZXJzIHRoZSBjdXN0b20gZmV0Y2hpbmcgYW5kIGZldGNoZWQgZXZlbnRzLlxuICAgICAqL1xuICAgIGFzeW5jIGxvYWRTdWdnZXN0aW9ucygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEN1c3RvbUV2ZW50KEV2ZW50cy5GRVRDSElORyk7XG4gICAgICAgIHRoaXMuc2hvd1N1Z2dlc3Rpb25zKCk7XG4gICAgICAgIHRoaXMuc2V0UXVlcnlQYXJhbXMoKTtcblxuICAgICAgICBhd2FpdCB0aGlzLmFqYXhQcm92aWRlci5mZXRjaCgpO1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZTogZGVwcmVjYXRpb24gKi9cbiAgICAgICAgdGhpcy5zdWdnZXN0aW9uSXRlbXMgPSA8SFRNTEVsZW1lbnRbXT4oXG4gICAgICAgICAgICBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnNDb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLnN1Z2dlc3RlZEl0ZW1DbGFzc05hbWUpIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VnZ2VzdGlvbnNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCh0aGlzLnN1Z2dlc3RlZEl0ZW1TZWxlY3RvciksXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIC8qIHRzbGludDplbmFibGU6IGRlcHJlY2F0aW9uICovXG4gICAgICAgIHRoaXMubGFzdFNlbGVjdGVkSXRlbSA9IHRoaXMuc3VnZ2VzdGlvbkl0ZW1zWzBdO1xuICAgICAgICB0aGlzLm1hcFN1Z2dlc3Rpb25JdGVtc0V2ZW50cygpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRXZlbnRzLkZFVENIRUQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtYXBTdWdnZXN0aW9uSXRlbXNFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbkl0ZW1zLmZvckVhY2goKGl0ZW06IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5vbkl0ZW1DbGljayhpdGVtKSk7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHRoaXMub25JdGVtU2VsZWN0ZWQoaXRlbSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25JdGVtQ2xpY2soaXRlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dFRleHQgPSBpdGVtLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUodGhpcy52YWx1ZUF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ3VzdG9tRXZlbnQoRXZlbnRzLlNFVCwge1xuICAgICAgICAgICAgdGV4dDogdGhpcy5pbnB1dFRleHQsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5pbnB1dFZhbHVlLFxuICAgICAgICAgICAgZXh0cmFWYWx1ZXM6IHRoaXMuZXh0cmFRdWVyeVZhbHVlcyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uSXRlbVNlbGVjdGVkKGl0ZW06IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hhbmdlU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjaGFuZ2VTZWxlY3RlZEl0ZW0oaXRlbTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRJdGVtLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zZWxlY3RlZElucHV0Q2xhc3MpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQodGhpcy5zZWxlY3RlZElucHV0Q2xhc3MpO1xuICAgICAgICB0aGlzLmxhc3RTZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1Z2dlc3Rpb25JdGVtcyAmJiB0aGlzLmlucHV0VGV4dC5sZW5ndGggPCB0aGlzLm1pbkxldHRlcnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleURvd25BcnJvd1VwKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgICAgIHRoaXMub25LZXlEb3duQXJyb3dEb3duKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleURvd25FbnRlcihldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25LZXlEb3duQXJyb3dVcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGFzdFNlbGVjdGVkSXRlbUluZGV4ID0gdGhpcy5zdWdnZXN0aW9uSXRlbXMuaW5kZXhPZih0aGlzLmxhc3RTZWxlY3RlZEl0ZW0pO1xuICAgICAgICBjb25zdCBlbGVtZW50SW5kZXggPSBsYXN0U2VsZWN0ZWRJdGVtSW5kZXggLSAxO1xuICAgICAgICBjb25zdCBsYXN0U3VnZ2VzdGlvbkl0ZW1JbmRleCA9IHRoaXMuc3VnZ2VzdGlvbkl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnN1Z2dlc3Rpb25JdGVtc1tlbGVtZW50SW5kZXggPCAwID8gbGFzdFN1Z2dlc3Rpb25JdGVtSW5kZXggOiBlbGVtZW50SW5kZXhdO1xuICAgICAgICB0aGlzLmNoYW5nZVNlbGVjdGVkSXRlbShpdGVtKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25LZXlEb3duQXJyb3dEb3duKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBsYXN0U2VsZWN0ZWRJdGVtSW5kZXggPSB0aGlzLnN1Z2dlc3Rpb25JdGVtcy5pbmRleE9mKHRoaXMubGFzdFNlbGVjdGVkSXRlbSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRJbmRleCA9IGxhc3RTZWxlY3RlZEl0ZW1JbmRleCArIDE7XG4gICAgICAgIGNvbnN0IGxhc3RTdWdnZXN0aW9uSXRlbUluZGV4ID0gdGhpcy5zdWdnZXN0aW9uSXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuc3VnZ2VzdGlvbkl0ZW1zW2VsZW1lbnRJbmRleCA+IGxhc3RTdWdnZXN0aW9uSXRlbUluZGV4ID8gMCA6IGVsZW1lbnRJbmRleF07XG4gICAgICAgIHRoaXMuY2hhbmdlU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbktleURvd25FbnRlcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmxhc3RTZWxlY3RlZEl0ZW0uY2xpY2soKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGlucHV0IHZhbHVlIGFuZCB0aGUgdHlwZWQgdGV4dC5cbiAgICAgKi9cbiAgICBjbGVhbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dFRleHQgPSAnJztcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3NzIHF1ZXJ5IHNlbGVjdG9yIG9mIHRoZSBzZWxlY3RlZCBzdWdnZXN0aW9uIGl0ZW1zLlxuICAgICAqL1xuICAgIGdldCBzZWxlY3RlZElucHV0Q2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGU6IGRlcHJlY2F0aW9uICovXG4gICAgICAgIHJldHVybiBgJHt0aGlzLnN1Z2dlc3RlZEl0ZW1DbGFzc05hbWV9LS1zZWxlY3RlZGAgfHwgYCR7dGhpcy5zdWdnZXN0ZWRJdGVtU2VsZWN0b3J9LS1zZWxlY3RlZGAuc3Vic3RyKDEpO1xuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlOiBkZXByZWNhdGlvbiAqL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHR5cGVkIHRleHQgZnJvbSB0aGUgZm9ybSBmaWVsZC5cbiAgICAgKi9cbiAgICBnZXQgaW5wdXRUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHRJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhbiBpbnB1dCB0ZXh0LlxuICAgICAqIEBwYXJhbSB2YWx1ZSBBIHR5cGVkIHRleHQgaW4gdGhlIGlucHV0IGZpZWxkLlxuICAgICAqL1xuICAgIHNldCBpbnB1dFRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRleHRJbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHZhbHVlIGF0dHJpYnV0ZSBmcm9tIHRoZSBpbnB1dCBmb3JtIGZpZWxkLlxuICAgICAqL1xuICAgIGdldCBpbnB1dFZhbHVlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlSW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgaW5wdXQgdmFsdWUuXG4gICAgICovXG4gICAgc2V0IGlucHV0VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZhbHVlSW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjc3MgcXVlcnkgc2VsZWN0b3IgZm9yIHRoZSBhamF4UHJvdmlkZXIgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgcXVlcnlTdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdxdWVyeS1zdHJpbmcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB2YWx1ZSBhdHRyaWJ1dGUgbmFtZSBmb3IgdGhlIGlucHV0IGVsZW1lbnQgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgdmFsdWVBdHRyaWJ1dGVOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUtYXR0cmlidXRlLW5hbWUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjc3MgcXVlcnkgc2VsZWN0b3Igb2YgdGhlIHN1Z2dlc3Rpb24gaXRlbXMuXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCBVc2Ugc3VnZ2VzdGVkSXRlbUNsYXNzTmFtZSgpIGluc3RlYWQuXG4gICAgICovXG4gICAgZ2V0IHN1Z2dlc3RlZEl0ZW1TZWxlY3RvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3N1Z2dlc3RlZC1pdGVtLXNlbGVjdG9yJyk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBzdWdnZXN0ZWRJdGVtQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc3VnZ2VzdGVkLWl0ZW0tY2xhc3MtbmFtZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgaW5qZWN0b3JzRXh0cmFRdWVyeVZhbHVlQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnaW5qZWN0b3JzLWV4dHJhLXF1ZXJ5LXZhbHVlLWNsYXNzLW5hbWUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgdGltZSBkZWxheSBmb3IgdGhlIGJsdXIgYW5kIGlucHV0IGV2ZW50cy5cbiAgICAgKi9cbiAgICBnZXQgZGVib3VuY2VEZWxheSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuZ2V0QXR0cmlidXRlKCdkZWJvdW5jZS1kZWxheScpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgbGV0dGVycyB3aGljaCwgdXBvbiBlbnRlcmluZyBpbiBmb3JtIGZpZWxkLCBpcyBzdWZmaWNpZW50IHRvIHNob3csIGhpZGUgb3IgbG9hZCB0aGVcbiAgICAgKiBzdWdnZXN0aW9ucy5cbiAgICAgKi9cbiAgICBnZXQgbWluTGV0dGVycygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMuZ2V0QXR0cmlidXRlKCdtaW4tbGV0dGVycycpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGlmIHRoZSBhdXRvIGxvYWQgb2Ygc3VnZ2VzdGlvbnMgaXMgZW5hYmxlZC5cbiAgICAgKi9cbiAgICBnZXQgYXV0b0luaXRFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2F1dG8taW5pdCcpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=