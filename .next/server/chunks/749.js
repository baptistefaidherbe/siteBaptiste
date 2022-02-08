exports.id = 749;
exports.ids = [749];
exports.modules = {

/***/ 4676:
/***/ ((module) => {

// Exports
module.exports = {
	"contact": "Contact_contact__8DA2g",
	"contact_container": "Contact_contact_container__R3zmP",
	"contact_container_desc": "Contact_contact_container_desc__RmqXl",
	"contact_container_form": "Contact_contact_container_form__tr9cJ"
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
    baseURL: 'https://www.baptistefaidherbe.fr',
    timeout: 20000
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


/***/ }),

/***/ 6749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Contact)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./pages/contact/Contact.module.scss
var Contact_module = __webpack_require__(4676);
var Contact_module_default = /*#__PURE__*/__webpack_require__.n(Contact_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./helpers/api.js
var api = __webpack_require__(6834);
// EXTERNAL MODULE: external "react-notifications"
var external_react_notifications_ = __webpack_require__(5974);
;// CONCATENATED MODULE: ./helpers/notification.js


function createNotification() {
    external_react_notifications_.NotificationManager.success('Votre message a bien \xe9t\xe9 envoy\xe9 !');
};

// EXTERNAL MODULE: external "react-awesome-reveal"
var external_react_awesome_reveal_ = __webpack_require__(6762);
;// CONCATENATED MODULE: ./pages/contact/index.js







function Contact() {
    const { 0: firstName , 1: setFirstName  } = (0,external_react_.useState)('');
    const { 0: name , 1: setName  } = (0,external_react_.useState)('');
    const { 0: phone , 1: setPhone  } = (0,external_react_.useState)('');
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)('');
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        createNotification();
        setFirstName('');
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        const data = {
            firstName,
            name,
            phone,
            email,
            message
        };
        try {
            await api/* default.post */.Z.post(`/api/Contact/`, data);
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (e)=>{
        switch(e.target.id){
            case 'firstName':
                setFirstName(e.target.value);
                break;
            case 'name':
                setName(e.target.value);
                break;
            case 'phone':
                setPhone(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'message':
                setMessage(e.target.value);
                break;
            default:
                break;
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "contact",
        className: (Contact_module_default()).contact,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Contact_module_default()).contact_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_awesome_reveal_.Fade, {
                        delay: "10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "mainTitle",
                            children: "Contactez-moi"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Contact_module_default()).contact_container_desc,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Mon profil vous int\xe9resse ? Vous avez des questions ? "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Laissez-moi v\xf4tre message, je vous r\xe9ponderai dans les plus brefs d\xe9lais."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        className: (Contact_module_default()).contact_container_form,
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                id: "firstName",
                                type: "text",
                                onChange: handleChange,
                                placeholder: "Nom *",
                                required: "required",
                                value: firstName
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                id: "name",
                                type: "text",
                                onChange: handleChange,
                                placeholder: "Pr\xe9nom *",
                                required: "required ",
                                value: name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                id: "phone",
                                type: "text",
                                onChange: handleChange,
                                placeholder: "T\xe9l\xe9phone *",
                                required: "required",
                                value: phone
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                id: "email",
                                type: "email",
                                onChange: handleChange,
                                placeholder: "Email *",
                                required: "required",
                                value: email
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                id: "message",
                                type: "text",
                                rows: "30",
                                onChange: handleChange,
                                placeholder: "Message *",
                                required: "required",
                                value: message
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "button",
                                children: "Envoyer"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_notifications_.NotificationContainer, {
            })
        ]
    }));
};


/***/ })

};
;