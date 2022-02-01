"use strict";
(() => {
var exports = {};
exports.id = 957;
exports.ids = [957,562];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var _mongoose = _interopRequireDefault(__webpack_require__(1185));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const Schema = _mongoose.default.Schema;
const parcoursSchema = new Schema({
    title: {
        type: String
    },
    desc: {
        type: String
    },
    img: {
        type: String
    },
    year: {
        type: String
    }
});
module.exports = _mongoose.default.models.parcours || _mongoose.default.model('parcours', parcoursSchema, 'parcours');


/***/ }),

/***/ 9082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4441);
/* harmony import */ var _models_parcoursSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7609);
/* harmony import */ var _models_parcoursSchema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_parcoursSchema__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
    const { method  } = req;
    await (0,_database__WEBPACK_IMPORTED_MODULE_0__.dbConnect)();
    switch(method){
        case 'GET':
            try {
                const result = await _models_parcoursSchema__WEBPACK_IMPORTED_MODULE_1___default().find({
                });
                res.status(200).json(result);
            } catch (error) {
                (0,_database__WEBPACK_IMPORTED_MODULE_0__.dbDisconnect)();
                res.status(201).json({
                    message: 'error'
                });
            }
            break;
        default:
            (0,_database__WEBPACK_IMPORTED_MODULE_0__.dbDisconnect)();
    }
};


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
var __webpack_exports__ = (__webpack_exec__(9082));
module.exports = __webpack_exports__;

})();