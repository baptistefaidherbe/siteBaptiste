(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,229];
exports.modules = {

/***/ 2898:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__mPuvf"
};


/***/ }),

/***/ 5778:
/***/ ((module) => {

// Exports
module.exports = {
	"Header_nav2": "Header_Header_nav2__TDcNg",
	"Header_nav2_icon": "Header_Header_nav2_icon__VjueV",
	"Header_nav": "Header_Header_nav__3ep3A",
	"Header_nav_menu": "Header_Header_nav_menu__NIhWx",
	"Header_responsiveActif": "Header_Header_responsiveActif__m_h9E",
	"Header_responsiveActif_icon": "Header_Header_responsiveActif_icon__YfecA",
	"Header_responsiveActif_nav": "Header_Header_responsiveActif_nav__1y_yT",
	"Header_responsiveActif_nav_menu": "Header_Header_responsiveActif_nav_menu__Szdq0"
};


/***/ }),

/***/ 8515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/ui/Header/Header.module.scss
var Header_module = __webpack_require__(5778);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
var external_react_responsive_default = /*#__PURE__*/__webpack_require__.n(external_react_responsive_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "react-scroll"
const external_react_scroll_namespaceObject = require("react-scroll");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/ui/Header/index.js










function Header() {
    const { 0: navBar , 1: setNavBar  } = (0,external_react_.useState)(false);
    const { 0: isResponsive , 1: setIsResponsive  } = (0,external_react_.useState)(false);
    const router = (0,router_namespaceObject.useRouter)();
    console.log(router.pathname);
    const changeNavBar = ()=>{
        if (window.scrollY >= 80) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };
    const handleClick = ()=>{
        setIsResponsive(!isResponsive);
    };
    (0,external_react_.useEffect)(()=>{
        return ()=>{
            if (isResponsive) {
                setIsResponsive(!isResponsive);
            }
        };
    }, [
        router.asPath,
        isResponsive
    ]);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener('scroll', changeNavBar);
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Header_module_default()).Header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_responsive_default()), {
                minWidth: 970,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: !navBar ? (Header_module_default()).Header_nav : `${(Header_module_default()).Header_nav} ${(Header_module_default()).Header_nav_active}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Header_module_default()).Header_nav_image,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/img/logo.png",
                                alt: "Moi",
                                width: 180,
                                height: 50,
                                layout: "fixed",
                                loading: "eager"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: (Header_module_default()).Header_nav_menu,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).Header_nav_menu_li,
                                    children: router.pathname === '/projet/[slug]' ? /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `${"https://explorastro.baptistefaidherbe.fr"}/#home`,
                                        as: `${"https://explorastro.baptistefaidherbe.fr"}/#home`,
                                        passHref: true,
                                        children: "Accueil"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                        to: "home",
                                        spy: true,
                                        smooth: true,
                                        offset: -70,
                                        duration: 500,
                                        children: "Accueil"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).Header_nav_menu_li,
                                    children: router.pathname === '/projet/[slug]' ? /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `${"https://explorastro.baptistefaidherbe.fr"}/#about`,
                                        as: `${"https://explorastro.baptistefaidherbe.fr"}/#about`,
                                        passHref: true,
                                        children: "Qui suis-je ?"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                        to: "about",
                                        spy: true,
                                        smooth: true,
                                        offset: -70,
                                        duration: 500,
                                        children: "Qui suis-je ?"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).Header_nav_menu_li,
                                    children: router.pathname === '/projet/[slug]' ? /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `${"https://explorastro.baptistefaidherbe.fr"}/#skills`,
                                        as: `${"https://explorastro.baptistefaidherbe.fr"}/#skills`,
                                        passHref: true,
                                        children: "Mes comp\xe9tences"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                        to: "skills",
                                        spy: true,
                                        smooth: true,
                                        offset: -70,
                                        duration: 500,
                                        children: "Mes comp\xe9tences"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).Header_nav_menu_li,
                                    children: router.pathname === '/projet/[slug]' ? /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `${"https://explorastro.baptistefaidherbe.fr"}/#parcours`,
                                        as: `${"https://explorastro.baptistefaidherbe.fr"}/#parcours`,
                                        passHref: true,
                                        children: "Mon parcours"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                        to: "parcours",
                                        spy: true,
                                        smooth: true,
                                        offset: -70,
                                        duration: 500,
                                        children: "Mon parcours"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).Header_nav_menu_li,
                                    children: router.pathname === '/projet/[slug]' ? /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `${"https://explorastro.baptistefaidherbe.fr"}/#project`,
                                        as: `${"https://explorastro.baptistefaidherbe.fr"}/#project`,
                                        passHref: true,
                                        children: "Mes projets"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                        to: "project",
                                        spy: true,
                                        smooth: true,
                                        offset: -70,
                                        duration: 500,
                                        children: "Mes projets"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).Header_nav_menu_li,
                                    children: router.pathname === '/projet/[slug]' ? /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: `${"https://explorastro.baptistefaidherbe.fr"}/#project`,
                                        as: `${"https://explorastro.baptistefaidherbe.fr"}/#project`,
                                        passHref: true,
                                        children: "Contact"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                        to: "contact",
                                        spy: true,
                                        smooth: true,
                                        offset: -70,
                                        duration: 500,
                                        children: "Contact"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_responsive_default()), {
                maxWidth: 969,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Header_module_default()).Header_nav2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiMenu, {
                                onClick: handleClick,
                                className: (Header_module_default()).Header_nav2_icon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Header_module_default()).Header_nav2_logo,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: "/img/logo.png",
                                    alt: "Moi",
                                    width: 180,
                                    height: 50,
                                    layout: "fixed",
                                    loading: "eager"
                                })
                            })
                        ]
                    }),
                    isResponsive && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Header_module_default()).Header_responsiveActif,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineCloseCircle, {
                                onClick: handleClick,
                                className: (Header_module_default()).Header_responsiveActif_icon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Header_module_default()).Header_responsiveActif_logo,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: "/img/logo.png",
                                    alt: "Moi",
                                    width: 180,
                                    height: 50,
                                    layout: "fixed",
                                    loading: "eager"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                className: (Header_module_default()).Header_responsiveActif_nav,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: (Header_module_default()).Header_responsiveActif_nav_menu,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/",
                                                children: "Accueil"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: `${"https://explorastro.baptistefaidherbe.fr"}/#about`,
                                                children: "Qui suis-je"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: `${"https://explorastro.baptistefaidherbe.fr"}/#skills`,
                                                children: "Mes comp\xe9tences"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: `${"https://explorastro.baptistefaidherbe.fr"}/#parcours`,
                                                children: "Mon parcours"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: `${"https://explorastro.baptistefaidherbe.fr"}/#project`,
                                                children: "Mes projets"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: `${"https://explorastro.baptistefaidherbe.fr"}/#contact`,
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/ui/Footer/Footer.module.scss
var Footer_module = __webpack_require__(2898);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/ui/Footer/index.js



function Footer_Header() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (Footer_module_default()).footer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: "/img/logo.png",
                alt: "Moi",
                width: 180,
                height: 50,
                layout: "fixed",
                loading: "eager"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "\xa92022 BaptisteFaidherbe, Tous droits r\xe9serv\xe9s."
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/Layout/index.js



function Layout(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            display: 'flex',
            height: '100vh',
            flexDirection: 'column'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Header, {
            })
        ]
    }));
};

// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__(7446);
;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Bptiste Faidherbe"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_parallax_.ParallaxProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

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

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 2750:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ 6666:
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive");

/***/ }),

/***/ 7446:
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll-parallax");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,664], () => (__webpack_exec__(8515)));
module.exports = __webpack_exports__;

})();