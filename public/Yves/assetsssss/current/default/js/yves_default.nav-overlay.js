(window["webpackJsonp_yves_default"] = window["webpackJsonp_yves_default"] || []).push([["nav-overlay"],{

/***/ "./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/nav-overlay/nav-overlay.ts":
/*!*******************************************************************************************!*\
  !*** ./src/Pyz/Yves/ShopUi/Theme/default/components/molecules/nav-overlay/nav-overlay.ts ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavOverlay; });
/* harmony import */ var ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ShopUi/models/component */ "./vendor/spryker-shop/shop-ui/src/SprykerShop/Yves/ShopUi/Theme/default/models/component.ts");

class NavOverlay extends ShopUi_models_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.classToggle = this.name + "--active";
    this.triggers = void 0;
    this.triggerClose = void 0;
    this.blocks = void 0;
    this.savedIndex = 0;
  }

  readyCallback() {}

  init() {
    this.triggers = Array.from(document.getElementsByClassName(this.triggerOpenClassName));
    this.triggerClose = this.getElementsByClassName(this.jsName + "__shadow")[0];
    this.blocks = Array.from(this.getElementsByClassName(this.jsName + "__drop-down-block"));
    this.hideBlocks();
    this.mapEvents();
  }

  hideBlocks() {
    this.blocks.forEach(block => block.classList.add('is-hidden'));
  }

  mapEvents() {
    this.triggers.forEach((trigger, index) => {
      trigger.addEventListener('mouseenter', this.triggersHandler.bind(this, index));
    });
    this.triggerClose.addEventListener('mouseenter', this.triggerCloseHandler.bind(this));
  }

  resetTriggersActiveClass() {
    this.triggers.forEach(trigger => trigger.classList.remove(this.activeTriggerClass));
  }

  triggersHandler(index, event) {
    var eventTarget = event.target;
    event.stopPropagation();

    if (!this.classList.contains(this.classToggle)) {
      this.classList.add(this.classToggle);
      this.blocks[index].classList.remove('is-hidden');
      eventTarget.classList.add(this.activeTriggerClass);
    } else if (this.savedIndex !== index) {
      this.hideBlocks();
      this.resetTriggersActiveClass();
      this.blocks[index].classList.remove('is-hidden');
      eventTarget.classList.add(this.activeTriggerClass);
    }

    this.savedIndex = index;
  }

  triggerCloseHandler() {
    this.classList.remove(this.classToggle);
    this.hideBlocks();
    this.resetTriggersActiveClass();
  }

  get triggerOpenClassName() {
    return this.getAttribute('trigger-open-class-name');
  }

  get activeTriggerClass() {
    return this.getAttribute('active-link');
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHl6L1l2ZXMvU2hvcFVpL1RoZW1lL2RlZmF1bHQvY29tcG9uZW50cy9tb2xlY3VsZXMvbmF2LW92ZXJsYXkvbmF2LW92ZXJsYXkudHMiXSwibmFtZXMiOlsiTmF2T3ZlcmxheSIsIkNvbXBvbmVudCIsImNsYXNzVG9nZ2xlIiwibmFtZSIsInRyaWdnZXJzIiwidHJpZ2dlckNsb3NlIiwiYmxvY2tzIiwic2F2ZWRJbmRleCIsInJlYWR5Q2FsbGJhY2siLCJpbml0IiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidHJpZ2dlck9wZW5DbGFzc05hbWUiLCJqc05hbWUiLCJoaWRlQmxvY2tzIiwibWFwRXZlbnRzIiwiZm9yRWFjaCIsImJsb2NrIiwiY2xhc3NMaXN0IiwiYWRkIiwidHJpZ2dlciIsImluZGV4IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRyaWdnZXJzSGFuZGxlciIsImJpbmQiLCJ0cmlnZ2VyQ2xvc2VIYW5kbGVyIiwicmVzZXRUcmlnZ2Vyc0FjdGl2ZUNsYXNzIiwicmVtb3ZlIiwiYWN0aXZlVHJpZ2dlckNsYXNzIiwiZXZlbnQiLCJldmVudFRhcmdldCIsInRhcmdldCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnRhaW5zIiwiZ2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxNQUFNQSxVQUFOLFNBQXlCQywrREFBekIsQ0FBbUM7QUFBQTtBQUFBO0FBQUEsU0FDcENDLFdBRG9DLEdBQ1gsS0FBS0MsSUFETTtBQUFBLFNBRXBDQyxRQUZvQztBQUFBLFNBR3BDQyxZQUhvQztBQUFBLFNBSXBDQyxNQUpvQztBQUFBLFNBS3BDQyxVQUxvQyxHQUtmLENBTGU7QUFBQTs7QUFPcENDLGVBQWEsR0FBUyxDQUFFOztBQUV4QkMsTUFBSSxHQUFTO0FBQ25CLFNBQUtMLFFBQUwsR0FBK0JNLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLEtBQUtDLG9CQUFyQyxDQUFYLENBQS9CO0FBQ0EsU0FBS1QsWUFBTCxHQUFpQyxLQUFLUSxzQkFBTCxDQUErQixLQUFLRSxNQUFwQyxlQUFzRCxDQUF0RCxDQUFqQztBQUNBLFNBQUtULE1BQUwsR0FBNkJJLEtBQUssQ0FBQ0MsSUFBTixDQUFXLEtBQUtFLHNCQUFMLENBQStCLEtBQUtFLE1BQXBDLHVCQUFYLENBQTdCO0FBRUEsU0FBS0MsVUFBTDtBQUNBLFNBQUtDLFNBQUw7QUFDSDs7QUFFU0QsWUFBVSxHQUFTO0FBQ3pCLFNBQUtWLE1BQUwsQ0FBWVksT0FBWixDQUFxQkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFdBQXBCLENBQS9CO0FBQ0g7O0FBRVNKLFdBQVMsR0FBUztBQUN4QixTQUFLYixRQUFMLENBQWNjLE9BQWQsQ0FBc0IsQ0FBQ0ksT0FBRCxFQUFVQyxLQUFWLEtBQW9CO0FBQ3RDRCxhQUFPLENBQUNFLGdCQUFSLENBQXlCLFlBQXpCLEVBQXVDLEtBQUtDLGVBQUwsQ0FBcUJDLElBQXJCLENBQTBCLElBQTFCLEVBQWdDSCxLQUFoQyxDQUF2QztBQUNILEtBRkQ7QUFHQSxTQUFLbEIsWUFBTCxDQUFrQm1CLGdCQUFsQixDQUFtQyxZQUFuQyxFQUFpRCxLQUFLRyxtQkFBTCxDQUF5QkQsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBakQ7QUFDSDs7QUFFU0UsMEJBQXdCLEdBQVM7QUFDdkMsU0FBS3hCLFFBQUwsQ0FBY2MsT0FBZCxDQUF1QkksT0FBRCxJQUFhQSxPQUFPLENBQUNGLFNBQVIsQ0FBa0JTLE1BQWxCLENBQXlCLEtBQUtDLGtCQUE5QixDQUFuQztBQUNIOztBQUVTTCxpQkFBZSxDQUFDRixLQUFELEVBQWdCUSxLQUFoQixFQUFvQztBQUN6RCxRQUFNQyxXQUFXLEdBQWdCRCxLQUFLLENBQUNFLE1BQXZDO0FBQ0FGLFNBQUssQ0FBQ0csZUFBTjs7QUFDQSxRQUFJLENBQUMsS0FBS2QsU0FBTCxDQUFlZSxRQUFmLENBQXdCLEtBQUtqQyxXQUE3QixDQUFMLEVBQWdEO0FBQzVDLFdBQUtrQixTQUFMLENBQWVDLEdBQWYsQ0FBbUIsS0FBS25CLFdBQXhCO0FBQ0EsV0FBS0ksTUFBTCxDQUFZaUIsS0FBWixFQUFtQkgsU0FBbkIsQ0FBNkJTLE1BQTdCLENBQW9DLFdBQXBDO0FBQ0FHLGlCQUFXLENBQUNaLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLEtBQUtTLGtCQUEvQjtBQUNILEtBSkQsTUFJTyxJQUFJLEtBQUt2QixVQUFMLEtBQW9CZ0IsS0FBeEIsRUFBK0I7QUFDbEMsV0FBS1AsVUFBTDtBQUNBLFdBQUtZLHdCQUFMO0FBQ0EsV0FBS3RCLE1BQUwsQ0FBWWlCLEtBQVosRUFBbUJILFNBQW5CLENBQTZCUyxNQUE3QixDQUFvQyxXQUFwQztBQUNBRyxpQkFBVyxDQUFDWixTQUFaLENBQXNCQyxHQUF0QixDQUEwQixLQUFLUyxrQkFBL0I7QUFDSDs7QUFDRCxTQUFLdkIsVUFBTCxHQUFrQmdCLEtBQWxCO0FBQ0g7O0FBRVNJLHFCQUFtQixHQUFTO0FBQ2xDLFNBQUtQLFNBQUwsQ0FBZVMsTUFBZixDQUFzQixLQUFLM0IsV0FBM0I7QUFDQSxTQUFLYyxVQUFMO0FBQ0EsU0FBS1ksd0JBQUw7QUFDSDs7QUFFaUMsTUFBcEJkLG9CQUFvQixHQUFXO0FBQ3pDLFdBQU8sS0FBS3NCLFlBQUwsQ0FBa0IseUJBQWxCLENBQVA7QUFDSDs7QUFFK0IsTUFBbEJOLGtCQUFrQixHQUFXO0FBQ3ZDLFdBQU8sS0FBS00sWUFBTCxDQUFrQixhQUFsQixDQUFQO0FBQ0g7O0FBN0Q2QyxDIiwiZmlsZSI6Ii4vanMveXZlc19kZWZhdWx0Lm5hdi1vdmVybGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdTaG9wVWkvbW9kZWxzL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdk92ZXJsYXkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHByb3RlY3RlZCBjbGFzc1RvZ2dsZTogc3RyaW5nID0gYCR7dGhpcy5uYW1lfS0tYWN0aXZlYDtcbiAgICBwcm90ZWN0ZWQgdHJpZ2dlcnM6IEhUTUxFbGVtZW50W107XG4gICAgcHJvdGVjdGVkIHRyaWdnZXJDbG9zZTogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIGJsb2NrczogSFRNTEVsZW1lbnRbXTtcbiAgICBwcm90ZWN0ZWQgc2F2ZWRJbmRleDogbnVtYmVyID0gMDtcblxuICAgIHByb3RlY3RlZCByZWFkeUNhbGxiYWNrKCk6IHZvaWQge31cblxuICAgIHByb3RlY3RlZCBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyaWdnZXJzID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMudHJpZ2dlck9wZW5DbGFzc05hbWUpKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyQ2xvc2UgPSA8SFRNTEVsZW1lbnQ+dGhpcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3RoaXMuanNOYW1lfV9fc2hhZG93YClbMF07XG4gICAgICAgIHRoaXMuYmxvY2tzID0gPEhUTUxFbGVtZW50W10+QXJyYXkuZnJvbSh0aGlzLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7dGhpcy5qc05hbWV9X19kcm9wLWRvd24tYmxvY2tgKSk7XG5cbiAgICAgICAgdGhpcy5oaWRlQmxvY2tzKCk7XG4gICAgICAgIHRoaXMubWFwRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGhpZGVCbG9ja3MoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PiBibG9jay5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy50cmlnZ2Vyc0hhbmRsZXIuYmluZCh0aGlzLCBpbmRleCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50cmlnZ2VyQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMudHJpZ2dlckNsb3NlSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVzZXRUcmlnZ2Vyc0FjdGl2ZUNsYXNzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmFjdGl2ZVRyaWdnZXJDbGFzcykpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0cmlnZ2Vyc0hhbmRsZXIoaW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldDtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICghdGhpcy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc1RvZ2dsZSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzVG9nZ2xlKTtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQodGhpcy5hY3RpdmVUcmlnZ2VyQ2xhc3MpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2F2ZWRJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZUJsb2NrcygpO1xuICAgICAgICAgICAgdGhpcy5yZXNldFRyaWdnZXJzQWN0aXZlQ2xhc3MoKTtcbiAgICAgICAgICAgIHRoaXMuYmxvY2tzW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQodGhpcy5hY3RpdmVUcmlnZ2VyQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2F2ZWRJbmRleCA9IGluZGV4O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0cmlnZ2VyQ2xvc2VIYW5kbGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc1RvZ2dsZSk7XG4gICAgICAgIHRoaXMuaGlkZUJsb2NrcygpO1xuICAgICAgICB0aGlzLnJlc2V0VHJpZ2dlcnNBY3RpdmVDbGFzcygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgdHJpZ2dlck9wZW5DbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCd0cmlnZ2VyLW9wZW4tY2xhc3MtbmFtZScpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgYWN0aXZlVHJpZ2dlckNsYXNzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnYWN0aXZlLWxpbmsnKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9