(() => {
var exports = {};
exports.id = 204;
exports.ids = [204];
exports.modules = {

/***/ 9564:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "Banner_banner__gEYib"
};


/***/ }),

/***/ 5129:
/***/ ((module) => {

// Exports
module.exports = {
	"carousel": "Carousel_carousel__JKhky",
	"carousel_container": "Carousel_carousel_container__L3ebO",
	"carousel_container_img": "Carousel_carousel_container_img__wFA1X"
};


/***/ }),

/***/ 5718:
/***/ ((module) => {

// Exports
module.exports = {
	"modal": "Modal_modal__i0TOf",
	"modal_cancel": "Modal_modal_cancel__W_Tvz",
	"modal_cancel_icon": "Modal_modal_cancel_icon__gZU1q",
	"modal_carousel": "Modal_modal_carousel__cR4Ck",
	"modal_carousel_container": "Modal_modal_carousel_container__EmfI6",
	"modal_carousel_container_img": "Modal_modal_carousel_container_img__MPlhF"
};


/***/ }),

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

/***/ 6834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: 'https://explorastro.baptistefaidherbe.fr',
    timeout: 20000
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


/***/ }),

/***/ 1973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Projet),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./helpers/api.js
var api = __webpack_require__(6834);
// EXTERNAL MODULE: ./components/ui/Banner/Banner.module.scss
var Banner_module = __webpack_require__(9564);
var Banner_module_default = /*#__PURE__*/__webpack_require__.n(Banner_module);
;// CONCATENATED MODULE: ./components/ui/Banner/index.js


function Banner(data) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        style: {
            backgroundImage: `url('${"https://baptistefaidherbe.fr"}/img/${data.data.img}')`
        },
        className: (Banner_module_default()).banner,
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            className: "titleBanner",
            children: data.data.title
        })
    }));
};

// EXTERNAL MODULE: ./pages/projet/Projet.module.scss
var Projet_module = __webpack_require__(2234);
var Projet_module_default = /*#__PURE__*/__webpack_require__.n(Projet_module);
// EXTERNAL MODULE: ./components/ui/Caroussel/Carousel.module.scss
var Carousel_module = __webpack_require__(5129);
var Carousel_module_default = /*#__PURE__*/__webpack_require__.n(Carousel_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: external "react-multi-carousel"
const external_react_multi_carousel_namespaceObject = require("react-multi-carousel");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_namespaceObject);
// EXTERNAL MODULE: ./components/ui/Modal/Modal.module.scss
var Modal_module = __webpack_require__(5718);
var Modal_module_default = /*#__PURE__*/__webpack_require__.n(Modal_module);
;// CONCATENATED MODULE: external "react-icons/im"
const im_namespaceObject = require("react-icons/im");
;// CONCATENATED MODULE: ./components/ui/Modal/index.js






function Modal(data) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 5
        },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 2
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        }
    };
    const handleClick = ()=>{
        data.setTogledModal(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Modal_module_default()).modal,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Modal_module_default()).modal_cancel,
                onClick: handleClick,
                children: /*#__PURE__*/ jsx_runtime_.jsx(im_namespaceObject.ImCancelCircle, {
                    className: (Modal_module_default()).modal_cancel_icon
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Modal_module_default()).modal_carousel,
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_multi_carousel_default()), {
                    ssr: true,
                    responsive: responsive,
                    className: (Modal_module_default()).modal_carousel_container,
                    children: data.img !== undefined && data.img.map((element)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Modal_module_default()).modal_carousel_container_img,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: `/img/${element}`,
                                alt: element,
                                width: 150,
                                height: 100,
                                layout: "responsive",
                                loading: "eager"
                            })
                        }, element)
                    )
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/ui/Caroussel/index.js







function Caroussel(data) {
    const { 0: togledModal , 1: setTogledModal  } = (0,external_react_.useState)(false);
    const responsive = {
        superLargeDesktop: {
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 5
        },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 5
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        }
    };
    const handleModal = ()=>{
        setTogledModal(!togledModal);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            togledModal && /*#__PURE__*/ jsx_runtime_.jsx(Modal, {
                setTogledModal: setTogledModal,
                img: data.img
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Carousel_module_default()).carousel,
                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_multi_carousel_default()), {
                    ssr: true,
                    responsive: responsive,
                    className: (Carousel_module_default()).carousel_container,
                    children: data.img !== undefined && data.img.map((element)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Carousel_module_default()).carousel_container_img,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: `/img/${element}`,
                                alt: element,
                                width: 150,
                                height: 100,
                                layout: "responsive",
                                loading: "eager",
                                onClick: handleModal,
                                name: element
                            })
                        }, element)
                    )
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/projet/[slug].js






function Projet(props) {
    const str = props.data.desc2;
    const words = str.split('+');
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Projet"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Baptiste Faidherbe, D\xe9veloppeur web, je vous pr\xe9sente ici mes projets r\xe9alis\xe9es."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Banner, {
                data: props.data
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: (Projet_module_default()).projet,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Projet_module_default()).projet_container,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Projet_module_default()).projet_container_text,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: (Projet_module_default()).projet_container_text_title,
                                children: "Pr\xe9sentation"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: props.data.desc
                            }),
                            props.data.title === 'Explorastro' && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "video-responsive",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                    width: "560",
                                    height: "315",
                                    src: "https://www.youtube.com/embed/ADIaSqQHLAY",
                                    title: "YouTube video player",
                                    frameborder: "0",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowfullscreen: true
                                })
                            }),
                            props.data.link && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                style: {
                                    fontWeight: 'bold'
                                },
                                target: "_blank",
                                href: props.data.link,
                                children: "D\xe9couvrir le site"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: (Projet_module_default()).projet_container_text_title,
                                children: "Fonctionnalit\xe9s"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "L'application permets :"
                            }),
                            words.map((element, index)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: element
                                    })
                                }, index)
                            ),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: (Projet_module_default()).projet_container_text_title,
                                children: "Technologie utilis\xe9e"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "C\xf4t\xe9 front :"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: props.data.desc3
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "C\xf4t\xe9 back :"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: props.data.desc4
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: (Projet_module_default()).projet_container_text_title,
                                children: "Gallerie"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Caroussel, {
                                img: props.data.carouImg
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
async function getServerSideProps(context) {
    let resp;
    let data;
    const { slug  } = context.query;
    try {
        resp = await api/* default.get */.Z.get(`/api/Projet/`, {
            params: {
                type: 'projet',
                slug: slug
            }
        });
        data = await resp.data;
    } catch (error) {
        console.log(error);
    }
    if (data === undefined) {
        data = 'null';
    }
    return {
        props: {
            data
        }
    };
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(1973)));
module.exports = __webpack_exports__;

})();