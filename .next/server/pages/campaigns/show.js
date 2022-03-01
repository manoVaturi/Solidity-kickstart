"use strict";
(() => {
var exports = {};
exports.id = 634;
exports.ids = [634];
exports.modules = {

/***/ 507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ show)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(544);
// EXTERNAL MODULE: ./ethereum/campaign.js + 1 modules
var ethereum_campaign = __webpack_require__(870);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(508);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(215);
;// CONCATENATED MODULE: ./components/ContributeForm.js






class ContributeForm extends external_react_.Component {
    state = {
        value: '',
        loading: false,
        errorMessage: ''
    };
    onSubmit = async (event)=>{
        event.preventDefault();
        this.setState({
            loading: true,
            errorMessage: ''
        });
        const campaign = (0,ethereum_campaign/* default */.Z)(this.props.address);
        try {
            const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
            await campaign.methods.contribure().send({
                from: accounts[0],
                value: web3/* default.utils.toWei */.Z.utils.toWei(this.state.value, 'ether')
            });
        } catch (error) {
            this.setState({
                errorMessage: error.message
            });
        }
        this.setState({
            loading: false,
            value: ''
        });
        routes.Router.replaceRoute(`/campaigns/${this.props.address}`);
    };
    render() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
            onSubmit: this.onSubmit,
            error: !!this.state.errorMessage,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form.Field, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            children: "Contribute to this campaign!"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Input, {
                            value: this.state.value,
                            onChange: (event)=>this.setState({
                                    value: event.target.value
                                })
                            ,
                            label: "ether",
                            labelPosition: "right"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                    loading: this.state.loading,
                    primary: true,
                    children: "Contribute!"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Message, {
                    error: true,
                    header: "Oops!",
                    content: this.state.errorMessage
                })
            ]
        }));
    }
}
/* harmony default export */ const components_ContributeForm = (ContributeForm);

;// CONCATENATED MODULE: ./pages/campaigns/show.js








class CampaignShow extends external_react_.Component {
    static async getInitialProps(props) {
        const instance = (0,ethereum_campaign/* default */.Z)(props.query.address);
        const summary = await instance.methods.getSummary().call();
        return {
            address: props.query.address,
            minimumCotribution: summary[0],
            balance: summary[1],
            requestsNum: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }
    renderCards() {
        const { balance , manager , minimumCotribution , requestsNum , approversCount ,  } = this.props;
        const items = [
            {
                header: manager,
                description: 'The manager who created this campaign and can create reqeusts to withdraw money',
                meta: 'Address of The Manager',
                style: {
                    overflowWrap: 'break-word'
                }
            },
            {
                header: minimumCotribution,
                description: 'You must to contribute a least this much of wei to become an approver.',
                meta: 'Minimum Cotribution',
                style: {
                    overflowWrap: 'break-word'
                }
            },
            {
                header: requestsNum,
                description: 'A request tries to withdraw money from the Campaign. Request must be approved by approvers ',
                meta: 'Number of Requests',
                style: {
                    overflowWrap: 'break-word'
                }
            },
            {
                header: approversCount,
                description: 'Number of peaple who have already contributed to campaign',
                meta: 'Number of Approvers',
                style: {
                    overflowWrap: 'break-word'
                }
            },
            {
                header: web3/* default.utils.fromWei */.Z.utils.fromWei(balance, 'ether'),
                description: 'The balance is how much money this campaig has left to spend',
                meta: 'Campaign Balance (ether)',
                style: {
                    overflowWrap: 'break-word'
                }
            }, 
        ];
        return(/*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Card.Group, {
            items: items
        }));
    }
    render() {
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "Campaign Show"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Grid, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                            width: 10,
                            children: this.renderCards()
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                            width: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_ContributeForm, {
                                address: this.props.address
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                    route: `/campaigns/${this.props.address}/requests`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                            primary: true,
                            style: {
                                marginTop: '20px'
                            },
                            children: "View Requests"
                        })
                    })
                })
            ]
        }));
    }
}
/* harmony default export */ const show = (CampaignShow);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [184,870], () => (__webpack_exec__(507)));
module.exports = __webpack_exports__;

})();