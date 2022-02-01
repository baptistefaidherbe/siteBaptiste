exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 6518:
/***/ ((module) => {

// Exports
module.exports = {
	"about": "About_about__Dxcfy",
	"about_container": "About_about_container__y9XNJ",
	"about_container_article": "About_about_container_article__VZuCj",
	"about_container_article_text": "About_about_container_article_text__9jqnc",
	"about_container_article_image": "About_about_container_article_image__2GS_G",
	"float": "About_float__zrZiq",
	"about_container_article_text2": "About_about_container_article_text2__24z3P",
	"about_container_article_image2": "About_about_container_article_image2__sMA2Z"
};


/***/ }),

/***/ 8051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var _About_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6518);
/* harmony import */ var _About_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_About_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6762);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__);





function About(data) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "about",
        className: (_About_module_scss__WEBPACK_IMPORTED_MODULE_4___default().about),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_About_module_scss__WEBPACK_IMPORTED_MODULE_4___default().about_container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "mainTitle",
                    children: "Qui suis-je ?"
                }),
                data.data && data.data.map((element)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                        className: (_About_module_scss__WEBPACK_IMPORTED_MODULE_4___default().about_container_article),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: element.title === 'Quand la passion, devient r\xe9elle' ? `${(_About_module_scss__WEBPACK_IMPORTED_MODULE_4___default().about_container_article_text)} ${(_About_module_scss__WEBPACK_IMPORTED_MODULE_4___default().about_container_article_text2)}` : (_About_module_scss__WEBPACK_IMPORTED_MODULE_4___default().about_container_article_text),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__.Fade, {
                                        delay: "10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: element.title
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: element.desc
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: element.title === 'Quand la passion, devient r\xe9elle' ? `${(_About_module_scss__WEBPACK_IMPORTED_MODULE_4___default().about_container_article_image)} ${(_About_module_scss__WEBPACK_IMPORTED_MODULE_4___default().about_container_article_image2)}` : (_About_module_scss__WEBPACK_IMPORTED_MODULE_4___default().about_container_article_image),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    src: `/img/${element.img}`,
                                    alt: "Moi",
                                    width: 100,
                                    height: 100,
                                    layout: "responsive",
                                    loading: "eager"
                                })
                            })
                        ]
                    }, element._id)
                )
            ]
        })
    }));
};


/***/ })

};
;