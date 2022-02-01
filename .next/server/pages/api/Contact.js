"use strict";
(() => {
var exports = {};
exports.id = 404;
exports.ids = [404];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 6190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const nodemailer = __webpack_require__(5184);
async function handler(req, res) {
    const { firstName , name , phone , email , message  } = req.body;
    const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'bfaidherbe31@gmail.com',
            pass: 'Baptou78350+'
        }
    });
    const text = `

    Prenom: ${firstName}\r\n
    Nom: ${name}\r\n
    Email: ${email}\r\n
    Telephone: ${phone}\r\n
    Message : ${message}\r\n
  `;
    const data = {
        to: 'bapt78@gmail.com',
        from: 'bfaidherbe31@gmail.com',
        subject: `${email} vient de vous envoyer un message`,
        text: text,
        html: text.replace(/\r\n/g, '<br />')
    };
    smtpTransport.sendMail(data, function(err, info) {
        if (err) console.log(err);
        else console.log(info);
    });
    res.status(200);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6190));
module.exports = __webpack_exports__;

})();