"use strict";
(() => {
var exports = {};
exports.id = 562;
exports.ids = [562];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dbConnect": () => (/* binding */ dbConnect),
/* harmony export */   "dbDisconnect": () => (/* binding */ dbDisconnect)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

async function dbConnect() {
    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect("mongodb://baptiste:Viveleventd'hiverc'estNOEL!@localhost:27017/portfolio", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
async function dbDisconnect() {
    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.close(function() {
        console.log('Mongoose default connection closed');
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4441));
module.exports = __webpack_exports__;

})();