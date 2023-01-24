(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["color-selector-pdp"],{

/***/ "./src/Pyz/Yves/ProductGroupWidget/Theme/default/components/molecules/color-selector-pdp/color-selector-pdp.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/Pyz/Yves/ProductGroupWidget/Theme/default/components/molecules/color-selector-pdp/color-selector-pdp.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorSelectorPdp; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class ColorSelectorPdp extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.container = void 0;
    this.colors = void 0;
    this.image = void 0;
  }

  readyCallback() {}

  init() {
    this.colors = Array.from(this.getElementsByClassName(this.jsName + "__color"));
    this.container = document.getElementsByClassName(this.jsName + "__image-container")[0];
    this.image = this.container.getElementsByTagName('img')[0];
    this.mapEvents();
  }

  mapEvents() {
    this.colors.forEach((color, index) => {
      if (index !== 0) {
        color.addEventListener('mouseenter', event => this.onColorSelection(event));
        color.addEventListener('mouseout', event => this.onColorUnselection(event));
      }
    });
  }

  onColorSelection(event) {
    event.preventDefault();
    var color = event.currentTarget;
    var imageSrc = color.getAttribute('data-image-src');
    this.changeActiveColor(color);
    this.setActiveImage(imageSrc);
  }

  onColorUnselection(event) {
    event.preventDefault();
    this.changeActiveColor(this.colors[0]);
    this.resetActiveImage();
  }

  changeActiveColor(newColor) {
    this.colors.forEach(color => {
      color.classList.remove(this.name + "__color--active");
    });
    newColor.classList.add(this.name + "__color--active");
  }

  setActiveImage(newImageSrc) {
    if (this.image.src === newImageSrc) {
      return;
    }

    this.image.src = newImageSrc;
    this.container.classList.add(this.container.classList[0] + "--active");
  }

  resetActiveImage() {
    this.container.classList.remove(this.container.classList[0] + "--active");
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHl6L1l2ZXMvUHJvZHVjdEdyb3VwV2lkZ2V0L1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvY29sb3Itc2VsZWN0b3ItcGRwL2NvbG9yLXNlbGVjdG9yLXBkcC50cyJdLCJuYW1lcyI6WyJDb2xvclNlbGVjdG9yUGRwIiwiQ29tcG9uZW50IiwiY29udGFpbmVyIiwiY29sb3JzIiwiaW1hZ2UiLCJyZWFkeUNhbGxiYWNrIiwiaW5pdCIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJqc05hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibWFwRXZlbnRzIiwiZm9yRWFjaCIsImNvbG9yIiwiaW5kZXgiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJvbkNvbG9yU2VsZWN0aW9uIiwib25Db2xvclVuc2VsZWN0aW9uIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwiaW1hZ2VTcmMiLCJnZXRBdHRyaWJ1dGUiLCJjaGFuZ2VBY3RpdmVDb2xvciIsInNldEFjdGl2ZUltYWdlIiwicmVzZXRBY3RpdmVJbWFnZSIsIm5ld0NvbG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibmFtZSIsImFkZCIsIm5ld0ltYWdlU3JjIiwic3JjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxNQUFNQSxnQkFBTixTQUErQkMsK0RBQS9CLENBQXlDO0FBQUE7QUFBQTtBQUFBLFNBQzFDQyxTQUQwQztBQUFBLFNBRTFDQyxNQUYwQztBQUFBLFNBRzFDQyxLQUgwQztBQUFBOztBQUsxQ0MsZUFBYSxHQUFTLENBQUU7O0FBRXhCQyxNQUFJLEdBQVM7QUFDbkIsU0FBS0gsTUFBTCxHQUFtQ0ksS0FBSyxDQUFDQyxJQUFOLENBQVcsS0FBS0Msc0JBQUwsQ0FBK0IsS0FBS0MsTUFBcEMsYUFBWCxDQUFuQztBQUNBLFNBQUtSLFNBQUwsR0FBbUNTLFFBQVEsQ0FBQ0Ysc0JBQVQsQ0FBbUMsS0FBS0MsTUFBeEMsd0JBQW1FLENBQW5FLENBQW5DO0FBQ0EsU0FBS04sS0FBTCxHQUErQixLQUFLRixTQUFMLENBQWVVLG9CQUFmLENBQW9DLEtBQXBDLEVBQTJDLENBQTNDLENBQS9CO0FBRUEsU0FBS0MsU0FBTDtBQUNIOztBQUVTQSxXQUFTLEdBQVM7QUFDeEIsU0FBS1YsTUFBTCxDQUFZVyxPQUFaLENBQW9CLENBQUNDLEtBQUQsRUFBMkJDLEtBQTNCLEtBQTZDO0FBQzdELFVBQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2JELGFBQUssQ0FBQ0UsZ0JBQU4sQ0FBdUIsWUFBdkIsRUFBc0NDLEtBQUQsSUFBa0IsS0FBS0MsZ0JBQUwsQ0FBc0JELEtBQXRCLENBQXZEO0FBQ0FILGFBQUssQ0FBQ0UsZ0JBQU4sQ0FBdUIsVUFBdkIsRUFBb0NDLEtBQUQsSUFBa0IsS0FBS0Usa0JBQUwsQ0FBd0JGLEtBQXhCLENBQXJEO0FBQ0g7QUFDSixLQUxEO0FBTUg7O0FBRVNDLGtCQUFnQixDQUFDRCxLQUFELEVBQXFCO0FBQzNDQSxTQUFLLENBQUNHLGNBQU47QUFDQSxRQUFNTixLQUFLLEdBQXNCRyxLQUFLLENBQUNJLGFBQXZDO0FBQ0EsUUFBTUMsUUFBUSxHQUFHUixLQUFLLENBQUNTLFlBQU4sQ0FBbUIsZ0JBQW5CLENBQWpCO0FBQ0EsU0FBS0MsaUJBQUwsQ0FBdUJWLEtBQXZCO0FBQ0EsU0FBS1csY0FBTCxDQUFvQkgsUUFBcEI7QUFDSDs7QUFFU0gsb0JBQWtCLENBQUNGLEtBQUQsRUFBcUI7QUFDN0NBLFNBQUssQ0FBQ0csY0FBTjtBQUNBLFNBQUtJLGlCQUFMLENBQXVCLEtBQUt0QixNQUFMLENBQVksQ0FBWixDQUF2QjtBQUNBLFNBQUt3QixnQkFBTDtBQUNIOztBQUVERixtQkFBaUIsQ0FBQ0csUUFBRCxFQUFvQztBQUNqRCxTQUFLekIsTUFBTCxDQUFZVyxPQUFaLENBQXFCQyxLQUFELElBQThCO0FBQzlDQSxXQUFLLENBQUNjLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQTBCLEtBQUtDLElBQS9CO0FBQ0gsS0FGRDtBQUlBSCxZQUFRLENBQUNDLFNBQVQsQ0FBbUJHLEdBQW5CLENBQTBCLEtBQUtELElBQS9CO0FBQ0g7O0FBRURMLGdCQUFjLENBQUNPLFdBQUQsRUFBNEI7QUFDdEMsUUFBSSxLQUFLN0IsS0FBTCxDQUFXOEIsR0FBWCxLQUFtQkQsV0FBdkIsRUFBb0M7QUFDaEM7QUFDSDs7QUFFRCxTQUFLN0IsS0FBTCxDQUFXOEIsR0FBWCxHQUFpQkQsV0FBakI7QUFDQSxTQUFLL0IsU0FBTCxDQUFlMkIsU0FBZixDQUF5QkcsR0FBekIsQ0FBZ0MsS0FBSzlCLFNBQUwsQ0FBZTJCLFNBQWYsQ0FBeUIsQ0FBekIsQ0FBaEM7QUFDSDs7QUFFREYsa0JBQWdCLEdBQVM7QUFDckIsU0FBS3pCLFNBQUwsQ0FBZTJCLFNBQWYsQ0FBeUJDLE1BQXpCLENBQW1DLEtBQUs1QixTQUFMLENBQWUyQixTQUFmLENBQXlCLENBQXpCLENBQW5DO0FBQ0g7O0FBekRtRCxDIiwiZmlsZSI6Ii4vanMveXZlc19kZWZhdWx0LmNvbG9yLXNlbGVjdG9yLXBkcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnU2hvcFVpL21vZGVscy9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvclNlbGVjdG9yUGRwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgY29sb3JzOiBIVE1MQW5jaG9yRWxlbWVudFtdO1xuICAgIHByb3RlY3RlZCBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge31cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbG9ycyA9IDxIVE1MQW5jaG9yRWxlbWVudFtdPkFycmF5LmZyb20odGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fY29sb3JgKSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gPEhUTUxJbWFnZUVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHt0aGlzLmpzTmFtZX1fX2ltYWdlLWNvbnRhaW5lcmApWzBdO1xuICAgICAgICB0aGlzLmltYWdlID0gPEhUTUxJbWFnZUVsZW1lbnQ+dGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpWzBdO1xuXG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb2xvcnMuZm9yRWFjaCgoY29sb3I6IEhUTUxBbmNob3JFbGVtZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICBjb2xvci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGV2ZW50OiBFdmVudCkgPT4gdGhpcy5vbkNvbG9yU2VsZWN0aW9uKGV2ZW50KSk7XG4gICAgICAgICAgICAgICAgY29sb3IuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZXZlbnQ6IEV2ZW50KSA9PiB0aGlzLm9uQ29sb3JVbnNlbGVjdGlvbihldmVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Db2xvclNlbGVjdGlvbihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgY29sb3IgPSA8SFRNTEFuY2hvckVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc3QgaW1hZ2VTcmMgPSBjb2xvci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2Utc3JjJyk7XG4gICAgICAgIHRoaXMuY2hhbmdlQWN0aXZlQ29sb3IoY29sb3IpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZUltYWdlKGltYWdlU3JjKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25Db2xvclVuc2VsZWN0aW9uKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZUNvbG9yKHRoaXMuY29sb3JzWzBdKTtcbiAgICAgICAgdGhpcy5yZXNldEFjdGl2ZUltYWdlKCk7XG4gICAgfVxuXG4gICAgY2hhbmdlQWN0aXZlQ29sb3IobmV3Q29sb3I6IEhUTUxBbmNob3JFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29sb3JzLmZvckVhY2goKGNvbG9yOiBIVE1MQW5jaG9yRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29sb3IuY2xhc3NMaXN0LnJlbW92ZShgJHt0aGlzLm5hbWV9X19jb2xvci0tYWN0aXZlYCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5ld0NvbG9yLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5uYW1lfV9fY29sb3ItLWFjdGl2ZWApO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZUltYWdlKG5ld0ltYWdlU3JjOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2Uuc3JjID09PSBuZXdJbWFnZVNyYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBuZXdJbWFnZVNyYztcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChgJHt0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3RbMF19LS1hY3RpdmVgKTtcbiAgICB9XG5cbiAgICByZXNldEFjdGl2ZUltYWdlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGAke3RoaXMuY29udGFpbmVyLmNsYXNzTGlzdFswXX0tLWFjdGl2ZWApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=