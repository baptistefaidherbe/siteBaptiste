"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,521,335,229,919,579,162];
exports.modules = {

/***/ 3678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5031);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8051);
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6834);
/* harmony import */ var _skill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3024);
/* harmony import */ var _parcours__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4173);
/* harmony import */ var _projet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6136);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6749);









function Index(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "main",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Baptiste Faidherbe"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Bienvenue sur mon site. Baptiste Faidherbe, D\xe9veloppeur web sur Toulouse. Ce site a pour vocation de pr\xe9senter qui je suis et de vous exposer mon savoir faire. "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home__WEBPACK_IMPORTED_MODULE_2__["default"], {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_about__WEBPACK_IMPORTED_MODULE_3__["default"], {
                data: props.data
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_skill__WEBPACK_IMPORTED_MODULE_5__["default"], {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_parcours__WEBPACK_IMPORTED_MODULE_6__["default"], {
                data: props.data2
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_projet__WEBPACK_IMPORTED_MODULE_7__["default"], {
                data: props.data3
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contact__WEBPACK_IMPORTED_MODULE_8__["default"], {
            })
        ]
    }));
};
async function getServerSideProps() {
    let resp;
    let data;
    let data2;
    let data3;
    try {
        resp = await _helpers_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get(`/api/About/`);
        data = await resp.data;
    } catch (error) {
        console.log(error);
    }
    try {
        resp = await _helpers_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get(`/api/Parcours/`);
        data2 = await resp.data;
    } catch (error1) {
        console.log(error1);
    }
    try {
        resp = await _helpers_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].get */ .Z.get(`/api/Projet/`, {
            params: {
                type: 'projets'
            }
        });
        data3 = await resp.data;
    } catch (error2) {
        console.log(error2);
    }
    return {
        props: {
            data,
            data2,
            data3
        }
    };
}


/***/ }),

/***/ 9783:
/***/ ((module) => {

module.exports = require("aos");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6762:
/***/ ((module) => {

module.exports = require("react-awesome-reveal");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 5974:
/***/ ((module) => {

module.exports = require("react-notifications");

/***/ }),

/***/ 6666:
/***/ ((module) => {

module.exports = require("react-responsive");

/***/ }),

/***/ 7446:
/***/ ((module) => {

module.exports = require("react-scroll-parallax");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,664,24,31,749,173,136,51], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();