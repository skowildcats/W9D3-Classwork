/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

class APIUtil {
  constructor() {
  }

  followUser(id) {
    $.ajax({
      method: 'POST',
      url: `/users/${id}/follow`,
      dataType: 'json'
    })
  }

  unfollowUser(id) {
    $.ajax({
      method: 'DELETE',
      url: `/users/${id}/follow`,
      dataType: 'json'
    })
  }
}

module.exports = APIUtil

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js")

class FollowToggle {
  constructor(el) {

    this.$el = $(el)
    this.userId = this.$el.data("user-id")
    this.followState = this.$el.data("initial-followed-state")
    // debugger
    this.render()
    const setEventListeners = () => {
      this.$el.on('click', e => {
        e.preventDefault();
        this.handleClick();
      })
    }
    $(setEventListeners);
    this.util = new APIUtil()
  }

  render() {

    if (this.followState) {
      this.$el.empty().append("Unfollow!")
    } else {
      this.$el.empty().append("Follow!")
    }
  }

  handleClick() {
    // debugger

    let myPromise = new Promise((myResolve, myReject) => {
      let followState = this.followState

      if (this.followState === false) {
        this.util.followUser(this.userId)
        myResolve()
      } else {
        this.util.unfollowUser(this.userId)
        myResolve()
      }

    })

    myPromise.then(() => {
      this.followState = !this.followState
      this.render()
    })
    
  }
}

module.exports = FollowToggle

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/

const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js")

// document.addEventListener("DOMContentLoaded", () => {



// });

$(function () {
  $("button.follow-toggle").each ((idx, el) => new FollowToggle(el))
  }
)
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map