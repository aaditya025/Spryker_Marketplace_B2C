(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["scroll-parallax"],{

/***/ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/scroll-parallax/scroll-parallax.ts":
/*!***************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/scroll-parallax/scroll-parallax.ts ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollParallax; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

var DIRECTIONS = {
  TOP: 'top',
  DOWN: 'down'
};
var THROTTLE_DURATION = 300;
class ScrollParallax extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.target = void 0;
    this.wrapper = void 0;
    this.windowHeight = void 0;
    this.windowWidth = void 0;
    this.wrapperHeight = void 0;
    this.distanceToWrapper = void 0;
    this.initialized = false;
  }

  readyCallback() {}

  init() {
    this.wrapper = document.getElementsByClassName(this.wrapperClassName)[0];
    this.target = this.wrapper.getElementsByClassName(this.targetClassName)[0];
    this.defineDimensions();
    this.mapEvents();
  }

  mapEvents() {
    window.addEventListener('resize', () => setTimeout(() => this.defineDimensions(), THROTTLE_DURATION));
    window.addEventListener('scroll', this.checkBreakpointsToScroll.bind(this));
  }

  defineDimensions() {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.wrapperHeight = this.wrapper.offsetHeight;
    this.distanceToWrapper = this.getDistanceToWrapper();
  }

  checkBreakpointsToScroll() {
    if (!isNaN(this.minBreakPoint) && !isNaN(this.maxBreakPoint)) {
      if (this.minBreakPoint < this.windowWidth && this.maxBreakPoint > this.windowWidth) {
        this.moveTarget();
        return;
      }

      this.cleanOffset();
    }
  }

  cleanOffset() {
    if (this.initialized) {
      this.initialized = false;
      this.target.removeAttribute('style');
    }
  }

  moveTarget() {
    var scrollHeight = window.scrollY + this.windowHeight;
    var targetOffset = '';

    if (scrollHeight > this.distanceToWrapper) {
      if (this.motionDirection === DIRECTIONS.TOP) {
        targetOffset = "-" + this.getTargetOffset(scrollHeight);
      }

      if (this.motionDirection === DIRECTIONS.DOWN) {
        targetOffset = this.getTargetOffset(scrollHeight);
      }

      if (targetOffset !== '') {
        this.target.style.transform = "translateY(" + targetOffset + ")";
        this.initialized = true;
      }
    }
  }

  getTargetOffset(scrollHeight) {
    return (scrollHeight - this.distanceToWrapper) / this.motionRatio + "px";
  }

  getDistanceToWrapper() {
    var wrapper = this.wrapper;
    var yPosition = 0;

    while (wrapper) {
      yPosition += wrapper.offsetTop - wrapper.scrollTop + wrapper.clientTop;
      wrapper = wrapper.offsetParent;
    }

    return yPosition;
  }

  get wrapperClassName() {
    return this.getAttribute('wrapper-class-name');
  }

  get targetClassName() {
    return this.getAttribute('target-class-name');
  }

  get motionRatio() {
    return +this.getAttribute('motion-ratio');
  }

  get motionDirection() {
    return this.getAttribute('motion-direction');
  }

  get minBreakPoint() {
    return +this.getAttribute('breakpoint-min');
  }

  get maxBreakPoint() {
    return +this.getAttribute('breakpoint-max');
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHl6L1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvc2Nyb2xsLXBhcmFsbGF4L3Njcm9sbC1wYXJhbGxheC50cyJdLCJuYW1lcyI6WyJESVJFQ1RJT05TIiwiVE9QIiwiRE9XTiIsIlRIUk9UVExFX0RVUkFUSU9OIiwiU2Nyb2xsUGFyYWxsYXgiLCJDb21wb25lbnQiLCJ0YXJnZXQiLCJ3cmFwcGVyIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJ3cmFwcGVySGVpZ2h0IiwiZGlzdGFuY2VUb1dyYXBwZXIiLCJpbml0aWFsaXplZCIsInJlYWR5Q2FsbGJhY2siLCJpbml0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwid3JhcHBlckNsYXNzTmFtZSIsInRhcmdldENsYXNzTmFtZSIsImRlZmluZURpbWVuc2lvbnMiLCJtYXBFdmVudHMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsImNoZWNrQnJlYWtwb2ludHNUb1Njcm9sbCIsImJpbmQiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJnZXREaXN0YW5jZVRvV3JhcHBlciIsImlzTmFOIiwibWluQnJlYWtQb2ludCIsIm1heEJyZWFrUG9pbnQiLCJtb3ZlVGFyZ2V0IiwiY2xlYW5PZmZzZXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzY3JvbGxIZWlnaHQiLCJzY3JvbGxZIiwidGFyZ2V0T2Zmc2V0IiwibW90aW9uRGlyZWN0aW9uIiwiZ2V0VGFyZ2V0T2Zmc2V0Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJtb3Rpb25SYXRpbyIsInlQb3NpdGlvbiIsIm9mZnNldFRvcCIsInNjcm9sbFRvcCIsImNsaWVudFRvcCIsIm9mZnNldFBhcmVudCIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEs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aUJBQWUsQ0FBQ0osWUFBRCxFQUErQjtBQUNwRCxXQUFVLENBQUNBLFlBQVksR0FBRyxLQUFLekIsaUJBQXJCLElBQTBDLEtBQUtnQyxXQUF6RDtBQUNIOztBQUVTZCxzQkFBb0IsR0FBVztBQUNyQyxRQUFJdEIsT0FBb0IsR0FBRyxLQUFLQSxPQUFoQztBQUNBLFFBQUlxQyxTQUFTLEdBQUcsQ0FBaEI7O0FBRUEsV0FBT3JDLE9BQVAsRUFBZ0I7QUFDWnFDLGVBQVMsSUFBSXJDLE9BQU8sQ0FBQ3NDLFNBQVIsR0FBb0J0QyxPQUFPLENBQUN1QyxTQUE1QixHQUF3Q3ZDLE9BQU8sQ0FBQ3dDLFNBQTdEO0FBQ0F4QyxhQUFPLEdBQWdCQSxPQUFPLENBQUN5QyxZQUEvQjtBQUNIOztBQUVELFdBQU9KLFNBQVA7QUFDSDs7QUFFNkIsTUFBaEIzQixnQkFBZ0IsR0FBVztBQUNyQyxXQUFPLEtBQUtnQyxZQUFMLENBQWtCLG9CQUFsQixDQUFQO0FBQ0g7O0FBRTRCLE1BQWYvQixlQUFlLEdBQVc7QUFDcEMsV0FBTyxLQUFLK0IsWUFBTCxDQUFrQixtQkFBbEIsQ0FBUDtBQUNIOztBQUV3QixNQUFYTixXQUFXLEdBQVc7QUFDaEMsV0FBTyxDQUFDLEtBQUtNLFlBQUwsQ0FBa0IsY0FBbEIsQ0FBUjtBQUNIOztBQUU0QixNQUFmVixlQUFlLEdBQVc7QUFDcEMsV0FBTyxLQUFLVSxZQUFMLENBQWtCLGtCQUFsQixDQUFQO0FBQ0g7O0FBRTBCLE1BQWJsQixhQUFhLEdBQVc7QUFDbEMsV0FBTyxDQUFDLEtBQUtrQixZQUFMLENBQWtCLGdCQUFsQixDQUFSO0FBQ0g7O0FBRTBCLE1BQWJqQixhQUFhLEdBQVc7QUFDbEMsV0FBTyxDQUFDLEtBQUtpQixZQUFMLENBQWtCLGdCQUFsQixDQUFSO0FBQ0g7O0FBeEdpRCxDIiwiZmlsZSI6Ii4vanMveXZlc19kZWZhdWx0LnNjcm9sbC1wYXJhbGxheC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuXG5jb25zdCBESVJFQ1RJT05TID0ge1xuICAgIFRPUDogJ3RvcCcsXG4gICAgRE9XTjogJ2Rvd24nLFxufTtcbmNvbnN0IFRIUk9UVExFX0RVUkFUSU9OID0gMzAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxQYXJhbGxheCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHRhcmdldDogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHdyYXBwZXI6IEhUTUxFbGVtZW50O1xuICAgIHByb3RlY3RlZCB3aW5kb3dIZWlnaHQ6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgd2luZG93V2lkdGg6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgd3JhcHBlckhlaWdodDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBkaXN0YW5jZVRvV3JhcHBlcjogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJvdGVjdGVkIHJlYWR5Q2FsbGJhY2soKTogdm9pZCB7fVxuXG4gICAgcHJvdGVjdGVkIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMud3JhcHBlciA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMud3JhcHBlckNsYXNzTmFtZSlbMF07XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gPEhUTUxFbGVtZW50PnRoaXMud3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMudGFyZ2V0Q2xhc3NOYW1lKVswXTtcbiAgICAgICAgdGhpcy5kZWZpbmVEaW1lbnNpb25zKCk7XG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kZWZpbmVEaW1lbnNpb25zKCksIFRIUk9UVExFX0RVUkFUSU9OKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNoZWNrQnJlYWtwb2ludHNUb1Njcm9sbC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZGVmaW5lRGltZW5zaW9ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy53cmFwcGVySGVpZ2h0ID0gdGhpcy53cmFwcGVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgdGhpcy5kaXN0YW5jZVRvV3JhcHBlciA9IHRoaXMuZ2V0RGlzdGFuY2VUb1dyYXBwZXIoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2hlY2tCcmVha3BvaW50c1RvU2Nyb2xsKCk6IHZvaWQge1xuICAgICAgICBpZiAoIWlzTmFOKHRoaXMubWluQnJlYWtQb2ludCkgJiYgIWlzTmFOKHRoaXMubWF4QnJlYWtQb2ludCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1pbkJyZWFrUG9pbnQgPCB0aGlzLndpbmRvd1dpZHRoICYmIHRoaXMubWF4QnJlYWtQb2ludCA+IHRoaXMud2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUYXJnZXQoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xlYW5PZmZzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbGVhbk9mZnNldCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBtb3ZlVGFyZ2V0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQ6IG51bWJlciA9IHdpbmRvdy5zY3JvbGxZICsgdGhpcy53aW5kb3dIZWlnaHQ7XG4gICAgICAgIGxldCB0YXJnZXRPZmZzZXQgPSAnJztcblxuICAgICAgICBpZiAoc2Nyb2xsSGVpZ2h0ID4gdGhpcy5kaXN0YW5jZVRvV3JhcHBlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMubW90aW9uRGlyZWN0aW9uID09PSBESVJFQ1RJT05TLlRPUCkge1xuICAgICAgICAgICAgICAgIHRhcmdldE9mZnNldCA9IGAtJHt0aGlzLmdldFRhcmdldE9mZnNldChzY3JvbGxIZWlnaHQpfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5tb3Rpb25EaXJlY3Rpb24gPT09IERJUkVDVElPTlMuRE9XTikge1xuICAgICAgICAgICAgICAgIHRhcmdldE9mZnNldCA9IHRoaXMuZ2V0VGFyZ2V0T2Zmc2V0KHNjcm9sbEhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFyZ2V0T2Zmc2V0ICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dGFyZ2V0T2Zmc2V0fSlgO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFRhcmdldE9mZnNldChzY3JvbGxIZWlnaHQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHsoc2Nyb2xsSGVpZ2h0IC0gdGhpcy5kaXN0YW5jZVRvV3JhcHBlcikgLyB0aGlzLm1vdGlvblJhdGlvfXB4YDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0RGlzdGFuY2VUb1dyYXBwZXIoKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHdyYXBwZXI6IEhUTUxFbGVtZW50ID0gdGhpcy53cmFwcGVyO1xuICAgICAgICBsZXQgeVBvc2l0aW9uID0gMDtcblxuICAgICAgICB3aGlsZSAod3JhcHBlcikge1xuICAgICAgICAgICAgeVBvc2l0aW9uICs9IHdyYXBwZXIub2Zmc2V0VG9wIC0gd3JhcHBlci5zY3JvbGxUb3AgKyB3cmFwcGVyLmNsaWVudFRvcDtcbiAgICAgICAgICAgIHdyYXBwZXIgPSA8SFRNTEVsZW1lbnQ+d3JhcHBlci5vZmZzZXRQYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geVBvc2l0aW9uO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgd3JhcHBlckNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3dyYXBwZXItY2xhc3MtbmFtZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgdGFyZ2V0Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgndGFyZ2V0LWNsYXNzLW5hbWUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IG1vdGlvblJhdGlvKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiArdGhpcy5nZXRBdHRyaWJ1dGUoJ21vdGlvbi1yYXRpbycpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgbW90aW9uRGlyZWN0aW9uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnbW90aW9uLWRpcmVjdGlvbicpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgbWluQnJlYWtQb2ludCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gK3RoaXMuZ2V0QXR0cmlidXRlKCdicmVha3BvaW50LW1pbicpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgbWF4QnJlYWtQb2ludCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gK3RoaXMuZ2V0QXR0cmlidXRlKCdicmVha3BvaW50LW1heCcpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=