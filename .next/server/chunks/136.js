exports.id = 136;
exports.ids = [136];
exports.modules = {

/***/ 2234:
/***/ ((module) => {

// Exports
module.exports = {
	"projet": "Projet_projet__buNHH",
	"projet_container": "Projet_projet_container__JmU6i",
	"projet_container_text": "Projet_projet_container_text__vCbZn",
	"projet_container_text_title": "Projet_projet_container_text_title__2bncV",
	"projet_container_card": "Projet_projet_container_card__Eo16g",
	"projet_container_card_article": "Projet_projet_container_card_article__cVu6N",
	"projet_container_card_article_image": "Projet_projet_container_card_article_image__Kq2iO",
	"projet_container_card_article_text": "Projet_projet_container_card_article_text__RR5z3"
};


/***/ }),

/***/ 6136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projet)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var _Projet_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2234);
/* harmony import */ var _Projet_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Projet_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6762);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__);






function Projet(data) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "project",
        className: (_Projet_module_scss__WEBPACK_IMPORTED_MODULE_5___default().projet),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Projet_module_scss__WEBPACK_IMPORTED_MODULE_5___default().projet_container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__.Bounce, {
                    delay: "10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "mainTitle",
                        children: "Mes projets"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Projet_module_scss__WEBPACK_IMPORTED_MODULE_5___default().projet_container_card),
                    children: data.data && data.data.map((element)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                            className: (_Projet_module_scss__WEBPACK_IMPORTED_MODULE_5___default().projet_container_card_article),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_Projet_module_scss__WEBPACK_IMPORTED_MODULE_5___default().projet_container_card_article_image),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                        src: `/img/${element.img}`,
                                        alt: "Moi",
                                        width: 100,
                                        height: 50,
                                        layout: "responsive",
                                        loading: "eager"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_Projet_module_scss__WEBPACK_IMPORTED_MODULE_5___default().projet_container_card_article_text),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: element.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: element.desc
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                                href: `${"https://baptistefaidherbe.fr"}/projet/${element.title}`,
                                                as: `${"https://baptistefaidherbe.fr"}/projet/${element.title}`,
                                                passHref: true,
                                                children: "En savoir plus"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, element._id)
                    )
                })
            ]
        })
    }));
};


/***/ })

};
;