exports.id = 31;
exports.ids = [31];
exports.modules = {

/***/ 8250:
/***/ ((module) => {

// Exports
module.exports = {
	"star": "FallingStar_star__v14wx",
	"tail": "FallingStar_tail__Pu8c6",
	"shooting": "FallingStar_shooting__GlVW_"
};


/***/ }),

/***/ 5448:
/***/ ((module) => {

// Exports
module.exports = {
	"moonContainer": "Moon_moonContainer__fp3CR",
	"moonContainer_moon": "Moon_moonContainer_moon__6zfrM",
	"animate": "Moon_animate__CqWwb"
};


/***/ }),

/***/ 9965:
/***/ ((module) => {

// Exports
module.exports = {
	"home": "Home_home__1E5TC",
	"home_banner": "Home_home_banner__EZfGz",
	"home_banner_parallax": "Home_home_banner_parallax__F79CO",
	"home_banner_galaxy1": "Home_home_banner_galaxy1__1ZZVS",
	"animate2": "Home_animate2__0s_0n",
	"home_banner_galaxy2": "Home_home_banner_galaxy2__o8hnB",
	"home_banner_container": "Home_home_banner_container__rEWUt",
	"home_banner_container_clignote": "Home_home_banner_container_clignote__yBBzS",
	"clignoter": "Home_clignoter__5o98Z",
	"home_banner_container_socialNetwork": "Home_home_banner_container_socialNetwork__mCwF8",
	"home_banner_container_socialNetwork_fb": "Home_home_banner_container_socialNetwork_fb__KaQSR",
	"home_banner_container_socialNetwork_gh": "Home_home_banner_container_socialNetwork_gh__845C_",
	"home_banner_container_socialNetwork_lk": "Home_home_banner_container_socialNetwork_lk__mbd3T",
	"home_banner_profil": "Home_home_banner_profil__9Y1_v",
	"home_banner_profil_image": "Home_home_banner_profil_image__6MvoS"
};


/***/ }),

/***/ 5031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./pages/home/Home.module.scss
var Home_module = __webpack_require__(9965);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__(7446);
// EXTERNAL MODULE: ./components/ui/FallingStar/FallingStar.module.scss
var FallingStar_module = __webpack_require__(8250);
var FallingStar_module_default = /*#__PURE__*/__webpack_require__.n(FallingStar_module);
;// CONCATENATED MODULE: ./components/ui/FallingStar/index.js



function fallingStar() {
    const element = (0,external_react_.useRef)(null);
    const { 0: isAnimate , 1: setIsAnimate  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        function toggleAnimate() {
            if (isAnimate) {
                element.current.classList.add((FallingStar_module_default()).star);
                element.current.style.top = Math.random() * 300 + 'px';
                element.current.style.left = Math.random() * 100 + 'px';
                const test = ()=>{
                    setIsAnimate(false);
                };
                setTimeout(test, 3000);
            } else {
                element.current.classList.remove((FallingStar_module_default()).star);
                const test = ()=>{
                    setIsAnimate(true);
                };
                setTimeout(test, 8000);
            }
        }
        toggleAnimate();
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: element
    }));
};

// EXTERNAL MODULE: ./components/ui/Moon/Moon.module.scss
var Moon_module = __webpack_require__(5448);
var Moon_module_default = /*#__PURE__*/__webpack_require__.n(Moon_module);
;// CONCATENATED MODULE: ./components/ui/Moon/index.js



function moon() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Moon_module_default()).moonContainer,
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
            src: "/img/star.png",
            alt: "blob",
            width: 700,
            height: 900,
            layout: "fixed",
            loading: "eager",
            className: (Moon_module_default()).moonContainer_moon
        })
    }));
};

// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
var external_react_responsive_default = /*#__PURE__*/__webpack_require__.n(external_react_responsive_);
;// CONCATENATED MODULE: ./pages/home/index.js










function Home() {
    const titleElement = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        const text = 'Developpeur web';
        const text2 = '|';
        const tabText = text.split('');
        let timer;
        function write() {
            if (tabText.length > 0) {
                titleElement.current.innerHTML += tabText.shift();
                if (tabText.length === 0) {
                    const span = document.createElement('span');
                    var spanValue = titleElement.current.appendChild(span);
                    spanValue.innerHTML = text2;
                    spanValue.classList.add((Home_module_default()).home_banner_container_clignote);
                }
            } else {
                clearTimeout(timer);
            }
            timer = setTimeout(write, 100);
        }
        write();
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "home",
        className: (Home_module_default()).home,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Home_module_default()).home_banner,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_responsive_default()), {
                    minWidth: 1000,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(moon, {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(fallingStar, {
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(fallingStar, {
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
                    className: (Home_module_default()).home_banner_parallax,
                    y: [
                        -80,
                        50
                    ],
                    tagOuter: "figure",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Home_module_default()).home_banner_galaxy1,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/img/galaxy.png",
                            alt: "blob",
                            width: 500,
                            height: 500,
                            layout: "responsive",
                            loading: "eager"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_parallax_.Parallax, {
                    className: (Home_module_default()).home_banner_parallax,
                    x: [
                        -30,
                        0
                    ],
                    tagOuter: "figure",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Home_module_default()).home_banner_galaxy2,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/img/galaxy.png",
                            alt: "blob",
                            width: 500,
                            height: 500,
                            layout: "responsive",
                            loading: "eager"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Home_module_default()).home_banner_container,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            children: [
                                "Je suis ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Baptiste"
                                }),
                                " Faidherbe,"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            ref: titleElement
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Home_module_default()).home_banner_container_socialNetwork,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (Home_module_default()).home_banner_container_socialNetwork_fb,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiFacebook, {
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            target: "_blank",
                                            href: "https://github.com/baptistefaidherbe/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: (Home_module_default()).home_banner_container_socialNetwork_gh,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiGithub, {
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (Home_module_default()).home_banner_container_socialNetwork_lk,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiLinkedin, {
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Suivez moi sur les r\xe9seaux sociaux"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Home_module_default()).home_banner_profil,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/img/bapt.png",
                        alt: "Moi",
                        width: 100,
                        height: 90,
                        layout: "responsive",
                        loading: "eager",
                        className: (Home_module_default()).home_banner_profil_image
                    })
                })
            ]
        })
    }));
};


/***/ })

};
;