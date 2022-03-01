"use strict";
(() => {
var exports = {};
exports.id = 189;
exports.ids = [189];
exports.modules = {

/***/ 606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(544);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(870);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(508);






class RequestForm extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    state = {
        description: '',
        value: '',
        Recipient: '',
        errorMessage: '',
        loading: false
    };
    static async getInitialProps(props) {
        const { address  } = props.query;
        return {
            address
        };
    }
    onSubmit = async (event)=>{
        event.preventDefault();
        this.setState({
            loading: true,
            errorMessage: ''
        });
        const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(this.props.address);
        const { description , value , recipient  } = this.state;
        try {
            const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__/* ["default"].eth.getAccounts */ .Z.eth.getAccounts();
            await campaign.methods.createRequest(description, _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__/* ["default"].utils.toWei */ .Z.utils.toWei(value, 'ether'), recipient).send({
                from: accounts[0]
            });
        } catch (error) {
            this.setState({
                errorMessage: error.message
            });
        }
        this.setState({
            loading: false
        });
    };
    render() {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    children: "Create a Request"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form, {
                    onSubmit: this.onSubmit,
                    error: !!this.state.errorMessage,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "Description"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    placeholder: "Description of Request",
                                    onChange: (event)=>{
                                        this.setState({
                                            description: event.target.value,
                                            errorMessage: ''
                                        });
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "Amount of Ether"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    placeholder: "Ether",
                                    onChange: (event)=>{
                                        this.setState({
                                            value: event.target.value,
                                            errorMessage: ''
                                        });
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "Recipient"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    placeholder: "Address of Recipient",
                                    onChange: (event)=>{
                                        this.setState({
                                            recipient: event.target.value,
                                            errorMessage: ''
                                        });
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                            primary: true,
                            loading: this.state.loading,
                            children: "Create"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
                            error: true,
                            header: "Oops!",
                            content: this.state.errorMessage
                        })
                    ]
                })
            ]
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestForm);


/***/ }),

/***/ 662:
/***/ ((module) => {

module.exports = require("next-routes");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 831:
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ 519:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [184,870], () => (__webpack_exec__(606)));
module.exports = __webpack_exports__;

})();