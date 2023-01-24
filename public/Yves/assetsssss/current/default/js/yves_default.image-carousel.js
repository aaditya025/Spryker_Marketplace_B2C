(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["image-carousel"],{

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/image-carousel/image-carousel.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/image-carousel/image-carousel.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageCarousel; });
/* harmony import */ var _simple_carousel_simple_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../simple-carousel/simple-carousel */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/simple-carousel/simple-carousel.ts");

class ImageCarousel extends _simple_carousel_simple_carousel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.defaultImageUrl = void 0;
    this.currentSlideImage = void 0;
  }

  readyCallback() {}

  init() {
    this.getCurrentSlideImage();
    this.setDefaultImageUrl();
    super.init();
  }
  /**
   * Performs sliding of slider items.
   */


  slide() {
    super.slide();
    this.getCurrentSlideImage();
    this.setDefaultImageUrl();
  }
  /**
   * Sets the new slide image with a new URL.
   * @param url An image URL.
   */


  set slideImageUrl(url) {
    this.currentSlideImage.src = url;
  }
  /**
   * Sets the slide image with a default URL.
   */


  restoreDefaultImageUrl() {
    this.currentSlideImage.src = this.defaultImageUrl;
  }

  getCurrentSlideImage() {
    var currentSlide = this.getElementsByClassName(this.jsName + "__slide")[this.viewCurrentIndex];
    this.currentSlideImage = currentSlide.getElementsByTagName('img')[0];
  }

  setDefaultImageUrl() {
    this.defaultImageUrl = this.currentSlideImage.dataset.src || this.currentSlideImage.src;
  }

}

/***/ }),

