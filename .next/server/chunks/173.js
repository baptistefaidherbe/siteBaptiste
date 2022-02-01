exports.id = 173;
exports.ids = [173];
exports.modules = {

/***/ 3402:
/***/ ((module) => {

// Exports
module.exports = {
	"parcours": "Parcours_parcours__7P2_E",
	"parcours_container": "Parcours_parcours_container__wrBjB",
	"parcours_container_timeLine": "Parcours_parcours_container_timeLine__lPYD_",
	"parcours_container_timeLine_point": "Parcours_parcours_container_timeLine_point__Pe_Da",
	"parcours_container_timeLine_activePoint": "Parcours_parcours_container_timeLine_activePoint__ZGtB_",
	"parcours_container_article": "Parcours_parcours_container_article___OHR8",
	"parcours_container_article_year": "Parcours_parcours_container_article_year__Eymhy",
	"parcours_container_article_text": "Parcours_parcours_container_article_text__a7mqX",
	"parcours_container_article_image": "Parcours_parcours_container_article_image__z9s6m",
	"float": "Parcours_float__f35O4",
	"parcours_container_article_text2": "Parcours_parcours_container_article_text2__dbjg9",
	"parcours_container_article_image2": "Parcours_parcours_container_article_image2__UuCwJ"
};


/***/ }),

/***/ 4173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parcours)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var _Parcours_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3402);
/* harmony import */ var _Parcours_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Parcours_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6762);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);








function Parcours(data) {
    const { 0: activeTimeLine , 1: setActiveTimeLine  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const changeNavBar = ()=>{
        // console.log(window.scrollY);
        if (window.scrollY >= 4100) {
            setActiveTimeLine(true);
        } else {
            setActiveTimeLine(false);
        }
        if (window.screen.availWidth <= 1471) {
            if (window.scrollY >= 4644 && window.scrollY <= 10644) {
                setActiveTimeLine(true);
            } else {
                setActiveTimeLine(false);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        window.addEventListener('scroll', changeNavBar);
        aos__WEBPACK_IMPORTED_MODULE_5___default().init({
            duration: 2000
        });
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "parcours",
        className: (_Parcours_module_scss__WEBPACK_IMPORTED_MODULE_6___default().parcours),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Parcours_module_scss__WEBPACK_IMPORTED_MODULE_6___default().parcours_container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_3__.Bounce, {
                    style: {
                        background: '#121d52',
                        position: 'relative',
                        zIndex: '9'
                    },
                    delay: "10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "mainTitle",
                        children: "Mon parcours"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Parcours_module_scss__WEBPACK_IMPORTED_MODULE_6___default().parcours_container_timeLine),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: !activeTimeLine ? (_Parcours_module_scss__WEBPACK_IMPORTED_MODULE_6___default().parcours_container_timeLine_point) : `${(_Parcours_module_scss__WEBPACK_IMPORTED_MODULE_6___default().parcours_container_timeLine_point)} ${(_Parcours_module_scss__WEBPACK_IMPORTED_MODULE_6___default().parcours_container_timeLine_activePoint)}`
                    })
                }),
                data.data && data.data.map((element)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                        className: (_Parcours_module_scss__WEBPACK_IMPORTED_MODULE_6___default().parcours_container_article),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Parcours_module_scss__WEBPACK_IMPORTED_MODULE_6___default().parcours_container_article_year),
                                children: element.year
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: element.title === 'Administrateur r\xe9seau/syst\xe8me - POULT' || element.title === 'Administrateur r\xe9seau/syst\xe8me Synergie mutulles' || element.title === 'Tecnicien r\xe9seau Sopamea' || element.title === 'Stage informatique Claudius Regaud' || element.title === 'Obtention du BAC' ? `${(_Parcours_module_scss__WEBPACK_IMPORTED_MODULE_6___default().parcours_container_article_text)} ${(_Parcours_module_scss__WEBPACK_IMPORTED_MODULE_6___default().parcours_container_article_text2)}` : (_Parcours_module_scss__WEBPACK_IMPORTED_MODULE_6___default().parcours_container_article_text),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: element.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: element.desc
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                "data-aos": "fade-up",
                                className: element.title === 'Administrateur r\xe9seau/syst\xe8me - POULT' || element.title === 'Administrateur r\xe9seau/syst\xe8me Synergie mutulles' || element.title === 'Tecnicien r\xe9seau Sopamea' || element.title === 'Stage informatique Claudius Regaud' || element.title === 'Obtention du BAC' ? `${(_Parcours_module_scss__WEBPACK_IMPORTED_MODULE_6___default().parcours_container_article_image)} ${(_Parcours_module_scss__WEBPACK_IMPORTED_MODULE_6___default().parcours_container_article_image2)}` : (_Parcours_module_scss__WEBPACK_IMPORTED_MODULE_6___default().parcours_container_article_image),
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