/***/ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/simple-carousel/simple-carousel.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/components/molecules/simple-carousel/simple-carousel.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleCarousel; });
/* harmony import */ var _models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class SimpleCarousel extends _models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Switches a slide to a previous one.
   */

  /**
   * Switches a slide to a next one.
   */

  /**
   * The current slider.
   */

  /**
   * The number of the slides.
   */

  /**
   * The slider width.
   */

  /**
   * Thr dot-switch elements below the slides.
   */

  /**
   * The number of views.
   */

  /**
   * The index of the active slide.
   */

  /**
   * Dot element selector.
   */

  /**
   * Dot element "is current" modifier.
   */
  constructor() {
    super();
    this.triggerPrev = void 0;
    this.triggerNext = void 0;
    this.slider = void 0;
    this.slidesCount = void 0;
    this.slideWidth = void 0;
    this.dots = void 0;
    this.viewsCount = void 0;
    this.viewCurrentIndex = 0;
    this.dotSelector = void 0;
    this.dotCurrentModifier = void 0;
    this.fullSliderWidth = 100;
    this.dotSelector = this.jsName + "__dot";
    this.dotCurrentModifier = this.name + "__dot--current";
  }

  readyCallback() {}

  init() {
    this.slidesCount = this.getElementsByClassName(this.jsName + "__slide").length;

    if (this.slidesCount <= 1) {
      return;
    }

    this.triggerPrev = this.getElementsByClassName(this.jsName + "__prev")[0];
    this.triggerNext = this.getElementsByClassName(this.jsName + "__next")[0];
    this.slider = this.getElementsByClassName(this.jsName + "__slider")[0];
    this.slideWidth = this.fullSliderWidth / this.slidesToShow;
    this.dots = Array.from(this.getElementsByClassName(this.dotSelector));
    this.viewsCount = this.getViewsCount();
    this.mapEvents();
  }
  /**
   * Gets the number of slides.
   */


  getViewsCount() {
    return Math.ceil((this.slidesCount - this.slidesToShow) / this.slidesToScroll) + 1;
  }

  mapEvents() {
    this.triggerPrev.addEventListener('click', event => this.onPrevClick(event));
    this.triggerNext.addEventListener('click', event => this.onNextClick(event));
    this.dots.forEach(dot => {
      dot.addEventListener('click', event => this.onDotClick(event));
    });
  }

  onPrevClick(event) {
    event.preventDefault();
    this.loadPrevViewIndex();
    this.slide();
    this.updateCurrentDot();
  }

  onNextClick(event) {
    event.preventDefault();
    this.loadNextViewIndex();
    this.slide();
    this.updateCurrentDot();
  }

  onDotClick(event) {
    event.preventDefault();
    this.loadViewIndexFromDot(event.target);
    this.slide();
    this.updateCurrentDot();
  }
  /**
   * Switches the current slide to the previous one.
   */


  loadPrevViewIndex() {
    this.viewCurrentIndex = this.viewCurrentIndex - 1;

    if (this.viewCurrentIndex < 0) {
      this.viewCurrentIndex = this.viewsCount - 1;
    }
  }
  /**
   * Switches the current slide to the next one.
   */


  loadNextViewIndex() {
    this.viewCurrentIndex = this.viewCurrentIndex + 1;

    if (this.viewCurrentIndex >= this.viewsCount) {
      this.viewCurrentIndex = 0;
    }
  }
  /**
   * Switches to the slide based on the provided dot element.
   * @param dot HTMLElement corresponding to the new target slide that has to be loaded.
   */


  loadViewIndexFromDot(dot) {
    this.viewCurrentIndex = this.dots.indexOf(dot);

    if (this.viewCurrentIndex === -1) {
      this.viewCurrentIndex = 0;
    }
  }
  /**
   * Performs sliding of slider items.
   */


  slide() {
    var slidesToSlide = this.slidesToScroll * this.viewCurrentIndex;

    if (this.slidesToScroll + slidesToSlide > this.slidesCount) {
      slidesToSlide = slidesToSlide - (this.slidesCount - slidesToSlide);
    }

    var offset = -(slidesToSlide * this.slideWidth);
    this.slider.style.transform = "translateX(" + offset + "%)";
  }
  /**
   * Toggles the active class and the modifier on the current dot.
   */


  updateCurrentDot() {
    if (this.dots.length === 0) {
      return;
    }

    this.querySelector("." + this.dotSelector + "." + this.dotCurrentModifier).classList.remove(this.dotCurrentModifier);
    this.dots[this.viewCurrentIndex].classList.add(this.dotCurrentModifier);
  }
  /**
   * Gets the number of slides to be shown.
   */


  get slidesToShow() {
    return parseInt(this.getAttribute('slides-to-show') || '0');
  }
  /**
   * Gets the number of slides to be scrolled by an interaction.
   */


  get slidesToScroll() {
    return parseInt(this.getAttribute('slides-to-scroll') || '0');
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ByeWtlci1zaG9wL3Nob3AtdWkvc3JjL1NwcnlrZXJTaG9wL1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvaW1hZ2UtY2Fyb3VzZWwvaW1hZ2UtY2Fyb3VzZWwudHMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3NwcnlrZXItc2hvcC9zaG9wLXVpL3NyYy9TcHJ5a2VyU2hvcC9ZdmVzL1Nob3BVaS9UaGVtZS9kZWZhdWx0L2NvbXBvbmVudHMvbW9sZWN1bGVzL3NpbXBsZS1jYXJvdXNlbC9zaW1wbGUtY2Fyb3VzZWwudHMiXSwibmFtZXMiOlsiSW1hZ2VDYXJvdXNlbCIsIlNpbXBsZUNhcm91c2VsIiwiZGVmYXVsdEltYWdlVXJsIiwiY3VycmVudFNsaWRlSW1hZ2UiLCJyZWFkeUNhbGxiYWNrIiwiaW5pdCIsImdldEN1cnJlbnRTbGlkZUltYWdlIiwic2V0RGVmYXVsdEltYWdlVXJsIiwic2xpZGUiLCJzbGlkZUltYWdlVXJsIiwidXJsIiwic3JjIiwicmVzdG9yZURlZmF1bHRJbWFnZVVybCIsImN1cnJlbnRTbGlkZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJqc05hbWUiLCJ2aWV3Q3VycmVudEluZGV4IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJkYXRhc2V0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJ0cmlnZ2VyUHJldiIsInRyaWdnZXJOZXh0Iiwic2xpZGVyIiwic2xpZGVzQ291bnQiLCJzbGlkZVdpZHRoIiwiZG90cyIsInZpZXdzQ291bnQiLCJkb3RTZWxlY3RvciIsImRvdEN1cnJlbnRNb2RpZmllciIsImZ1bGxTbGlkZXJXaWR0aCIsIm5hbWUiLCJsZW5ndGgiLCJzbGlkZXNUb1Nob3ciLCJBcnJheSIsImZyb20iLCJnZXRWaWV3c0NvdW50IiwibWFwRXZlbnRzIiwiTWF0aCIsImNlaWwiLCJzbGlkZXNUb1Njcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIm9uUHJldkNsaWNrIiwib25OZXh0Q2xpY2siLCJmb3JFYWNoIiwiZG90Iiwib25Eb3RDbGljayIsInByZXZlbnREZWZhdWx0IiwibG9hZFByZXZWaWV3SW5kZXgiLCJ1cGRhdGVDdXJyZW50RG90IiwibG9hZE5leHRWaWV3SW5kZXgiLCJsb2FkVmlld0luZGV4RnJvbURvdCIsInRhcmdldCIsImluZGV4T2YiLCJzbGlkZXNUb1NsaWRlIiwib2Zmc2V0Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLE1BQU1BLGFBQU4sU0FBNEJDLHdFQUE1QixDQUEyQztBQUFBO0FBQUE7QUFBQSxTQUM1Q0MsZUFENEM7QUFBQSxTQUU1Q0MsaUJBRjRDO0FBQUE7O0FBSTVDQyxlQUFhLEdBQVMsQ0FBRTs7QUFFeEJDLE1BQUksR0FBUztBQUNuQixTQUFLQyxvQkFBTDtBQUNBLFNBQUtDLGtCQUFMO0FBQ0EsVUFBTUYsSUFBTjtBQUNIO0FBRUQ7QUFDSjtBQUNBOzs7QUFDSUcsT0FBSyxHQUFTO0FBQ1YsVUFBTUEsS0FBTjtBQUNBLFNBQUtGLG9CQUFMO0FBQ0EsU0FBS0Msa0JBQUw7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7QUFDcUIsTUFBYkUsYUFBYSxDQUFDQyxHQUFELEVBQWM7QUFDM0IsU0FBS1AsaUJBQUwsQ0FBdUJRLEdBQXZCLEdBQTZCRCxHQUE3QjtBQUNIO0FBRUQ7QUFDSjtBQUNBOzs7QUFDSUUsd0JBQXNCLEdBQVM7QUFDM0IsU0FBS1QsaUJBQUwsQ0FBdUJRLEdBQXZCLEdBQTZCLEtBQUtULGVBQWxDO0FBQ0g7O0FBRVNJLHNCQUFvQixHQUFTO0FBQ25DLFFBQU1PLFlBQVksR0FBZ0IsS0FBS0Msc0JBQUwsQ0FBK0IsS0FBS0MsTUFBcEMsY0FBcUQsS0FBS0MsZ0JBQTFELENB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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbXBsZUNhcm91c2VsIGZyb20gJy4uL3NpbXBsZS1jYXJvdXNlbC9zaW1wbGUtY2Fyb3VzZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUNhcm91c2VsIGV4dGVuZHMgU2ltcGxlQ2Fyb3VzZWwge1xuICAgIHByb3RlY3RlZCBkZWZhdWx0SW1hZ2VVcmw6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgY3VycmVudFNsaWRlSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZXRDdXJyZW50U2xpZGVJbWFnZSgpO1xuICAgICAgICB0aGlzLnNldERlZmF1bHRJbWFnZVVybCgpO1xuICAgICAgICBzdXBlci5pbml0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgc2xpZGluZyBvZiBzbGlkZXIgaXRlbXMuXG4gICAgICovXG4gICAgc2xpZGUoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLnNsaWRlKCk7XG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFNsaWRlSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0SW1hZ2VVcmwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBuZXcgc2xpZGUgaW1hZ2Ugd2l0aCBhIG5ldyBVUkwuXG4gICAgICogQHBhcmFtIHVybCBBbiBpbWFnZSBVUkwuXG4gICAgICovXG4gICAgc2V0IHNsaWRlSW1hZ2VVcmwodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2xpZGVJbWFnZS5zcmMgPSB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc2xpZGUgaW1hZ2Ugd2l0aCBhIGRlZmF1bHQgVVJMLlxuICAgICAqL1xuICAgIHJlc3RvcmVEZWZhdWx0SW1hZ2VVcmwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudFNsaWRlSW1hZ2Uuc3JjID0gdGhpcy5kZWZhdWx0SW1hZ2VVcmw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldEN1cnJlbnRTbGlkZUltYWdlKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjdXJyZW50U2xpZGUgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fc2xpZGVgKVt0aGlzLnZpZXdDdXJyZW50SW5kZXhdO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFNsaWRlSW1hZ2UgPSBjdXJyZW50U2xpZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXREZWZhdWx0SW1hZ2VVcmwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVmYXVsdEltYWdlVXJsID0gdGhpcy5jdXJyZW50U2xpZGVJbWFnZS5kYXRhc2V0LnNyYyB8fCB0aGlzLmN1cnJlbnRTbGlkZUltYWdlLnNyYztcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL21vZGVscy9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVDYXJvdXNlbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogU3dpdGNoZXMgYSBzbGlkZSB0byBhIHByZXZpb3VzIG9uZS5cbiAgICAgKi9cbiAgICB0cmlnZ2VyUHJldjogSFRNTEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBTd2l0Y2hlcyBhIHNsaWRlIHRvIGEgbmV4dCBvbmUuXG4gICAgICovXG4gICAgdHJpZ2dlck5leHQ6IEhUTUxFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc2xpZGVyLlxuICAgICAqL1xuICAgIHNsaWRlcjogSFRNTEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHRoZSBzbGlkZXMuXG4gICAgICovXG4gICAgc2xpZGVzQ291bnQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzbGlkZXIgd2lkdGguXG4gICAgICovXG4gICAgc2xpZGVXaWR0aDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhyIGRvdC1zd2l0Y2ggZWxlbWVudHMgYmVsb3cgdGhlIHNsaWRlcy5cbiAgICAgKi9cbiAgICBkb3RzOiBIVE1MRWxlbWVudFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiB2aWV3cy5cbiAgICAgKi9cbiAgICB2aWV3c0NvdW50OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggb2YgdGhlIGFjdGl2ZSBzbGlkZS5cbiAgICAgKi9cbiAgICB2aWV3Q3VycmVudEluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICogRG90IGVsZW1lbnQgc2VsZWN0b3IuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZG90U2VsZWN0b3I6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIERvdCBlbGVtZW50IFwiaXMgY3VycmVudFwiIG1vZGlmaWVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRvdEN1cnJlbnRNb2RpZmllcjogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBmdWxsU2xpZGVyV2lkdGg6IG51bWJlciA9IDEwMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuZG90U2VsZWN0b3IgPSBgJHt0aGlzLmpzTmFtZX1fX2RvdGA7XG4gICAgICAgIHRoaXMuZG90Q3VycmVudE1vZGlmaWVyID0gYCR7dGhpcy5uYW1lfV9fZG90LS1jdXJyZW50YDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVhZHlDYWxsYmFjaygpOiB2b2lkIHt9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zbGlkZXNDb3VudCA9IHRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX3NsaWRlYCkubGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aGlzLnNsaWRlc0NvdW50IDw9IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJpZ2dlclByZXYgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fcHJldmApWzBdO1xuICAgICAgICB0aGlzLnRyaWdnZXJOZXh0ID0gPEhUTUxFbGVtZW50PnRoaXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX25leHRgKVswXTtcbiAgICAgICAgdGhpcy5zbGlkZXIgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fc2xpZGVyYClbMF07XG4gICAgICAgIHRoaXMuc2xpZGVXaWR0aCA9IHRoaXMuZnVsbFNsaWRlcldpZHRoIC8gdGhpcy5zbGlkZXNUb1Nob3c7XG4gICAgICAgIHRoaXMuZG90cyA9IDxIVE1MRWxlbWVudFtdPkFycmF5LmZyb20odGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuZG90U2VsZWN0b3IpKTtcbiAgICAgICAgdGhpcy52aWV3c0NvdW50ID0gdGhpcy5nZXRWaWV3c0NvdW50KCk7XG5cbiAgICAgICAgdGhpcy5tYXBFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBudW1iZXIgb2Ygc2xpZGVzLlxuICAgICAqL1xuICAgIGdldFZpZXdzQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgodGhpcy5zbGlkZXNDb3VudCAtIHRoaXMuc2xpZGVzVG9TaG93KSAvIHRoaXMuc2xpZGVzVG9TY3JvbGwpICsgMTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbWFwRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyaWdnZXJQcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vblByZXZDbGljayhldmVudCkpO1xuICAgICAgICB0aGlzLnRyaWdnZXJOZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbk5leHRDbGljayhldmVudCkpO1xuICAgICAgICB0aGlzLmRvdHMuZm9yRWFjaCgoZG90OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbkRvdENsaWNrKGV2ZW50KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblByZXZDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5sb2FkUHJldlZpZXdJbmRleCgpO1xuICAgICAgICB0aGlzLnNsaWRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERvdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbk5leHRDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5sb2FkTmV4dFZpZXdJbmRleCgpO1xuICAgICAgICB0aGlzLnNsaWRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERvdCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkRvdENsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmxvYWRWaWV3SW5kZXhGcm9tRG90KDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpO1xuICAgICAgICB0aGlzLnNsaWRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERvdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN3aXRjaGVzIHRoZSBjdXJyZW50IHNsaWRlIHRvIHRoZSBwcmV2aW91cyBvbmUuXG4gICAgICovXG4gICAgbG9hZFByZXZWaWV3SW5kZXgoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlld0N1cnJlbnRJbmRleCA9IHRoaXMudmlld0N1cnJlbnRJbmRleCAtIDE7XG5cbiAgICAgICAgaWYgKHRoaXMudmlld0N1cnJlbnRJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMudmlld0N1cnJlbnRJbmRleCA9IHRoaXMudmlld3NDb3VudCAtIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTd2l0Y2hlcyB0aGUgY3VycmVudCBzbGlkZSB0byB0aGUgbmV4dCBvbmUuXG4gICAgICovXG4gICAgbG9hZE5leHRWaWV3SW5kZXgoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudmlld0N1cnJlbnRJbmRleCA9IHRoaXMudmlld0N1cnJlbnRJbmRleCArIDE7XG5cbiAgICAgICAgaWYgKHRoaXMudmlld0N1cnJlbnRJbmRleCA+PSB0aGlzLnZpZXdzQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMudmlld0N1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTd2l0Y2hlcyB0byB0aGUgc2xpZGUgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGRvdCBlbGVtZW50LlxuICAgICAqIEBwYXJhbSBkb3QgSFRNTEVsZW1lbnQgY29ycmVzcG9uZGluZyB0byB0aGUgbmV3IHRhcmdldCBzbGlkZSB0aGF0IGhhcyB0byBiZSBsb2FkZWQuXG4gICAgICovXG4gICAgbG9hZFZpZXdJbmRleEZyb21Eb3QoZG90OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLnZpZXdDdXJyZW50SW5kZXggPSB0aGlzLmRvdHMuaW5kZXhPZihkb3QpO1xuXG4gICAgICAgIGlmICh0aGlzLnZpZXdDdXJyZW50SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdDdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgc2xpZGluZyBvZiBzbGlkZXIgaXRlbXMuXG4gICAgICovXG4gICAgc2xpZGUoKTogdm9pZCB7XG4gICAgICAgIGxldCBzbGlkZXNUb1NsaWRlID0gdGhpcy5zbGlkZXNUb1Njcm9sbCAqIHRoaXMudmlld0N1cnJlbnRJbmRleDtcblxuICAgICAgICBpZiAodGhpcy5zbGlkZXNUb1Njcm9sbCArIHNsaWRlc1RvU2xpZGUgPiB0aGlzLnNsaWRlc0NvdW50KSB7XG4gICAgICAgICAgICBzbGlkZXNUb1NsaWRlID0gc2xpZGVzVG9TbGlkZSAtICh0aGlzLnNsaWRlc0NvdW50IC0gc2xpZGVzVG9TbGlkZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvZmZzZXQgPSAtKHNsaWRlc1RvU2xpZGUgKiB0aGlzLnNsaWRlV2lkdGgpO1xuICAgICAgICB0aGlzLnNsaWRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke29mZnNldH0lKWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgYWN0aXZlIGNsYXNzIGFuZCB0aGUgbW9kaWZpZXIgb24gdGhlIGN1cnJlbnQgZG90LlxuICAgICAqL1xuICAgIHVwZGF0ZUN1cnJlbnREb3QoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRvdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuZG90U2VsZWN0b3J9LiR7dGhpcy5kb3RDdXJyZW50TW9kaWZpZXJ9YCkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRvdEN1cnJlbnRNb2RpZmllcik7XG5cbiAgICAgICAgdGhpcy5kb3RzW3RoaXMudmlld0N1cnJlbnRJbmRleF0uY2xhc3NMaXN0LmFkZCh0aGlzLmRvdEN1cnJlbnRNb2RpZmllcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbnVtYmVyIG9mIHNsaWRlcyB0byBiZSBzaG93bi5cbiAgICAgKi9cbiAgICBnZXQgc2xpZGVzVG9TaG93KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLmdldEF0dHJpYnV0ZSgnc2xpZGVzLXRvLXNob3cnKSB8fCAnMCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIG51bWJlciBvZiBzbGlkZXMgdG8gYmUgc2Nyb2xsZWQgYnkgYW4gaW50ZXJhY3Rpb24uXG4gICAgICovXG4gICAgZ2V0IHNsaWRlc1RvU2Nyb2xsKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLmdldEF0dHJpYnV0ZSgnc2xpZGVzLXRvLXNjcm9sbCcpIHx8ICcwJyk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==